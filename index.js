const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')

let mainWindow

const menuTemplate = [
  {
    label: '文件',
    submenu: [
      { role: 'quit', label: '退出' }
    ]
  },
  {
    label: '编辑',
    submenu: [
      { role: 'undo', label: '撤销' },
      { role: 'redo', label: '重做' },
      { type: 'separator' },
      { role: 'cut', label: '剪切' },
      { role: 'copy', label: '复制' },
      { role: 'paste', label: '粘贴' },
      { role: 'selectAll', label: '全选' }
    ]
  },
  {
    label: '查看',
    submenu: [
      { role: 'reload', label: '重新加载' },
      { role: 'toggleDevTools', label: '开发者工具' },
      { type: 'separator' },
      { role: 'resetZoom', label: '实际大小' },
      { role: 'zoomIn', label: '放大' },
      { role: 'zoomOut', label: '缩小' },
      { type: 'separator' },
      { role: 'togglefullscreen', label: '全屏' }
    ]
  },
  {
    label: '窗口',
    submenu: [
      { role: 'minimize', label: '最小化' },
      { role: 'close', label: '关闭' }
    ]
  },
  {
    label: '帮助',
    submenu: [
      { role: 'about', label: '关于 Minedit Mod' }
    ]
  }
]

app.on('ready', () => {
  Menu.setApplicationMenu(Menu.buildFromTemplate(menuTemplate))

  mainWindow = new BrowserWindow({
    icon: path.join(__dirname, 'assets/icon.png'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  mainWindow.loadFile('src/renderer.html')
})
