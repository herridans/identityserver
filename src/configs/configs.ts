import { config } from "dotenv";
config();

export const jwtConfigs = {
    secret: process.env.JWT_SECRET
};

export const dbConfigs = {
    mongoDbPassword : process.env.MONGODB_PASSWORD
}