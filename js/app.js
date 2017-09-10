var arr=[];
//On Load function
$("document").ready(function(){
$("#getText").on('click',function(){
  $(".banner").html("Please Wait...");
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
   $('#main').html("");
   $(".banner").hide();
  //  $(".banner").html("<h2>Post</h2>");
   display();
}
function failAlert(){
  console.log("fail");
  $('#main').html("Could not fetch content please check your internet connection.");
}

function display(){
  for(var i=0; i<arr.length; i++){
    var ele="<div class='well'><div class='row'><div class='col-xs-10'><p><strong>"+arr[i].title+"</strong></p>"+"<p>"+arr[i].body+'</p></div><div class="col-xs-2"><button type="button" class="btn btn-large btn-danger" id="getText1" onclick="del('+i+')">Delete<i class="glyphicon glyphicon-trash"></i></button></div></div></div>';
    $('#main').append(ele);
   } 
}

function del(id){
  if(confirm("Do you want to delete ?")){
  arr.splice(id,1);
  alert("The post has been deleted.");
  $('#main').html("");
  console.log(arr);
  display();
}}