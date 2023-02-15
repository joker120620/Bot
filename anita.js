// BASE PARA CREADORES DE BOTS 

// CREDITOS : CLOVERS MODS
// CREDITOS : JULS MODDERS

// CONSTANTES DE NODULES 
const mysql = require('mysql');
const { 
default: WAConnection,
downloadContentFromMessage, 
emitGroupParticipantsUpdate, 
emitGroupUpdate,
generateWAMessageContent, 
generateWAMessage, 
makeInMemoryStore, 
prepareWAMessageMedia, 
MediaType, 
areJidsSameUser, 
WAMessageStatus, 
AuthenticationState, 
GroupMetadata, 
initInMemoryKeyStore,
getContentType, 
MiscMessageGenerationOptions, 
useSingleFileAuthState, 
BufferJSON, 
WAMessageProto, 
MessageOptions, 
WAFlag, WANode,	
WAMetric,	
ChatModification, 
MessageTypeProto, 
WALocationMessage, 
ReconnectMode, 
WAContextInfo, 
proto,	
WAGroupMetadata, 
ProxyAgent,	
waChatKey, 
MimetypeMap, 
MediaPathMap, 
WAContactMessage, 
WAContactsArrayMessage, 
WAGroupInviteMessage, 
WATextMessage, 
WAMessageContent, 
WAMessage, 
BaileysError, 
WA_MESSAGE_STATUS_TYPE, 
MediaConnInfo, 
URL_REGEX, 
WAUrlInfo, 
WA_DEFAULT_EPHEMERAL, 
WAMediaUpload, 
mentionedJid, 
processTime, 
Browser, 
MessageType, 
Presence, 
WA_MESSAGE_STUB_TYPES, 
Mimetype, 
relayWAMessage,	
Browsers, 
GroupSettingChange, 
delay, 
DisconnectReason, 
WASocket, 
getStream, 
WAProto, 
isBaileys, 
AnyMessageContent, 
fetchLatestBaileysVersion 
} = require('@adiwajshing/baileys');

const fs = require('fs');
const P = require('pino');
const yts = require("yt-search");
const cfonts = require("cfonts");
const chalk = require('chalk')
const axios = require('axios');
const speed = require("performance-now");
const { getBuffer, getRandom, getExtension } = require('./archivos/lib/functions.js');
const { fetchJson } = require("./archivos/lib/fetcher")
// CONSTANTES SETTING //

var prefix = '/' //prefijo
var NombreBot = 'check Bot' // nombre del bot 
var Creador = "by juanda xd" // No cambiar

// BANNER //

const color = (text, color) => {
return !color ? chalk.white(text) : chalk.keyword(color)(text)
}
const banner = cfonts.render(('check|Bot'), {
font : "block",
align: "center",
colors: ["blue","white"]
})

// CONEXION DEL BOT

const store = makeInMemoryStore({ logger: P().child({ level: 'debug', stream: 'linhaDoTempo'}) })
const { state, saveState } = useSingleFileAuthState('./cache/anita.json')

