const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user');

var id = '5b8c6194e391780514ed7742bb'
var userid = '5b8bf0e4bbe06b03deb46eb2'

if (!ObjectID.isValid(id)){
    console.log('ID not valid');
}

if (!ObjectID.isValid(userid)){
    console.log('ID not valid');
}


// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo){
//         return console.log('Id not found');
//     };
//     console.log('Todo by Id', todo);
// }).catch((e)=> {
//     console.log(e);
// });

User.findById(userid).then((user) => {
    if (!user){
        return console.log('Id not found');
    };
    console.log('User by Id', user);
}).catch((e)=> {
    console.log(e);
});