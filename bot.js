const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', () => {
  console.log('╔[════════════════════════════════════]╗');
  console.log('')
  console.log('            ╔[════════════]╗')
  console.log('              Bot Is Online')
  console.log('            ╚[════════════]╝')
  console.log('')
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('')
  console.log('╚[════════════════════════════════════]╝')
});

client.on("message", message => {
var prefix = "..";
    if (message.content === (prefix + "help")) {
     const embed = new Discord.RichEmbed() 
         .setColor("#580e6b")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`

༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻
           
        BOT By: | by Mr.SOKA

༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻

          General Commands
   
 
   『..bc    ❖ برودكاست للسرفر』
   『..move all   ❖ سحب جميع الاعضاء الى رومك』
   『..invites   ❖ كم مدخل في السرفر』
   『..move    ❖ سحب عضو』
   『..اسئلني    ❖ 』
   『..cl   ❖  مسح الشات بعدد』
   『..clear   ❖ مسح 100 رسالة』
   『..status ❖ اعدادت البوت』
   『..animal   ❖ صور حيوانات』
   『..bot owner ❖ انفو البوت』
   『..addmerole ❖ رتبة العاب 』
   『..id ❖  』
   
           Administrative Commands
   
 
 

   『:beginner:  البوت تحت التطوير :beginner: 』

༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻༺▇༻


  BOT By: | Mr.SOKA





`)
   message.author.sendEmbed(embed)
   
   }
   });  
client.on('message', message => {
var prefix = "..";
     if (message.content === (prefix + "help")) {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#8650a7")
  .addField("Done" , " تــــم ارســالك في الخــاص")
  message.channel.sendEmbed(embed);
    }
});

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : i1Suhaib`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : i1Suhaib ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`..help | Mr.SOKA`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});


client.on('message',async message => {       
        var prefix = ".."
  if(message.content.startsWith(prefix + "bc")) {
    let filter = m => m.author.id === message.author.id;
    let thisMessage;
    let thisFalse;
    message.channel.send(':regional_indicator_b::regional_indicator_c:| **ارسل الرسالة الان**').then(msg => {

    let awaitM = message.channel.awaitMessages(filter, {
      max: 1,
      time: 20000,
      errors: ['time']
    })
    .then(collected => {
      collected.first().delete();
      thisMessage = collected.first().content;
      msg.edit(':regional_indicator_b::regional_indicator_c:| **هل انت متأكد؟**');
      let awaitY = message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{
        max: 1,
        time: 20000,
        errors: ['time']
      })
      .then(collected => {
        if(collected.first().content === 'لا') {
          msg.delete();
          message.delete();
          thisFalse = false;
        }
        if(collected.first().content === 'نعم') {
          if(thisFalse === false) return;
        message.guild.members.forEach(member => {
          msg.edit(':regional_indicator_b::regional_indicator_c:| **جاري الارسال**');
          collected.first().delete();
          member.send(`${thisMessage}\n\n${member} ,\nتم الارسال من : ${message.guild.name}\n تم الارسال بواسطة : ${message.author.tag}`);
        });
        }
      });
    });
    });
  }
});

 client.on('message', async message => {
            if(message.content.includes('discord.gg')){ 
                if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("Muted Ads")
            .addField(`**  You Have Been Muted **` , `**Reason : Sharing Another Discord Link**`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
     message.author.send('` انت معاقب ميوت شاتي بسبب نشر سرفرات ان كان عن طريق الخطا **ف** تكلم مع الادارة `');
   
       
    }
})
  
client.on('message', message => {
        var prefix = ".."
    if(message.content.startsWith(prefix + 'move all')) {
     if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**لايوجد لديك صلاحية سحب الأعضاء**');
       if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**لايوجد لدي صلاحية السحب**");
    if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)
     var author = message.member.voiceChannelID;
     var m = message.guild.members.filter(m=>m.voiceChannel)
     message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
     m.setVoiceChannel(author)
     })
     message.channel.send(`**تم سحب جميع الأعضاء الي الروم الصوتي حقك.**`)


     }
       });

 client.on('message', message => {
        var prefix = ".."
   if(message.content.startsWith(prefix + "invites")) {
    message.guild.fetchInvites().then(invs => {
      let user = message.mentions.users.first() || message.author
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
               let mmmmEmbed = new Discord.RichEmbed()
                         .setAuthor(client.user.username)
                         .setThumbnail(message.author.avatarURL)
 .addField(` لقد قمت بدعوة :`, ` ${inviteCount} `)
           .setFooter(`- Requested By: ${message.author.tag}`);
           message.channel.send(mmmmEmbed)
});
  }
});

  client.on('message', message => {
        var prefix = ".."
    if (message.author.bot) return;
     if (message.content === prefix + "bot owner") {


 message.author.sendMessage(`
 
 __~~Jn BOT~~__
 ╱╭╮╭╮╱╱╱╱╭╮╭━╮╱╱╱╱╱╱╭━━╮╱╱╱
♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ 
 __created By__: Mr.SOKA

Server Support : https://discord.gg/8rFUG7

bot link : البوت تحت التطوير
`);

message.channel.send('**تم الارسال في الخاص**');

    }
});

client.on('message', function(msg) {
    const prefix = '..'
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField('🌐** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField('🏅** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField('🔴**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField('🔵**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField('📝**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField('🎤**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField('👑**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField('🆔**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField('📅**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });

client.on('ebnklb',function(ebnklb) {
    
    if(ebnklb.content.startsWith("<@476529486264008723>")) {
        ebnklb.channel.send('Hey Im **Jn BOT!**  A Nice Bot Developed By:`Mr.SOKA`')
        ebnklb.channel.send('My Prefix `476529486264008723`')

    }
});  

client.on('message', message => {
    const prefix = '..'
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'clear')) {
if(!message.channel.guild) return message.channel.send('**This Command is Just For Servers**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**You Do not have permission** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let request = `Requested By ${message.author.username}`;
message.channel.send(`**Are You sure you want to clear the chat?**`).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`Chat will delete`).then(m => m.delete(5000));
var msg;
        msg = parseInt();

      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "`` Chat Deleted ``",
        color: 0x06DF00,
        footer: {

        }
      }}).then(msg => {msg.delete(3000)});

})
reaction2.on("collect", r => {
message.channel.send(`**Chat deletion cancelled**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});

client.on('message', message => {
    const prefix = '..'
    let args = message.content.split(" ").slice(1);
    if (message.author.bot) return;
    if (!message.channel.guild) return;
    if (message.content.startsWith(prefix + 'cl')) {

        if (isNaN(args[0])) return message.channel.send('**Please supply a valid amount of messages to purge**');
        if (args[0] > 100) return message.channel.send('**Please supply a number less than 100**');

        message.channel.bulkDelete(args[0])
            .then(messages => message.channel.send(`**Successfully deleted \`${messages.size}/${args[0]}\` messages**`).then(msg => msg.delete({
                timeout: 5000
            })))
    }
});

client.on('message', message => {
    if (message.author.bot) return;
    if(message.content == '..rmember') {
    const embed = new Discord.RichEmbed()
    .addField(`حالة الأعضاء🔋`,'-',   true)
.addField(`💚 اونلاين:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}`,'-',   true)
.addField(`❤ مشغول:     ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`,'-',   true)
.addField(`💛 خامل:      ${message.guild.members.filter(m=>m.presence.status == 'idle').size}`,'-',   true)   
.addField(`🖤 اوفلاين:   ${message.guild.members.filter(m=>m.presence.status == 'offline').size}`,'-',  true) 
.addField(`💙   الكل:  ${message.guild.memberCount}`,'-',   true)         
         message.channel.send({embed});

    }
  });

client.on('message', message => {
    const prefix = '..'
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "move [USER]``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك:white_check_mark: `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("#000000")
.setDescription(`<@${message.author.id}> moved you to his channel!\nServer => ${message.guild.name}`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
}
} else {
 message.channel.send("``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``")
}
} else {
message.react("❌")
 }}});

