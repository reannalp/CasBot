module.exports = {
  name: 'userinfo',
  description: 'Information about user',
  execute(message) {
    message.channel.send(`Username: ${message.author.tag}\nID: ${message.author.id}`);
    // Make this an embed with icon, roles, join date, number of messages on guild.
  },
};
