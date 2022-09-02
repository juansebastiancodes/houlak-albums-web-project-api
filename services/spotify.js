const axios = require('axios');
const { getToken } = require('./auth');

const getItemId = async ({ searchKey, token = null, resourceType }) => {
    if (!token) {
        token = await getToken();
    }
    const url = `${process.env.SPOTIFY_URL}/v1/search?type=${resourceType}&q=${searchKey}`;
    const options = { headers: { 'Authorization': `Bearer ${token}` } };
    const response = await axios.get(url, options);
    const artistId = response.data.artists.items[0].id;

    return artistId;
};

module.exports = {
    getItemId,
};
