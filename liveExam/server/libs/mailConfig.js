var nodemailer = require("nodemailer");

//////////////////////////// setting up transport type and setting user and password////////////////////////////

exports.smtpTransport = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'abhidemo123@gmail.com',
        pass: '!@#abhi123'
    },
    tls: {rejectUnauthorized: false},
    debug:true
});
