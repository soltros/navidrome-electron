const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

let win

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({width: 800, height: 600})

  // Load the specified URL
  const urlToLoad = 'http://NAVIDROME_INSTANCE:5433'; // Replace with your Navidrome instance URL
  win.loadURL(urlToLoad)
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
