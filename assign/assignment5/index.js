var topic = document.getElementById('topic1');
var comment = document.getElementById('comment-1');
var comment2 = document.getElementById('comment-2');
var text = document.getElementById('text1');

var i = 1;

function postFunction(){

    input = text.value;

   if(i == 1) {
    topic.innerHTML = input;
    i++;
   }

   else if(i == 2){
    comment.innerHTML = input;
    i++;
   }

   else if(i == 3){
    comment2.innerHTML = input;
    i++;
   }
   else if(input == ''){
     alert = ('Again')
   }

   text.value = '';
}


function clearFunction(){
  document.getElementById('topic1').innerHTML = '';
  document.getElementById('comment-1').innerHTML = '';
  document.getElementById('comment-2').innerHTML = '';
  i = 1;
}