const config = require('../config')
const {cmd , commands} = require('../command')
const {sleep} = require('../lib/functions')

//=================================================================================================================
cmd({
    pattern: "paper",
    alias: "al",
    react: "📰",
    filename: __filename
        },

        async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

            var a = '```'
            let buttonMessage = {
                image: {
                    url: `https://www.newswire.lk/wp-content/uploads/2022/01/AL-Exam.jpg`,
                },  
                caption: `*👋🏻 Hello ${pushname}*
───────────────────
_☑ අපොස උසස් පෙළ විභාගයේ පසුගිය වසරවලට අදාල ප්‍රශ්න පත්‍ර ඔබට මෙය මගින් බාගත කල හැක_
────────────────────
_🔢 ඔබට අවශ්‍ය විශය ධාරාවට අදාල අංකය මෙය මෙන්ශන් කර ලභා දෙන්න_
────────────────────
*⭕ 1 භෞතික විද්‍යා විෂය ධාරාව*

*⭕ 2 ජීව විද්‍යා විෂය ධාරාව*

*⭕ 3 වාණිජ විෂය ධාරාව*

*⭕ 4 කලා විෂය ධාරාව*

*⭕ 5 තාක්ෂණ විෂය ධාරාව*`,            
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
    if (body === '1.1') {
      if (!m.quoted) return;
      if (m.quoted.sender !== botNumber2) return;
      if (m.quoted.videoMessage) return;
      if (m.quoted.documentMessage) return;
      if (m.quoted.stickerMessage) return;   
      if (m.quoted.audioMessage) return;
      if (!m.quoted.imageMessage) return;
      if (m.quoted.imageMessage.caption.includes("අපොස උසස් පෙළ විභාගයේ")) {

await conn.sendMessage(from, { react: { text: '🔎', key: mek.key }})

let siyatha = await fetchJson(`https://queen-api-production.up.railway.app/api/news/siyatha-news`);
const title = siyatha.result.title_1;
const date = siyatha.result.date_time;
const cap = siyatha.result.description;
const img = siyatha.result.image;

let react = await conn.sendMessage(from, { image: { url: "https://www.newswire.lk/wp-content/uploads/2022/01/AL-Exam.jpg" }, caption: `dfgdsyfssdsy` }, { quoted: mek })
await conn.sendMessage(from, { react: { text: '🗞️', key: react.key } });
await conn.sendMessage(from, { react: { text: '✅', key: mek.key }})
      }
    }
} catch (e) {
    reply(`${e}`);
    l(e);
  }
});
