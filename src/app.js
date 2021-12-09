const express = require("express");
const app = express();
const path = require("path");

app.set("port", process.env.PORT || 3030);

app.listen(app.get("port"), () => console.log("Server is running"));

// Rutas de HTML
app.get("/", (req, res) =>
  res.sendFile(path.resolve(__dirname, "./views", "home.html"))
);

app.get("/register", (req, res) =>
  res.sendFile(path.resolve(__dirname, "./views", "register.html"))
);

app.get("/login", (req, res) =>
  res.sendFile(path.resolve(__dirname, "./views", "login.html"))
);
// Acceso a los recursos públicos
app.use(express.static(path.resolve(__dirname, "../public")));
