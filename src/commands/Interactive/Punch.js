const { Command } = require('klasa');
const { MessageEmbed, MessageAttachment } = require('discord.js');
const { punch: gifs } = require('../../../lib/util/constants');
module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'punch',
            runIn: ['text'],
            requiredPermission: ['SEND_MESSAGES', 'EMBED_MESSAGES'],
            description: language => language.get('COMMAND_PUNCH_DESCRIPTION'),
            usage: '<user:username>',
            bucket: 1,
            cooldown: 20,
            cooldownLevel: 'author',
            usageDelim: ' ',
        });
        this.customizeResponse('user', 'are u actually ok? a user is required')
    }

    async run(message, [user]) {
        let randomgif = Math.floor((Math.random() * gifs.length));
        let attachment = new MessageAttachment(gifs[randomgif]);
        return message.channel.send(`${message.author} jus smacked the shit out of ${user}`, attachment);
    }
};
