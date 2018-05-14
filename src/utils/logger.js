const path = require("path");
const fs = require("fs");

const { app } = require("electron");
const logger = require("winston");

function initLogger() {
  let appFolder = app.getPath("userData");
  if (!fs.existsSync(appFolder)) {
    fs.mkdirSync(appFolder);
  }

  let logFolder = path.join(app.getPath("userData"), "logs");
  if (!fs.existsSync(logFolder)) {
    fs.mkdirSync(logFolder);
  }

  let logFile = new Date().toISOString().replace(/:/g, ".") + ".log";
  logger.add(logger.transports.File, {
    json: true,
    exitOnError: false,
    filename: path.join(logFolder, logFile),
    timestamp: true
  });

  global.logger = logger;
}

module.exports = initLogger;
