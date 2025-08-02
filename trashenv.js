const fs = require('fs')
const chalk = require('chalk')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


global.SESSION_ID = process.env.SESSION_ID || 'trashcore~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUl5TUN1N0liT3NnZWlmL2pCWjNCWGhnalFUZS9Cdk1zZTYrV0MrMUswRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoianJ2bVlJcHFVaEJkSzNwRXkyTVhOWU1RMndGS1ZWMXp3VlpEMENJL2h3Zz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLSTJLb2ZXNDdMQ0liQlZKS1FDcXVzOHI0RzcycTFIOEYxSnZFV1BRZlhRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiVCtqWmNzTkpZak00WDRPV1ZUS1RISHRET0J4RTJVVEdwZGdHS2hzbHhJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlMYWNaMkUweHBIOHd3ZGF6Z2F2bm5jMU85UjBwQkV4THpzaDY5alQ0MEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVVjlnbWlTZWhydVcvK1JnVUJYcVBKTnJHdks0VmRwdC9zdFJpbUdueVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUJIb2NRdTg3YUhxSkNJZjhaS0ExU3o0MmFTcXd1SDNZU28yc1liczhrMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUZhS0JvYm01Tm9yUjk0eTIwdDBzalZBRm4zUTZrRW1UME9DUS92WkRpRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii8xY1BhYXB0RnFvNmVaQ1RYd0dJaU9Bb3hpNjZ0SHlRNDE4NzFZdm16SWprczlPQ0Vkd3BjZGg1QlVuVzFGN01seHV3TjB1NHF5QjRkM2RVbmpoTWdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDgsImFkdlNlY3JldEtleSI6ImhJeDlNNE1Ba0NUTTkvVDZCWlVnL2ZNbjJiVHFwVmIxeEZNR3pJNWMzTjQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InE5akdrZTNKU2NLenhwRkdQOC1sb1EiLCJwaG9uZUlkIjoiNGJhNGU3Y2ItY2E5Yy00NmFmLTgzZjgtNzIzNTRmNWY1YTEyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxYVFZ6WHNTWHFpVnZjRll1TnNYdTREblBDMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRbWlBS3BhZy9XZktVNUF4Wkh3NUJqMTdoMU09In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVFJBU0hCT1QiLCJtZSI6eyJpZCI6IjIzNDkxNjIxMTUwMjg6MjNAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiI0Nzk5MjY1MjQ4MDUyNjoyM0BsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pYbDJic0ZFSWFGdU1RR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlFvZU53cEF6U1c5cXRZNy9TamFwZFlPdzQ3VDZrdUVDN0JxTUZkOWllUmM9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ikp1aTZ3VXg3SjVSdSt0Tlp2bjU3R2N1dE1aK0Rjdk5yWDgxWGpPNjI1UjlBUW5sNjFNczhRdmp1d21OZEZMdSswQ3pkaFBHbVIvRkFCV1JoQnFiVENRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJIWVRqSkVCR2c3V05DVUpQT2VWZ3dJckNDMGtRcVJOTENmNnZYRmNYY25naVBTNzVXNU1naEdBM3RCN20vM21yNEZ4WEpiMFdsNnk3TC9lZ1dkcnBpZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkxNjIxMTUwMjg6MjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVUtIamNLUU0wbHZhcldPLzBvMnFYV0RzT08wK3BMaEF1d2FqQlhmWW5rWCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU0MTM3MjM2LCJsYXN0UHJvcEhhc2giOiJubTNCYiJ9' 
// Owner Setting
global.xprefix = process.env.BOT_PREFIX ||'.'
global.owner = ["2349162115028",]
global.error = ["6666",]
global.ownername = process.env.OWNER_NAME ||'AYOMIDE'
global.antidelete = process.env.ANTI_DELETE || true
//━━━━━━━━━━━━━━━━━━━━━━━━//
// Bot Setting
global.botname = "Trashcore"
global.botversion = "1.6.0"
global.typebot = "Plugin"
global.session = "trashsession"
global.connect = true
global.statusview = process.env.AUTO_STATUS || true
global.antilinkgc = process.env.ANTILINK_GROUP || true
global.autoTyping = process.env.AUTO_TYPE || false
global.autoRecord = process.env.AUTO_RECORD || false
global.thumb = "https://files.catbox.moe/4ryp6k.jpg"
global.wagc = "https://chat.whatsapp.com/BPyIptm3ZH68y4pSPrLMyq?mode=r_t"
global.caption = "Trashcore media"
//━━━━━━━━━━━━━━━━━━━━━━━━//
// Sticker Marker
global.packname = process.env.PACK_NAME ||'𝐓𝐑𝐀𝐒𝐇𝐂𝐎𝐑𝐄'
global.packname = process.env.AUTHOR||'𝐏𝐀𝐂𝐊𝐒'
//━━━━━━━━━━━━━━━━━━━━━━━━//
// Respon Message
global.mess = {
    success: '✅ Done.',
    admin: '🚨 Admin only.',
    premium: '🆘must be a premium user.',
    botAdmin: '🤖 Make me admin first.',
    owner: '👑 Owner only.',
    OnlyGrup: '👥 Group only.',
    private: '📩 Private chat only.',
    wait: '⏳ Processing...',
    error: '⚠️ Error occurred.',
}
//━━━━━━━━━━━━━━━━━━━━━━━━//
// File Update
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update File 📁 : ${__filename}`)
delete require.cache[file]
require(file)
})
