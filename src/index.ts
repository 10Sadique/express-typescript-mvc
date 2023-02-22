import express, { NextFunction, Request, Response } from "express";
import userRouter from "./routes/users.route";
import productRouter from "./routes/product.route";

const app = express();
const PORT = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(userRouter);
app.use(productRouter);

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({
        message: "Resource not found!",
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:5000`);
});
