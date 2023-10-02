const { default: mongoose } = require('mongoose');
const mognoose = require('mongoose');

const accessorySchema=new mongoose.Schema({
    name: String,
    descriptio: String,
    imageUrl: String
});

const Accessory=mongoose.model('Accessory', accessorySchema);

module.exports=Accessory;