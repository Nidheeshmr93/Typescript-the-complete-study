// import axios from 'axios';
import { User } from "./models/User";

// const user = new User({name: 'asdf', age:20});

// // user.set({ age : 999 });

// // console.log(user.get('name'));
// // console.log(user.get('age'));


// user.on('change', () => {
//     console.log('Change #1');
// });


// user.on('change', () => {
//     console.log('Change #2');
// });

// user.trigger('change');

// console.log(user);


// axios.post('http://localhost:3000/users', {
//     name: 'nidheesh',
//     age: 29
// }).then(function (response) {
//     console.log(response);
//   }) .catch(function (error) {
//     console.log(error);
//   });


const user = new User({ name: 'Nidheesh 2',age: 29});

// user.fetch()

// setTimeout(() => {
//     console.log(user)
// });


// user.set()
user.save();