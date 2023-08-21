# My own CMS using MongoDB, Express.js, React.js and Node.js
To make the application work correctly, install 'node_modules' via `npm install` first.<br>
Then, start the `server.js` express server `node server.js` and run the react app `npm start`.<br>
The application consists of a main page, an admin login page and a content modification page <br>
On the main page, data is fetched from MongoDB.
On the content modification page, the data is fetched to the values ​​of the textareas, here you can modify your data, pressing the "save changes" button will send a query to the database and update the information in it.
if you want to go to the admin login page, you need to type <i><b>`/admin`</b></i> after the site address (localhost:3000/admin).<br><br>
Default login: <i><b>admin</b></i><br>
Default password: <i><b>admin</b></i><br>
The password and login are encrypted. You can change them by:<br>

```diff
import bcrypt from 'bcryptjs';

const word = 'admin'; // Password, you want to hash
const saltRounds = 10; // The number of salt rounds, the higher the value, the harder it is to crack the hash

const hashedWord = bcrypt.hashSync(word, saltRounds);
console.log('Hashed word:', hashedWord);
```


<sub>MADE WITH HEARTH 🖤</sub>
