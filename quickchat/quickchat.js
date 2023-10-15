import { initializeApp } from "firebase/app";
import { onValue, set, ref, getDatabase, DataSnapshot } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDn4aqiCGJ83hcbhmOyVFwVuP91whsUKiU",
  authDomain: "mental-health-project-ae746.firebaseapp.com",
  databaseURL: "https://mental-health-project-ae746-default-rtdb.firebaseio.com",
  projectId: "mental-health-project-ae746",
  storageBucket: "mental-health-project-ae746.appspot.com",
  messagingSenderId: "804064066611",
  appId: "1:804064066611:web:5af95c6139f37f30b83746",
  measurementId: "G-X4FH6RXELF"
};

window.onload = function(){
  document.getElementById('counseleeButton').onclick = counseleeInit
  document.getElementById('counselorButton').onclick = counselorInit
}

let userType=''

const app = initializeApp(firebaseConfig);
const db = getDatabase(app)

let counselors;
let chats;

onValue(ref(db,'counselors'),(snapshot)=>{
  counselors = snapshot.val()
})
onValue(ref(db,'chats'),(snapshot)=>{
  chats = snapshot.val()
})

let userCounseleeChatId
let userCounseleeChat

function counseleeInit(){
  userType = 'counselee'
  let id = Math.floor(Math.random()*100000).toString()
  userCounseleeChatId = id
  document.getElementById("grid-container").style.display = 'none'
  document.getElementById("statusbox").style.display = 'block'


  userCounseleeChat = {
    "user":id,
    "messagePlace":1,
    "messages":{"0":"e"},
    "counselor":null
  }

  set(ref(db,'chats/'+userCounseleeChatId),userCounseleeChat)
  counseleeJoinChat(userCounseleeChatId)
}

function counseleeJoinChat(id){
  onValue(ref(db,'chats/'+id),(snapshot)=>{
    userCounseleeChat = snapshot.val()
    counseleeChatUpdated()
  })
  console.log('joined chat',id)
  document.getElementById('messagediv').style.display = 'block'
  document.getElementById('messagelistdiv').style.display = 'block'
  document.getElementById('status').innerHTML = 'Status: chat space created. Waiting for counselor...'

  document.getElementById('messagebox').oninput = (e)=>{
    let val = document.getElementById('messagebox').value

    if (val.includes('\n')){
      if (val.replaceAll('\n','').length > 0){
        console.log(val,val.replaceAll('\n','').length)
        userCounseleeChat.messages[userCounseleeChat.messagePlace] = 'Student: ' + val
        userCounseleeChat.messagePlace += 1
        set(ref(db,'chats/'+id),userCounseleeChat)
        document.getElementById('messagebox').value = ''    
      }else{
        document.getElementById('messagebox').value = val.replaceAll('\n','')
      }
    }
  }



  counseleeQueryForCounselor()
}

function counseleeQueryForCounselor(){
  for (let counselor in counselors){
    let c = counselors[counselor]
    if (c.available){
      let chatd = userCounseleeChat
      chatd.counselor = counselor
      c.available = false
      c.currentChat = userCounseleeChatId
      set(ref(db,'counselors/'+counselor),c)
      set(ref(db,'chats/'+userCounseleeChatId),chatd)
      document.getElementById('status').innerHTML = 'Status: chat in session, talk away!'
    }
  }
}

function counseleeChatUpdated(){
  if (userCounseleeChat.counselor){
    document.getElementById('status').innerHTML = 'Status: chat in session, talk away!'
  }
  if (userCounseleeChat.done){
    alert('chat ended')
    location.href = location.href
  }

  document.getElementById('messageslist').innerHTML = ''

  for (let message in userCounseleeChat.messages){
    if (message != '0'){
      let isStudent = userCounseleeChat.messages[message].split(':')[0] == 'Student'
      document.getElementById('messageslist').innerHTML += `<li style="text-align: ${ isStudent ? 'right' : 'left'};"><p class="msg ${isStudent ? "rightmsg" : ""}"><b>${userCounseleeChat.messages[message]}</b></p></li>`    
    }
    document.getElementById('messagelistdiv').scrollTop = document.getElementById('messagelistdiv').scrollHeight

  }
}




