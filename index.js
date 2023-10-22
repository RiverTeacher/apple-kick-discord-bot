const { Client, Intents, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_VOICE_STATES],
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
  setInterval(checkAndExitVoiceChannel, 60000);
});

async function checkAndExitVoiceChannel() {
  const userId = '582528504478826506';
  // 1%の確率で退出
  if (Math.random() < 0.01) {
    const user = await client.users.fetch(userId);
    if (user) {
      const member = client.guilds.cache.get('サーバーのID').members.cache.get(userId);
      if (member && member.voice.channel) {
        // ボイスチャンネルから退出する処理
        member.voice.kick();
      }
    }
  }
}

client.login('YOUR_BOT_TOKEN');
