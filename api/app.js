const express = require("express")
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const PORT = 5000;


dotenv.config();
app.use(express.json());


mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

mongoose.connect(process.env.MONGO_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true
}).then(() => {
	console.log('Database connected')
}).catch(err => {
	console.log(err)
});


app.listen(PORT, () => console.log(`Backend server running on port ${PORT}`));