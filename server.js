const express = require ('express')
const server = express ()
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');

server.use(express.urlencoded({extended:true}))

server.set ("view engine", "html")
server.engine('html', require('ejs').renderFile);

server.use(express.static('public'))
server.use (express.static('assets'))


server.get  ("/", function(req,res){
    return res.render ("index")
})

server.get ("/curriculo", function (req,res) {
    return res.render("curriculum") 
  }
  )

server.get ("/portfolio", function (req,res) {
    return res.render("portfolio") 
  }
)

server.get ("/contato", function (req,res) {

  return res.render("contato") 
}
)

server.post ("/contato", function (req,res) {


    const {name,fone,email,subject} = req.body
        
    console.log(`
    Nome: ${name}
    Telefone: ${fone}
    E-mail: ${email}
    Assunto: ${subject}
    `)

    let client = nodemailer.createTransport({
        service: 'SendGrid',
        auth: {
          user: 'matheus.felizardo2@gmail.com',
          pass: 'matheus157//*'
        }
      });

      let emailSended = {
        from: `matheus.felizardo2@gmail.com`,
        to: 'matheus.felizardo2@gmail.com',
        subject: `Contato - Site Matheus Felizardo`,
        text: `${subject}`,
        html: `<b>${subject}</b>`
      };

      client.sendMail(emailSended, function(err, info){
        if (err){
          console.log(err);
        }
        else {
          console.log('Message sent: ' + info.response);
        }
    });

    return res.render("messagesent") 
  }
  )
  

server.listen (5000, function () {
    console.log ("Servidor rodando!")
}
)