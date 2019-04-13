const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Dal = new Schema({
  
  pname: {
    type: String,
    required:true
    
  },
  price: {
    type: Number,
    
  },

  image:{
    type: String,
    required:true
  }
},{
    collection: 'Dal'
});

module.exports = mongoose.model('Dal', Dal);
