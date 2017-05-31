
var sign;
var operatorSign;
var c;
var score = 0;
var level = 1;
var missed = 0;
var cLength;
var countdowntimer = 0;
//var has_focus = false;
var t;

var multiply = function(a, b) {
    return a * b;
}
var subtract = function(a, b) {
    return a - b;
}
var add = function(a, b) {
    return a + b;
}
var divide = function(a, b) {
    return a / b;
}

   var typed;
   function typing() {
   	typed = $('.answer').val();
   	if (typed.length == cLength) {
   		checkAnswer();
	}
   }
//button one click
function one_click(){
	document.getElementById("youranswer").value += 1;
	typing();
	
}

//button two click
function two_click(){
	document.getElementById("youranswer").value += 2;
	typing();
	
}

//button three click
function three_click(){
	document.getElementById("youranswer").value += 3;
	typing();
	typing();
}

//button four click
function four_click(){
	document.getElementById("youranswer").value += 4;
	typing();
}

//button five click
function five_click(){
	document.getElementById("youranswer").value += 5;
	typing();
}

//button six click
function six_click(){
	document.getElementById("youranswer").value += 6;
	typing();
}

//button seven click
function seven_click(){
	document.getElementById("youranswer").value += 7;
	typing();
}

//button eight click
function eight_click(){
	document.getElementById("youranswer").value += 8;
	typing();
}

//button nine click
function nine_click(){
	document.getElementById("youranswer").value += 9;
	typing();
}

//button zero click
function zero_click(){
	document.getElementById("youranswer").value += 0;
	typing();
}

//button backspace click
function backspace(){
    var current = document.getElementById("youranswer").value;
    var sliced = current.slice(0,(current.length - 1))
    document.getElementById("youranswer").value = sliced;
}

  function Timer(){

      t = setInterval(function addone(){

                                    countdowntimer += 1;
                                   document.getElementById("timer").innerHTML = countdowntimer;
                                    if(countdowntimer == 10){
                                    	// alert("Time up, missed point increase");
                                    	document.getElementById("person").style.display = "none";
                                        document.getElementById("misser").style.display = "block";
                                        missed += 1;
                                        document.getElementById("missed").innerHTML = missed;
                                        clearInterval(t);
                                        countdowntimer = 0;
                                        Timer();
                                        var error = setTimeout(function hideerror(){
                                        	document.getElementById("misser").style.display = "none";
                                        	document.getElementById("person").style.display = "block";
                                        },500)

                                    }
                                   },1000) ;

  }


var Maths = function(){
    var first = Math.ceil(Math.random() * 6);
    var two = Math.ceil(Math.random() * 6);
    sign = Math.floor(Math.random() * 4);
    if (level > 19 && level < 40){
        first = Math.ceil(Math.random() * 10);
        two = Math.ceil(Math.random() * 10);
    }else if (level > 40 && level < 60){
        first = Math.ceil(Math.random() * 12);
        two = Math.ceil(Math.random() * 12);
    }else if (level > 60 && level < 80){
        first = Math.ceil(Math.random() * 15);
        two = Math.ceil(Math.random() * 15);
    }else if (level > 80 && level < 100){
        first = Math.ceil(Math.random() * 18);
        two = Math.ceil(Math.random() * 18);
    }else if (level >= 100){
        first = Math.ceil(Math.random() * 20);
        two = Math.ceil(Math.random() * 20);
    }

  function checkDivisibility(){
       if(sign == 3 && first % two != 0){
      // return false;
       first = Math.ceil(Math.random() * 3);
       two = Math.ceil(Math.random() * 3);
   }
        }

   if(sign == 3 && first % two != 0){
       first = Math.ceil(Math.random() * 3);
       two = Math.ceil(Math.random() * 3);
        checkDivisibility();
   }

      if(sign == 3 && two > first){
       var three = two;
       var four = first;
       first = three;
       two = four;
          checkDivisibility();
   }

     if(sign == 1 && two > first){
       var three = two;
       var four = first;
       first = three;
       two = four;
   }


    switch(sign){
    case 0:
       c =  multiply(first, two);
            operatorSign = "*";
          //  alert(c);
        break;
    case 1:
         c = subtract(first, two);
            operatorSign = "-";
         //   alert(c);
        break;
    case 2:
      c = add(first, two);
            operatorSign = "+";
         //   alert(c);
        break;
    case 3:
      c = divide(first, two);
            operatorSign = "/";
          //  alert(c);
        break;
    default:
       // alert("error");
        break;
    }
    var cString = c.toString();
    if (cString.indexOf(".") != -1){
        Maths();
    } else{
    document.getElementById("firstnumber").innerHTML = first;
    document.getElementById("sign").innerHTML = operatorSign;
    document.getElementById("secondnumber").innerHTML = two;
    document.getElementById("level").innerHTML = level;
   // document.getElementById("solution").innerHTML = c;
    cLength = c.toString().length;
    }
}

function checkAnswer(){
	//   if(document.getElementById("youranswer").value.length == cLength){
        if(typed == c){
            score += 10;
            level++;
            document.getElementById("score").innerHTML = score;
            document.getElementById("level").innerHTML = level;
            document.getElementById("person").style.display = "none";
			document.getElementById("correct").style.display = "block";
            setTimeout(function(){
             document.getElementById("youranswer").value = "";
            },400)
            setTimeout(function(){
            	document.getElementById("correct").style.display = "none";
            	document.getElementById("person").style.display = "block";
            },500)
            clearInterval(t);
            countdowntimer = 0;
            Timer();
            Maths();
        }else{
            missed++;
            document.getElementById("missed").innerHTML = missed;
            document.getElementById("person").style.display = "none";
                document.getElementById("misser").style.display = "block";
            setTimeout(function(){
             document.getElementById("youranswer").value = "";
            },500)
            setTimeout(function(){
            	document.getElementById("misser").style.display = "none";
            	document.getElementById("person").style.display = "block";
            },1000)
        }
  //  }
}





$(document).ready(function(){
    Maths();
    Timer();

})
    window.onblur = function() { clearInterval(t);}
    window.onfocus = function() { Timer(); }
    document.addEventListener("pause", onPause, false);
    document.addEventListener("resume", onResume, false);
     function onPause() {
         clearInterval(t);
    }
    function onResume() {
         Timer();
    }

/*adding keyboard to screen
function add1(){
    document.getElementById("youranswer").value += 1;
    document.getElementById("youranswer").focus();
}
function add2(){
    document.getElementById("youranswer").value += 2;
    document.getElementById("youranswer").focus();
}*/