async function startJuls() {
const { version, isLatest } = await fetchLatestBaileysVersion()
console.log(`💤..Conectando..!!`)
console.log(banner.string)
console.log("..check Bot..\nConectado Exitosamente..")
const anita = WAConnection({
logger: P({ level: "silent" }),
printQRInTerminal: true,
browser: ['check', 'Juan', '1.0.0'],
auth: state
})
anita.ev.on ("creds.update", saveState)
store.bind(anita.ev)
anita.ev.on("chats.set", () => {
console.log("Tem conversas", store.chats.all())
})
anita.ev.on("contacts.set", () => {
console.log("Tem contatos", Object.values(store.contacts))
})
anita.ev.on("connection.update", (update) => {
const { connection, lastDisconnect } = update
if(connection === "close") {
const shouldReconnect = (lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut
console.log("😪..Conección inestable..", lastDisconnect.error, "Intentando conectar...", shouldReconnect);
if(shouldReconnect) {
startJuls()
}
} else if(connection === "open") {
console.log(" Bot funciona correctamente!!!")
}
})
//*******************************************//

anita.ev.on('messages.upsert', async (m) => {
function getGroupAdmins(participants) {
admins = []
for (let i of participants) {
if(i.admin == 'admin') admins.push(i.id)
if(i.admin == 'superadmin') admins.push(i.id)
}
return admins
}
  try {
const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}
const getExtension = async (type) => {
return await mimetype.extension(type)
 }
const getBuffer = (url, options) => new Promise(async (resolve, reject) => { 
options ? options : {}
await axios({method: "get", url, headers: {"DNT": 1, "Upgrade-Insecure-Request": 1}, ...options, responseType: "arraybuffer"}).then((res) => {
resolve(res.data)
}).catch(reject)
})
//***************[ FUNCIONES ]***************//
const info = m.messages[0]
  if (!info.message) return 
  if (info.key && info.key.remoteJid == 'status@broadcast') return
const type = Object.keys(info.message)[0] == 'senderKeyDistributionMessage' ? Object.keys(info.message)[2] : (Object.keys(info.message)[0] == 'messageContextInfo') ? Object.keys(info.message)[1] : Object.keys(info.message)[0]
const content = JSON.stringify(info.message);
const altpdf = Object.keys(info.message)
global.prefix
const from = info.key.remoteJid
var body = (type === 'conversation') ? info.message.conversation : (type == 'imageMessage') ? info.message.imageMessage.caption : (type == 'videoMessage') ? info.message.videoMessage.caption : (type == 'extendedTextMessage') ? info.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? info.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? info.message.templateButtonReplyMessage.selectedId : ''
const budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''
var pes = (type === 'conversation' && info.message.conversation) ? info.message.conversation : (type == 'imageMessage') && info.message.imageMessage.caption ? info.message.imageMessage.caption : (type == 'videoMessage') && info.message.videoMessage.caption ? info.message.videoMessage.caption : (type == 'extendedTextMessage') && info.message.extendedTextMessage.text ? info.message.extendedTextMessage.text : ''
const isGroup = info.key.remoteJid.endsWith('@g.us')
const sender = isGroup ? info.key.participant : info.key.remoteJid
const groupMetadata = isGroup ? await anita.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const pushname = info.pushName ? info.pushName : ''
const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
const botNumber = anita.user.id.split(':')[0]+'@s.whatsapp.net'
const args = body.trim().split(/ +/).slice(1);
const isCmd = body.startsWith(prefix);
const command = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null 
const enviar = (text) => {
  anita.sendMessage(from, {text: text}, {quoted: info})
}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? anita.sendMessage(from, {text: teks.trim(), mentions: memberr}) : anita.sendMessage(from, {text: teks.trim(), mentions: memberr})}

  //isQuoted 
const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isProduct = type == 'productMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage')
typeMessage = body.substr(0, 50).replace(/\n/g, '')
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isProduct) typeMessage = "Product"
const isQuotedMsg = type === 'extendedTextMessage' && content.includes('textMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')
const getFileBuffer = async (mediakey, MediaType) => {
const stream = await downloadContentFromMessage(mediakey, MediaType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk]) }
return buffer}
const isGroupAdmins = groupAdmins.includes(sender) || false 
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
//*******************************************//
q = args.join(" ")
const sendBtext = async (id, text1, desc1, but = [], vr) => {
buttonMessage = { text: text1, footer: desc1, buttons: but, headerType: 1 }
anita.sendMessage(id, buttonMessage, {quoted: vr}) }
const sendBimg = async (id, img1, text1, desc1, but = [], vr) => {
buttonMessage = { image: {url: img1}, caption: text1, footerText: desc1, buttons: but, headerType: 4 }
anita.sendMessage(id, buttonMessage, {quoted: vr}) }
const sendBimgT = async (id, img1, text1, desc1, but = [], vr) => { templateMessage = { image: {url: img1}, caption: text1, footer: desc1, templateButtons: but, }
anita.sendMessage(id, templateMessage, {quoted: vr}) }
const sendGifButao = async (id, gif1, text1, desc1, but = [], vr) => { buttonMessage = { video: {url: gif1}, caption: text1, gifPlayback: true, footerText: desc1, buttons: but, headerType: 4 }
anita.sendMessage(id, buttonMessage, {quoted: vr}) }
//*******************************************//

