const config = require('../config')
const {cmd , commands} = require('../command')
const {sleep} = require('../lib/functions')









//=================================================================================================================
cmd({
    pattern: "news",
    alias: ["hiru","esana","techsi","technews","derana","siyatha","wabeta"],
    use: '.news',
    react: "📰",
    desc: "24/7 news viewer",
    category: "search",
    filename: __filename
        },

        async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

            var a = '```'
            let buttonMessage = {
                image: {
                    url: `https://i.ibb.co/TmM4nPs/20231113-044334.jpg`,
                },  
                caption: `
───────────────────
*📰 DARK SHADOW 2.0*
        *NEWS VIEWER 📰*
───────────────────
${a}1.1 | SIYATHA NEWS${a}
${a}1.2 | SIRASA NEWS${a}
${a}1.3 | HIRU NEWS${a}
${a}1.4 | ESANA NEWS${a}
${a}1.5 | TECH NEWS${a}
${a}1.6 | WA BETA${a}
───────────────────

_• 𝙳𝙰𝚁𝙺 𝚂𝙷𝙰𝙳𝙾𝚆 𝚅𝟸 𝟸𝟶𝟸𝟹 •_`,            
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
