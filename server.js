const jsonServer = require("json-server");
const auth = require("json-server-auth");
const dayjs = require("dayjs");
// var paypal = require("paypal-rest-sdk");
// const express = require("express");
// const ejs = require("ejs");

const server = jsonServer.create();
const router = jsonServer.router("./db/data.json");

const middlewares = jsonServer.defaults();

server.db = router.db;

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = dayjs().valueOf();
    req.body.updatedAt = dayjs().valueOf();
  }
  // paypal.configure({
  //   mode: "sandbox", //sandbox or live
  //   client_id:
  //     "AVxHkMBDsWPf8W95zMkRYLjg9RD1HpO56IhXu-9pK1qIzhNIqlsiZvpd3DKMh54dYdc0tWH9xyupG9OG",
  //   client_secret:
  //     "ELjnYeQEgFS2S6mS_NdHVbS8l5YiToIj4A5iFQckMimOL-ShgXHQwhPYVCKdEPr6Tz42-BsI3qyjWAQQ",
  // });

  // const app = express();

  // app.set("view engine", "ejs");

  // app.get("/", (req, res) => res.render("index"));

  // var create_payment_json = {
  //   intent: "sale",
  //   payer: {
  //     payment_method: "paypal",
  //   },
  //   redirect_urls: {
  //     return_url: "http://return.url",
  //     cancel_url: "http://cancel.url",
  //   },
  //   transactions: [
  //     {
  //       item_list: {
  //         items: [
  //           {
  //             name: "item",
  //             sku: "item",
  //             price: "1.00",
  //             currency: "USD",
  //             quantity: 1,
  //           },
  //         ],
  //       },
  //       amount: {
  //         currency: "USD",
  //         total: "1.00",
  //       },
  //       description: "This is the payment description.",
  //     },
  //   ],
  // };

  // paypal.payment.create(create_payment_json, function (error, payment) {
  //   if (error) {
  //     throw error;
  //   } else {
  //     console.log("Create Payment Response");
  //     console.log(payment);
  //   }
  // });

  if (req.method === "PUT") {
    req.method = "PATCH";
  }

  if (req.method === "PATCH") {
    req.body.updatedAt = dayjs().valueOf();
  }

  next();
});

server.use(auth);
server.use(router);
server.listen(4000);
