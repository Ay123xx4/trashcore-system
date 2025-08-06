const fs = require('fs')
const chalk = require('chalk')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


global.SESSION_ID = process.env.SESSION_ID || 'trashcore~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU9YdnNqcUtONVhralRjZ2diUHJiM2M5b2lwOHVPclIzN0tWREhYM0UwZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUIwMUt2YTVLbVdva0w2UGJoSXM0VXN5NU11WnBRd1E1aGx5YjR4OWpoND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzS2p0OHBraWVwazlWdVpUVC9XSXdMSnB0Y0QyUmZqenRkVmJ0ZG5mQ2x3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWdW54UWlYdlM2dlNXUURmdGdtWDRRNnFmZ20xZGxQMnhHTFRCYzhLdmpjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndGRUlrOUdFMTZjc0UzdTFjY0EySWVLZ09uSHNxejg1TkdTNU1zSlNxMnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJyVFRvUXo1YkRxd1Fjd0tZTVlUZUx5bXV2YVNRSmtrcG1aRElwZElVVWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0hFcExCejRERXI5UFhOdWk0dlhjVXdoRjJLRmMzZGxNa1M1Z3I0akxrMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNVEzdnEzQ3pWaEs3TThjdG91Ym1OQyt6K3ZkbTd6dEVuNGp3SEtlUEV3UT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ing1RUN0cnVhdWgzL0ZmSFJtMC9sakhpK2ZHbElyWFdGYWhoeDZWVzR4UnYwOEdQODRwZjI1VjNudFVhaVl3V015ak5QWktnNFIzd0M2SUNCN1JiRWpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY2LCJhZHZTZWNyZXRLZXkiOiJXTmtIVG5neG5wYXNmQkpUU09uMzh0MzhWOTh1MHp5eEcrdEF3dUlPM2prPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJmWWZFUEhEUFRwV19vWkhjV3Jwc1B3IiwicGhvbmVJZCI6ImQ3MWEyOTllLTIzMzgtNDlkYS1iNzY3LTQyNjk1NjcxY2M0MCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLZTlwRjhhTkF6K2IxTWlnWmt3bURqWE5JRXc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTkZrcHdiNWE0bExqVmpuYUdzVWhDalBWOXlRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlRSQVNIQk9UIiwibWUiOnsiaWQiOiIyMjE3NjYzMjY2NTA6OUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJzYW5kcmEiLCJsaWQiOiIyOTE4MDA0MTQyMDk1Mjo5QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSXVWNGMwRkVKRyt6TVFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMmNtcUh1cXlMckJ4d25JM012MHNhMWJvcmh5Q08rdVpXeVBEWjhZSFEzcz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiNGxKd2xhMVh2S2FYckZqb2dBUndkSmFHMU9xREFNeDNqTDFaWnkvcVJHZXlBZmdqZTI5ZElVckV6ekZ5N1k4c09YK1NwZ0VWUmd5YlNCNkd2aDhXQlE9PSIsImRldmljZVNpZ25hdHVyZSI6ImlpcGJuVVdGa0RoOERZTEczK0l2ckwzZHlTdDBRbVQrRVF2aUF2MmoyTUUyckNaWm9pWHJlcnUwbkQ1MEc4Mk5nZVR4d2Q1NlVhYnFNS0hRNUdoemdBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjIxNzY2MzI2NjUwOjlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZG5KcWg3cXNpNndjY0p5TnpMOUxHdFc2SzRjZ2p2cm1Wc2p3MmZHQjBONyJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU0NDcyMjIyLCJsYXN0UHJvcEhhc2giOiIyUDFZaGYifQ==' 
// Owner Setting
global.xprefix = process.env.BOT_PREFIX ||'.'
global.owner = ["221766326650",]
global.error = ["6666",]
global.ownername = process.env.OWNER_NAME ||'Sandra'
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
