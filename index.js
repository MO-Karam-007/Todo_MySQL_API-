const app = require('./app');
// const { q } = require('./config/db')
require('dotenv').config()



// createConnection()

app.listen(3030, () => {
    console.log('Server is running on port 3030');
})