const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test'); // test connection string
}

// define scheme
const kittySchema = new mongoose.Schema({
  name: String
});

// create a METHOD for the schema
  // all methods must be added BEFORE the schema becomes a model !!
kittySchema.methods.speak = function speak() {
  const greeting = this.name
    // reference name if it exists
    ? 'Meow name is ' + this.name
    // otherwise print
    : 'I don\'t have a name';
  console.log(greeting);
}; 

// turn schema into a model
const Kitten = mongoose.model('Kitten', kittySchema);

// create instance of kitten (document)
const silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // will print 'Silence'

// use speak method !!
const fluffy = new Kitten({ name: 'fluffy' });
await fluffy.save(); // must save each document to database with save() method
fluffy.speak(); // prints "Meow name is fluffy"

// use Kitten model to access all kitten documents
const kittens = await Kitten.find();
// console.log(kittens); // display all kittens

// query: find kitten by name
await Kitten.find({ name: /^fluff/ }); // search all docs for a name field that starts with "fluff"
