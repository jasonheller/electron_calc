
const {app, BrowserWindow} = require('electron') 

// creating the window as seen in electronjs docs
const createWindow = () => {
	const win = new BrowserWindow({
		width: 400,
		height: 800
	/*	webPreferences: {
			preload: path.join(__dirname, 'preload.js')
		} */
	})
	// loading the calc
	win.loadFile('index.html')
}

// when electron is finished loading create the window from the function above.
app.whenReady().then(() => {
	createWindow()
	// osx specific: only create window if no other instances are running.
	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) createWindow()
	})
})

// compatibility with osx
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin'){
		app.quit()
	}
})
