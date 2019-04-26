function showOutput(value) {


    document.getElementById("output").value += value;

}
function ketqua() {
    result= eval(document.getElementById("output").value);
    document.getElementById("output").value= result;
}
function ac() {
    document.getElementById("output").value="";

}