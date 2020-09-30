const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;

client.on('ready', () => {
  console.log('켰다.');
  client.user.setActivity("'게임봇 도움말'이라고 ", { type: 'PLAYING' })
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

  if (!message.guild) return;
 
  if (message.content === "게임아 How Beautiful") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.reply("재생한다!");
          connection.playFile("How Beautiful.mp3");
        })
        .catch(console.log);
    } else {
      message.reply("널 따라갈건데 너가 보이스채널에 없어.");
    }
  }
  
  if(message.content == 'embed') {
    let img = 'https://cdn.discordapp.com/icons/419671192857739264/6dccc22df4cb0051b50548627f36c09b.webp?size=256';
    let embed = new Discord.RichEmbed()
      .setTitle('타이틀')
      .setURL('http://www.naver.com')
      .setAuthor('나긋해', img, 'http://www.naver.com')
      .setThumbnail(img)
      .addBlankField()
      .addField('Inline field title', 'Some value here')
      .addField('Inline field title', 'Some value here', true)
      .addField('Inline field title', 'Some value here', true)
      .addField('Inline field title', 'Some value here', true)
      .addField('Inline field title', 'Some value here1\nSome value here2\nSome value here3\n')
      .addBlankField()
      .setTimestamp()
      .setFooter('나긋해가 만듬', img)

    message.channel.send(embed)
  } else if(message.content == 'embed2') {
    let helpImg = 'https://images-ext-1.discordapp.net/external/RyofVqSAVAi0H9-1yK6M8NGy2grU5TWZkLadG-rwqk0/https/i.imgur.com/EZRAPxR.png';
    let commandList = [
      {name: 'ping', desc: '현재 핑 상태'},
      {name: 'embed', desc: 'embed 예제1'},
      {name: 'embed2', desc: 'embed 예제2 (help)'},
      {name: '!전체공지', desc: 'dm으로 전체 공지 보내기'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('Help of 콜라곰 BOT', helpImg)
      .setColor('#186de6')
      .setFooter(`콜라곰 BOT ❤️`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }
});

client.login(token);
