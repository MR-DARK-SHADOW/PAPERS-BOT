const config = require('../config')
const os = require('os')
const {
    cmd,
    commands
} = require('../command')
const {
    getBuffer,
    getGroupAdmins,
    getRandom,
    h2k,
    isUrl,
    Json,
    runtime,
    sleep,
    fetchJson
} = require('../lib/functions')



cmd({
        pattern: "menu",
        react: "📃",
        alias: ["panel"],
        desc: "Get bot\'s command list.",
        category: "other",
        use: '.menu',
        filename: __filename
    },
    async (conn, mek, m, {
        from,
        pushname,
        reply
    }) => {
        try {
            if (os.hostname().length == 12) hostname = 'replit'
            else if (os.hostname().length == 36) hostname = 'heroku'
            else if (os.hostname().length == 8) hostname = 'koyeb'
            else hostname = os.hostname()
            const GGG = `👋🏻 𝙷𝙴𝙻𝙻𝙾 ${pushname}

*╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ʟɪꜱᴛ」*
*│⚡ 𝚁𝙰𝙼 𝚄𝚂𝙰𝙶𝙴  -* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*│⚡ 𝚁𝚄𝙽𝚃𝙸𝙼𝙴    -* ${runtime(process.uptime())}
*│⚡ 𝙳𝙴𝚅𝙰𝙻𝙾𝙿𝙴𝚁  -ᴇꜱʜᴀɴ*
*│⚡ 𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼   -* ${hostname}
*│⚡ 𝚅𝙴𝚁𝚂𝙸𝙾𝙽     -* 1.0.0
*│⚡ 𝙱𝙾𝚃 𝙽𝙰𝙼𝙴    -Qᴜᴜɴ ᴇꜱʜᴜ-ᴍᴅ*
*╰────━━━━━──────●●►*`
         const categories = [];
            const categoryMap = new Map();

           for (let i = 0; i < 1; i++) {
                const cmd = commands[i];
                if (!cmd.dontAddCommandList && cmd.pattern !== undefined) {
                    const category = cmd.category.toUpperCase();
                    if (!categoryMap.has(category)) {
                        categories.push(category);
                        categoryMap.set(category, []);
                    }
                    categoryMap.get(category).push(cmd.pattern);
                }
            }
            const rows = []
           for (const category of categories) {


                rows.push({
                    header: "",
                    title: "ᴀʟʟ  ᴍᴇɴᴜ 📃",
                    description: "ɢᴇᴛ ᴀʟʟ ᴄᴏᴍᴍᴀɴᴅꜱ",
                    id: ".allmenu"
                
                }),
                rows.push({
                    header: "",
                    title: "ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ ⬇️",
                    description: "ɢᴇᴛ ᴅᴏᴡɴʟᴏᴀᴅ ᴄᴏᴍᴍᴀɴᴅꜱ",
                    id: ".downmenu"
                
                }),
                rows.push({
                    header: "",
                    title: "ꜱᴇᴀʀᴄʜ ᴍᴇɴᴜ 🔎",
                    description: "ɢᴇᴛ ꜱᴇᴀʀᴄʜ ᴄᴏᴍᴍᴀɴᴅꜱ",
                    id: ".searchmenu"
                
                }), 
                rows.push({
                    header: "",
                    title: "ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ 🔄",
                    description: "ɢᴇᴛ ᴄᴏɴᴠᴇʀᴛ ᴄᴏᴍᴍᴀɴᴅꜱ",
                    id: ".convertmenu"
                
                }), 
                rows.push({
                    header: "",
                    title: "ᴏᴡɴᴇʀ ᴍᴇɴᴜ 👨‍💻",
                    description: "ɢᴇᴛ ᴏᴡɴᴇʀ ᴄᴏᴍᴍᴀɴᴅꜱ",
                    id: ".ownermenu"
                
                }),
                  rows.push({
                    header: "",
                    title: "ɢʀᴏᴜᴘ ᴍᴇɴᴜ 👥",
                    description: "ɢᴇᴛ ɢʀᴏᴜᴘ ᴄᴏᴍᴍᴀɴᴅꜱ",
                    id: ".groupmenu"
                
                }), 
                  rows.push({
                    header: "",
                    title: "ᴏᴛʜᴇʀ ᴍᴇɴᴜ 📄",
                    description: "ɢᴇᴛ ᴏᴛʜᴇʀ ᴄᴏᴍᴍᴀɴᴅꜱ",
                    id: ".othermenu"
                
                })
	   }
            let buttons = [
                        
                                                         
                {
                    name: "single_select",
                    buttonParamsJson: JSON.stringify({
                        title: '👆🏻 ᴛᴀᴘ ʜᴇʀᴇ',
                        sections: [{
                            title: 'ᴘʟᴇᴀꜱᴇ ꜱᴇʟᴇᴄᴛᴇ ᴀ Qᴜᴀʟɪᴛʏ',
                            title: 'ᴘʟᴇᴀꜱᴇ ꜱᴇʟᴇᴄᴛ ᴀ ᴄᴀᴛᴏɢᴏʀʏ',
                            rows: rows

                        }]
                    }),
                },
              
                {
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: "👨‍💻 ʙᴏᴛ ᴘɪɴɢ",
                        id: ".ping"
                    }),
                },
                   
                           {
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: "⚙️ ʙᴏᴛ ꜱʏꜱᴛᴇᴍ",
                        id: ".system"
                    }),
                },       
                {
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: "🪀 ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ",
                         url: "https://whatsapp.com/channel/0029VabteKy90x2pYTUqub3H",
                        merchant_url: "https://whatsapp.com/channel/0029VabteKy90x2pYTUqub3H"
                    }),
                },
            ]
            let opts = {
                image: 'https://i.ibb.co/m6FxJdc/IMG-20240908-064408.jpg',
                header: '',
                footer: 'Qᴜᴇᴇɴ ᴇꜱʜᴜ ᴍᴅ',
                body: GGG

            }
            return await conn.sendButtonMessage(from, buttons, m, opts)
        } catch (e) {
            reply('*Error !!*')
            console.log(e)
        }
    })



