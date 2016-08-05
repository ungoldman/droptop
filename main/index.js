const { app, BrowserWindow, Menu } = require('electron')
const menuTemplate = require('./menu')
const pkg = require('../package')
let win

function createWindow () {
  win = new BrowserWindow({
    title: pkg.name,
    width: 840,
    height: 480,
    minWidth: 500,
    minHeight: 200,
    acceptFirstMouse: true,
    useContentSize: true
  })

  win.loadURL(`file://${__dirname}/../renderer/index.html`)
  win.webContents.openDevTools()
  win.on('closed', () => {
    win = null
  })
}

app.on('ready', () => {
  const menu = Menu.buildFromTemplate(menuTemplate)
  Menu.setApplicationMenu(menu)
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (win === null) createWindow()
})
