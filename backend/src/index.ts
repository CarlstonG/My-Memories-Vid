import app from './app'
import './database'
import path from 'path';

const router = require('express').Router();




app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'))
})

router.use("*", () => {
    router.sendFile(path.join(__dirname, '../client/build/index.html'))
})


