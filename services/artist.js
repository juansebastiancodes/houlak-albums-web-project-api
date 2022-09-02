const { getToken } = require('./auth');
const axios = require('axios');

const getArtistData = async ({ artistId, dataType }) => {
    const token = await getToken();
    const api_url = `${process.env.SPOTIFY_URL}/v1/artists/${artistId}/${dataType}`;
    const options = { headers: { Authorization: `Bearer ${token}` } };
    const artistData = (await axios.get(api_url, options))?.data;

    return artistData;
};


module.exports = {
    getArtistData,
};
