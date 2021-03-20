import { ILogObject, Logger } from "tslog";
import { appendFileSync } from 'fs';

function logToFile(logObject: ILogObject) {
  appendFileSync("logs/logs.txt", JSON.stringify(logObject) + "\n");
}

export const logger: Logger = new Logger();

logger.attachTransport(
  {
    silly: logToFile,
    debug: logToFile,
    trace: logToFile,
    info: logToFile,
    warn: logToFile,
    error: logToFile,
    fatal: logToFile,
  },
  "debug"
);
