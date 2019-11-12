module.exports = function (app) {
    app.use("/customer", require("./customer"));
    app.use("/item", require("./item"));
    app.use("/order", require("./order"));
    app.use("/shop", require("./shop"));
    app.use("/", (req, res) => {
        res.json({"message": "Welcome to the API"})
    });
};

