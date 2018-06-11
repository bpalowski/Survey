$(document).ready(function(){
  $("form#info").submit(function(event){
    var first_name = $('input#first_name').val();
    var last_name = $('input#last_name').val();
    var first = parseInt($('select#question_1').val());
    var second = parseInt($('select#question_2').val());
    var third = parseInt($('select#question_3').val());
    var fourth = parseInt($('select#question_4').val());
    var fifth = parseInt($('select#question_5').val());
    if (first === 2) {
      $("#suggestion_1").show();
    }
    else if (second === 2) {
      $("#suggestion_2").show();
    }
    else if (third === 2 ){
      $("#suggestion_3").show();
    }
    else if (fourth === 2) {
      $("#suggestion_4").show();
    }
    else if (fifth === 2) {
      $("#suggestion_5").show();
    }
    else{
      $("#suggestion_6").show()
    }
    $('.first_name').text(first_name);
    $('.last_name').text(last_name);
    $("#reveal-on").hide();
    $("#reveal-off").show();
    event.preventDefault();
  });
});