client.on('guildMemberRemove', member => {
let channel = member.guild.channels.find('name', 'welcome');
let memberavatar = member.user.avatarURL
  if (!channel) return; 
let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(memberavatar)
    .addField('🎽 | الاسم :  ',`${member}`)
    .addField('📢 | لقد غادر:' , `لقد خرج منا عضو هو , ${member}:cry: `)
    .addField('🆔 | الايدي :', "**[" + `${member.id}` + "]**" )
            .addField('➡| تبقا',`${member.guild.memberCount}`)
           
              .addField("الاسم:",`<@` + `${member.id}` + `>`, true)
                
                                 .addField('شكرا لدخولك سيرفر', `${member.guild.name}`,true)
                                   
 .setFooter("Top Bot")
    .setTimestamp()

  channel.sendEmbed(embed);
});

client.on('message', message => {
  if(message.content === '..عقاب') {
    if(!message.channel.guild) return message.reply('**هاذا الامر فقط للسيرفرات**');
    var edits = ['تضرب نفسك كف' , 'لا تتحرك ابد' , 'خلاص مسامحك' , 'ارمي حالك ببير' , 'روح دق على كل بيوت العماره']
    var embed = new Discord.RichEmbed()
 .setDescription(`${edits[Math.floor(Math.random() * edits.length)]}`)
 .setThumbnail(message.author.avatarURL)
 .setFooter('By ‡ ♪Mr.SOKA ‡ ')
 .setColor('RANDOM')
message.channel.send(embed);
}
});

client.on('message', msg => { 
if (msg.content.startsWith(`..report`)) {
// تعريف الارجس
   let args = msg.content.split(" ").slice(1);
// لو ما منشن احد يرد عيله
  if (!msg.mentions.members.first()) return msg.reply(`يجب عليك منشن شخص`)
// لو ما كتب تبليغ بيقوله اكتب تبليغ
  if (!args[1]) return msg.reply(`امممم .. اكتب تبليغك`)
// استبدل <الروم> بأسم الروم حقك
  if (msg.guild.channels.find('name', '<الروم>')) {
// استبدل هنا بعد
    msg.guild.channels.find('name', '<الروم>').send(`
  تبليغ على : ${msg.mentions.members.first()}
  بلغ عليه من قبل : ${msg.member}
  في روم : ${msg.channel.name}
  السبب : **${args.join(" ").split(msg.mentions.members.first()).slice(' ')}**
  `)
  }
}
})

client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField('🎽 | name :  ',`${member}`)
        .addField('📢 | نورت السيرفر يا قلبي' , `Welcome to the server, ${member}`)
        .addField('🆔 | user :', "**[" + `${member.id}` + "]**" )
                .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                     
                                     .addField(' الـسيرفر', `${member.guild.name}`,true)
                                       
     .setFooter(`${member.guild.name}`)
        .setTimestamp()
   
      channel.sendEmbed(embed);
    });
    
    client.on('guildMemberRemove', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`الله معاك ✋:skin-tone-1: 😔`)
        .setDescription(`مع السلامه تشرفنا بك ✋:skin-tone-1: 😔 `)
        .addField('👤   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('RED')
        .setFooter(`==== نــتــمــنــآ لــكــم آســتــمـــتــآع ====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
    
    var channel =member.guild.channels.find('name', 'welcome')
    if (!channel) return;
    channel.send({embed : embed});
    });

client.on('message', message => {
    if (message.content.startsWith("..status")) {
      message.channel.send({
 embed: new Discord.RichEmbed() 
    .setColor('RED')
    .addField('**الذاكرة المستخدمة 💾**', `${(process.memoryUsage().rss / 1000000).toFixed()}MB`, true)
         .addField('**سرعة الاتصال📡**' , `${Date.now() - message.createdTimestamp}` + ' ms')
        .addField('**وقت الاقلاع⌚**', timeCon(process.uptime()), true)
        .addField('**استخدام المعالج💿**', `${(process.cpuUsage().rss / 10000).toFixed()}%`, true)
     })
    }
  });
  function timeCon(time) {
    let days = Math.floor(time % 31536000 / 86400)
    let hours = Math.floor(time % 31536000 % 86400 / 3600)
    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
    days = days > 9 ? days : '0' + days
    hours = hours > 9 ? hours : '0' + hours
    minutes = minutes > 9 ? minutes : '0' + minutes
    seconds = seconds > 9 ? seconds : '0' + seconds
    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
};
 
client.on('message',async message => {
var codes = "..";
var args = message.content.split(" ").slice(1);
var title = args[1]
          if(message.content.startsWith(codes + "start")) {
              if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **s You Dont Have Premission**');
              if(!args) return message.channel.send(`**Use : $start  <Time> <Presentse>**`);
              if(!title) return message.channel.send(`**Use : **\`$start ${args[0]} Minutes\`** <Presentse>**`);
         if(!isNaN(args)) return message.channel.send(':heavy_multiplication_x:| **The Time Be Nambers `` Do the Commend Agin``**');
                           let giveEmbed = new Discord.RichEmbed()
                  .setAuthor(message.guild.name, message.guild.iconURL)
                  .setDescription(`**${title}** \nReact Whit 🎉 To Enter! \n**Time remaining: Minutes :${duration / 60000}**`)
                  .setFooter(message.author.username, message.author.avatarURL);

                  message.channel.send(' :heavy_check_mark: **Giveaway Created** :heavy_check_mark:' , {embed: giveEmbed}).then(m => {
                      message.delete();
                      m.react('🎉');
                     setTimeout(() => {
                       let users = m.reactions.get("🎉").users;
                       let list = users.array().filter(u => u.id !== client.user.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0]
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('Giveaway End !🎉',`Winners : ${gFilter}`)
                     m.edit('** 🎉 GIVEAWAY ENDED 🎉**' , {embed: endEmbed});
                     },args * 60000);
                   });
          }
});

