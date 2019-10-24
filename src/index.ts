import * as uich from "uich-demo-ts";
import * as log4js from "log4js";

const log4jsLogger = log4js.getLogger("uich");
log4jsLogger.level = 'debug';
const logger = uich.log4js(log4jsLogger);

logger.info('This is log4js Log!!');
console.log('This is console Log!!');