import SwaggerUI from 'swagger-ui'
import 'swagger-ui/dist/swagger-ui.css';

const spec = require('./swagger.yaml');

const ui = SwaggerUI({
    spec,
    dom_id: '#swagger',
});

ui.initOAuth({
    appName: "デモプロジェクトAPI仕様書",
    clientId: 'implicit'
});
