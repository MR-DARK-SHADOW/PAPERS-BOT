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

          async (conn, mek, m, { from, q, reply }) => {
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
cmd(
  {
    on: "body"
  },
   async (conn, mek, m, { from, q, reply }) => {
       try{
if (body === "1") {
if (!m.quoted) return;
if(m.quoted.videoMessage) {
let mcap = `_☑ අපොස උසස් පෙළ විභාගයේ පසුගිය වසරවලට අදාල ප්‍රශ්න පත්‍ර ඔබට මෙය මගින් බාගත කල හැක_`;            
  const quote = m.quoted.videoMessage.caption;
   if (quote.includes(mcap)) {
    var a = '```'
const downmenu = `
╭═❨ *ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ* ❩═╮
┃⚎╭────────────╮
┃⚎│➠ ᴡᴀᴍᴏᴅ
┃⚎│➠ ᴀᴘᴋ
┃⚎│➠ ꜱᴏɴɢ
┃⚎│➠ ᴠɪᴅᴇᴏ
┃⚎│➠ ᴍᴇᴅɪᴀꜰɪʀᴇ
┃⚎│➠ ꜰʙ
┃⚎│➠ ɪɢ
┃⚎│➠ ɢᴅʀɪᴠᴇ
┃⚎│➠ ᴛɪᴋᴛᴏᴋ
┃⚎╰────────────╯
╰═══════════════╯
`;
    const getq = await conn.sendMessage(m.chat, { image: { url: `https://i.ibb.co/qWQ2Ryh/20231113-091320.jpg` }, caption: downmenu }, { quoted: mek });
   return await conn.sendMessage(m.chat, { react: { text: '⬇️', key: getq.key } });
  }
}
}
}catch(e){
}
})
