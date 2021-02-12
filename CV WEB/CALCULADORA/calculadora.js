function valor(x){
    document.getElementById('display').value += x
}
function borrardisplay(y){
    document.getElementById('display').value = y
}
function calculos() {
    let op;
    var n1 = parseInt(document.querySelector('display').value);
    document.querySelector('#porcentaje').addEventListener('click', () =>{
        op = '%'
    };
    
        var result = 
        if(op == '%'){
            result = (n1/n2)*100;
        
            document.querySelector('#result').innerHTML = result;
        }
    else{
        var result = eval(document.getElementById('display').value)
        document.getElementById('display').value = result
    }}