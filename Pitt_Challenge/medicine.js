$(document).ready(function(){
    $('#intro').hide();
    $('#med_Table').hide();
    $('#take').hide();
    $('#details').hide();
    $('#details2').hide();
    $('#details3').hide();
    $('#intro').fadeIn(2000, function(){
        $('#med_Table').fadeIn(500);
    }); 
});

$(document).ready(function(){
   $('.table_row').click(function(){
       $('.table_row').css('background-color', 'white');
       $(this).css('background-color','lightgray');
       $('#details').hide();
       $('#details2').hide();
       $('#details3').hide();
       
       var tableData = $(this).children("td").map(function() {
        return $(this).text();
    }).get();
        delete localStorage.getItem('ailment');
       console.log(tableData);
       
       var index = sessionStorage.getItem('index');
       var medicines = JSON.parse(localStorage.getItem('medicines'));
       for(i = 0; i < medicines[index][1].length; i++){
           console.log(i + ' ' + medicines[index][1][i][0])
           if(tableData[0] == medicines[index][1][i][0]){
               sessionStorage.setItem('index2', i)
               sessionStorage.setItem('ailment', medicines[index][1][i][4]);
               break;
           }
       }
       console.log(sessionStorage.getItem('ailment'))
       document.getElementById('feeling').innerHTML = 'How has your ' + sessionStorage.getItem('ailment') + ' been?';
       
       
      $('#take').show(); 
   }); 
});

$(document).ready(function(){
   $('#take_button').click(function(){
        $('#details').fadeIn(500); 
        $(this).css('background-color', '#5CB85C')
        
        var index = sessionStorage.getItem('index');
        var index2 = sessionStorage.getItem('index2');
        var medicines = JSON.parse(localStorage.getItem('medicines'));
        var amount = parseInt(medicines[index][1][index2][3]) - 1;
        medicines[index][1][index2][3] = amount;
       localStorage.setItem('medicines', JSON.stringify(medicines));

   }); 
});

$(document).ready(function(){
    $('#button1').hover(function(){
        $(this).css('background-color', '#5CB85C')  
    }, function(){
        $(this).css('background-color', '#ffffff')
    });  
    $('#button1').click(function(){
        $(this).css('background-color', '#5CB85C');
        $('#button5').css('background-color', '#ffffff');
        $('#button2').css('background-color', '#ffffff');
        $('#button3').css('background-color', '#ffffff');
        $('#button4').css('background-color', '#ffffff');
        $('#button1').unbind('mouseleave mouseenter');
        $('#button2').unbind('mouseleave mouseenter');
        $('#button3').unbind('mouseleave mouseenter');
        $('#button4').unbind('mouseleave mouseenter');
        $('#button5').unbind('mouseleave mouseenter');
        $('#details2').show();
    });
});

$(document).ready(function(){
    $('#button2').hover(function(){
        $(this).css('background-color', '#5CB85C');
        $('#button1').css('background-color', '#5CB85C');
    }, function(){
        $(this).css('background-color', '#ffffff');
        $('#button1').css('background-color', '#ffffff');
    });
    $('#button2').click(function(){
        $(this).css('background-color', '#5CB85C');
        $('#button1').css('background-color', '#5CB85C');
        $('#button5').css('background-color', '#ffffff');
        $('#button3').css('background-color', '#ffffff');
        $('#button4').css('background-color', '#ffffff');
        $('#button1').unbind('mouseleave mouseenter');
        $('#button2').unbind('mouseleave mouseenter');
        $('#button3').unbind('mouseleave mouseenter');
        $('#button4').unbind('mouseleave mouseenter');
        $('#button5').unbind('mouseleave mouseenter');
        $('#details2').show();
    });
});

