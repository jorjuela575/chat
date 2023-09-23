const express = require ('express');

const response = require('../../network/response');

const router = express.Router();

router.get('/', function (req, res){
    console.log (req.headers);
    res.header ({"custom-header": "Nuestro valor personalizado",
});
   // res.send('list of mesagges');
   response.success(req, res, 'messages list');
});
router.post('/', function (req, res){
    console.log(req.query);
    if (req.query.error == "ok"){
        response.error(req, res, 'Unespected error',500,'Error simulation');
    } else{
        response.success(req, res, 'Created correctly',201);
    }
    //console.log(req.body);
   // res.send('messagge'+ req.body.text + 'added succesfully');
   
});

module.exports = router;