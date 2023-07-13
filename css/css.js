

let chatbox_height = 130+'px';
let chatbox_imgdiv_size =  80+'px';
let chatbox_textdiv_location_left =  150 +'px'; // iddiv / textdiv 들여쓰기수치
let chatbox_iddiv_font_size =  1.23 +'em';
let chatbox_textdiv_font_size = 1 +'em';







for (let i of document.querySelectorAll('#chatbox > *')) {
  i.style.height = chatbox_height;
}
for (let i of document.querySelectorAll('#chatbox > div .imgdiv')) {
  i.style.width = chatbox_imgdiv_size;
  i.style.height = chatbox_imgdiv_size;
}
for (let i of document.querySelectorAll('#chatbox > div .textdiv')) {
  i.style.left = chatbox_textdiv_location_left;
}
for (let i of document.querySelectorAll('#chatbox > div .iddiv')) {
  i.style.left = chatbox_textdiv_location_left;
}
for (let i of document.querySelectorAll('#chatbox > div .iddiv')) {
  i.style.fontSize = chatbox_iddiv_font_size;
}
for (let i of document.querySelectorAll('#chatbox > div .textdiv')) {
  i.style.fontSize = chatbox_textdiv_font_size;
}
