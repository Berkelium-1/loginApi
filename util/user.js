const nodemailer = require('nodemailer');

module.exports = {
    // 发送电子邮箱验证码
    sendEmailCode(email, code) {
        //使用默认SMTP传输，创建可重用邮箱对象
        const transporter = nodemailer.createTransport({
            host: 'smtp.qq.com',
            port: 465,
            secure: true, //开启加密协议，需要使用465端口号
            auth: {
                user: '1922906183@qq.com', // 发送人邮箱
                pass: 'qjjcweyajzyofdgd' // 邮箱授权密码
            }
        });
        // 设置电子邮件的数据
        const emailOptions = {
            from: '"来自" <1922906183@qq.com>', //发件人邮箱
            to: `${email}`, //收件人列表,可以发送给多人，在字符串里用,隔开，例如'邮箱1, 邮箱2'
            subject: '邮箱验证', //标题
            text: 'test mail text',
            html: `您的邮箱验证码是：<h3>${code}</h3>`
        };

        // 发送
        transporter.sendMail(emailOptions, (error, info = {}) => {
            if (error) {
                console.log(error);
                sendNodeMail(); //再次发送
            } else {
                console.log('邮件发送成功', info.messageId);
            }
        });
    }
};