let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  let name = conn.getName(m.sender)
  let taguser = '@' + m.sender.split('@s.whatsapp.net')[0]
  let av = `./Assets/mp3/${pickRandom(['Hiruu s', 'Sihilel'])}.mp3`

  m.reply(`Hello ${taguser} ❤️𝐑_𝐎_𝐁_𝐈_𝐍❤️ IS AVAILABLE  type .menu `)
  conn.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
}

handler.customPrefix = new RegExp(
  '^[' +
    (opts['prefix'] || '‎xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-').replace(
      /[|\\{}()[\]^$+*?.\-\^]/g,
      '\\$&'
    )
handler.command = /^(bot|firemd)$/i

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
    }