let userCounselor;
let userCounselorKey;
let userCounselorPath;
let userCounselorChat;

function counselorInit(){
  userType = 'counselor'
  let key = prompt("Enter your counselor password: ")

  if (key in counselors){
    document.getElementById("statusbox").style.display = 'block'
    document.getElementById("grid-container").style.display = 'none'
    userCounselorKey = key
    userCounselorPath = 'counselors/'+userCounselorKey
    onValue(ref(db,userCounselorPath),(snapshot)=>{
      userCounselor = snapshot.val()
      userCounselorUpdated()
    })
    userCounselor.online = true
    userCounselor.available = true
    set(ref(db,userCounselorPath),userCounselor)

    let chat = checkForOpenChats()
    if (chat.status == 1){
      let chatd = chat.data
      if (chat.key != 'none'){
        chatd.counselor = userCounselorKey
        userCounselor.available = false
        userCounselor.currentChat = chat.key
        set(ref(db,userCounselorPath),userCounselor)
        set(ref(db,'chats/'+chat.key),chatd)
        document.getElementById('status').innerHTML = 'Status: joined chat! Talk away!'
        //counselorJoinChat(userCounselor.currentChat)  
      }
    }else{
      document.getElementById('status').innerHTML = 'Status: Waiting for an open chat...'

    }
  }
}

function checkForOpenChats(){
  for (let chat in chats){
    console.log(chat,'chats/'+chat)
    if (chats[chat].counselor == null){
      return {'status':1,data:chats[chat],key:chat}
    }
  }
  return {'status':0}
}

function userCounselorUpdated(){
  if (userCounselor.currentChat != 'none'){
    counselorJoinChat(userCounselor.currentChat)
    document.getElementById('status').innerHTML = 'Status: chat in session, talk away!'
  }
}

function counselorJoinChat(chatKey){
  onValue(ref(db,'chats/'+chatKey),(snapshot)=>{
    userCounselorChat = snapshot.val()
    counselorChatUpdated()
  })
  console.log('joined chat',chatKey)
  document.getElementById('messagediv').style.display = 'block'
  document.getElementById('messagelistdiv').style.display = 'block'


  document.getElementById('messagebox').oninput = (e)=>{
    let val = document.getElementById('messagebox').value

    if (val.includes('\n')){
      if (val.replaceAll('\n','').length > 0){
        userCounselorChat.messages[userCounselorChat.messagePlace] = 'Counselor: ' + val
        userCounselorChat.messagePlace += 1
        set(ref(db,'chats/'+chatKey),userCounselorChat)
        document.getElementById('messagebox').value = ''    
      }else{
        document.getElementById('messagebox').value = val.replaceAll('\n','')
      }
    }
  }


}

function counselorChatUpdated(){
  document.getElementById('messageslist').innerHTML = ''

  if (userCounselorChat.done){
    userCounselor.currentChat = 'none'
    userCounselor.available = false
    userCounselor.online = false
    set(ref(db,'counselors/'+userCounselorKey),userCounselor)
    alert('chat ended')
    location.href = location.href
  }

  for (let message in userCounselorChat.messages){
    if (message != '0'){
      let isCounselor = userCounselorChat.messages[message].split(':')[0] == 'Counselor'
      document.getElementById('messageslist').innerHTML += `<li style="text-align: ${isCounselor ? 'right' : 'left'};"><p class="msg ${isCounselor ? "rightmsg" : ""}"><b>${userCounselorChat.messages[message]}</b></p></li>`
    }
    document.getElementById('messagelistdiv').scrollTop = document.getElementById('messagelistdiv').scrollHeight
  }
}

window.onbeforeunload = function(e){
  if (userType == 'counselor'){
    userCounselorChat.done = true
    set(ref(db,'chats/'+userCounselor.currentChat),userCounselorChat)
    userCounselor.currentChat = 'none'
    userCounselor.available = false
    userCounselor.online = false
    set(ref(db,'counselors/'+userCounselorKey),userCounselor)
  }else if (userType == 'counselee'){
    userCounseleeChat.done = true
    set(ref(db,'chats/'+userCounseleeChatId),userCounseleeChat)
  }
}