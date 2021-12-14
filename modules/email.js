import nodemailer from 'nodemailer';

async function sendTestMail (toMail, apiEmail, apiPass){
	let transporter = createTransporter(apiEmail, apiPass);
	let info = await transporter.sendMail({
		from: '"noreply" <no-reply@cooperparlee.com>',
		to: "cooper@cooperparlee.com",
		subject: "Test?",
		test: "Hello world?",
		html: "<b> Hello werld. </b>",
	});
	console.log("Message sent: %s", info.messageId);
}

function createTransporter (apiEmail, apiPass){
	let transporter = nodemailer.createTransport({
		host: "mail1.cooperparlee.com",
		port: 587,
		secure: false,
		auth: {
			user: apiEmail,
			pass: apiPass,
		},
	});
	return transporter;
}

sendTestMail().catch(console.err);

module.exports = { createTransporter, sendTestMail };