$(document).ready(function(){
    $('#button3').hover(function(){
        $(this).css('background-color', '#5CB85C');
        $('#button1').css('background-color', '#5CB85C');
        $('#button2').css('background-color', '#5CB85C');
    }, function(){
        $(this).css('background-color', '#ffffff');
        $('#button1').css('background-color', '#ffffff');
        $('#button2').css('background-color', '#ffffff');
    });
    $('#button3').click(function(){
        $(this).css('background-color', '#5CB85C');
        $('#button1').css('background-color', '#5CB85C');
        $('#button2').css('background-color', '#5CB85C');
        $('#button5').css('background-color', '#ffffff');
        $('#button4').css('background-color', '#ffffff');
        $('#button1').unbind('mouseleave mouseenter');
        $('#button2').unbind('mouseleave mouseenter');
        $('#button3').unbind('mouseleave mouseenter');
        $('#button4').unbind('mouseleave mouseenter');
        $('#button5').unbind('mouseleave mouseenter');
        $('#details2').show();
    });
});

$(document).ready(function(){
    $('#button4').hover(function(){
        $(this).css('background-color', '#5CB85C');
        $('#button1').css('background-color', '#5CB85C');
        $('#button2').css('background-color', '#5CB85C');
        $('#button3').css('background-color', '#5CB85C');
    }, function(){
        $(this).css('background-color', '#ffffff');
        $('#button1').css('background-color', '#ffffff');
        $('#button2').css('background-color', '#ffffff');
        $('#button3').css('background-color', '#ffffff');
    });
    $('#button4').click(function(){
        $(this).css('background-color', '#5CB85C');
        $('#button1').css('background-color', '#5CB85C');
        $('#button2').css('background-color', '#5CB85C');
        $('#button3').css('background-color', '#5CB85C');
        $('#button5').css('background-color', '#ffffff');   
        $('#button1').unbind('mouseleave mouseenter');
        $('#button2').unbind('mouseleave mouseenter');
        $('#button3').unbind('mouseleave mouseenter');
        $('#button4').unbind('mouseleave mouseenter');
        $('#button5').unbind('mouseleave mouseenter');
        $('#details2').show();
    });
});

$(document).ready(function(){
    $('#button5').hover(function(){
        $(this).css('background-color', '#5CB85C');
        $('#button1').css('background-color', '#5CB85C');
        $('#button2').css('background-color', '#5CB85C');
        $('#button3').css('background-color', '#5CB85C');
        $('#button4').css('background-color', '#5CB85C');        
    }, function(){
        $(this).css('background-color', '#ffffff');
        $('#button1').css('background-color', '#ffffff');
        $('#button2').css('background-color', '#ffffff');
        $('#button3').css('background-color', '#ffffff');
        $('#button4').css('background-color', '#ffffff');
    });
    $('#button5').click(function(){
        $(this).css('background-color', '#5CB85C');
        $('#button1').css('background-color', '#5CB85C');
        $('#button2').css('background-color', '#5CB85C');
        $('#button3').css('background-color', '#5CB85C');
        $('#button4').css('background-color', '#5CB85C'); 
        $('#button1').unbind('mouseleave mouseenter');
        $('#button2').unbind('mouseleave mouseenter');
        $('#button3').unbind('mouseleave mouseenter');
        $('#button4').unbind('mouseleave mouseenter');
        $('#button5').unbind('mouseleave mouseenter');
        $('#details2').show();
    });
});

$(document).ready(function(){
    $('#worse').click(function(){
        $(this).css('background-color', '#6f3232');
        $('#better').css('background-color', '#ffffff');
        $('#details3').show();
    });
    $('#worse').click(function(event){
       event.preventDefault();
        $('html, body').animate({scrollTop: '2000px'}, 1000); 
    });
}); 

$(document).ready(function(){
    $('#better').click(function() {
        $(this).css('background-color', '#5CB85C');
        $('#worse').css('background-color', '#ffffff');
        $('#details3').show(); 
    });
    $('#better').click(function(event){
       event.preventDefault();
        $('html, body').animate({scrollTop: '2000px'}, 1000); 
    });
});
$(document).ready(function(){
    $('#submit').click(function() {
        window.location.href = 'medicine.html'
    });
});
