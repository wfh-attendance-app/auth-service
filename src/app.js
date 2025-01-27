require("dotenv").config();
const express = require("express");
const sequelize = require("./config/database");
const authRoutes = require("./routes/authRoutes");
const app = express();
const cors = require('cors');

app.use(cors())
app.use(express.json());
app.use("/api/auth", authRoutes);
const PORT = process.env.PORT || 4000;
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Auth Service running on port ${PORT}`));
});
