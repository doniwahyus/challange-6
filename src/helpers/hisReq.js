const {Item} = require('postman-collection');
const headers = [
    {
        key: 'Content-Type',
        value: 'application/json'},
    {
        key: 'cache-control',
        value: 'no-cache'
    },
    {
        key: 'Authorization',
        value: `{{Authorization}}`
    }
];

const createHisPayload = {
    user_id: '1',
    result: 'Winning',
    time: '12-10-2022',
    point_rank: '+15'   
};

const updateHisPayload = {
    id: '1',
    user_id: '3',
    result: 'Lose',
    time: '11-08-2022',
    point_rank: '-15'   
}

const deleteHisPayload = {
    id: '1'   
};

const postmanHisCreate = new Item({
    name: 'create histori',
    request: {
        header: headers,
        url: `http://localhost:3000/user_game_history/create`,
        method: 'POST',
        body: {
            mode: 'raw',
            raw: JSON.stringify(createHisPayload)
        },
        auth: null
    }
});

const postmanHisUpdate = new Item({
    name: 'update histori',
    request: {
        header: headers,
        url: `http://localhost:3000/user_game_history/update`,
        method: 'PUT',
        body: {
            mode: 'raw',
            raw: JSON.stringify(updateHisPayload)
        },
        auth: null
    }
});

const postmanHisDelete = new Item({
    name: 'delete histori',
    request: {
        header: headers,
        url: `http://localhost:3000/user_game_history/delete`,
        method: 'DELETE',
        body: {
            mode: 'raw',
            raw: JSON.stringify(deleteHisPayload)
        },
        auth: null
    }
});

module.exports = {postmanHisCreate,postmanHisDelete,postmanHisUpdate}