cmd({
    pattern: "downmenu",
    react: "⬇️",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
	const d = '`'
//Add header to menu
	let menud = "";

for (let i = 0; i < commands.length; i++) {
  if (commands[i].category === 'download' && !commands[i].dontAddCommandList) {
    menud += `
╭───────────────╮
│➠ ${d}${commands[i].pattern}${d}
╰───────────────╯\n`;
  }
}

let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: "🪀 ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ",
                         url: "https://whatsapp.com/channel/0029VabteKy90x2pYTUqub3H",
                        merchant_url: "https://whatsapp.com/channel/0029VabteKy90x2pYTUqub3H"
                    }),
                },
                
                   {
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: "👨‍💻 ʙᴏᴛ ᴘɪɴɢ",
                        id: ".ping"
                    }),
                },
                           {
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: "⚙️ ʙᴏᴛ ꜱʏꜱᴛᴇᴍ",
                        id: ".system"
                    }),
                }        
            ]
  let opts = {
                image: 'https://i.ibb.co/m6FxJdc/IMG-20240908-064408.jpg',
                header: '',
                footer: 'Qᴜᴇᴇɴ ᴇꜱʜᴜ ᴍᴅ',
                body: menud

            }
            
            return await conn.sendButtonMessage(from, buttons, m, opts)
        } catch (e) {
            reply('*Error !!*')
            console.log(e)
        }l
    })


cmd({
    pattern: "searchmenu",
    react: "🔎",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
	const d = '`'
//Add header to menu
	let menud = "";

for (let i = 0; i < commands.length; i++) {
  if (commands[i].category === 'search' && !commands[i].dontAddCommandList) {
    menud += `
╭───────────────╮
│➠ ${d}${commands[i].pattern}${d}
╰───────────────╯\n`;
  }
}

let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: "🪀 ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ",
                         url: "https://whatsapp.com/channel/0029VabteKy90x2pYTUqub3H",
                        merchant_url: "https://whatsapp.com/channel/0029VabteKy90x2pYTUqub3H"
                    }),
                },
                
                   {
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: "👨‍💻 ʙᴏᴛ ᴘɪɴɢ",
                        id: ".ping"
                    }),
                },
                           {
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: "⚙️ ʙᴏᴛ ꜱʏꜱᴛᴇᴍ",
                        id: ".system"
                    }),
                }        
            ]
  let opts = {
                image: 'https://i.ibb.co/m6FxJdc/IMG-20240908-064408.jpg',
                header: '',
                footer: 'Qᴜᴇᴇɴ ᴇꜱʜᴜ ᴍᴅ',
                body: menud

            }
            
            return await conn.sendButtonMessage(from, buttons, m, opts)
        } catch (e) {
            reply('*Error !!*')
            console.log(e)
        }
    })

cmd({
    pattern: "convertmenu",
    react: "🔄",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
	const d = '`'
//Add header to menu
	let menud = "";

for (let i = 0; i < commands.length; i++) {
  if (commands[i].category === 'convert' && !commands[i].dontAddCommandList) {
    menud += `
╭───────────────╮
│➠ ${d}${commands[i].pattern}${d}
╰───────────────╯\n`;
  }
}

let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: "🪀 ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ",
                         url: "https://whatsapp.com/channel/0029VabteKy90x2pYTUqub3H",
                        merchant_url: "https://whatsapp.com/channel/0029VabteKy90x2pYTUqub3H"
                    }),
                },
                
                   {
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: "👨‍💻 ʙᴏᴛ ᴘɪɴɢ",
                        id: ".ping"
                    }),
                },
                           {
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: "⚙️ ʙᴏᴛ ꜱʏꜱᴛᴇᴍ",
                        id: ".system"
                    }),
                }        
            ]
  let opts = {
                image: 'https://i.ibb.co/m6FxJdc/IMG-20240908-064408.jpg',
                header: '',
                footer: 'Qᴜᴇᴇɴ ᴇꜱʜᴜ ᴍᴅ',
                body: menud

            }
            
            return await conn.sendButtonMessage(from, buttons, m, opts)
        } catch (e) {
            reply('*Error !!*')
            console.log(e)
        }
    })
