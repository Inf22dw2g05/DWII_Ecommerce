const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {

  openapi: "3.0.0",

  info: {

    title: "E-commerce",

    version: "1.0.0",

    description: "Example OAuth2.0 protected API",

    contact: { name: "inf-21-dw2-g05" },

  },

  servers: [{ url: "http://localhost:3000"}], 

  components: {

    securitySchemes: {

      OAuth2Security: {

        type: "oauth2",

        flows: {

          authorizationCode: {

            authorizationUrl: "http://localhost:3000/auth/github/callback",

            tokenUrl: "https://github.com/login/oauth/access_token",

            scopes: [],

          },

        },

      },

    },

  },

  security: [{ OAuth2Security: [] }],

};

const options = {

  swaggerDefinition,

  apis: ["./docs/**/*.yml"],

};

const swaggerSpec = swaggerJSDoc(options);


module.exports = swaggerSpec;