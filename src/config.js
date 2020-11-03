// ------------------------------------------------------------------
// APP CONFIGURATION
// ------------------------------------------------------------------

module.exports = {
  logging: true,

  intentMap: {
    'AMAZON.StopIntent': 'END',
    "Unhandled": "CatchAllIntent"
  },

  db: {
    FileDb: {
      pathToFile: '../db/db.json',
    },
  },
};
