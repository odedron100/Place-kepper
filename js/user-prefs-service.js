
const KEY = 'users';
let gUsers = [];

// _createUsers();

const getUsers = () => {
  return gUsers;
}


// those are PRIVATE FUNCTIONS

const addUser = (user) => {
  gUsers.push(user);
  _saveToLocalStorage();
}

const createUser = (userName, favoriteColor, email, birthday, birthTime, age) => {
  return {
    userName,
    favoriteColor,
    email,
    birthday,
    birthTime,
    age,
  }
}

// const _createUsers = () => {
//   let users = loadFromStorage(KEY);
//   if (!users || !users.length) {
//     users = []
//   }
//   gUsers = users;
//   _saveToLocalStorage()
// }

const _saveToLocalStorage = () => {
  saveToStorage(KEY, gUsers);
}
