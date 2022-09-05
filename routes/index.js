const router = require('express').Router({ mergeParams: true });
const v1AlbumRouter = require('./v1/albumRoutes');

router.use('/v1', v1AlbumRouter );

module.exports = router;
