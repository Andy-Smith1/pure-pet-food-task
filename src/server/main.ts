import express from "express";
import ViteExpress from "vite-express";

const app = express();
const port = 3000;

app.get("/api", (_, res) => {
  res.send({
    data: {
      '32': {
        'price': "29.99",
        'discount': "25"
      },
      '64': {
        'price': "55.99",
        'discount': "50"
      }
    }
  })
});

ViteExpress.listen(app, port, () =>
  console.log(`Server is listening on port ${port}...`),
);
