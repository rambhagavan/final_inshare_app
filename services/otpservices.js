const nodemailer=require("nodemailer");
require("dotenv/config");


async function sendMail({from,to,subject,text,html}){
let transporter=nodemailer.createTransport({
    host:process.env.SMTP_HOST,
    port:587,
    secure:false,
    auth:{
        user:process.env.MAIL_USER,
        pass:process.env.MAIL_PASS
    }
})

let info= await transporter.sendMail({
    from:`inshare <${from}>`,
    to,
    subject,
    text,
    html
})
}
module.exports=sendMail;