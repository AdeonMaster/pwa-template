# Description
A lightweight `create-react-app` alternative for typical React project (React.js, Redux, Redux Sagas, Reselect, Ramda.js and etc.)

# Installation
- Clone repo to your working directory
- Install required packages with `npm i`
- Build app with `npm run build`, `npm run build:dev` or `npm run build:watch`
- Run app locally with `npm run server` or `npm run server:ssl`
- Install `ca.ssl.indexnl.com.crt` certificate from `server/certificate` folder in order to use SSL on your localhost (See the [detailed installation guide for Windows users](#ssl-certificate-installation-detailed-guide-for-windows))
- (Optional) Install `ca.ssl.indexnl.com.crt` certificate on your Android device in order to access localhost with no errors (See the [detailed installation guide for Android device](#ssl-certificate-installation-detailed-guide-for-android-device))

# ChromeDriver for Linux
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo apt install ./google-chrome-stable_current_amd64.deb

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

# Production Deployment Note
DO NOT UPLOAD SOURCEMAPS (*.js.map) FILES!

# Recommendations
- Keep project dependencies "up to date" (ncu -u)
- Optimize newly added dependencies with `babel-plugin-transform-imports` (See [examples](https://www.npmjs.com/package/babel-plugin-transform-imports))

# To Do
- Roadmap: Add notification preferences logic
- Enhancement: Cleanup .babelrc when Babel 8 will be released (https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html)

# Issues
- `husky` was removed due it's unknown error. Please take a look at it and bring back if possible
- `WorkboxPlugin` doesn't support webpack sourcemap options (https://github.com/GoogleChrome/workbox/issues/2559)
