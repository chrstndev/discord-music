module.exports = {
    name: 'stop',
    aliases: ['dc'],
    utilisation: '{prefix}stop',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`I'm currently not playing music, ${message.author}`);

        queue.destroy();

        message.channel.send(`I stopped the Music, see ya!`);
    },
};