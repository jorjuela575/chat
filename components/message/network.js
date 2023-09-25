const express = require ('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', function (req, res){
   controller.getMessage()
    .then((messageList) => {
        response.success(req,res,messageList,200);
    })
    .catch(e => {
        response.error(req, res, 'Unspected error', 500, e)
    
    })
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