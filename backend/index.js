const express = require("express");
const app = express();
const PORT = 5000;
const router = require("./auth-router");
const connectDb = require("./db");

//should add in start of middleware
// express.json() ka kaam yahi hota hai ki wo incoming JSON data ko parse karta hai aur usko JavaScript object me convert karke req.body me store kar deta hai. Isse tum request body me bheje gaye JSON data ko easily access aur process kar sakte ho.
app.use(express.json());

//this will redirect to router
app.use("/api/auth", router);

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log("server is running");
  });
});
