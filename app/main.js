/* global logger */
const os = require("os");
const path = require("path");
const url = require("url");

const { app, BrowserWindow } = require("electron");

const { logger: initLogger } = require("../src/utils");
const appInfo = require("../package.json");

let mainWindow;

function createMainWindow() {
  mainWindow = new BrowserWindow({
    show: false,
    // TODO: Security enhancements
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  logger.info("neno window created");

  mainWindow.loadURL(
    url.format({
      pathname: path.resolve("public/index.html"),
      protocol: "file:",
      slashes: true
    })
  );

  mainWindow.once("ready-to-show", function() {
    mainWindow.maximize();
    if (process.platform == "darwin") {
      mainWindow.show();
    }
    logger.info("neno window is shown");
  });

  mainWindow.on("closed", function() {
    logger.info("neno window closed");
    mainWindow = null;
  });
}

app.on("ready", () => {
  initLogger();
  logger.info(
    `${appInfo.name}(${appInfo.version}) has started on ` +
      `${os.type()}(${os.release()}) on ${os.platform()}(` +
      `${os.arch()})`
  );
  createMainWindow();
});

app.on("window-all-closed", function() {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function() {
  if (mainWindow === null) {
    createMainWindow();
  }
});
