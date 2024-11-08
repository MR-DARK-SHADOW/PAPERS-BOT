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
                caption: `
*👋🏻 Hello ${pushname}*

──────────────
☑ අපොස උසස් පෙළ විභාගයේ පසුගිය වසරවලට අදාල ප්‍රශ්න පත්‍ර ඔබට මෙය මගින් බාගත කල හැක
──────────────`,            
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
      if (m.quoted.imageMessage.caption.includes("*NEWS VIEWER 📰*")) {

await conn.sendMessage(from, { react: { text: '🔎', key: mek.key }})

let siyatha = await fetchJson(`https://queen-api-production.up.railway.app/api/news/siyatha-news`);
const title = siyatha.result.title_1;
const date = siyatha.result.date_time;
const cap = siyatha.result.description;
const img = siyatha.result.image;

let react = await conn.sendMessage(from, { image: { url: img }, caption: `*${title}*\n\n${date}\n\n_${cap}._\n\n_• 𝙳𝙰𝚁𝙺 𝚂𝙷𝙰𝙳𝙾𝚆 𝚅𝟸 𝟸𝟶𝟸𝟹 •_` }, { quoted: mek })
await conn.sendMessage(from, { react: { text: '🗞️', key: react.key } });
await conn.sendMessage(from, { react: { text: '✅', key: mek.key }})
      }
    }
} catch (e) {
    reply(`${e}`);
    l(e);
  }
});
