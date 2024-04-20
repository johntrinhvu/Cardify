const User = require('./user.model');

mongoose.connect('mongodb+srv://johntrinhvu:0shinoShinobu@cluster0.cgf27wp.mongodb.net/cardify?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Route to create a new user
app.post('/users', (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    PhoneNum: req.body.PhoneNum
  });

  newUser.save()
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Route to get all users
app.get('/users', (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});
