function temperature(){
    let c = document.getElementById("c").value;
    let f = (c * 9/5) + 32 ;
    document.getElementById("f").value = f;
}
function weight(){
    let kg = document.getElementById("kilograms").value;
    let pounds = kg * 2.2;
    document.getElementById("Pounds").value=pounds;
}
function distance(){
    let kilo = document.getElementById("Kilo").value;
    let Miles = kilo * 0.62137;
    document.getElementById("Miles").value=Miles;
}