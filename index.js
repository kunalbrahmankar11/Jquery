// $(document).ready(function(){       
//     console.log("hello world");

//     $('#btn1').click(function(){
        
//         $("#container").hide();
//     });

//     $('#btn2').click(function(){
        
//         $("#container").show();
//     });

// });
$(document).ready(function(){
    $("#btn1").click(function(){
      $("#container").fadeOut(2000,function(){
        alert("bhai bahot easy hai!")
      });
    });
    $("#btn2").click(function(){
        $("#container").show();
      });

  });
