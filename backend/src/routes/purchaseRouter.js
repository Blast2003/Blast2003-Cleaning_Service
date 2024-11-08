import express from 'express';
import { createOrder, capturePayment } from '../utils/paypal.js';

const purchaseRouter = express.Router();

// Purchase Confirm page
purchaseRouter.get("/", (req, res) =>{
    res.render("index.ejs")
})

// Payment
purchaseRouter.post("/pay", async (req, res)=>{
    try {
        const url = await createOrder()

        res.redirect(url)

    } catch (error) {
        res.send('Error: ' + error)
    }
})

// If the payment is accepted
purchaseRouter.get("/complete-order", async (req, res) =>{
    try {
        const capture = await capturePayment(req.query.token)
        console.log(capture)
        res.send("Purchased Order Completed")
    } catch (error) {
        res.send('Error: ' + error)
    }
})

// If the payment is rejected
purchaseRouter.get("/cancel-order", (req, res) =>{
    res.redirect("/api/purchase")
})



export default purchaseRouter;