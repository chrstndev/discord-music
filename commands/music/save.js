module.exports = {
    name: 'save',
    aliases: ['sv'],
    utilisation: '{prefix}save',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No music currently playing ${message.author}... try again?`);

        message.author.send(`You saved the track ${queue.current.title} | ${queue.current.author} from the server ${message.guild.name}`).then(() => {
            message.channel.send(`I have sent you the title of the song by private messages`);
        }).catch(error => {
            message.channel.send(`I am not able to send you a private message, ${message.author}`);
        });
    },
};