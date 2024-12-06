const express = require('express');
const app = express();

app.set('port', 3000);

app.use(function(req, res, next){
    console.log('First Middleware..');
    req.user = 'KSD';
    next();
});

app.use(function(req, res, next){
    console.log('Second Middleware..');
    res.status(200).send(`<h1>${req.user} response at Express Server</h1>`);
});

app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`);
});
