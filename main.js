var screen_width = window.innerWidth;
//console.log(screen_width);

//code for backspace_canvas's drawing
var backspace_canvas = document.getElementById("backspace-canvas");
var backspace_ctx = backspace_canvas.getContext("2d");
backspace_ctx.moveTo(2,22);
backspace_ctx.lineTo(100, 400);
backspace_ctx.stroke();
backspace_ctx.moveTo(2,22);
backspace_ctx.lineTo(100, -400);
backspace_ctx.stroke();
backspace_ctx.moveTo(7,1);
backspace_ctx.lineTo(590, 100);
backspace_ctx.stroke();
backspace_ctx.moveTo(7,39);
backspace_ctx.lineTo(90, 30);
backspace_ctx.stroke();
backspace_ctx.moveTo(8,10);
backspace_ctx.lineTo(13, 29);
backspace_ctx.stroke();
backspace_ctx.moveTo(8,30);
backspace_ctx.lineTo(14, 11);
backspace_ctx.stroke();

// 1536 is the  width of normal  pc moniter used for the development.
//so this piece of code down is used for fixing the app's ui size for mobile screens for some extent for most of the devices.
if(screen_width<1536){    
    var calcStyle = document.getElementById("calc-css");
    calcStyle.href = "styles/calc_css_for_mobile.css";
    
}

var result;//stores result for display
var value;//temporarily stores entered values for evaluation.
var input_element = document.getElementById("input");
var result_element = document.getElementById("result");

 value = input_element.value;
 

//function for adding entered number to value variable for evaluation.
function num(x){
    value = value+x;
    
    input_element.value=value;

}

function backspace(){
   
    value=value.slice(0, value.length-1);
    input_element.value=value;

}

function equals(){
    
    result=eval(value);
    //converting result to string(and storing it in a new variable) for knowing its length 
    let dummy_result = result.toString();
    //condition for 'out of limit' exception.
    if(dummy_result.length>16){
        alert("Sorry out of limit! ( only 16 digits )");
        value="";
        input_element.value=value;

    }else{

        result_element.innerHTML="परिणामः "+result;
    }

}
function clear_it_up(){
    
  input_element.value=value="";
  result="";
  result_element.innerHTML="परिणामः "+ result;

}
 