const envMen= (texto)=>{
 anita.sendMessage(from,{text : texto}, {quoted : doc})
}
const envDes=(texto, des)=>{
  anita.sendMessage(`${des}@s.whatsapp.net` ,{text : texto} )
}

const conexion= mysql.createConnection({
 host : 'rdswssh45zep1dpvgvsjvpo.mysql.rds.aliyuncs.com',
 database : 'game',
 user : 'jtp',
 password : 'crgGodH8WaYAXgtu',
});
const recordar=()=>{
  conexion.query('SELECT * FROM usuario WHERE est_usu= "0" ', function (error, results, fields) {
    //let result =Object.values(results)
    for(let i=0;i<results.length;i++){
      if(!results[i].rec_usu){
        let txt=`Hola ${results[i].use_usu}. Faltan 3 días para que se termine tu mensualidad, no olvides renovarla para que puedas seguir utilizando nuestro servicio. Es muy fácil, solo acércate a nuestra oficina y efectúa el pago. \nPara mas opciones escribe \n/menu`
      conexion.query(`UPDATE usuario SET rec_usu = "1" WHERE tel_usu ="${results[i].tel_usu}" `, function (error){
        if(error)
        throw error
      }) 
      
      envDes(txt, results[i].tel_usu )
      }
      
      
    }
} 
) 
}

const revEst=(tel)=>{
  
  conexion.query(`SELECT * FROM usuario WHERE tel_usu= '${tel}' `, function (error, results, fields) {
    if (error)
        throw error;

    if (results.length==0){ 
    let txt=`Hola ${pushname}. no estas registrado en la base de datos. Ponte en contacto con el administrador... 😔`
    envMen(txt);
    console.log(txt)
   
  }else {
    let estado="sin consignar❌"
      if(results[0].est_usu==1){
       estado="Consignada✅"
      }
    let txt =`\nNombre:  ${results[0].use_usu} \nNumero telefónico :  ${tel}  \nMensualidad: ${estado} `
    envMen(txt);
    console.log(txt)
  }
  }) ;
 
};


let help=()=>{
  const str = budy
  const msj = str.substring(5)
  if(msj.length>0){
    let txt =`Help: \nDe: ${sender.split('@')[0]} (${pushname}) \n--- Mensaje - - :\n${msj}`
    let des="573107222341"
  envDes(txt,des)
  enviar("Mensaje enviado, para ver mas opciones escribe \n/menu ")
  }else{
    const ayudaTxt="Con este comando le enviaras un mensaje directo al administrador. Ejemplo de uso:\n-------------------\n/help Buenos días \n-------------------"
    enviar(ayudaTxt) 
  }
  
}
// VERIFICACIONES 

const live = {key : {participant : '0@s.whatsapp.net'},message: {liveLocationMessage: {}}} 
const imgm = {key : {participant : '0@s.whatsapp.net'},message: {imageMessage: {}}}
const vid = {key : {participant : '0@s.whatsapp.net'},message: {videoMessage: {}}}
const contato = {key : {participant : '0@s.whatsapp.net'},message: {contactMessage:{displayName: `${pushname}`}}}
const doc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage:{}}}

if(budy== `hola`) {
enviar(`\nHola ${pushname}\n Este es el menu: \n/estado\n/help` )
  
}else if(budy=='Hola'){
enviar(`\nHola ${pushname}\n Este es el menu: \n/estado\n/help`) 
} 
//=====\\

