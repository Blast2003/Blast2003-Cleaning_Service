import express from 'express';
import { createOrder, capturePayment } from '../utils/paypal.js';
import { createOrderByCard, stripe } from '../utils/stripe.js';

const purchaseRouter = express.Router();

// Purchase Confirm page
purchaseRouter.get("/", (req, res) =>{
    res.render("index.ejs")
})

// Payment
purchaseRouter.post("/pay", async (req, res) => {
    try {
      const { totalPrice } = req.body; 
      if (!totalPrice || isNaN(totalPrice)) {
        return res.status(400).json({ message: "Invalid total price provided" });
      }
  
      const url = await createOrder(totalPrice);
  
      res.json({ url });
    } catch (error) {
      res.status(500).json({ message: "Error creating order: " + error });
    }
});

// If the payment is accepted
purchaseRouter.get("/complete-order", async (req, res) =>{
    try {
        const capture = await capturePayment(req.query.token)
        console.log(capture)
        res.redirect("http://localhost:4000/customer/booked/service/success")
    } catch (error) {
        res.send('Error: ' + error)
    }
})

// If the payment is rejected
purchaseRouter.get("/cancel-order", (req, res) =>{
    res.redirect("http://localhost:4000/customer/userAgreement")
})



// Card
purchaseRouter.post("/card", async (req, res) => {
  try {
    const { contract } = req.body; 
    if (!contract) {
      return res.status(400).json({ message: "Please Book service and make the contract first" });
    }

    const url = await createOrderByCard(contract.ServiceName, contract.totalPrice);

    res.json({ url });
  } catch (error) {
    res.status(500).json({ message: "Error creating order: " + error });
  }
});

// If the payment is accepted
purchaseRouter.get("/complete", async (req, res) => {
  try {
      if (!req.query.session_id) {
          return res.status(400).send('Missing session ID');
      }

      const [session, lineItems] = await Promise.all([
          stripe.checkout.sessions.retrieve(req.query.session_id, {
              expand: ['payment_intent.payment_method'],
          }),
          stripe.checkout.sessions.listLineItems(req.query.session_id),
      ]);

      console.log("Payment session:", session);
      console.log("Line items:", lineItems);

      if (session.payment_status === "paid") {
          res.redirect("http://localhost:4000/customer/booked/service/success");
      } else {
          res.redirect("http://localhost:4000/customer/userAgreement");
      }
  } catch (error) {
      console.error("Error retrieving payment session:", error);
      res.status(500).send('Error: ' + error.message);
  }
});


// If the payment is rejected
purchaseRouter.get("/cancel", (req, res) =>{
  res.redirect("http://localhost:4000/customer/userAgreement")
})



export default purchaseRouter;