import express from "express";
import ViteExpress from "vite-express";
import { OfferDetails } from "../client/types/offer.js";

const app = express();
const port = 3000;

/**
 * Functionality of API extended to include two endpoints to more realistically emulate working with a restful API,
 * as opposed to fetching the whole dataset on each page. One endpoint will simply return a list of numbers representing 
 * the days for each possible subscription, the other will return the relevant object from the mockData.
 */

const mockData: Record<string, OfferDetails> = {
  '32': {
    'price': "29.99",
    'discount': "25"
  },
  '64': {
    'price': "55.99",
    'discount': "50"
  }
}

app.get("/api/subscriptions", (_, res) => {

  const days: string[] = Object.keys(mockData);

  res.send({
    data: days
  })

});

app.get("/api/subscriptions/:days", (req, res) => {

  const daysParam: string = req.params.days;

  res.send({
    data: mockData[daysParam]
  })

})


ViteExpress.listen(app, port, () =>
  console.log(`Server is listening on port ${port}...`),
);
