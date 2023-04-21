const https = require('https');


function sendMessageWhatsApp(text, number) {
    let data;
    text = text.toLowerCase();
    if (text.includes("hola")) {
      data = JSON.stringify({
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: number,
        type: "text",
        text: {
          preview_url: false,
          body: "Hola, qué tal, Bienvenido",
        },
      });
    } else if (text == '1') {
        data = JSON.stringify({
            messaging_product: "whatsapp",
            recipient_type: "individual",
            to: number,
            type: "text",
            text: {
              preview_url: false,
              body: "Nuestro cerebro Reconquer (Plataforma Saas) permite centralizar, almacenar y llevar una tazabilidad en tiempo real de todas las etapas asociadas a un proceso médico, permitiendo realizar mejoras y corregir desviaciones de forma proactiva . Con ciencia de datos y AI  generamos inteligencia clínica para mejorar el desempeño humano."
            },
        });
    } else if (text == '2') {
        data = JSON.stringify({
            messaging_product: "whatsapp",
            recipient_type: "individual",
            to: number,
            type: "location",
            location: {
                latitude: "-33.374853311740736",
                longitude: "-70.54661659886175",
                name: "Oficinas y laboratorio TricepsMDA",
                address: "Av San Josemaría Escrivá de Balaguer 100000"
            },   
        });
    } else if (text == '3') {    
        data = JSON.stringify({
            messaging_product: "whatsapp",
            recipient_type: "individual",
            to: number,
            type: "document",
            document: {
                link: "https://eqpro.es/wp-content/uploads/2018/11/Ejemplo.pdf",
                caption: "Ejemplo reportes por deportista"
            }
        });
    } else if (text == '4') {    
        data = JSON.stringify({
            messaging_product: "whatsapp",
            recipient_type: "individual",
            to: number,
            type: "audio",
            audio: {
                link: "https://filesamples.com/samples/audio/mp3/sample1.mp3",
            }
        });
    } else if(text == '5') {
        data = JSON.stringify({
            messaging_product: "whatsapp",
            recipient_type: "individual",
            to: number,
            text: {
                preview_url: true,
                body: "Introducción a la plataforma https://www.youtube.com/watch?v=MTn9lGKBteA",
            }
        });
    } else if (text == '6') {
        data = JSON.stringify({
            messaging_product: "whatsapp",
            recipient_type: "individual",
            to: number,
            type: "text",
            text: {
              preview_url: false,
              body: "En breve nos pondremos en contacto!!"
           
            },
        });
    } else if (text == '7') {
        data = JSON.stringify({
            messaging_product: "whatsapp",
            recipient_type: "individual",
            to: number,
            type: "text",
            text: {
              preview_url: false,
              body: "🗓️ Agendamiento de hora Con Reinaldo Rueda, Director técnico,\n Lunes 19 de abril,\n Horario: 9:00 am - 10:00 am"
            },
        });
    } else if (text.includes('gracias')) {
        data = JSON.stringify({
            messaging_product: "whatsapp",
            recipient_type: "individual",
            to: number,
            type: "text",
            text: {
              preview_url: false,
              body: "Gracias as tí por contactarnos !!!"
            },
        });
    } else if (text.includes('adios') || text.includes('nos vemos') || text.includes('by')) {
        data = JSON.stringify({
            messaging_product: "whatsapp",
            recipient_type: "individual",
            to: number,
            type: "text",
            text: {
              preview_url: false,
              body: "Adiós que tengas un buen día 💪💪💪 !!!"
            },
        });
    } else {
      data = JSON.stringify({
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: number,
        type: "text",
        text: {
          preview_url: false,
          body: "🚀 Hola, visita nuestra página tricepsmda.com para mas información.\n \n📌Por favor, ingresa un numero #️⃣ para recibir información de nuestra plataforma.\n \n1️⃣. Información de la Plataforma ❔\n2️⃣. Ubicación de nuestras oficinas. 📍\n3️⃣. Enviar reportes de deportistas en pdf. 📄\n4️⃣. Audio explicando qué es la plataforma. 🎧\n5️⃣. Video cápsula de Introducción. ⏯️\n6️⃣. Hablar con el equipo. 🙋‍♂️\n7️⃣. Horario de Atención agendamiento de hora. 🕜"
        },
      });
    }
  
    const options = {
      host: "graph.facebook.com",
      path: "/v16.0/107511972309679/messages",
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer EAAwhxnEcF6cBAD6xZB5Xo4ZASTfdPKxUBpouaJBnw8mduIj4JYIYD2hnxiHzUHUMzZBZCsvDStuf5gEG3diUqc8pZC624B07t0BxTbxxRPMJiCLR89ZBZBJqnIVYKeUuZCMQ1ZBO5Mf2s6r3NVxHhB6EIpZAKYyA7KwumGPQbLh75gb0tOpzZAqrxRUmAfqlS8jeBMssXg2DhmdgAZDZD",
      },
    };
  
    const req = https.request(options, (res) => {
      res.on("data", (d) => {
        process.stdout.write(d);
      });
    });
    req.write(data);
    req.end();
  }
  
  module.exports = {
    sendMessageWhatsApp,
  };
  