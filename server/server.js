import { app } from "./app.js";
import Razorpay from "razorpay";
import { connectDB } from "./config/database.js";

connectDB();

export const instance = new Razorpay({
  key_id: "rzp_test_r8aSFwqYikHK3Z",
  key_secret: "PQNHGidemcS1IaxDJT3EXWTn",
});

const PORT = 4000;

app.listen(PORT, () =>
  console.log(`Server is working on ${PORT}`)
);