client.on('message', message => {
    if (message.content == "..اسئلني") {
         message.react('🤔','👌')
        var x = ['اين يلعب مصطفي فتحي؟', 'ما هو اسم ملعب بارشالونة', 'ما هو يوم الحج الأكبر؟', 'ما هو أطول أنهار أوربا ؟', 'ما هو اسم بيت الدجاج', 'ما هو أول بنك قام بالنشاط المصرفي في السعودية عام 1926م' , 'ما هو أول جامع أقيم في مصر','ما هو أطول نهر في آسيا','ما هو أقرب كوكب إلى الشمس','ما هو الحيوان الذي يُسمى البهنس','ما هو اول مسجد أسس بالمدينة','متى وقع صلح الحديبية عام 6هـ او 3هـ او 2هـ؟','متى قامت أمريكا بأول رحلة فضائية','متى كانت غزوة خيبر؟','ما هي السورة التي تبدأ بقوله تعالى " يا أيها النبي اتق الله ولا تطع الكافرين والمنافقين إن الله كان عليما حكيما ".اجب؟','ما هي السورة التي يطلق عليها عروس القرآن','ماذا يسمى من لايقرأ ولايكتب','ماهي أول دولة استخدمت طابع البريد','ماهو شعار الولايات المتحدة الامريكية','ماهو اذكي الحيوانات','من هو مكتشف أمريكا','مامعنى "فرعون" اجب؟','ماهو اقرب كوكب إلى الارض','ما هي نسبه المياه من الكره الارضيه?','كم عدد السجدات في القرآن الكريم؟','من هو بطل كاس العالم في عام 1966','أين أفتتح اول متحف في العالم?','ماأسم أنثى الحمار?','كم تبلغ درجه حراره الشمس؟','من هي مدينة الضباب','أين توجد أطول سكة حديد في العالم?'
        ];
        var x2 = ['التعاون', 'كامب نو', 'يوم النحر', 'الدانوب', 'قن', 'البنك الهولندي', 'جامع عمرو بن العاص','اليانجستي','عطارد','الاسد','مسجد قباء','6','سنة 1962','عام 7هـ','الاحزاب','سورة الرحمن','امي','بريطانيا','النسر الاصلع','الدلفين','كولمبس','البيت الكبير','الزهره','71%','15 سجدة','انكلترا ','القاهرة','الاتان','15 مليون درجه مئوية','لندن','كندا'
        ];
		var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`📢 امامك دقيقة لحل الاسئلة , السؤال يقول :  __**${x[x3]}**__ `).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
               thing: true,
               maxMatches : 1,
                time : 60000,
                 maxUses: 1,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح `)
        })

        r.then((collected)=> {
            message.channel.send(`${collected.first().author} لقد قمت بكتابة الجواب الصحيح  `);
            message.react('✅')
        })
        })
    }
})

client.on('message', message => {
    if (message.content.startsWith("..رابط")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("| :white_check_mark:  | :heart:  تم ارسال الرابط على الخاص  ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
**
---------------------
-[${message.guild.name}]  هذا هو رابط سيرفر
---------------------
-هذا الرابط صالح ل 100 مستخدم فقط
---------------------
-هذا الرابط صالح لمده 24 ساعه فقط
---------------------
**`)
      message.author.sendEmbed(Embed11)
    }
});

