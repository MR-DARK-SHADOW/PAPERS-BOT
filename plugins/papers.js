const config = require('../config')
const {cmd , commands} = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')


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
const cap = `────────────────────
> ⭕ *භෞතික විද්‍යා විෂය ධාරාව*
────────────────────
_👇🏻 පහතින් ඔබට අවශ්‍ය විශය තෝරා එයට අදාල අංකය මෙය මෙන්ශන් කර ලභා දෙන්න_
────────────────────
> 1️⃣ *සංයුක්ත ගණිතය*

> 2️⃣ *භෞතික විද්‍යාව*

> 3️⃣ *රසායන විද්‍යාව*

> 4️⃣ *තොරතුරු හා සංනිවේදන තාක්ශනය*

_© 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙳𝙰𝚁𝙺 𝚂𝙷𝙰𝙳𝙾𝚆_
`;
let react = await conn.sendMessage(from, { image: { url: `https://www.newswire.lk/wp-content/uploads/2022/01/AL-Exam.jpg` }, caption: cap }, { quoted: mek })    
await conn.sendMessage(from, { react: { text: '🗞️', key: react.key } });
await conn.sendMessage(from, { react: { text: '✅', key: mek.key }})
      }
    }
} catch (e) {
    reply(`${e}`);
    console.log(e);
  }
});
