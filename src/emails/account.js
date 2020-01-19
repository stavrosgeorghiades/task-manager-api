const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'Task Manager App <noreply@georghiades.me>',
        subject: 'Welcome to Task App',
        text: `Welcome to the Task App ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'Task Manager App <noreply@georghiades.me>',
        subject: 'Sorry to see you go',
        text: `Dear ${name}. We are sorry to see you leaving. Pleas let us know if we did something wrong.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}