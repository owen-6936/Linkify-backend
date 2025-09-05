import app from './src/config/app.js';
import { config } from 'dotenv';
import logger from './winston-logger.js';

config();

const port = process.env.PORT || 3000;

app.listen(port, (error) => {
  if (error) {
    logger.error('Failed to start server:', error.message);
    process.exit(1); // Exit the process with a failure code
  }
  logger.info(`Server started at port ${port}`);
});
