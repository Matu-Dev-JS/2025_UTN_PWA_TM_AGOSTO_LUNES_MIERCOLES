import nodemailer from 'nodemailer'
import ENVIRONMENT from './environment.config.js'

const mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: ENVIRONMENT.GMAIL_USER,
        pass: ENVIRONMENT.GMAIL_PASSWORD
    },
    tls: {
        rejectUnauthorized: false //Ignoramos validaciones de certificado TLS
    }
})

export default mailTransporter