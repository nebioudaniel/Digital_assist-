import dotenv from 'dotenv';
import path from 'path';
import { InitOptions } from 'payload/config';
import payload, { Payload } from 'payload';
import nodemailer from 'nodemailer';

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
});

const transporter = nodemailer.createTransport({
  host: 'smtp.resend.com',
  secure: true,
  port: 465,
  auth: {
    user: 'resend',
    pass: process.env.RESEND_API_KEY || '',
  },
});

let cachedPayload: Payload | null = null;

interface CachedPayload {
  client: Payload | null;
  promise: Promise<Payload> | null;
}

let cached: CachedPayload = (global as any).payload || {
  client: null,
  promise: null,
};

const initPayload = async (initOptions?: Partial<InitOptions>): Promise<Payload> => {
  if (!process.env.PAYLOAD_SECRET) {
    throw new Error('PAYLOAD_SECRET is missing');
  }

  if (cached.client) {
    return cached.client;
  }

  if (!cached.promise) {
    cached.promise = payload.init({
      email: {
        transport: transporter,
        fromAddress: 'rootknown123@gmail.com',
        fromName: 'Nebiou Daniel',
      },
      secret: process.env.PAYLOAD_SECRET,
      local: initOptions?.express ? false : true,
      ...(initOptions || {}),
    });
  }

  try {
    cached.client = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.client;
};

export const getPayloadClient = async ({ initOptions }: { initOptions?: Partial<InitOptions> } = {}): Promise<Payload> => {
  try {
    return await initPayload(initOptions);
  } catch (error) {
    console.error('Error initializing Payload:', error);
    throw error;
  }
};
