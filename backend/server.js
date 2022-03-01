require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


// Mount Routes
app.use('/api/goals', require('./routes/goalRoutes'));

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})