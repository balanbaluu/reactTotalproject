const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Tea = new Schema({
  
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
    collection: 'Tea'
});

module.exports = mongoose.model('Tea', Tea);
