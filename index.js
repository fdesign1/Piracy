const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const morgan = require('morgan');
const fs = require('fs');

app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true}));

app.post('/submit_contact', (req, res) => {
  const formData = req.body;
   
  fs.writeFile('formData.json', JSON.stringify(formData), (err) => {
     if (err) {
         console.error(err);
         res.status(500).send('Failed to save data to file');
     } else {
         res.send('Form data received and saved to file');
     }
  });
 });



app.listen(3000, () => {
 console.log(`Server is running on port ${port}`);
});

