const express = require('express'); // Modulo express   
const app = express(); //App 
const port = process.env.PORT || 3000; 
const morgan = require('morgan');
const fs = require('fs'); 

//Middlewares

app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true}));


//Routes 

app.post('/submit_contact', (req, res) => {
  const formData = req.body;
  fs.writeFile('formData.json', JSON.stringify(formData), (err) => {
    console.log(`new request made ${req.method}`);
     if (err) {
         console.error(err);
         res.status(500).send('Failed to save data to file');
     } else {
         res.send('Form data received and saved to file');
     }
  });
 });

//Start Server

app.listen(3000, () => {
 console.log(`Server is running on port ${port}`);
});

