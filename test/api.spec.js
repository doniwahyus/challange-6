const request = require('supertest');
const app = require('../src/index')

// test 1

const test1 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImRvbmlpd3MiLCJlbWFpbCI6ImRvbmkxOEBtYWlsLmNvbSIsImlhdCI6MTY2NjM0MTE2Mn0.t4VyZri_4eY72Rl2tiLJGV925W8gqdq_IIG7WvJW83o";
const test2 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTg4Mzg4NzYsImlkIjoyLCJlbWFpbCI6InRlc3QyQHRlc3QudGVzdCIsImlhdCI6MTY1ODc1MjQ3Nn0.clWAMJlla03IXTkLz6kJhEKf2Yw4JBINgZDi5YQCEcs";

const tokenJWT = test1;

console.log(tokenJWT);

// Auth
describe('POST /auth/login', () => {
    test('post login', async () => {
        const response = await request(app).post('/auth/login').send({ email: 'doni18@mail.com', password: '1234' });
        expect(response.status).toBe(201);
    })
});
describe('fail POST /auth/login', () => {
    test('fail post login', async () => {
        const response = await request(app).post('/auth/login').send({ email: 'test@test.test', password: 'testtest' });
        expect(response.status).toBe(404);
    })
});
// describe('POST /auth/regitser', () => {
//     test('post register', async () => {
//         const response = await request(app).post('/auth/register').send({name: "user", username: 'user@user.user', password: 'useruser'});;
//         expect(response.status).toBe(500);
//     })
// });
describe('GET /auth/whoami', () => {
    test('get whoami', async () => {
        const response = await request(app)
        .get('/auth/whoami')
        .set('Authorization', test1);
        expect(response.status).toBe(200);
    })
});


//BIODATA

//CREATE BIO
describe('POST /user_game_biodata/create', () => {
    test('post create biodata', async () => {
        const response = await request(app).post('/user_game_biodata/create')
        .send({ 
            user_id: '1',
            player_name: 'Paulus',
            current_level_id: '87',
            player_rank: 'Master'});
        expect(response.status).toBe(401);
    })
});

//UPDATE BIO
describe('POST /user_game_biodata/update', () => {
    test('post update biodata', async () => {
        const response = await request(app).post('/user_game_biodata/update')
        .send({ 
            user_id: '1',
            player_name: 'Paulus',
            current_level_id: '87',
            player_rank: 'Master'});
        expect(response.status).toBe(404);
    })
});

//DELETE BIO
describe('DELETE /user_game_biodata/delete', () => {
    test('delete biodata', async () => {
        const response = await request(app).post('/user_game_biodata/delete')
        .send({ 
            id: '1'});
        expect(response.status).toBe(404);
    })
});

//HISTORY

//CREATE HISTORY
describe('POST /user_game_history/create', () => {
    test('post create biodata', async () => {
        const response = await request(app).post('/user_game_history/create')
        .send({ 
            user_id: '1',
            result: 'Winning',
            time: '12-10-2022',
            point_rank: '+15'});
        expect(response.status).toBe(401);
    })
});

//UPDATE HISTORY
describe('POST /user_game_history/update', () => {
    test('post update biodata', async () => {
        const response = await request(app).post('/user_game_history/update')
        .send({ 
            id: '1',
            user_id: '3',
            result: 'Lose',
            time: '11-08-2022',
            point_rank: '-15'});
        expect(response.status).toBe(404);
    })
});

//DELETE HISTORY
describe('DELETE /user_game_history/delete', () => {
    test('delete biodata', async () => {
        const response = await request(app).post('/user_game_history/delete')
        .send({ 
            id: '1'});
        expect(response.status).toBe(404);
    })
});