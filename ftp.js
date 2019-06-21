const EasyFtp = require('easy-ftp');
const fs = require('fs-extra');

const config = {
  host: '999.99.99.999',
  port: '21',
  user: 'ftp-user',
  password: 'password1'
};

const ftp = new EasyFtp(config);

console.log('Begin FTP uploading..');

fs.copy('static', 'upload').then(() => {
	console.log('static dir moved to uploaded');
	fs.copy('C:\\xampp\\htdocs', 'upload/api.cryptogateways.io').then(() => {
		console.log('htdocs dir moved to uploaded');
		const files = fs.readdirSync('upload').map(file => 'upload/'+file);
		ftp.upload(files, "/", err =>{
			console.log('Files uploaded! Ending..');
			fs.remove('upload').then(() => {
				console.log(err, 'End!');
				process.exit();
			});
		});
	});
});