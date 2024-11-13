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

//=================================================================================================================
cmd({
on: "body"
}, async (conn, mek, m, { from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
  try {
    if (body === '2') {
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
> ⭕ *ජීව විද්‍යා විෂය ධාරාව*
────────────────────
_👇🏻 පහතින් ඔබට අවශ්‍ය විශය තෝරා එයට අදාල අංකය මෙය මෙන්ශන් කර ලභා දෙන්න_
────────────────────
> 1️⃣ *ජීව විද්‍යාව*

> 2️⃣ *රසායන විද්‍යාව*

> 3️⃣ *භෞතික විද්‍යාව*

> 4️⃣ *කෘශි විද්‍යාව*

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

//=================================================================================================================
cmd({
on: "body"
}, async (conn, mek, m, { from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
  try {
    if (body === '3') {
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
> ⭕ *තාක්ෂණවේදය විෂය ධාරාව*
────────────────────
_👇🏻 පහතින් ඔබට අවශ්‍ය විශය තෝරා එයට අදාල අංකය මෙය මෙන්ශන් කර ලභා දෙන්න_
────────────────────
> 1️⃣ *තාක්ශනවේදය සඳහා විද්‍යාව*

> 2️⃣ *ඉංජිනේරු තාක්ශනවේදය*

> 3️⃣ *ජෛව පද්ධති තාක්ශනවේදය*

> 4️⃣ *තොරතුරු හා සංනිවේදන තාක්ශනය*

> 5️⃣ *කෘශි තාක්ශනය*

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

//=================================================================================================================
cmd({
on: "body"
}, async (conn, mek, m, { from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
  try {
    if (body === '4') {
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
> ⭕ *වාණිජ විෂය ධාරාව*
────────────────────
_👇🏻 පහතින් ඔබට අවශ්‍ය විශය තෝරා එයට අදාල අංකය මෙය මෙන්ශන් කර ලභා දෙන්න_
────────────────────
> 1️⃣ *ගිණුම්කරණය*

> 2️⃣ *ව්‍යාපාර අධ්‍යනය*

> 3️⃣ *ආර්ථික විද්‍යාව*

> 4️⃣ *ව්‍යාපාර සංඛ්‍යානය*

> 5️⃣ *තොරතුරු හා සංනිවේදන තාක්ශනය*

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
