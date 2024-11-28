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
                    url: `https://srilankamirror.com/wp-content/uploads/2024/05/OLExam_1200px_17_04_24.jpg`,
                },  
                caption: `───────────────────
*👋🏻 Hello ${pushname}*
───────────────────
_☑️ අපොස සාමාන්‍ය පෙළ විභාගයේ පසුගිය වසරවලට අදාල ප්‍රශ්න පත්‍ර පිළිතුරු සමග ඔබට මෙය මගින් බාගත කල හැක_
────────────────────
_👇🏻 පහතින් ඔබට අවශ්‍ය විශය තෝරා එයට අදාල අංකය මෙය මෙන්ශන් කර ලභා දෙන්න_
────────────────────
> 1️⃣ *ගණිතය*

> 2️⃣ *ඉංග්‍රීසි*

> 3️⃣ *විද්‍යාව*

> 4️⃣ *සිංහල*

> 5️⃣ *ඉතිහාසය*

> 6️⃣ *බුද්ධ ධර්මය*

> 7️⃣ *1 කාන්ඩය*

> 8️⃣ *2 කාන්ඩය*

> 9️⃣ *3 කාන්ඩය*


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
