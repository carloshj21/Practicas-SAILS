/**
 * colors hook
 */
const colors = require('colors');

module.exports = function (sails) {
  return {

    configure: () => {
      if(!sails.config.color){
        sails.config.color = "cyan";
    }
  },
    // Run when sails loads-- be sure and call `next()`.
    initialize: function (next) {
      global['color'] = (data) => {
        console.log(data[sails.config.color]);
      };
      return next();
    }

  };
};
