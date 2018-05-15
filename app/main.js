/* global logger */
const os = require("os");
const path = require("path");
const url = require("url");

const { app, BrowserWindow } = require("electron");
const isDev = require("electron-reload");

const { logger: initLogger } = require("../src/utils");
const appInfo = require("../package.json");

if (isDev) {
  require("electron-reload")(path.resolve("public/build"), {
    electron: path.resolve("node_modules/.bin/electron")
  });
}

let mainWindow;

// eslint-disable-next-line no-unused-vars
const isSecondInstance = app.makeSingleInstance((cli, workingDirectory) => {
  if (mainWindow) {
    if (mainWindow.isMinimized()) {
      mainWindow.restore();
    }
    mainWindow.focus();
  }
});

if (isSecondInstance) {
  app.quit();
}

function createMainWindow() {
  mainWindow = new BrowserWindow({
    show: false,
    icon: path.resolve("public/assets/icons/notepad-128.png"),
    [process.env.NODE_ENV === "production" && "webPreferences"]: {
      nodeIntegration: false
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
      `${os.type()}(${os.release()}) - ${os.platform()}(` +
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
