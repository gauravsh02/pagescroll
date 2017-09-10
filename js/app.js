var arr=[];
//On Load function
$("document").ready(function(){
$("#getText").on('click',function(){
  getText();
})
 }
 );

//Getting Data
var getText = function (){
  $.getJSON("http://localhost/api").done(dat).fail(failAlert); 
}
function dat(data){
  console.log("inside dat");
  var ele = "";
  for(var i=0; i<20; i++){
    arr[i]=data[i];
   }
   $(".banner").hide();
   display();
}
function failAlert(){
  console.log("fail");
  $('#main').html("Could not fetch content please check your internet connection.");
}

function display(){
  for(var i=0; i<arr.length; i++){
    var ele="<div class='well'><p><strong>"+arr[i].title+"</p></strong>"+"<p>"+arr[i].body+'</p><button type="button" class="btn btn-large btn-danger" id="getText" onclick="del('+i+')">Delete</button></div>';
    $('#main').append(ele);
   } 
}

function del(id){
  if(confirm("Do you want to delete ?")){
  arr.splice(id,1);
  $('#main').html("");
  console.log(arr);
  display();
}}