var prefix = "..";
var cats = ["https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg","http://www.dogbazar.org/wp-content/uploads/2014/09/british-bull-dog-puppies.jpg","http://cdn2-www.dogtime.com/assets/uploads/gallery/german-shepherd-dog-breed-pictures/standing-7.jpg","http://cdn.akc.org/Marketplace/Breeds/German_Shepherd_Dog_SERP.jpg","https://animalso.com/wp-content/uploads/2016/12/black-german-shepherd_2.jpg","https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpg","https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg","http://www.i-love-cats.com/images/2015/04/12/cat-wallpaper-38.jpg","https://www.aspca.org/sites/default/files/cat-care_urine-marking_main-image.jpg","https://s-media-cache-ak0.pinimg.com/originals/f0/3b/76/f03b7614dfadbbe4c2e8f88b69d12e04.jpg","http://www.rd.com/wp-content/uploads/sites/2/2016/04/15-cat-wants-to-tell-you-attention.jpg","https://www.thelocal.de/userdata/images/article/fa6fd5014ccbd8f4392f716473ab6ff354f871505d9128820bbb0461cce1d645.jpg","https://www.adelaidezoo.com.au/wp-content/uploads/sites/2/animals/GiantPanda3Slider.jpg","http://imagem.band.com.br/f_230168.jpg"]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'animal')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});

