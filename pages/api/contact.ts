import nodemailer from "nodemailer";


export default async function handler(req,res){
    const { name, email, message } = req.body;
    try {

        const transporter = nodemailer.createTransport({
            service: process.env.EMAIL_SERVICE,
            host: process.env.EMAIL_HOST,
            secure: true,
            port: process.env.EMAIL_PORT,
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USERNAME,
            to: process.env.EMAIL_RECIPIENT,
            subject: "Portfolio Message",
            html: `
                <p>From: ${name} ${email && email}</p>
                <br>
                <div>
                    ${message}
                </div>
            `
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.log(error);
              res.status(500).json({ message: "Error sending email..." });
            } else {
              console.log("Email sent: " + info.response);
            }
        });

        res.status(200).json({ message: "Email sent successfully. I'll get back to you soon. - Alex"});
        
    } catch (error) {
        console.log(error);    
        res.status(500).json({ message: "Error sending email..." });
    }
}