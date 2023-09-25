const store = require('./store');

function addMessage (user, message){
    return new Promise ((resolve, reject) => {
        if (!user || !message) {
            console.error('[mesaggeController] No user or message ');
            reject('the data is incorrect');
            return false;
        }
        
    const fullMessage ={
        user: user,
        message: message,
        date: new Date(),
    
    };
    
    store.add(fullMessage);
    resolve(fullMessage);

    });
   
    
    };
    
function getMessage (){
    return new Promise ((resolve, reject) => {
        resolve (store.list());
    })
}


module.exports = {
    addMessage,
    getMessage,
};