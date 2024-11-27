import { toPTT } from '../lib/converter.js'

let handler = async (m, { conn, usedPrefix, command }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
  if (!/video|audio/.test(mime))
    throw `✳️ Reply to the audio you want to convert to voice memo with :\n *${usedPrefix + command}*\n\n❤️𝐑_𝐎_𝐁_𝐈_𝐍❤️`
  let media = await q.download?.()
  if (!media) throw '❎ Failed to download media\n\n❤️𝐑_𝐎_𝐁_𝐈_𝐍❤️'
  let audio = await toPTT(media, 'mp4')
  if (!audio.data) throw '❎ Error converting\n\n❤️𝐑_𝐎_𝐁_𝐈_𝐍❤️'
  conn.sendFile(m.chat, audio.data, 'audio.mp3', '', m, true, { mimetype: 'audio/mp4' })
}
handler.help = ['toav']
handler.tags = ['fun']

handler.command = ['toav', 'tovn']

export default handler
