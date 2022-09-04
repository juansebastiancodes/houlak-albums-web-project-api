const RequestInfo = require('../models/requestInfo');
const saveInfo = async (req, res, next) => {
    try {
        const ip = (req.headers['x-forwarded-for'] || '').split(',').pop().trim() || req.socket.remoteAddress;
        const date = new Date();
        const artist = req.path.split('/')[2];

        RequestInfo.create({
            id: null,
            date,
            artist_name: artist,
            ip,
        }, { omitNull: true });
    } catch {
        /* eslint-disable-next-line no-console */
        console.log('Error registering req info into the database');
    } finally {
        next();
    }
};

module.exports = { saveInfo };
