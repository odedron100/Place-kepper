
const KEY = 'users';
let gUsers = [];

// _createUsers();

const getUsers = () => {
  return gUsers;
}

let gForecasts = ['You need something contemporary in your life this week! Add something that will increase your health like a pet, kidnap a guy that teaches tai - chi, or buy a sack of blood to keep the mosquitoes away! Or you could buy something that your home needs, like a cactus and / or Tupperware in the shapes of body parts, or a stuffed poodle.It could be a decoration or mop! Improve your love life and get new sheets! No, really.Get new sheets.You hang posters of unicorns on their walls.Your next Career: Pubic Stylist.God will tell you the meaning of your existence, but in a thick, unintelligible accent.You’re looking good and feeling sassy on Wednesday.That new shirt will earn you some free drinks and envious glares from everyone in the office.Bask in your own glory.', 'Dont go to the company party.You constantly worry about what other people think.If you really paid any attention, maybe people would like you more.Your next Career: Roadkill Cleanup Enforcement.Clean towels will be key.That month - long Netflix binge has left you groggy and your house a spiderweb - covered mess.On the bright side, all you need is a few sheets thrown over your furniture and you can make some cash by opening it as a haunted house.', 'Big success and crushing failure this week! Your workouts would be more effective if you stopped eating between sets.Friendships and social circles will turn on you in the coming days.Just go sleep on the couch tonight.You dont want to know why.While others curse the storm, you’re out cruising for mud puddles.Jump in as many as you can, just remember to bring an inflatable duckie to keep yourself afloat in the deep end.']


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

const getForecast = () => {
  let randomForecast = getRandomInt(0, gForecasts.length);
  return gForecasts[randomForecast];
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
