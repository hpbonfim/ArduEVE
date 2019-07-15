const admin = require('firebase-admin');
const serviceAccount = require('./key-firestore.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports = { url: 'mongodb://mongo:27017/mongo-database', db } 