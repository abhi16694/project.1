var nodemailer = require("nodemailer");

//////////////////////////// setting up transport type and setting user and password////////////////////////////

exports.smtpTransport = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'abhi.a.tripathi@gmail.com',
        pass: 'Abhi@123'
    },
    tls: {rejectUnauthorized: false},
    debug:true
});