import contractRouter from "./contractRouter.js"
import examinerRouter from "./examinerRouter.js"
import mailRouter from "./mailRouter.js"
import purchaseRouter from "./purchaseRouter.js"
import serviceRouter from "./serviceRouter.js"
import staffRouter from "./staffRouter.js"
import taskRouter from "./taskRouter.js"
import userRouter from "./userRouter.js"


export const router = (app) =>{
    app.use("/api/user", userRouter)
    app.use("/api/staff", staffRouter)
    app.use("/api/examiner", examinerRouter)
    app.use("/api/contract", contractRouter)
    app.use("/api/service", serviceRouter)
    app.use("/api/task", taskRouter)
    app.use("/api/purchase", purchaseRouter)
    app.use("/api/mail", mailRouter)
}

