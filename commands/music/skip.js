module.exports = {
    name: 'skip',
    aliases: ['sk'],
    utilisation: '{prefix}skip',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`There's currently no song playing, ${message.author}`);

        const success = queue.skip();

        return message.channel.send(success ? `I skipped the current song **${queue.current.title}** ` : `Something went wrong, ${message.author}`);
    },
};