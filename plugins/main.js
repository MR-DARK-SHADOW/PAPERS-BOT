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
_☑ අපොස උසස් පෙළ විභාගයේ පසුගිය වසරවලට අදාල ප්‍රශ්න පත්‍ර ඔබට මෙය මගින් බාගත කල හැක_
────────────────────
_🔢 ඔබට අවශ්‍ය විශය ධාරාවට අදාල අංකය මෙය මෙන්ශන් කර ලභා දෙන්න_
────────────────────
*⭕ 1 භෞතික විද්‍යා විෂය ධාරාව*

*⭕ 2 ජීව විද්‍යා විෂය ධාරාව*

*⭕ 3 තාක්ෂණ විෂය ධාරාව*

*⭕ 4 වාණිජ විෂය ධාරාව* `,            
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
      if (m.quoted.imageMessage.caption.includes("Hello")) {

await conn.sendMessage(from, { react: { text: '🔎', key: mek.key }})

let react = await conn.sendMessage(from, { image: { url: `https://telegra.ph/file/c495490ca02eb4d086020.jpg` }, caption: `ndndnfn` }, { quoted: mek })
await conn.sendMessage(from, { react: { text: '🗞️', key: react.key } });
await conn.sendMessage(from, { react: { text: '✅', key: mek.key }})
      }
    }
} catch (e) {
    reply(`${e}`);
    console.log(e);
  }
});
