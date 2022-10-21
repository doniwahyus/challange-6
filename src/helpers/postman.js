const {Collection, Item} = require('postman-collection');
// const {Header} = require('postman-collection');
const fs = require('fs');
const { postmanRegister, postmanLogin, postmanLogout } = require('./authReq');
const {postmanCreate, postmanUpdate, postmanDelete} = require('./bioReq');
const {postmanHisCreate, postmanHisUpdate, postmanHisDelete} = require('./hisReq');

const postmanCollection = new Collection({
    info: {
        name: 'Dokumentasi Challange 5'
    },
    item: [postmanRegister, postmanLogin, postmanLogout, postmanCreate, postmanUpdate, postmanDelete,postmanHisCreate, postmanHisUpdate, postmanHisDelete],
});

const collectionJSON = postmanCollection.toJSON();

fs.writeFile('./collection.json', JSON.stringify(collectionJSON, null, 2), (err) => {
    if (err) {console.log(err); }
    console.log('File saved!')

})