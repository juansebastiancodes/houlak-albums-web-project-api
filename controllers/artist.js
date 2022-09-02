const { getArtistData } = require('../services/artist');
const { getItemId } = require('../services/spotify');
const availableArtistResources = ['albums', 'top-tracks', 'related-artists', ''];

const getArtistResource = async (req, res, next) => {
    try {
        const { params: { artistName, dataType } } = req;
        if (!artistName || availableArtistResources.indexOf(dataType) === -1) {
            return res.send({
                status: 400,
                message: 'Bad Request',
            });
        }
        const artistId = await getItemId({ searchKey: artistName, resourceType: 'artist' });
        const artistData = await getArtistData({ artistId, dataType });

        return res.send(artistData);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getArtistResource,
};
