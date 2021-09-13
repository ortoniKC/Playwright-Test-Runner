"using strict";
const winston = require('winston');

const options = {
    level: "info",
    transports: [
        new winston.transports.Console({
            level: "info",
            colorize: false
        }),
        new winston.transports.File({
            filename: 'logs/error.log',
            level: 'info',
            maxsize: 5242880, // 5MB
            maxFiles: 5,
            colorize: false,
        }),
    ]
}

const logger = winston.createLogger(options);

logger.info('Hello world');
logger.warn("warning");


