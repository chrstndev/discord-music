const maxVol = client.config.opt.maxVol;

module.exports = {
    name: 'volume',
    aliases: ['vol'],
    utilisation: `{prefix}volume [1-${maxVol}]`,
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`There's no song playing, ${message.author}`);

        const vol = parseInt(args[0]);

        if (!vol) return message.channel.send(`The current volume is ${queue.volume} \n*To change the volume enter a valid number between **1** and **${maxVol}**.*`);

        if (queue.volume === vol) return message.channel.send(`The volume you want to change is already the current one, ${message.author}`);

        if (vol < 0 || vol > maxVol) return message.channel.send(`Please enter a valid number (between 1 and ${maxVol}) ${message.author}`);

        const success = queue.setVolume(vol);

        return message.channel.send(success ? `Volume set to **${vol}**/**${maxVol}**% ` : `Something went wrong, ${message.author}`);
    },
};