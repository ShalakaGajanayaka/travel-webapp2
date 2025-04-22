require('dotenv').config(); // Load environment variables from .env
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const apiRoutes = require('./routes');
const adminRouter = require('./routes/adminRoutes');

const app = express();

// Environment Variables
const PORT = parseInt(process.env.PORT, 10) || 3000;
//const FRONTEND_URL = [
  //  process.env.FRONTEND_URL || "http://localhost:5173",
   // process.env.FRONTEND_URL_ALT || "http://localhost:5174",
//];

const allowedOrigins = [
  process.env.FRONTEND_URL || "http://localhost:5173",
  process.env.FRONTEND_URL_ALT || "http://localhost:5174"
];


console.log("sample text : " + process.env.FRONTEND_URL)

console.log(
"done"
);

console.log(
process.env.FRONTEND_URL
);

console.log(
process.env.FRONTEND_URL_ALT
);

// Connect to MongoDB
connectDB();

// Middleware
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});


app.use(cors({
  origin: function (origin, callback) {
    console.log(origin);
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

//app.use(cors({
//    origin: "*",
//    credentials: false,
//}));

//app.use(cors({
//  origin: (origin, callback) => {
  //  callback(null, origin); // Reflect the origin back
 // },
 // credentials: true
//}));

app.use(bodyParser.json());
app.use(cookieParser());
app.set('trust proxy', true);

// Routes
app.use('/api', apiRoutes);

// Add a route for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the Travel Web App API');
});

app.listen(PORT, () => console.log(`Server ready on port ${PORT}.`));