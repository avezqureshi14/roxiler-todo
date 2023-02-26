const todoArray = [
    {
        id: 1,
        todo: 'Do something nice for someone I care about',
        completed: true,
        userId: 26,
        name:'Terry',
        email:'atuny0@sohu.com'
      },
      {
        id: 2,
        todo: 'Memorize the fifty states and their capitals',
        completed: false,
        userId: 48,
        name:'Hoeger',
        email:'rshawe2@51.la'
      },
      {
        id: 3,
        todo: 'Watch a classic movie',
        completed: false,
        userId: 4,
        name:'Rath',
        email:'rhallawellb@dropbox.com'
      },
      {
        id: 4,
        todo: 'Contribute code or a monetary donation to an open-source software project',
        completed: false,
        userId: 48,
        name:'Hoeger',
        email:'rshawe2@51.la'
      },
      {
        id: 5,
        todo: 'Solve a Rubik\'s cube',
        completed: false,
        userId: 31,
        name:'Maggio',
        email:'yraigatt3@nature.com'
      },
      {
        id: 6,
        todo: 'Bake pastries for me and neighbor',
        completed: false,
        userId: 39,
        name:'Yundt',
        email:'kmeus4@upenn.edu'
      },
      {
        id: 7,
        todo: 'Go see a Broadway production',
        completed: false,
        userId: 32,
        name:'Terry',
        email:'atuny0@sohu.com'
      },
      {
        id: 8,
        todo: 'Write a thank you letter to an influential person in my life',
        completed: true,
        userId: 13,
        name:'Douglas',
        email:'lgribbinc@posterous.com'
      },
      {
        id: 9,
        todo: 'Invite some friends over for a game night',
        completed: false,
        userId: 47,
        name:'Enoch',
        email:'mturleyd@tumblr.com'
      },
      {
        id: 10,
        todo: 'Have a football scrimmage with some friends',
        completed: false,
        userId: 19,
        name:'Jeanne',
        email:'kminchelle@qq.com'
      },
      {
        id: 11,
        todo: 'Text a friend I haven\'t talked to in a long time',
        completed: false,
        userId: 39,
        name:'Yundt',
        email:'kmeus4@upenn.edu'
      },
      {
        id: 12,
        todo: 'Organize pantry',
        completed: true,
        userId: 39,
        name:'Wyman',
        email:'dpettegre6@columbia.edu'
      },
      {
        id: 13,
        todo: 'Buy a new house decoration',
        completed: false,
        userId: 16,
        name:'Reichert',
        email:'jtreleven5@nhs.uk'
      },
      {
        id: 14,
        todo: 'Plan a vacation I\'ve always wanted to take',
        completed: false,
        userId: 28,
        name:'Gleason',
        email:'nloiterton8@aol.com'
      },
      {
        id: 15,
        todo: 'Clean out car',
        completed: false,
        userId: 33,
        name:'Rosenbaum',
        email:'dpierrof@vimeo.com'
      },
      {
        id: 16,
        todo: 'Draw and color a Mandala',
        completed: true,
        userId: 24,
        name:'Reichert',
        email:'jtreleven5@nhs.uk'
      },
      {
        id: 17,
        todo: 'Create a cookbook with favorite recipes',
        completed: false,
        userId: 1,
        name:'Terry',
        email:'atuny0@sohu.com'
      },
      {
        id: 18,
        todo: 'Bake a pie with some friends',
        completed: false,
        userId: 1,
        name:'Prohaska',
        email:'vcholdcroftg@ucoz.com'
      },
      {
        id: 19,
        todo: 'Create a compost pile',
        completed: true,
        userId: 5,
        name:'Arely',
        email:'sberminghamh@chron.com'
      },
      {
        id: 20,
        todo: 'Take a hike at a local park',
        completed: true,
        userId: 43,
        name:'Gust',
        email:'bleveragei@so-net.ne.jp'
      },
      {
        id: 21,
        todo: 'Take a class at local community center that interests you',
        completed: false,
        userId: 22,
        name:'Terry',
        email:'atuny0@sohu.com'
      },
      {
        id: 22,
        todo: 'Research a topic interested in',
        completed: false,
        userId: 4,
        name:'Lenna',
        email:'aeatockj@psu.edu'
      },
      {
        id: 23,
        todo: 'Plan a trip to another country',
        completed: true,
        userId: 37,
        name:'Ernser',
        email:'ckensleyk@pen.io'
      },
      {
        id: 24,
        todo: 'Improve touch typing',
        completed: false,
        userId: 45,
        name:'Tressa',
        email:'froachel@howstuffworks.com'
      },
      {
        id: 25,
        todo: 'Learn Express.js',
        completed: false,
        userId: 49,
        name:'Felicity',
        email:'beykelhofm@wikispaces.com'
      },
      {
        id: 26,
        todo: 'Learn calligraphy',
        completed: false,
        userId: 50,
        name:'Jocelyn',
        email:'brickeardn@fema.gov'
      },
      {
        id: 27,
        todo: 'Have a photo session with some friends',
        completed: false,
        userId: 14,
        name:'Durgan',
        email:'ggude7@chron.com'
      },
      {
        id: 28,
        todo: 'Go to the gym',
        completed: false,
        userId: 15,
        name:'Gleason',
        email:'nloiterton8@aol.com'
      },
      {
        id: 29,
        todo: 'Make own LEGO creation',
        completed: false,
        userId: 30,
        name:'Arvada',
        email:'umcgourty9@jalbum.net'
      },
      {
        id: 30,
        todo: 'Take cat on a walk',
        completed: false,
        userId: 15,
        name:'Jones',
        email:'acharlota@liveinternet.ru'
      }
];

function getTodoData(id) {
  const idAsInt = parseInt(id);
  if (isNaN(idAsInt)) {
    console.log(`Invalid ID: ${id}`);
    return undefined;
  }
  const todoData = todoArray.find(todo => todo.id === idAsInt);
  if (todoData === undefined) {
    console.log(`Todo does not exist for ID: ${idAsInt}`);
    return undefined;
  }
  return todoData;
}



export { todoArray, getTodoData };