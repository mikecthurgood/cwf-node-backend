const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const {graphqlHTTP} = require('express-graphql');

const graphqlSchema = require('./graphql/schema');
const graphqlResolver = require('./graphql/resolvers');
// const auth = require('./middleware/is-auth')

const sequelize = require('./db/cwfDb');
const Wall = require('./models/wall');
const User = require('./models/user');
// const Review = require('./models/oldReviewClass');
const Review = require('./models/review');

const app = express();
var cors = require('cors')


const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'images')
  },
  filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname)
  }
})

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg' ||
    file.mimetype === 'image/gif'
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

app.use(cors())
// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json
app.use(
  multer({ storage: fileStorage, fileFilter: fileFilter }).single('image')
);
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// app.use(auth)

app.put('/post-image', (req, res, next) => {
  if (!req.isAuth) {
    throw new Error('Not authenticated')
  }
  if (!req.file) {
    return res.status(200).json({ message: 'No file provided'})
  }
 const newImageUrl =  req.file.path.replace('\\', '/');
 return res
   .status(201)
   .json({ message: 'File stored.', filePath: newImageUrl });
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true,
    formatError(err) {
      if (!err.originalError) {
        return err
      }
      const data = err.originalError.data
      const message = err.message || "An error occurred"
      const status = err.originalError.code || 500
      return {message, status, data}
    }
  })
)

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

// Post.belongsTo(User, {as: 'author', constraints: true, onDelete: 'CASCADE' })
// User.hasMany(Post)

try {
    sequelize
    // .sync()
    .sync({ force: true })
    .then(result => {
      app.listen(8080, () => console.log('listening on port 8080...'));
    })
    
}
catch(err) {
    console.log(err)
}