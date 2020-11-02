# Description
A lightweight `create-react-app` alternative for typical React project (React.js, Redux, Redux Sagas, Reselect, Ramda.js and etc.)

# Installation
- Clone repo to your working directory
- Install required packages with `npm i`
- Build app with `npm run build`, `npm run build:dev` or `npm run build:watch`
- Run app locally with `npm run server` or `npm run server:ssl`
- Install `ca.ssl.indexnl.com.crt` certificate from `server/certificate` folder in order to use SSL on your localhost (See the [detailed installation guide for Windows users](#ssl-certificate-installation-detailed-guide-for-windows))
- (Optional) Install `ca.ssl.indexnl.com.crt` certificate on your Android device in order to access localhost with no errors (See the [detailed installation guide for Android device](#ssl-certificate-installation-detailed-guide-for-android-device))

# Phone device debugging
- [How to set up Chrome remote device debugging](https://developers.google.com/web/tools/chrome-devtools/remote-debugging/local-server)
- [SSL certificate installation detailed guide for Android device](https://michielsioen.be/2019-11-23-the-pwa-experiment-pt2-debugging/)

## Chrome remote devices port forwarding settings

Port forwarding settings could be found at [chrome://inspect/#devices](chrome://inspect/#devices)

| Port | IP Address and port |
| ------------- | ------------- |
| 8080 | localhost:8080 |

# SSL certificate installation detailed guide for Windows
- Navigate to `server/certificate` folder inside app working directory
- Double click on `ca.ssl.indexnl.com.crt` certificate file
- Press `Install Certificate` button
- Select certificate store location and press `Next` (can be skipped by default)
- Select `Place all certificates in the following store` and press `Browse` button
- In the opened window select `Trusted Root Certification Authorities` and press `Ok`
- Make sure `Trusted Root Certification Authorities` appeared in certificate store input field and press `Next`
- In the newly opened window press `Finish` button
- After successful installation close all browser instances in order new settings to take effect

# SSL certificate installation detailed guide for Android device
- Navigate to `server/certificate` folder inside app working directory
- Move `ca.ssl.indexnl.com.crt` to your Android device
- Install `ca.ssl.indexnl.com.crt` file by clicking on it
- Enter `Localhost root ca` into the certificate name field and press `Ok`

# List of useful debuging tools
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=ru) for Chrome browser
- [Redux Developer Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=ru) for Chrome browser
- [Postman](https://www.postman.com/)

# Recommendations
- Keep deps "up to date"
- Optimize newly added deps with `babel-plugin-transform-imports` (See [examples](https://www.npmjs.com/package/babel-plugin-transform-imports))

# TO DO
- Enhancement: Add socket connection status & custom message payload
- Roadmap: Add notification preferences logic
- Enhancement: Inject custom ServiceWorker code by `ServiceWorker.entry` option (Does)
- Enhancement: Add custom error logging service
- Roadmap: Replace OfflinePlugin with it's successor (Workbox?)
- Roadmap: Migrate to Webpack 5

# Issues
- Server: Requesting a non static asset file cause to return index.html document instead of 404 error
- App: offline-plugin isn't unregistering service worker if app is running in DEV mode after PROD 
- Environment: Jest coverage isn't working properly for pages folder
