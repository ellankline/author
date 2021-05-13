const mongoose = require('mongoose');

//CHANGE DATABASE NAME
mongoose.connect("mongodb://localhost/itemmanager", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log(`Established a connection to the database`))
    .catch(err => console.log(`something went wrong with database connection`, err));