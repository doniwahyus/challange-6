const {Item} = require('postman-collection');
const headers = [
    {
        key: 'Content-Type',
        value: 'application/json'},
    {
        key: 'cache-control',
        value: 'no-cache'
    }
    
];
const registerPayload = { 
    name: 'doniiws',
    email: 'doni18@mail.com', 
    password: '1234'};

const loginPayload = {
    email: 'doni18@mail.com',
    password: '1234'
};


const postmanRegister = new Item({
    name: 'register',
    request: {
        header: headers,
        url: `http://localhost:3000/auth/register`,
        method: 'POST',
        body: {
            mode: 'raw',
            raw: JSON.stringify(registerPayload)
        },
        auth: null
    }
});

const token = `pm.environment.set('Authorization', pm.response.json().data.token);`
const postmanLogin = new Item({
    name: 'login',
    request: {
        header: headers,
        url:  `http://localhost:3000/auth/login`,
        method: 'POST',
        
        body: {
            mode: 'raw',
            raw: JSON.stringify(loginPayload)
        },
        auth: {
            type: 'bearer',
            bearer: [
                {
                    key: 'token',
                    value: '{{Authorization}}',
                }
            ]
        }},
    event: [
        {
            listen: 'test',
            script: {
                type: 'text/javascript',
                exec: token
            }
        }
    ]
    
});
const delToken = `pm.environment.set('Authorization', '');`
const postmanLogout = new Item({
    name: 'logout',
    request: {
        header: headers,
        url:  `http://localhost:3000/auth/logout`,
        method: 'POST',
        body: {
            
        },
        auth: {
            type: 'bearer',
            bearer: [
                {
                    key: 'token',
                    value: '{{Authorization}}',
                }
            ]
        }},
    event: [
        {
            listen: 'test',
            script: {
                type: 'text/javascript',
                exec: delToken
            }
        }
    ]
    
});

module.exports = {postmanRegister, postmanLogin, postmanLogout}