const { app, BrowserWindow } = require('electron')
const fs = require('fs')
const path = require('path')

let mainWindow

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    icon: path.join(__dirname, 'assets/icon.png'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  mainWindow.loadFile('src/renderer.html')
})
