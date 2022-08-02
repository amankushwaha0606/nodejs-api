const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports.signup = (req, res, next) => {
    const email = "aman@gmail.com";
    const password = "12345678";
    bcrypt.hash(password, 10)
        .then(hashPassword => {
            res.json({ "email": email, "password": hashPassword });
        }).catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
}

module.exports.login = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const token = jwt.sign(
        {
            email: "aman@gmail.com",
        },
        'somesupersecretsecret',
        { expiresIn: '1h' }
    );
    res.status(200).json({ token: token});
}