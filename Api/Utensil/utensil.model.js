const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Utensil = new Schema({
  
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
    collection: 'Utensil'
});

module.exports = mongoose.model('Utensil', Utensil);
