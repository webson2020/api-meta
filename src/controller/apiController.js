require('dotenv').config();
const sendMessage = require('../service/apiService')


const verificar = (req, res) => {

  try {
    const apiToken = process.env.API_TOKEN;
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];


    console.log('apiToken:', apiToken);
    console.log('token:', token);
    console.log('challenge:', challenge)
  
    if (challenge != null && token != null && token == apiToken) {
        res.send(challenge)
    } else {
      res.status(400).send();
    }

    console.log(req);


  } catch (error) {
    res.status(400).send();
  }  
  
    
};
  



const recibir = (req, res) => {
  try {
    const entry = (req.body['entry'])[0];
    const change = (entry['changes'])[0];
    const value = change['value'];
    const objectMessage = value['messages'];

    if (typeof objectMessage != 'undefined') {
      const messages = objectMessage[0];
      const text = messages['text']['body']
      const number = messages['from'];

      sendMessage.sendMessageWhatsApp(text, number)
    }

    

    

    res.send('EVENT_RECEIVED');

  } catch (error) {
    console.log(error)
    res.send('EVENT_RECEIVED');
  }

}




module.exports = {
    verificar,
    recibir
}