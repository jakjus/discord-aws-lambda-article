require('dotenv').config()
const axios = require('axios').default;

let url = `https://discord.com/api/v8/applications/${process.env.APP_ID}/guilds/${process.env.GUILD_ID}/commands`

const headers = {
  "Authorization": `Bot ${process.env.BOT_TOKEN}`,
  "Content-Type": "application/json"
}

let commands = []

let command_data = {
  "name": "foo",
  "type": 1,
  "description": "replies with bar ;/",
}

commands.push(command_data)

let command_data_with_options = {
  "name": "blep",
  "type": 1,
  "description": "Send a random adorable animal photo",
  "options": [
      {
          "name": "animal",
          "description": "The type of animal",
          "type": 3,
          "required": true,
          "choices": [
              {
                  "name": "Dog",
                  "value": "animal_dog"
              },
              {
                  "name": "Cat",
                  "value": "animal_cat"
              },
              {
                  "name": "Penguin",
                  "value": "animal_penguin"
              }
          ]
      },
      {
          "name": "only_smol",
          "description": "Whether to show only baby animals",
          "type": 5,
          "required": false
      }
  ]
}

commands.push(command_data_with_options)

commands.forEach(commmand => {
  axios.post(url, JSON.stringify(commmand), {
    headers: headers,
  })
});


