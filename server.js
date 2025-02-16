const express = require("express");
const cors = require("cors");
const { corsOptions } = require("./config/corsConfig");
const errorHandler = require("./middleware/errorHandler");
const projectRoutes = require("./routes/projectRoutes");
const memberRoutes = require("./routes/memberRoutes");

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/projects", projectRoutes);
app.use("/api/members", memberRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
