const path = require("path");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

require("./routes")(app);
require("./routesHTML")(app);

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
