﻿module.exports.email = function () {

    var nodemailer = require('nodemailer');
    var smtpTransport = require('nodemailer-smtp-transport');

    var transporter = nodemailer.createTransport(smtpTransport({
        host: 'login.primpel.com',
        port: 25,
        auth: {
            user: 'john',
            pass: 'C@52(g?12'
        },
        tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false
        }
    }));

    transporter.sendMail({
        from: 'john@primpel.com',
        to: 'jschram@dairylandlabs.com',
        subject: "Test Message",
        html: "<div style='background-color:blue;'><h1 style='padding:20px; background-color:#333 color:fff;'>Hello John</h1><p>This is a test message from jode js</p></div>",
        text: 'This Is a test message'
    });
    console.log('Email Sent');
}
