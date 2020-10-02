const message = require('./message');

module.exports = (client) => {
  client.channels.cache.get('387340283760607233').messages.fetch('735958329884672042');
  client.user.setActivity('Saving People'); 
  console.log('Ready');
};
