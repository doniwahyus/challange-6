const {Item} = require('postman-collection');
const headers = [
    {
        key: 'Content-Type',
        value: 'application/json'
    },
    {
        key: 'cache-control',
        value: 'no-cache'
    },
    {
        key: 'Authorization',
        value: `{{Authorization}}`
    }

];

const createPayload = {
    user_id: '1',
    player_name: 'Evos Keren',
    current_level_id: '90',
    player_rank: 'Epic'   
};

const updatePayload = {
    id: '2',
    user_id: '1',
    player_name: 'Muh Faizi',
    current_level_id: '90',
    player_rank: 'GM'   
}

const deletePayload = {
    id: '1'   
};

const postmanCreate = new Item({
    name: 'create biodata',
    request: {
        header: headers,
        url: `http://localhost:3000/user_game_biodata/create`,
        method: 'POST',
        body: {
            mode: 'raw',
            raw: JSON.stringify(createPayload)
        },
        auth: null
    }
});

const postmanUpdate = new Item({
    name: 'update biodata',
    request: {
        header: headers,
        url: `http://localhost:3000/user_game_biodata/update`,
        method: 'PUT',
        body: {
            mode: 'raw',
            raw: JSON.stringify(updatePayload)
        },
        auth: null
    }
});

const postmanDelete = new Item({
    name: 'delete biodata',
    request: {
        header: headers,
        url: `http://localhost:3000/user_game_biodata/delete`,
        method: 'DELETE',
        body: {
            mode: 'raw',
            raw: JSON.stringify(deletePayload)
        },
        auth: null
    }
});

module.exports = {postmanCreate,postmanDelete,postmanUpdate}