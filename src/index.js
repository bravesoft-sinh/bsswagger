import SwaggerUI from 'swagger-ui'
import 'swagger-ui/dist/swagger-ui.css';
require('dotenv').config()
const spec = require('./swagger.yaml');
const ui = SwaggerUI({
    spec,
    dom_id: '#swagger',
});

ui.initOAuth({
    appName: process.env.PROJECT_NAME,
    clientId: 'implicit'
});
