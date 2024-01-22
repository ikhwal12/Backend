// import modul express
const express = require("express");
const cors = require("cors");

// membuat instance express
const app = express();
const port = 3001;

// handler untuk parsing data
const userRoutes = require("./routes/users_routes");
const productRoutes = require("./routes/product_routes");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use("/", userRoutes, productRoutes);

// jalankan server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
