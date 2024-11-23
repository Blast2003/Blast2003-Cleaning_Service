import express from 'express';
import { createOrder, capturePayment } from '../utils/paypal.js';

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
        res.redirect("http://localhost:4000/customer/booked/service")
    } catch (error) {
        res.send('Error: ' + error)
    }
})

// If the payment is rejected
purchaseRouter.get("/cancel-order", (req, res) =>{
    res.redirect("http://localhost:4000/customer/userAgreement")
})



export default purchaseRouter;