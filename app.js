// CalCulator Application

function GetValue(Value){
var result1 = document.getElementById("result");
result1.value += Value
}

function clearValue(){
    var result = document.getElementById("result");
    result.value = ""
}
function getCompleteValue(){
    var result = document.getElementById("result")
    result.value = eval(result.value)
}