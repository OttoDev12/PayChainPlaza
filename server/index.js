const express = require('express');
const bodyParser = require('body-parser');
// Additional imports can be added as needed.

const app = express();

// Middlewares
app.use(bodyParser.json());

// Sample route to get started.
app.get('/', (req, res) => {
    res.send('PayChain Plaza server is up and running!');
});

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
