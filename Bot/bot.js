const { Telegraf } = require("telegraf");
const TOKEN = "7150063163:AAFVATCd-N4OTHis3DIhoY-Evq7THBlwlLY";
const bot = new Telegraf(TOKEN);

const web_link = "https://sensational-bubblegum-06b18f.netlify.app/";

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
