$(function() {

  $("form").submit(function(event) {
    event.preventDefault();
    //var results = [$("#q1").val(), $("#q2").val(), $("#q3").val(), /*$("#q4").val(), $("#q5").val(),*/ $("#q6").val(), $("#q7").val()];
    /*var results = parseInt($("#q1").val() + $("#q2").val() + $("#q3").val() + $("#q6").val() + $("#q7").val());
    console.log(results);

    for (var i = 0; i < results; i++) {
      if ()
    }*/

    var responses = [  [ [1, 2], [3, 4], [5, 6] ], [ [7, 8], [9, 10], [11, 12] ]  ];
    alert(responses[parseInt($("#q1").val())][parseInt($("#q2").val())][parseInt($("#q3").val())]);


    /*var responses = [  [ [alert("sadfasdfa"), 2], [3, 4], [5, 6] ], [ [7, 8], [9, 10], [11, 12] ]  ];
    responses[parseInt($("#q1").val())][parseInt($("#q2").val())][parseInt($("#q3").val())];*/


  /*if ($("#q2").val() === "1" && $("#q7").val() === "1")  {
    alert("11");
  } else if ($("#q2").val() === "1" && $("#q7").val() === "2")  {
    alert("12");
  } else if ($("#q2").val() === "1" && $("#q7").val() === "3")  {
    alert("13");
  } else if ($("#q2").val() === "2" && $("#q7").val() === "1")  {
    alert("21");
  } else if ($("#q2").val() === "2" && $("#q7").val() === "2")  {
    alert("22");
  } else if ($("#q2").val() === "2" && $("#q7").val() === "3")  {
    alert("23");
  } else if ($("#q2").val() === "3" && $("#q7").val() === "1")  {
    alert("31");
  } else if ($("#q2").val() === "3" && $("#q7").val() === "2")  {
    alert("32");
  } else if ($("#q2").val() === "3" && $("#q7").val() === "3")  {
    alert("33");
  } else {
  }*/
});
});
