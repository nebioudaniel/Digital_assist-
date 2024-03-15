# DigitalHippo - 🦛 A Modern Fullstack E-Commerce Marketplace for Digital Products

Built with the Next.js 14 App Router, tRPC, TypeScript, Payload & Tailwind 🚀

## Landing Page 🌟

Welcome to DigitalHippo! Our landing page is designed to captivate users with stunning visuals and intuitive navigation, providing a delightful introduction to our marketplace


![Screenshot 2024-03-15 at 9 03 31 PM](https://github.com/nebioudaniel/Digital_assist-/assets/124292845/4c7b4173-6f68-4021-8fc5-dcd93fd77bf3)



## Login Page 🔐

Access your account seamlessly with our secure login page. Experience hassle-free authentication powered by Payload. Click [here](#link_to_login_page) to log in and explore DigitalHippo's features


<img width="1680" alt="Screenshot 2024-03-02 at 10 28 53 PM" src="https://github.com/nebioudaniel/Digital_assist-/assets/124292845/f00a3ec5-d36d-4e82-b4e0-8d66b8b56fff">


## Checkout Page 💳

Complete your purchase effortlessly on our checkout page. With a streamlined interface and secure payment processing, buying digital products has never been easier. Visit our checkout page

<img width="1680" alt="Screenshot 2024-03-02 at 10 31 40 PM" src="https://github.com/nebioudaniel/Digital_assist-/assets/124292845/cc1317a9-25db-4550-8296-9d1f9fb99fc5">

## Features 🎉
- 🛠️ Complete marketplace built from scratch in Next.js 14
- 💻 Beautiful landing page & product pages included
- 🎨 Custom artwork included
- 💳 Full admin dashboard
- 🛍️ Users can purchase and sell their own products
- 🛒 Locally persisted shopping cart
- 🔑 Authentication using Payload
- 🖥️ Learn how to self-host Next.js
- 🌟 Clean, modern UI using shadcn-ui
- ✉️ Beautiful emails for signing up and after purchase
- ✅ Admins can verify products to ensure high quality
- ⌨️ 100% written in TypeScript
- 🎁 ...much more

## Getting started 🚀



To set up the project locally, follow these steps:

1. Clone the repository:
    ```bash
   git clone https://github.com/nebioudaniel/Digital_assist-.git
    ```

2. Navigate to the project directory:
    ```bash
    cd digitalhippo2
    ```

3. Copy the `.env.example` file and fill in the required environment variables:
    ```bash
    cp .env.example .env
    ```

4. Set the value for `NEXT_PUBLIC_SERVER_URL` in the `.env` file to `http://localhost:3000`:
    ```plaintext
    NEXT_PUBLIC_SERVER_URL=http://localhost:3000
    ```

5. Configure other environment variables as needed, such as `PAYLOAD_SECRET`, `MONGODB_URL`, `STRIPE_SECRET_KEY`, etc.

6. Start the development server:
    ```bash
    npm run dev
    ```

7. Visit `http://localhost:3000` in your browser to view the application.

## Environment Variables 🌐

Make sure to set the following environment variables in your `.env` file:

- `NEXT_PUBLIC_SERVER_URL`: The URL of your Next.js server.
- `PAYLOAD_SECRET`: Any value works here, should be somewhat secure.
- `MONGODB_URL`: MongoDB connection string.
- `STRIPE_SECRET_KEY`: Stripe secret key for payment processing.
- `STRIPE_WEBHOOK_SECRET`: Stripe webhook secret.
- `RESEND_API_KEY`: API key for email sending service.

## Acknowledgements 🙏

- [Payload](https://link.joshtriedcoding.com/payload) for making this project possible

and copy the .env.example variables into a separate .env file, fill them out & and that's all you need to get started!





