const express = require("express");
const bodyParser = require("body-parser");
const models = require("./app_api/models");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('app_client/build'));


// Routes
// =============================================================
// require("./routes/html-routes.js")(app);
// require("./routes/author-api-routes.js")(app);
// require("./routes/post-api-routes.js")(app);
require("./routes/employee-api-routes.js")(app);

models.sequelize.sync({force: true})
.then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on PORT: ${PORT}`);
    });
})
