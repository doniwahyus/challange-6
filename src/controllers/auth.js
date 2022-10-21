const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const {
    JWT_SIGNATURE_KEY
} = process.env
 
module.exports = {
    register: async (req, res, next) => {
        try{
            const { name, email, password } = req.body;

            const exisrUser = await User.findOne({ where: {email: email }});
            if (exisrUser){
                return res.status(400).json({
                    status: false,
                    message: 'email already used!'
                });
            }

            const encryptPassword = await bcrypt.hash(password, 10);
            const user = await User.create({
                name,
                email,
                password: encryptPassword
            });


            return res.status(201).json({
                status: false,
                message: 'Succes',
                data: {
                    email: user.email,
                    name: user.email
                }
            });
        }catch(err){
            next(err);
        }
    },

    login: async (req, res, next) =>{
        try{
            const { email, password} = req.body;

            const user = await User.findOne({ where: {email: email }});
            if (!user){
                return res.status(404).json({
                    status: false,
                    message: 'email not found!'
                });
            }

            const isPassCorrect = await bcrypt.compare(password, user.password)
            if(!isPassCorrect) {
                return res.status(400).json({
                    status: false,
                    message: 'email or password is not correct'
                });
            }


            payload = {
                id: user.id,
                name: user.name,
                email: user.email
            }
            const token = jwt.sign(payload, JWT_SIGNATURE_KEY)

            return res.status(201).json({
                status: false,
                message: 'Succes',
                data: {
                    token: token
                }
            });
        }catch(err){
            next(err);
        }
    },
    whomami: (req, res, next) => {
        const user = req.user

        try {
            return res.status(200).json({
                status: false,
                message: 'succes',
                data: user
            })
        } catch (err) {
            next(err);
        }
    },
    logout: async (req, res) => {
        try {
            res.status(201).json({
            status: false,
            message: 'Succesfully logout'
        });
            res.json()
        } catch (error) {
            console.log(error);
            res.json({ msg: error }).status(422);
        }
    }

};