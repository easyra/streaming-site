const express = require('express');
const { auth } = require('../firebase-admin.js');
const router = express.Router();

router.post('/', async (req, res) => {
  const token = req.headers.authorization;
  auth()
    .verifyIdToken(token)
    .then(async decodedToken => {
      const uid = decodedToken.uid;
      req.body.uid = uid;
      await auth().setCustomClaims(uid, { subTier: '0' });
      const customToken = await auth().createCustomToken(uid, { subTier: '0' });
      res.json({ customToken }).redirect('/forms');
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
