require("dotenv").config();
const express = require("express");
const sequelize = require("./config/database");
const authRoutes = require("./routes/authRoutes");
const app = express();
const cors = require('cors');

// More specific CORS configuration
app.use(cors({
  origin: ['https://wfh-attendance-fe.vercel.app', 'http://localhost:3000'],
  credentials: true
}));

app.use(express.json());
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 4000;
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Auth Service running on port ${PORT}`));
});