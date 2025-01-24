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
      if (m.quoted.imageMessage.caption.includes("⭕ *ගණිතය*")) {

await conn.sendMessage(from, { react: { text: '🔎', key: mek.key }})
let react = await conn.sendMessage(from, { document: { url: `https://github.com/MR-DARK-SHADOW/PAPERS-DB/blob/main/Maths/Papers/23%20Maths%20%202016%20S.pdf?raw=true` }, mimetype: "application/pdf", fileName: `ගණිතය_2016.pdf`, caption: `> *Have a nice day* 🌝❤️\n\n_© 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙳𝙰𝚁𝙺 𝚂𝙷𝙰𝙳𝙾𝚆_` }, { quoted: mek  })
let reactt = await conn.sendMessage(from, { document: { url: `https://github.com/MR-DARK-SHADOW/PAPERS-DB/blob/main/Maths/Papers/23%20Maths%20%202016%20S.pdf?raw=true` }, mimetype: "application/pdf", fileName: `ගණිතය_පිළිතුරු_2016.pdf`, caption: `> *Have a nice day* 🌝❤️\n\n_© 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙳𝙰𝚁𝙺 𝚂𝙷𝙰𝙳𝙾𝚆_` }, { quoted: mek  })
await conn.sendMessage(from, { react: { text: '🗞️', key: react.key } });
await conn.sendMessage(from, { react: { text: '🗞️', key: reactt.key } });
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
      if (m.quoted.imageMessage.caption.includes("⭕ *ගණිතය*")) {

await conn.sendMessage(from, { react: { text: '🔎', key: mek.key }})
let react = await conn.sendMessage(from, { document: { url: `https://github.com/MR-DARK-SHADOW/PAPERS-DB/blob/main/Maths/2017-OL-Maths-Past-Paper-and-Answers-Sinhala-Medium%20(1).pdf?raw=true` }, mimetype: "application/pdf", fileName: `ගණිතය_2017.pdf`, caption: `> *Have a nice day* 🌝❤️\n\n_© 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙳𝙰𝚁𝙺 𝚂𝙷𝙰𝙳𝙾𝚆_` }, { quoted: mek  })
let reactt = await conn.sendMessage(from, { document: { url: `https://github.com/MR-DARK-SHADOW/PAPERS-DB/blob/main/Maths/2016-OL-Maths-Past-Paper-and-Answers-Sinhala-Medium.pdf?raw=true` }, mimetype: "application/pdf", fileName: `ගණිතය_පිළිතුරු_2017.pdf`, caption: `> *Have a nice day* 🌝❤️\n\n_© 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙳𝙰𝚁𝙺 𝚂𝙷𝙰𝙳𝙾𝚆_` }, { quoted: mek  })
await conn.sendMessage(from, { react: { text: '🗞️', key: react.key } });
await conn.sendMessage(from, { react: { text: '🗞️', key: reactt.key } });
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
      if (m.quoted.imageMessage.caption.includes("⭕ *ගණිතය*")) {

await conn.sendMessage(from, { react: { text: '🔎', key: mek.key }})
let react = await conn.sendMessage(from, { document: { url: `https://github.com/MR-DARK-SHADOW/PAPERS-DB/blob/main/Maths/2017-OL-Maths-Past-Paper-and-Answers-Sinhala-Medium%20(1).pdf?raw=true` }, mimetype: "application/pdf", fileName: `ගණිතය_2018.pdf`, caption: `> *Have a nice day* 🌝❤️\n\n_© 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙳𝙰𝚁𝙺 𝚂𝙷𝙰𝙳𝙾𝚆_` }, { quoted: mek  })
let reactt = await conn.sendMessage(from, { document: { url: `https://github.com/MR-DARK-SHADOW/PAPERS-DB/blob/main/Maths/2016-OL-Maths-Past-Paper-and-Answers-Sinhala-Medium.pdf?raw=true` }, mimetype: "application/pdf", fileName: `ගණිතය_පිළිතුරු_2018.pdf`, caption: `> *Have a nice day* 🌝❤️\n\n_© 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙳𝙰𝚁𝙺 𝚂𝙷𝙰𝙳𝙾𝚆_` }, { quoted: mek  })
await conn.sendMessage(from, { react: { text: '🗞️', key: react.key } });
await conn.sendMessage(from, { react: { text: '🗞️', key: reactt.key } });
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
      if (m.quoted.imageMessage.caption.includes("⭕ *ගණිතය*")) {

await conn.sendMessage(from, { react: { text: '🔎', key: mek.key }})
let react = await conn.sendMessage(from, { document: { url: `https://github.com/MR-DARK-SHADOW/PAPERS-DB/blob/main/Maths/2017-OL-Maths-Past-Paper-and-Answers-Sinhala-Medium%20(1).pdf?raw=true` }, mimetype: "application/pdf", fileName: `ගණිතය_2019.pdf`, caption: `> *Have a nice day* 🌝❤️\n\n_© 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙳𝙰𝚁𝙺 𝚂𝙷𝙰𝙳𝙾𝚆_` }, { quoted: mek  })
let reactt = await conn.sendMessage(from, { document: { url: `https://github.com/MR-DARK-SHADOW/PAPERS-DB/blob/main/Maths/2016-OL-Maths-Past-Paper-and-Answers-Sinhala-Medium.pdf?raw=true` }, mimetype: "application/pdf", fileName: `ගණිතය_පිළිතුරු_2019.pdf`, caption: `> *Have a nice day* 🌝❤️\n\n_© 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙳𝙰𝚁𝙺 𝚂𝙷𝙰𝙳𝙾𝚆_` }, { quoted: mek  })
await conn.sendMessage(from, { react: { text: '🗞️', key: react.key } });
await conn.sendMessage(from, { react: { text: '🗞️', key: reactt.key } });
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
      if (m.quoted.imageMessage.caption.includes("⭕ *ගණිතය*")) {

await conn.sendMessage(from, { react: { text: '🔎', key: mek.key }})
let react = await conn.sendMessage(from, { document: { url: `https://github.com/MR-DARK-SHADOW/PAPERS-DB/blob/main/Maths/2017-OL-Maths-Past-Paper-and-Answers-Sinhala-Medium%20(1).pdf?raw=true` }, mimetype: "application/pdf", fileName: `ගණිතය_2020.pdf`, caption: `> *Have a nice day* 🌝❤️\n\n_© 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙳𝙰𝚁𝙺 𝚂𝙷𝙰𝙳𝙾𝚆_` }, { quoted: mek  })
let reactt = await conn.sendMessage(from, { document: { url: `https://github.com/MR-DARK-SHADOW/PAPERS-DB/blob/main/Maths/2016-OL-Maths-Past-Paper-and-Answers-Sinhala-Medium.pdf?raw=true` }, mimetype: "application/pdf", fileName: `ගණිතය_පිළිතුරු_2020.pdf`, caption: `> *Have a nice day* 🌝❤️\n\n_© 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙳𝙰𝚁𝙺 𝚂𝙷𝙰𝙳𝙾𝚆_` }, { quoted: mek  })
await conn.sendMessage(from, { react: { text: '🗞️', key: react.key } });
await conn.sendMessage(from, { react: { text: '🗞️', key: reactt.key } });
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
      if (m.quoted.imageMessage.caption.includes("⭕ *ගණිතය*")) {

await conn.sendMessage(from, { react: { text: '🔎', key: mek.key }})
let react = await conn.sendMessage(from, { document: { url: `https://github.com/MR-DARK-SHADOW/PAPERS-DB/blob/main/Maths/2017-OL-Maths-Past-Paper-and-Answers-Sinhala-Medium%20(1).pdf?raw=true` }, mimetype: "application/pdf", fileName: `ගණිතය_2021.pdf`, caption: `> *Have a nice day* 🌝❤️\n\n_© 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙳𝙰𝚁𝙺 𝚂𝙷𝙰𝙳𝙾𝚆_` }, { quoted: mek  })
let reactt = await conn.sendMessage(from, { document: { url: `https://github.com/MR-DARK-SHADOW/PAPERS-DB/blob/main/Maths/2016-OL-Maths-Past-Paper-and-Answers-Sinhala-Medium.pdf?raw=true` }, mimetype: "application/pdf", fileName: `ගණිතය_පිළිතුරු_2021.pdf`, caption: `> *Have a nice day* 🌝❤️\n\n_© 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙳𝙰𝚁𝙺 𝚂𝙷𝙰𝙳𝙾𝚆_` }, { quoted: mek  })
await conn.sendMessage(from, { react: { text: '🗞️', key: react.key } });
await conn.sendMessage(from, { react: { text: '🗞️', key: reactt.key } });
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
    if (body === '7') {
      if (!m.quoted) return;
      if (m.quoted.sender !== botNumber2) return;
      if (m.quoted.videoMessage) return;
      if (m.quoted.documentMessage) return;
      if (m.quoted.stickerMessage) return;   
      if (m.quoted.audioMessage) return;
      if (!m.quoted.imageMessage) return;
      if (m.quoted.imageMessage.caption.includes("⭕ *ගණිතය*")) {

await conn.sendMessage(from, { react: { text: '🔎', key: mek.key }})
let react = await conn.sendMessage(from, { document: { url: `https://github.com/MR-DARK-SHADOW/PAPERS-DB/blob/main/Maths/2017-OL-Maths-Past-Paper-and-Answers-Sinhala-Medium%20(1).pdf?raw=true` }, mimetype: "application/pdf", fileName: `ගණිතය_2022(2023).pdf`, caption: `> *Have a nice day* 🌝❤️\n\n_© 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙳𝙰𝚁𝙺 𝚂𝙷𝙰𝙳𝙾𝚆_` }, { quoted: mek  })
let reactt = await conn.sendMessage(from, { document: { url: `https://github.com/MR-DARK-SHADOW/PAPERS-DB/blob/main/Maths/2016-OL-Maths-Past-Paper-and-Answers-Sinhala-Medium.pdf?raw=true` }, mimetype: "application/pdf", fileName: `ගණිතය_පිළිතුරු_2022(2023).pdf`, caption: `> *Have a nice day* 🌝❤️\n\n_© 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙳𝙰𝚁𝙺 𝚂𝙷𝙰𝙳𝙾𝚆_` }, { quoted: mek  })
await conn.sendMessage(from, { react: { text: '🗞️', key: react.key } });
await conn.sendMessage(from, { react: { text: '🗞️', key: reactt.key } });
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
    if (body === '8') {
      if (!m.quoted) return;
      if (m.quoted.sender !== botNumber2) return;
      if (m.quoted.videoMessage) return;
      if (m.quoted.documentMessage) return;
      if (m.quoted.stickerMessage) return;   
      if (m.quoted.audioMessage) return;
      if (!m.quoted.imageMessage) return;
      if (m.quoted.imageMessage.caption.includes("⭕ *ගණිතය*")) {

await conn.sendMessage(from, { react: { text: '🔎', key: mek.key }})
let react = await conn.sendMessage(from, { document: { url: `https://github.com/MR-DARK-SHADOW/PAPERS-DB/blob/main/Maths/2017-OL-Maths-Past-Paper-and-Answers-Sinhala-Medium%20(1).pdf?raw=true` }, mimetype: "application/pdf", fileName: `ගණිතය_2023(2024).pdf`, caption: `> *Have a nice day* 🌝❤️\n\n_© 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙳𝙰𝚁𝙺 𝚂𝙷𝙰𝙳𝙾𝚆_` }, { quoted: mek  })
let reactt = await conn.sendMessage(from, { document: { url: `https://github.com/MR-DARK-SHADOW/PAPERS-DB/blob/main/Maths/2016-OL-Maths-Past-Paper-and-Answers-Sinhala-Medium.pdf?raw=true` }, mimetype: "application/pdf", fileName: `ගණිතය_පිළිතුරු_2023(2024).pdf`, caption: `> *Have a nice day* 🌝❤️\n\n_© 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙳𝙰𝚁𝙺 𝚂𝙷𝙰𝙳𝙾𝚆_` }, { quoted: mek  })
await conn.sendMessage(from, { react: { text: '🗞️', key: react.key } });
await conn.sendMessage(from, { react: { text: '🗞️', key: reactt.key } });
await conn.sendMessage(from, { react: { text: '✅', key: mek.key }})
      }
    }
} catch (e) {
    reply(`${e}`);
    console.log(e);
  }
});
