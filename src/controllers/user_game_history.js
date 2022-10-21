const { User_game_history } = require('../models');

module.exports = {
    create: async (req, res, next) => {
        try{
            const { user_id, result, time, point_rank } = req.body;

            //Read
            const exisrUser = await User_game_history.findOne({ where: {result: result }});
            if (exisrUser){
                return res.status(400).json({
                    status: false,
                    message: 'history already added'
                });
            }

            //Create
            const user = await User_game_history.create({
                user_id,
                result,
                time,
                point_rank
        
            });


            return res.status(201).json({
                status: false,
                message: 'Succes',
                data: {
                    result: user.result,
                    point_rank: user.point_rank
                }
            });
        }catch(err){
            next(err);
        }
    },

    //Update
    update: async (req, res, next) => {
        try{
            const { id, user_id, result, time, point_rank } = req.body;

            const exisrUser = await User_game_history.findOne({ where: {result: result }});
            if (exisrUser){
                return res.status(400).json({
                    status: false,
                    message: 'already create'
                });
            }
            const user = await User_game_history.update({
                user_id,
                result,
                time,
                point_rank
        
            },
            {
                where: {
                    id
                }
            });


            return res.status(201).json({
                status: false,
                message: 'Succes',
                data: {
                    result: user.result,
                    point_rank: user.point_rank,
                    time: user.time
                }
            });
        }catch(err){
            next(err);
        }
    },

    //Delete
    delete: async (req, res, next) => {
        try{
            const { id } = req.body;

            const user = await User_game_history.destroy({
                where: {
                    id
                }
            });


            return res.status(201).json({
                status: false,
                message: 'Succes',
                data: {
                    result: user.result,
                    point_rank: user.point_rank,
                    time: user.time
                }
            });
        }catch(err){
            next(err);
        }
    }

}