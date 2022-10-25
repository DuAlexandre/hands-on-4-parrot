import winston from "winston";
import path from 'path';

const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.errors({ stack: true }),
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.File({ filename: path.resolve('log', 'error.log'), level: "error" }),
        new winston.transports.File({ filename: path.resolve('log', 'info.log'), level: "info" })
    ]
});

export default logger;