import winston from 'winston';

// Create a logger instance with a basic configuration.
// We export this instance for use throughout the application.
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(
      (info) => `${info.timestamp} ${info.level}: ${info.message}`,
    ),
  ),
  transports: [
    // We add a console transport for now to see logs in the terminal.
    new winston.transports.Console(),
  ],
});

export default logger;
