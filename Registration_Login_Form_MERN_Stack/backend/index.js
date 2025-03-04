// const cors = require('cors');
// const express = require('express');
// const mongoose = require('mongoose');
// const FormDataModel = require('./models/FormData');

// const app = express();
// app.use(express.json());
// app.use(cors());

// mongoose.connect('mongodb://127.0.0.1:27017/practice_mern', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// // Registration Route
// app.post('/register', (req, res) => {
//     const { email, password } = req.body;
//     FormDataModel.findOne({ email: email })
//         .then(user => {
//             if (user) {
//                 res.json("Already registered");
//             } else {
//                 FormDataModel.create(req.body)
//                     .then(log_reg_form => res.json(log_reg_form))
//                     .catch(err => res.json(err));
//             }
//         });
// });

// // Login Route
// app.post('/login', (req, res) => {
//     const { email, password } = req.body;
//     FormDataModel.findOne({ email: email })
//         .then(user => {
//             if (user) {
//                 if (user.password === password) {
//                     res.json("Success");
//                 } else {
//                     res.json("Wrong password");
//                 }
//             } else {
//                 res.json("No records found!");
//             }
//         });
// });

// // Fetch User Names Route
// app.get('/users', async (req, res) => {
//     try {
//         const users = await FormDataModel.find({}, 'name'); // Fetch only email field
//         res.json(users);
//     } catch (err) {
//         res.status(500).json({ error: "Failed to fetch users" });
//     }
// });

// app.listen(3001, () => {
//     console.log("Server listening on http://127.0.0.1:3001");
// });
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const FormDataModel = require('./models/FormData');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/practice_mern', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Registration Route
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;

    // Check if the user already exists
    FormDataModel.findOne({ email: email })
        .then(user => {
            if (user) {
                return res.status(400).json({ message: "Already registered" });
            }

            // If the user doesn't exist, create a new user
            FormDataModel.create(req.body)
                .then(log_reg_form => res.status(201).json(log_reg_form))  // Return created user and status 201
                .catch(err => res.status(500).json({ message: "Error registering user", error: err }));
        })
        .catch(err => res.status(500).json({ message: "Error checking user", error: err }));
});

// Login Route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await FormDataModel.findOne({ email });

        if (user && user.password === password) {
            // Redirect based on the role
            if (user.role === 1) {
                return res.json({ message: "Success", redirectTo: "/admin.html" });  // Admin user
            } else {
                return res.json({ message: "Success", redirectTo: "/chat.html" });   // Regular user
            }
        } else {
            return res.status(401).json({ message: "Incorrect password!" });
        }
    } catch (err) {
        return res.status(500).json({ message: "Server error", error: err });
    }
});

// Fetch User Names Route
app.get('/users', async (req, res) => {
    try {
        const users = await FormDataModel.find({}, 'name'); // Fetch only name field
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch users", error: err });
    }
});

app.listen(3001, () => {
    console.log("Server listening on http://127.0.0.1:3001");
});
