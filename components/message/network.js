const express = require ('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', function (req, res){
    console.log (req.headers);
    res.header ({"custom-header": "Nuestro valor personalizado",
});
   // res.send('list of mesagges');
   response.success(req, res, 'messages list');
});
router.post('/', function (req, res){
    
    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage)=>{
            response.success(req, res, fullMessage,201);
        })
        .catch(e=>{
            response.error(req, res, 'Invalid information',400,'Error in controller');
        });

   
});

module.exports = router;