// RESPUESTAS POR COMANDOS \\
respuesta = {
espere: " ..enviando.. ",
aguarde: "..Espere Porfavor.. ",
dono: ".. Este comando es Privado.. ",
grupos: ".. Este comando es para grupos.. ",
privado: ".. Este comando es para chats.. ",
admin: " ... Este comando es solo para admins..",
botadmin: " .. Este comando funciona si y solo si, el bot es admin ",
error: ".. Error, intente nuevamente.."
}


// MENSAJES EN TERMUX 

 if (!isGroup && isCmd) console.log(`${color('╭━━━━━━━━━━━━━━━━━━━━━━━━━╮', 'blue')}\n${color('┃', 'blue')} ${color('Número:', 'blue')} ${color(sender.split('@')[0], 'white')}\n${color('┃', 'blue')} ${color('Nombre:', 'blue')} ${color(pushname, 'white')}\n${color('┃', 'blue')} ${color('command:', 'blue')} ${color(command)}\n${color('┃', 'blue')} ${color('Palabras:', 'blue')} ${color(budy.length, 'white')}\n${color('╰━━━━━━━━━━━━━━━━━━━━━━━━━╯', 'blue')}`)
 if (!isGroup && !isCmd) console.log(`${color('╭━━━━━━━━━━━━━━━━━━━━━━━━━╮', 'blue')}\n${color('┃', 'blue')} ${color('Número:', 'blue')} ${color(sender.split('@')[0], 'white')}\n${color('┃', 'blue')} ${color('Nombre:', 'blue')} ${color(pushname, 'white')}\n${color('┃', 'blue')} ${color('command:', 'blue')} ${color('No', 'blue')}\n${color('┃', 'blue')} ${color('Palabras:', 'blue')} ${color(budy.length, 'white')}\n${color('╰━━━━━━━━━━━━━━━━━━━━━━━━━╯', 'blue')}`)
 if (isGroup && isGroup) console.log(`${color('╭━━━━━━━━━━━━━━━━━━━━━━━━━╮', 'blue')}\n${color('┃', 'blue')} ${color('Número:', 'blue')} ${color(sender.split('@')[0], 'white')}\n${color('┃', 'blue')} ${color('Nombre:', 'blue')} ${color(pushname, 'white')}\n${color('┃', 'blue')} ${color('command:', 'blue')} ${color(command)}\n${color('┃', 'blue')} ${color('Palabras:', 'blue')} ${color(budy.length, 'white')}\n${color('┃', 'blue')} ${color('Grupo:', 'blue')} ${color(groupName, 'white')}\n${color('╰━━━━━━━━━━━━━━━━━━━━━━━━━╯', 'blue')}`)
 if (!isGroup && isGroup) console.log(`${color('╭━━━━━━━━━━━━━━━━━━━━━━━━━╮', 'blue')}\n${color('┃', 'blue')} ${color('Número:', 'blue')} ${color(sender.split('@')[0], 'white')}\n${color('┃', 'blue')} ${color('Nombre:', 'blue')} ${color(pushname, 'white')}\n${color('┃', 'blue')} ${color('Horário:', 'blue')} ${color(time, 'white')}\n${color('┃', 'blue')} ${color('command:', 'blue')} ${color('Não', 'blue')}\n${color('┃', 'blue')} ${color('Palabras:', 'blue')} ${color(budy.length, 'white')}\n${color('┃', 'blue')} ${color('Grupo:', 'blue')} ${color(groupName, 'white')}\n${color('╰━━━━━━━━━━━━━━━━━━━━━━━━━╯', 'blue')}`)


// CASES 

switch(command){
 case "menu"  :
  envMen(`\n---${pushname}---\nMenu: \n/estado\n/help` )
 break
 case "estado" :
  revEst(sender.split('@')[0])
  break
 case "/init_bot_record" :
   recordar()
  break
  case "help":
    help()
    break


default:

}

// COMANDOS SIN PREFIJOS
} catch (e) {
console.log(e)
}
fs.watchFile('./anita.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log(color("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\a Bot FUE MODICADO\n ..REINICIANDO INDEX..", "blue"));
process.exit()
}
})
})

}


startJuls()