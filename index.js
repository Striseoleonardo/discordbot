const Discord = require("discord.js");
const bot = new Discord.Client();

bot.login(process.env.token);

bot.on("message", (message) =>{
    if(message.content == "comando") {
        message.channel.send("COMANDO ESEGUITO");
    }
    if(message.content == "luigi") {
        var id_canale = bot.channels.cache.get("830423754738761749")
        id_canale.send("Hai scritto Luigi, bravo!");
    }
    if(message.content == "!orario") {
        var data = new Date();
        var ora = data.getHours();
        var minuto = data.getMinutes();

        message.channel.send(":alarm_clock: Sono le " + ora + ":" + minuto + " :alarm_clock:");
    }
});
