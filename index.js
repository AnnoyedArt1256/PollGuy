const express = require("express")
const app = express()

app.get("/", (req,res) => {
  res.send("hello world")
})

app.listen(3000, () => {
  console.log("Your bot is ready!")
})

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.includes("-poll")) {
    split = msg.content.split("");
    split = split.slice(6,split.length);
    polltitle = ""
    for (i = 1; i < split.length - 1; i++){
      polltitle = polltitle + split[i]
    }
    if (split[0] === '"') {
      msg.channel.send("**" + polltitle + "**").then(function (message) {
              message.react("👍")
              message.react("👎")
            }).catch(function() {
             });

    } else {
      let embed = new Discord.MessageEmbed()
      .setTitle("PollGuy Commands")
      .setDescription('-poll "" | creates a poll\n\nExample: -poll "Is PollGuy working?" ' )
      msg.channel.send(embed);
    }
    
  }
});

client.login(process.env.token);
