const mailer = require('nodemailer');

const {EMAIL, PASSWORD} = require('../../config/config');

module.exports = async (email) => {

    const transport = mailer.createTransport({
        service: 'Gmail',
        auth: {
            user: EMAIL,
            pass: PASSWORD
        }
    });

    const info = await transport.sendMail({
        from: EMAIL,
        to: email,
        subject: 'TEST MESSAGE',
        html: 'Hello from lun',
    });

    return info.response;
};