var users = [
  {
    name: 'Preston McNeil',
    password: 'password1',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  }
];

module.exports = {
  login: function(req, res){
    let name = req.body.name;
    let password = req.body.password
    for(let i = 0; i < users.length; i++){
      if (users[i].name == name && users[i].password == password){
        req.session.currentUser = users[i];
        return res.status(200).json({userFound: true});
      }
    }
    res.status(401).json({userFound: false});

  }
}
