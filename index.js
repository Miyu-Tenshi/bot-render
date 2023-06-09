const { Client } = require('discord.js');

require('dotenv').config();


const client = new Client({ intents:[] });

client.on('ready', (client) => {
    console.log(`${client.user.tag} is running...`);
    setInterval(() => {
		const { days, hours, minutes } = time();
        client.user.setPresence({
            activities: [{
                name: `${days}d:${hours}hr:${minutes}m`,
                type: 'WATCHING'
            }],
            status: 'idle'
        });
    }, 60000)

})

client.login(process.env.TOKEN);

function time() {

    let days = Math.floor(client.uptime / 86400000)
    let hours = Math.floor(client.uptime / 3600000) % 24
    let minutes = Math.floor(client.uptime / 60000) % 60
    let seconds = Math.floor(client.uptime / 1000) % 60

    if (days < 9) { days = "0" + days }
    if (hours < 9) { hours = "0" + hours }
    if (minutes < 9) { minutes = "0" + minutes }
    if (seconds < 9) { seconds = "0" + seconds }

    return {
        days,
        hours,
        minutes,
        seconds
    }
}
