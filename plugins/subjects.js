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
> ⭕ *ගණිතය*
────────────────────
_👇🏻 පහතින් ඔබට අවශ්‍ය වර්ශය තෝරා එයට අදාල අංකය මෙය මෙන්ශන් කර ලභා දෙන්න_
────────────────────
> 1️⃣ *2016*

> 2️⃣ *2017*

> 3️⃣ *2018*

> 4️⃣ *2019*

> 5️⃣ *2020*

> 6️⃣ *2021*

> 7️⃣ *2022 (2023)*

> 8️⃣ *2023 (2024)*

_© 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙳𝙰𝚁𝙺 𝚂𝙷𝙰𝙳𝙾𝚆_
`;
let react = await conn.sendMessage(from, { image: { url: `https://srilankamirror.com/wp-content/uploads/2024/05/OLExam_1200px_17_04_24.jpg` }, caption: cap }, { quoted: mek })    
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
> ⭕ *ඉංග්‍රීසි*
────────────────────
_👇🏻 පහතින් ඔබට අවශ්‍ය වර්ශය තෝරා එයට අදාල අංකය මෙය මෙන්ශන් කර ලභා දෙන්න_
────────────────────
> 1️⃣ *2016*

> 2️⃣ *2017*

> 3️⃣ *2018*

> 4️⃣ *2019*

> 5️⃣ *2020*

> 6️⃣ *2021*

> 7️⃣ *2022 (2023)*

> 8️⃣ *2023 (2024)*

_© 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙳𝙰𝚁𝙺 𝚂𝙷𝙰𝙳𝙾𝚆_
`;
let react = await conn.sendMessage(from, { image: { url: `https://srilankamirror.com/wp-content/uploads/2024/05/OLExam_1200px_17_04_24.jpg` }, caption: cap }, { quoted: mek })    
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
> ⭕ *විද්‍යාව*
────────────────────
_👇🏻 පහතින් ඔබට අවශ්‍ය වර්ශය තෝරා එයට අදාල අංකය මෙය මෙන්ශන් කර ලභා දෙන්න_
────────────────────
> 1️⃣ *2016*

> 2️⃣ *2017*

> 3️⃣ *2018*

> 4️⃣ *2019*

> 5️⃣ *2020*

> 6️⃣ *2021*

> 7️⃣ *2022 (2023)*

> 8️⃣ *2023 (2024)*

_© 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙳𝙰𝚁𝙺 𝚂𝙷𝙰𝙳𝙾𝚆_
`;
let react = await conn.sendMessage(from, { image: { url: `https://srilankamirror.com/wp-content/uploads/2024/05/OLExam_1200px_17_04_24.jpg` }, caption: cap }, { quoted: mek })    
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
> ⭕ *සිංහල*
────────────────────
_👇🏻 පහතින් ඔබට අවශ්‍ය වර්ශය තෝරා එයට අදාල අංකය මෙය මෙන්ශන් කර ලභා දෙන්න_
────────────────────
> 1️⃣ *2016*

> 2️⃣ *2017*

> 3️⃣ *2018*

> 4️⃣ *2019*

> 5️⃣ *2020*

> 6️⃣ *2021*

> 7️⃣ *2022 (2023)*

> 8️⃣ *2023 (2024)*

_© 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙳𝙰𝚁𝙺 𝚂𝙷𝙰𝙳𝙾𝚆_
`;
let react = await conn.sendMessage(from, { image: { url: `https://srilankamirror.com/wp-content/uploads/2024/05/OLExam_1200px_17_04_24.jpg` }, caption: cap }, { quoted: mek })    
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
    if (body === '5') {
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
> ⭕ *ඉතිහාසය*
────────────────────
_👇🏻 පහතින් ඔබට අවශ්‍ය වර්ශය තෝරා එයට අදාල අංකය මෙය මෙන්ශන් කර ලභා දෙන්න_
────────────────────
> 1️⃣ *2016*

> 2️⃣ *2017*

> 3️⃣ *2018*

> 4️⃣ *2019*

> 5️⃣ *2020*

> 6️⃣ *2021*

> 7️⃣ *2022 (2023)*

> 8️⃣ *2023 (2024)*

_© 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙳𝙰𝚁𝙺 𝚂𝙷𝙰𝙳𝙾𝚆_
`;
let react = await conn.sendMessage(from, { image: { url: `https://srilankamirror.com/wp-content/uploads/2024/05/OLExam_1200px_17_04_24.jpg` }, caption: cap }, { quoted: mek })    
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
    if (body === '6') {
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
> ⭕ *බුද්ධ ධර්මය*
────────────────────
_👇🏻 පහතින් ඔබට අවශ්‍ය වර්ශය තෝරා එයට අදාල අංකය මෙය මෙන්ශන් කර ලභා දෙන්න_
────────────────────
> 1️⃣ *2016*

> 2️⃣ *2017*

> 3️⃣ *2018*

> 4️⃣ *2019*

> 5️⃣ *2020*

> 6️⃣ *2021*

> 7️⃣ *2022 (2023)*

> 8️⃣ *2023 (2024)*

_© 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙳𝙰𝚁𝙺 𝚂𝙷𝙰𝙳𝙾𝚆_
`;
let react = await conn.sendMessage(from, { image: { url: `https://srilankamirror.com/wp-content/uploads/2024/05/OLExam_1200px_17_04_24.jpg` }, caption: cap }, { quoted: mek })    
await conn.sendMessage(from, { react: { text: '🗞️', key: react.key } });
await conn.sendMessage(from, { react: { text: '✅', key: mek.key }})
      }
    }
} catch (e) {
    reply(`${e}`);
    console.log(e);
  }
});
