let doc = require("swagger-jsdoc");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Devs server group 32"
        },
        servers: [
            {url: `http://localhost:${process.env.PORT || 3002}/users`}
        ]
    },
    apis: ["./api/router.js"]
    // apis: ["./api/router.js"]
}
module.exports = doc(options);