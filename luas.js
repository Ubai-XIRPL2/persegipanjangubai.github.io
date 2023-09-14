var panjangInput = document.querySelector(".panjang");
var lebarInput = document.querySelector(".lebar");
var calculateButton = document.querySelector(".calculate");
var luas, panjang, lebar;

function myFunction(){
    panjang = panjangInput.value;
    lebar = lebarInput.value;
    luas = panjang*(lebar);
    alert("luasnya adalah :" + luas);
}