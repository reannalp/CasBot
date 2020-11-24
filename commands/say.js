module.exports = {
  name: 'say',
  description: 'Say!',
  userPermissions: ['MANAGE_MESSAGES'],
  execute(client, message, args) {
    message.channel.send(args.join(' '));
    message.delete();
  },
};
