const { User_game_biodata } = require('../models');

module.exports = {
    create: async (req, res, next) => {
        try{
            const { user_id, player_name, current_level_id, player_rank } = req.body;

            //Read
            const exisrUser = await User_game_biodata.findOne({ where: {player_name: player_name }});
            if (exisrUser){
                return res.status(400).json({
                    status: false,
                    message: 'already create'
                });
            }

            //Create
            const user = await User_game_biodata.create({
                user_id,
                player_name,
                current_level_id,
                player_rank
        
            });


            return res.status(201).json({
                status: false,
                message: 'Succes',
                data: {
                    player_name: user.player_name,
                    player_rank: user.player_rank
                }
            });
        }catch(err){
            next(err);
        }
    },

    //Update
    update: async (req, res, next) => {
        try{
            const { id, user_id, player_name, current_level_id, player_rank } = req.body;

            const exisrUser = await User_game_biodata.findOne({ where: {player_name: player_name }});
            if (exisrUser){
                return res.status(400).json({
                    status: false,
                    message: 'already create'
                });
            }
            const user = await User_game_biodata.update({
                user_id,
                player_name,
                current_level_id,
                player_rank
        
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
                    player_name: user.player_name,
                    player_rank: user.player_rank,
                    current_level_id: user.current_level_id
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

            const user = await User_game_biodata.destroy({
                where: {
                    id
                }
            });


            return res.status(201).json({
                status: false,
                message: 'Succes',
                data: {
                    player_name: user.player_name,
                    player_rank: user.player_rank,
                    current_level_id: user.current_level_id
                }
            });
        }catch(err){
            next(err);
        }
    }

}