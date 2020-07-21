const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;

client.on('ready', () => {
  console.log('켰다.');
  client.user.setActivity('나 사실 만능이다?', { type: 'WATCHING' })
});

client.on('message', message => {
  if (message.content === '게임아') {
    message.channel.send('왜?');
  }

  if (message.content === '게임아 나도 싫은데?') {
    message.channel.send('응 어쩔');
  }

  if (message.content === '게임아 명령어') {
    message.channel.send('응 찾아서 써');
  }

  if (message.content === '게임아 놀자') {
    message.channel.send('싫은데?');
  }

  if (message.content === '게임아 골파 섭주소') {
    message.channel.send('goldenf17.cf | gf9.kro.kr 이다');
  }

  if (message.content === '게임아 준서 섭주소') {
    message.channel.send('joonseo541.kro.kr 이다');
  }

  if (message.content === '게임아 섭주소') {
    message.channel.send('사용법 "게임아 [준서|골파] 섭주소" 이다');
  }

  if (message.content.startsWith("?")) {
    message.channel.send('갈고리 피세여');
  }

  if (message.content === '게임아 바보') {
    message.channel.send('~~닥쳐~~');
  }

  if (message.content === '게임아 멍청이') {
    message.channel.send('~~닥쳐~~');
  }

 if (message.content === '게임아 너 게임 잘하냐?') {
    message.channel.send('~~응 잘한다~~'); 
  }

  if (message.content === '게임아 너 게임 잘함?') {
    message.channel.send('~~응 잘한다~~'); 
  }

  if (message.content === '게임아 게임 못해') {
    message.channel.send('~~응 반사~~'); 
  }

  if (message.content === '게임아 게임 잘해') {
    message.channel.send('~~그래 나는 게임고수~~'); 
  }
});

client.login(token);