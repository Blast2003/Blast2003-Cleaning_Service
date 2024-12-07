import dotenv from "dotenv";

dotenv.config();

export const Variables = {
    PORT: process.env.PORT || 5010,
    MONGO_URL: process.env.MONGO_URL,
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
    PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID,
    PAYPAL_SECRET: process.env.PAYPAL_SECRET,
    PAYPAL_BASE_URL: process.env.PAYPAL_BASE_URL,
    BASE_URL: process.env.BASE_URL,
    EMAIL: process.env.EMAIL,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
}