client.on('message', async message => {
var prefix = "..";
  let args = message.content.split(" ");
  if(message.content.startsWith(prefix + "mute")) {
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply('**أنت لا تملك الخصائص اللازمة . يجب توفر خاصية `Manage Roles`**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply('**أنا لا املك الخصائص الكافية . يلزم خصائص `Manage Roles` للقيام بهذا الامر**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    let mention = message.mentions.members.first();
    if(!mention) return message.reply('**منشن عضو لأسكاته ( لأعطائة ميوت ) كتابي**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(mention.highestRole.position >= message.guild.member(message.author).highestRole.positon) return message.reply('**لا يمكنك اعطاء لميوت شخص رتبته اعلى منك**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
    if(mention.highestRole.positon >= message.guild.member(client.user).highestRole.positon) return message.reply('**لا يمكنني اعطاء ميوت لشخص رتبته اعلى مني**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
    if(mention.id === message.author.id) return message.reply('**لا يمكنك اعطاء ميوت  لنفسك**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    let duration = args[2];
    if(!duration) return message.reply('**حدد وقت زمني لفك الميوت عن الشخص**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(isNaN(duration)) return message.reply('**حدد وقت زمني صحيح**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    let reason = message.content.split(" ").slice(3).join(" ");
    if(!reason) reason = "غير محدد";

    let thisEmbed = new Discord.RichEmbed()
    .setAuthor(mention.user.username, mention.user.avatarURL)
    .setTitle('تم اغطائك ميوت بسيرفر')
    .setThumbnail(mention.user.avatarURL)
    .addField('# - السيرفر',message.guild.name,true)
    .addField('# - تم اعطائك ميوت بواسطة',message.author,true)
    .addField('# - السبب',reason)

    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!role) try {
      message.guild.createRole({
        name: "Muted",
        permissions: 0
      }).then(r => {
        message.guild.channels.forEach(c => {
          c.overwritePermissions(r , {
            SEND_MESSAGES: false,
            READ_MESSAGES_HISTORY: false,
            ADD_REACTIONS: false
          });
        });
      });
    } catch(e) {
      console.log(e.stack);
    }
    mention.addRole(role).then(() => {
      mention.send(thisEmbed);
      message.channel.send(`**:white_check_mark: ${mention.user.username} muted in the server ! :zipper_mouth:  **  `);
      mention.setMute(true);
    });
    setTimeout(() => {
      if(duration === 0) return;
      if(!mention.has.roles(role)) return;
      mention.setMute(false);
      mention.removeRole(role);
      message.channel.send(`**:white_check_mark: ${mention.user.username} unmuted in the server ! :neutral_face:  **  `);
    },duration * 60000);
  } else if(message.content.startsWith(prefix + "unmute")) {
    let mention = message.mentions.members.first();
    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply('**أنت لا تملك الخصائص اللازمة . يجب توفر خاصية `Manage Roles`**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply('**أنا لا املك الخصائص الكافية . يلزم خصائص `Manage Roles` للقيام بهذا الامر**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(!mention) return message.reply('**منشن الشخص لفك الميوت عنه**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

      mention.removeRole(role);
      mention.setMute(false);
      message.channel.send(`**:white_check_mark: ${mention.user.username} unmuted in the server ! :neutral_face:  **  `);
  }
});

	client.on('message', async msg => {
	var prefix = "..";
	var user = msg.author;
			var a = msg.guild.roles.find("name", 'Agar');
		if(!a){
        a = await msg.guild.createRole({
		  name: "Agar",
          color: "#ffffff",
          permissions:[]
		})
		
        }
	    var m = msg.guild.roles.find("name", 'Minecraft');
	if(!m){
        m =  await msg.guild.createRole({
		  name: "Minecraft",
          color: "#ffffff",
          permissions:[]
		})
        }
        var f = msg.guild.roles.find("name", 'Fortnite');
		if(!f){
        f =  await msg.guild.createRole({
		  name: "Fortnite",
          color: "#ffffff",
          permissions:[]
		})
        }
        var b = msg.guild.roles.find("name", 'Brawlhalla');
		if(!b){
        b =  await msg.guild.createRole({
		  name: "Brawlhalla",
          color: "#ffffff",
          permissions:[]
		})
        }
        var black = msg.guild.roles.find("name", 'Blacksquad');
	if(!black){
        black =  await msg.guild.createRole({
		  name: "Blacksquad",
          color: "#ffffff",
          permissions:[]
		})
        }

		if (msg.content.startsWith(prefix +'addmerole')) {

		if(!msg.channel.guild) return msg.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
msg.channel.send(`يرحي اختيار رتبة اللعبة الذي تريدها \n1- لعبة اقاريو ⚽ \n2- لعبة ماين كرافت 👶 \n3- لعبة فورت نايت 👊 \n4- لعبة براوهلا  👌 \n5- لعبة بلاك سكواد 🍸\n6- الغاء ❌ \n7- **لديك60 ثانية للاختيار **\n<@${msg.author.id}>`).then(res => {     
     res.react('⚽').then(r=>{     
     res.react('👶').then(r=>{
     res.react('👊').then(r=>{
     res.react('👌').then(r=>{
     res.react('🍸').then(r=>{
     res.react('❌').then(r=>{

    let aaa = (reaction, user) => reaction.emoji.name === '⚽' && user.id === msg.author.id;    
    let mmm = (reaction, user) => reaction.emoji.name === '👶' && user.id === msg.author.id;
    let fff = (reaction, user) => reaction.emoji.name === '👊' && user.id === msg.author.id;
    let bbb = (reaction, user) => reaction.emoji.name === '👌' && user.id === msg.author.id;
    let bbbb = (reaction, user) => reaction.emoji.name === '🍸' && user.id === msg.author.id;
    let ccc = (reaction, user) => reaction.emoji.name === '❌' && user.id === msg.author.id;

    let aa = res.createReactionCollector(aaa, { maxMatches:1 , time: 20000 , });
    let mm = res.createReactionCollector(mmm, { maxMatches:1 , time: 20000 , });
    let ff = res.createReactionCollector(fff, { maxMatches:1 , time: 20000 , });
    let bb = res.createReactionCollector(bbb, { maxMatches:1 , time: 20000 , });
    let bl = res.createReactionCollector(bbbb,{ maxMatches:1 , time: 20000 , });
    let cc = res.createReactionCollector(ccc, { maxMatches:1 , time: 20000 , });

aa.on("collect", r => {
    msg.guild.member(user.id).addRole(a);
	msg.channel.send('`تم اعطائك رتبة للعبة Agar`');
	msg.delete();
	})
mm.on("collect", r => {
    msg.guild.member(user.id).addRole(m);
	msg.channel.send('`تم اعطائك رتبة للعبة Mincraft `');
	msg.delete();
})
ff.on("collect", r => {
    msg.guild.member(user.id).addRole(f);
	msg.channel.send('`تم اعطائك رتبة للعبة Fortnite `');
	msg.delete();
})
bb.on("collect", r => {
    msg.guild.member(user.id).addRole(b);
	msg.channel.send('`تم اعطائك رتبة للعبة Brawlhalla `');
	msg.delete();
})
bl.on("collect", r => {
    msg.guild.member(user.id).addRole(black);
	msg.channel.send('`تم اعطائك رتبة للعبة Blacksquad `');
	msg.delete();
})
cc.on("collect", r => {
	msg.delete();
})
	 })
	 })
	 })
	 })
	 })
	 })
	 })
	 }
	 });


  const gif = require("gif-search")
client.on('message', message => {
 var prefix = "..";
    if(message.content.startsWith(prefix + 'gif')) {
console.log('[Gif Search] Developed By Ghost')
        if(message.channel.type === 'dm') return message.channel.send('Only For Servers')
        let args = message.content.split(' ').slice(1).join(' ')
            if (!args) return message.reply('يجب كتابة أسم الصورة')
    gif.query(args).then(gifUrl => {
        message.channel.send({
            files: [{
                attachment: gifUrl,
                name: "search.gif"
            }]
        });
    });
} 
});

  client.on('message', message => {
    const prefix = '..'
  if (!message.guild) return;

  if (message.content === 'ادخل') {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { 
          message.reply('لقد دخلت الروم بنجاح !');
        })
        .catch(console.log);
    } else {
      message.reply('يجب ان تكون في روم صوتي');
    }
  }
});
  
  client.on('message', message => {
    if (message.content.startsWith("..id")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``INFO Name Bot`` ')
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true) 
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
            .addField("``Your Name``", `${message.author.username}`)
            .addField('``your tag``', message.author.discriminator)
            .addField('``Your id``', message.author.id)
            .addField('``Bot``', message.author.bot)
            .addField('``date of registration``', message.author.createdAt)
    })
}
});

  client.on("message",  message => {   
    const prefix = '..'
         let args = message.content.split(' ').slice(1);
    if(message.content.startsWith('nickname')) {
        if (!message.member.hasPermission("MANAGE_NICKNAMES")) {
            message.channel.send("حط الاسم")
        } else {
            if (!message.guild.member(client.user).hasPermission('MANAGE_NICKNAMES')) return message.reply(' ❌البوت ما عنده خاصية MANAGE_NICKNAMES.').catch(console.error);
            let changenick = message.mentions.users.first();
            let username = args.slice(1).join(' ')
            if (username.length < 1) return message.reply('حط الاسم').catch(console.error);
            if (message.mentions.users.size < 1) return message.author.send('You must mention a user to change their nickname. ❌').catch(console.error);
            message.guild.member(changenick.id).setNickname(username);
            message.channel.send("تم تغيير الاسم الى: " + changenick + "")
        }
    }});
  
client.on('message', message=> {
    if (message.author.bot) return;
    if (message.isMentioned(client.user))
    {
    message.reply(" نعم يعسل !!");
    }
});

client.on('message', function(message) {
    if (message.content == "..clear ultra") {
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.fetchMessages()
               .then(function(list){
                    message.channel.bulkDelete(list);
                }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})
        }
    }

});



client.login(process.env.BOT_TOKEN);
