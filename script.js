// generateBtn work
function generateBtn(){
    var number = Math.random()*9999;
    number = Math.ceil(number);
    if(number>999){
        document.getElementById("numbers").value=number;
    }    
}


// pin input in the box
function printOutput(num){
    document.getElementById("pin").value=num;	
}
function getOutput(){
	return document.getElementById("pin").value;
}


var number = document.getElementsByClassName("number");
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		var output=getOutput();
		if(output!=NaN){ //if output is a number
			output=output+this.id;
			printOutput(output);
		}
	});
}


// backspace and clear all
var operator = document.getElementsByClassName("operator");
for(var i =0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
       if (this.id=="backspace") {
            var output=getOutput().toString();
            if (output) {
                output= output.substr(0,output.length-1);
                printOutput(output);
            }
        }
       else if(this.id=="clear"){
			printOutput("");
        }
    })
}


// submite confirm
function submitBtn(){
    var a = document.getElementById("numbers").value;
    var b = document.getElementById("pin").value;
    if (a==b) {
        document.getElementById("yes").style.display="block";
    }
    else{
        document.getElementById("no").style.display="block";
    }
}