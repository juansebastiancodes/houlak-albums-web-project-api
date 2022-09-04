const router = require('express').Router({ mergeParams: true });
const { getArtistResource } = require('../../controllers/artist');
const { saveInfo } = require('../../middlewares/requestInfo');

// Resources could be albums, top-tracks, related-artists or empty if artist profile is required
router.get('/artist/:artistName/:dataType', saveInfo, getArtistResource );

module.exports = router;
