/**
 * Required External Modules
 */
import express from "express";
import cors from "cors";
import helmet from "helmet";
import encryptionRouter from "./routers/encryption";
import { errorHandler } from "./middleware/error-middleware";
// import { notFoundHandler } from "./middleware/notFoundMiddleware";
import configs from './configs';

/**
 * App Variables
 */

if (!configs.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(configs.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(encryptionRouter());

app.use(errorHandler);
// app.use(notFoundHandler);

/**
 * Server Activation
 */

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