cmd({
    pattern: "ownermenu",
    react: "👨‍💻",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
	const d = '`'
//Add header to menu
	let menud = "";

for (let i = 0; i < commands.length; i++) {
  if (commands[i].category === 'owner' && !commands[i].dontAddCommandList) {
    menud += `
╭───────────────╮
│➠ ${d}${commands[i].pattern}${d}
╰───────────────╯\n`;
  }
}

let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: "🪀 ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ",
                         url: "https://whatsapp.com/channel/0029VabteKy90x2pYTUqub3H",
                        merchant_url: "https://whatsapp.com/channel/0029VabteKy90x2pYTUqub3H"
                    }),
                },
                
                   {
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: "👨‍💻 ʙᴏᴛ ᴘɪɴɢ",
                        id: ".ping"
                    }),
                },
                           {
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: "⚙️ ʙᴏᴛ ꜱʏꜱᴛᴇᴍ",
                        id: ".system"
                    }),
                }        
            ]
  let opts = {
                image: 'https://i.ibb.co/m6FxJdc/IMG-20240908-064408.jpg',
                header: '',
                footer: 'Qᴜᴇᴇɴ ᴇꜱʜᴜ ᴍᴅ',
                body: menud

            }
            
            return await conn.sendButtonMessage(from, buttons, m, opts)
        } catch (e) {
            reply('*Error !!*')
            console.log(e)
        }
    })

cmd({
    pattern: "groupmenu",
    react: "👥",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
	const d = '`'
//Add header to menu
	let menud = "";

for (let i = 0; i < commands.length; i++) {
  if (commands[i].category === 'group' && !commands[i].dontAddCommandList) {
    menud += `
╭───────────────╮
│➠ ${d}${commands[i].pattern}${d}
╰───────────────╯\n`;
  }
}

let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: "🪀 ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ",
                         url: "https://whatsapp.com/channel/0029VabteKy90x2pYTUqub3H",
                        merchant_url: "https://whatsapp.com/channel/0029VabteKy90x2pYTUqub3H"
                    }),
                },
                
                   {
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: "👨‍💻 ʙᴏᴛ ᴘɪɴɢ",
                        id: ".ping"
                    }),
                },
                           {
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: "⚙️ ʙᴏᴛ ꜱʏꜱᴛᴇᴍ",
                        id: ".system"
                    }),
                }        
            ]
  let opts = {
                image: 'https://i.ibb.co/m6FxJdc/IMG-20240908-064408.jpg',
                header: '',
                footer: 'Qᴜᴇᴇɴ ᴇꜱʜᴜ ᴍᴅ',
                body: menud

            }
            
            return await conn.sendButtonMessage(from, buttons, m, opts)
        } catch (e) {
            reply('*Error !!*')
            console.log(e)
        }
    })
cmd({
    pattern: "othermenu",
    react: "📄",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
	const d = '`'
//Add header to menu
	let menud = "";

for (let i = 0; i < commands.length; i++) {
  if (commands[i].category === 'other' && !commands[i].dontAddCommandList) {
    menud += `
╭───────────────╮
│➠ ${d}${commands[i].pattern}${d}
╰───────────────╯\n`;
  }
}

let buttons = [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: "🪀 ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ",
                         url: "https://whatsapp.com/channel/0029VabteKy90x2pYTUqub3H",
                        merchant_url: "https://whatsapp.com/channel/0029VabteKy90x2pYTUqub3H"
                    }),
                },
                
                   {
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: "👨‍💻 ʙᴏᴛ ᴘɪɴɢ",
                        id: ".ping"
                    }),
                },
                           {
                    name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: "⚙️ ʙᴏᴛ ꜱʏꜱᴛᴇᴍ",
                        id: ".system"
                    }),
                }        
            ]
  let opts = {
                image: 'https://i.ibb.co/m6FxJdc/IMG-20240908-064408.jpg',
                header: '',
                footer: 'Qᴜᴇᴇɴ ᴇꜱʜᴜ ᴍᴅ',
                body: menud

            }
            
            return await conn.sendButtonMessage(from, buttons, m, opts)
        } catch (e) {
            reply('*Error !!*')
            console.log(e)
        }
    })
