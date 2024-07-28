const nodemailer = require('nodemailer');
const Imap = require('imap');
const { simpleParser } = require('mailparser');

// Configuración del servidor SMTP y IMAP
const smtpServer = process.env.SMTP_SERVER;
const smtpPort = parseInt(process.env.SMTP_PORT, 10);
const imapServer = process.env.IMAP_SERVER;
const imapPort = parseInt(process.env.IMAP_PORT, 10);

export async function POST(req) {
    // Email configuration
    const senderEmail = 'info@sledevelopment.com';
    const senderPassword = 'SleInfo$$*@2024';
    const recipientEmail = 'sebdevcol@gmail.com';
    const subject = 'Testing email script';
    const body = 'This is a test email sent from a Node.js script.';

    // SMTP (sending) server details
    const smtpServer = 'smtp.titan.email';
    const smtpPort = 587;

    // IMAP (receiving) server details
    const imapServer = 'imap.titan.email';
    const imapPort = 993;

    async function sendEmailAndAppend() {
        try {
            // Create a nodemailer transporter using SMTP
            const transporter = nodemailer.createTransport({
                host: smtpServer,
                port: 465,
                auth: {
                    user: senderEmail,
                    pass: senderPassword,
                },
            });

            // Create the email options
            const mailOptions = {
                from: senderEmail,
                to: recipientEmail,
                subject: subject,
                text: body,
            };

            // Send the email
            const info = await transporter.sendMail(mailOptions);
            console.log('Email sent successfully.');
            console.log('Info object:', info);

            // Append the sent email to the "Sent" folder using IMAP
            const imap = new Imap({
                user: senderEmail,
                password: senderPassword,
                host: imapServer,
                port: imapPort,
                tls: true,
            });

            imap.once('ready', () => {
                imap.openBox('Sent', true, (err) => {
                    if (err) {
                        console.error('Error opening "Sent" folder:', err);
                        imap.end();
                        return;
                    }

                    // Create the email message as MIMEText
                    const emailMessage = `From: ${senderEmail}\r\nTo: ${recipientEmail}\r\nSubject: ${subject}\r\n\r\n${body}`;

                    // Append the sent email to the "Sent" folder
                    imap.append(emailMessage, { mailbox: 'Sent' }, (appendErr) => {
                        if (appendErr) {
                            console.error('Error appending email to "Sent" folder:', appendErr);
                        } else {
                            console.log('Email appended to "Sent" folder.');
                        }
                        imap.end();
                    });
                });
            });

            imap.once('error', (imapErr) => {
                console.error('IMAP Error:', imapErr);
            });

            imap.connect();
        } catch (error) {
            console.error('Error sending email:', error);
        }
    }

    // Call the function to send the email and append it to the "Sent" folder
    return sendEmailAndAppend();
}
