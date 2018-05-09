const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const TestSchema = mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    date: {
    type: String,
    required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }

  },{ collection : 'blog' });


const Blog = module.exports = mongoose.model('blog', TestSchema);

module.exports.getBlogById = function(id, callback){
  Blog.findById(id, callback);
}

module.exports.getBlogByName = function(name, callback){
  const query = {name: name};
  console.log(query);
  Blog.find(query, callback);
  console.log(callback);
}

module.exports.addblog = function(newBlog, callback){

      newBlog.save(callback);
}

module.exports.Load =function(callback)
{
Blog.find({},callback);
//console.log(callback);
}

