var electron = require("electron");

var app = electron.app; // 引用app
var BrowserWindow = electron.BrowserWindow; //控制窗口引用

var mainWindow = null; // 声明要打开的主窗口

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: 600,
    height: 600,
    webPreferences: {
        nodeIntegration: true, //设置开启nodejs环境
        contextIsolation: false,
}
  }); // 主窗口
  mainWindow.loadFile("index.html"); // 加载html页面

  mainWindow.on("close", () => {
    mainWindow = null; // 关闭时设置主窗口为null 减少内存占用
  });
});