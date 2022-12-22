const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();
const Stripe = require('stripe');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27',
});

const app = express();
const corsOption ={
    origin:function(origin, callback){
        console.log(origin, callback);
        callback(null, true);
    }
}
app.use(cors(corsOption));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(bodyParser.raw());

// apis
const router = express.Router();

router.post('/api/sendMessage', async(req, res) => {
    const {info, name, email, subject, message} = req.body;
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'youremail@gmail.com',
          pass: 'yourpassword'
        }
      });
      
      var mailOptions = {
        name : name,
        from: email,
        to: info,
        subject: subject,
        text: message
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    res.status(200).json(req.body);
});

router.post('/api/create-payment-intent', async (req, res) => {
  console.log(req.body)
    const { amount,description, payment_intent_id } = req.body;
    // if (payment_intent_id) {
    //   try {
    //     // If a payment_intent_id is passed, retrieve the paymentIntent
    //     const current_intent = await stripe.paymentIntents.retrieve(
    //       payment_intent_id
    //     );
    //     // If a paymentIntent is retrieved update its amount
    //     if (current_intent) {
    //       const updated_intent = await stripe.paymentIntents.update(
    //         payment_intent_id,
    //         {
    //           amount: amount*100,
    //         }
    //       );
    //       res.status(200).json(updated_intent);
    //       return;
    //     }
    //   } catch (e) {
    //     //Catch any error and return a status 500
    //     if (e.code !== 'resource_missing') {
    //       const errorMessage =
    //         e instanceof Error ? e.message : 'Internal server error';
    //       res.status(500).json({ statusCode: 500, message: errorMessage });
    //       return;
    //     }
    //   }
    // }
    try {
      // Create PaymentIntent
      const params = {
        amount: amount*100,
        currency: 'usd',
        description: description,
        // confirm: true,
        // confirmation_method: 'manual',
        automatic_payment_methods: {
          enabled: true,
        },
      };
      const paymentIntent = await stripe.paymentIntents.create(params);
      //Return the payment_intent object
      res.status(200).json({
        clientSecret: paymentIntent.client_secret,
      });
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Internal server error';
      res.status(500).json({ statusCode: 500, message: errorMessage });
    }
});
// routers
app.use(router);

// static folders
const assetFolder = path.resolve(__dirname, './build/');

// app.use( proxyConfig);
app.use(express.static(assetFolder));
app.use("*", express.static(assetFolder));
// run server

const port = process.env.PORT || 5600;
const server = app.listen(port, () => {
    console.log(`server up and running on port ${port}!`);
});
