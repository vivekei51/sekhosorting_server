const express = require("express");
const cors = require("cors");
const newSchema = require("./userModel");

const { connectDB } = require("./db");
connectDB();

const app = express();

const port = 4000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/",require("./userRoutes"))

// app.post("/Login", async (req, res) => {
//   const { email, Password } = req.body;

//   try {
//     const check = await collection.findOne({
//       email: email,
//       Password: Password,
//     });

//     if (check) {
//       res.json("Login Successfull");
//     } else {
//       res.json("notexist");
//     }
//   } catch (e) {
//     res.json("fail");
//   }
// });

// app.post("/Signup", async (req, res) => {
//   const { email, Password } = req.body;

//   const data = {
//     email: email,
//     Password: Password,
//   };

//   try {
//     const check = await newSchema.findOne({ email: email });

//     if (check) {
//       res.json("exist");
//     } else {
//       res.json("notexist");
//       user = new newSchema(data);
//       await user.save();
//     }
//   } catch (e) {
//     res.json("fail");
//   }
// });

app.listen(port, () => {
  console.log(`Server is running on port=${port}`);
});
