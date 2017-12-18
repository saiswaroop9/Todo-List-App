// checking specific todos by clicking
$("ol").on("click", "li", function(){
$(this).toggleClass("completed");
});
//click on X to delete todolist
$("ol").on("click", "span", function(event){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
  event.stopPropagation();// this will stop event bubbling.
});

$("input[type='text']").keypress(function(event) {
  if(event.which===13){
    //grabbing new todo text from input
    var todoText = $(this).val();
    $(this).val("");
    //create a new li and add to ul
    $("ol").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
  }
});

$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle()
});
