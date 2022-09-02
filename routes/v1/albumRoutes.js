const router = require('express').Router({ mergeParams: true });
const { getArtistResource } = require('../../controllers/artist');

// Resources could be albums, top-tracks, related-artists or empty if artist profile is required
router.get('/artist/:artistName/:dataType', getArtistResource );

module.exports = router;
