require('dotenv').config();
const express = require('express');
const app = express();
const { errorHandler } = require('./middleware/errorMiddleware');
const port = process.env.PORT || 5000;


// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Mount Routes
app.use('/api/goals', require('./routes/goalRoutes'));



// Custom error handler
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})