const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/crudDb', (err) => {
    if (!err)
    console.log('MongoDb connection succeded.....');
    else
    console.log('Error in DB connection : ' + JSON.stringify(err, undefined,2));

});

module.exports = mongoose;