import { app, BrowserWindow, globalShortcut } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 500,
    transparent: true,
    frame: false,
    skipTaskbar: true,
    resizable: false,
    movable: false,
    alwaysOnTop: true,
    vibrancy: 'fullscreen-ui',
    backgroundMaterial: 'acrylic',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  win.loadFile(path.join(__dirname, 'index.html'));

  win.on('blur', () => {
    win.hide();
  });
}

function setupGlobalShortcut() {
  globalShortcut.register('CommandOrControl+Shift+B', () => {
    if (win.isVisible()) {
      win.hide();
    } else {
      win.show();
    }
  });
}

app.whenReady().then(() => {
  createWindow();
  setupGlobalShortcut();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('will-quit', () => {
  globalShortcut.unregisterAll();
});
