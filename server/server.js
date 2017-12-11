require('dotenv').config();
const express = require('express')
    , bodyParser = require('body-parser')
    // , exphbs = require('express-handlebars')
    // , path = require('path')
    , nodemailer = require('nodemailer');

const app = express();

// view engine setup
// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');

// Static Folder
// app.use('/public', express.static(path.join(__dirname, 'public')))

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/send', (req, res) => {
    
    const output = `
        <p>You have a new contact request<p>
        <h3>Contact Details</h3>
        <ul>
            <li>Name: ${req.body.name} </li>
            <li>Company: ${req.body.company} </li>
            <li>Email: ${req.body.email} </li>
            <li>Phone: ${req.body.phone} </li>
        </ul>
        <h3>Messege</h3>
        <p>${req.body.messege}</p>
    `;

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: '_autodiscover_tcp.chasedavis.io',
        // // port: 587,
        port: 443,
        // // port: 465,
        secure: false, // true for 465, false for other ports
        // auth: {
        //     user: 'contact@chasedavis.io', // generated ethereal user
        //     pass: process.env.PASSWORD  // generated ethereal password
        // },
        tls: {
            rejectUnauthorized: false
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Nodemailer Contact" <contact@chasedavis.io>', // sender address
        to: 'chasewdavis7@gmail.com', // list of receivers
        subject: 'Node contact request', // Subject line
        text: '', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        res.status(200).send('Thanks!')
    });
    
})


const PORT = 3005;
app.listen(PORT, ()=>console.log(`listening on port ${PORT} :)`))