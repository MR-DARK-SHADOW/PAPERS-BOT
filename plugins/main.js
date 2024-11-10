const config = require('../config')
const {cmd , commands} = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')


//=================================================================================================================
cmd({
    pattern: "paper",
    alias: "al",
    react: "📰",
    filename: __filename
        },

          async (conn, mek, m, { from, q, pushname, reply }) => {
              var a = '```'
            let buttonMessage = {
                image: {
                    url: `https://www.newswire.lk/wp-content/uploads/2022/01/AL-Exam.jpg`,
                },  
                caption: `───────────────────
*👋🏻 Hello ${pushname}*
───────────────────
_☑️ අපොස උසස් පෙළ විභාගයේ පසුගිය වසරවලට අදාල ප්‍රශ්න පත්‍ර ඔබට මෙය මගින් බාගත කල හැක_
────────────────────
_👇🏻 පහතින් ඔබට අවශ්‍ය විශය ධාරාව තෝරා එයට අදාල අංකය මෙය මෙන්ශන් කර ලභා දෙන්න_
────────────────────
> 1️⃣ *භෞතික විද්‍යා විෂය ධාරාව*

> 2️⃣ *ජීව විද්‍යා විෂය ධාරාව*

> 3️⃣ *තාක්ෂණ විෂය ධාරාව*

> 4️⃣ *වාණිජ විෂය ධාරාව*

_© 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙳𝙰𝚁𝙺 𝚂𝙷𝙰𝙳𝙾𝚆_
`,            
                headerType: 4,
            };
           const react = await conn.sendMessage(from, buttonMessage, { 
                quoted: mek,
            });
            
          return await conn.sendMessage(from, { react: { text: '🔢', key: react.key } });
        }
    )
//=================================================================================================================
cmd({
on: "body"
}, async (conn, mek, m, { from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
  try {
    if (body === '1') {
      if (!m.quoted) return;
      if (m.quoted.sender !== botNumber2) return;
      if (m.quoted.videoMessage) return;
      if (m.quoted.documentMessage) return;
      if (m.quoted.stickerMessage) return;   
      if (m.quoted.audioMessage) return;
      if (!m.quoted.imageMessage) return;
      if (m.quoted.imageMessage.caption.includes("Hello")) {

await conn.sendMessage(from, { react: { text: '🔎', key: mek.key }})

let react = await conn.sendMessage(from, { image: { url: `https://www.newswire.lk/wp-content/uploads/2022/01/AL-Exam.jpg` }, caption: `────────────────────\n> ⭕ *භෞතික විද්‍යා විෂය ධාරාව*\n────────────────────\n_👇🏻 පහතින් ඔබට අවශ්‍ය විශය තෝරා එයට අදාල අංකය මෙය මෙන්ශන් කර ලභා දෙන්න_\n────────────────────\n> 1️⃣ *2020*\n\n> 2️⃣ *2021*\n\n> 3️⃣ *2022*\n\n> 4️⃣ *2023 (2024)*\n\n_© 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙳𝙰𝚁𝙺 𝚂𝙷𝙰𝙳𝙾𝚆_\n` }, { quoted: mek })    
await conn.sendMessage(from, { react: { text: '🗞️', key: react.key } });
await conn.sendMessage(from, { react: { text: '✅', key: mek.key }})
      }
    }
} catch (e) {
    reply(`${e}`);
    console.log(e);
  }
});
