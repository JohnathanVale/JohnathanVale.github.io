/*
Assumptions: I was unsure as the the label mentioned in the instructions meant legend soit waas added and not the label tag.
I also assumeed the Moo Fuction would simply add a moo to the sentence everytime the button was clicked including
when a moo is at the end of a sentence.

*/
function fancifymytext(){
    alert("Hello, world!");
    document.getElementById("textChange").style.fontSize = '24pt'
}
function FancyShmancy(){
    alert("Set to fancy")
    document.getElementById("textChange").style.fontWeight = 'bold'
    document.getElementById("textChange").style.color = 'blue'
    document.getElementById("textChange").style.textDecoration = 'underline'

}
function BoringBetty(){
    alert("Set to boring")
    document.getElementById("textChange").style.fontWeight = 'normal'
    document.getElementById("textChange").style.color = 'black'
    document.getElementById("textChange").style.textDecoration = 'none'
    
}
function Moo(){
    
    var test = document.getElementById("textChange").value 
    //alert(test)
    var parts= test.split(".");
    test = parts.join("Moo.");
    console.log(test)

    document.getElementById("textChange").value = test.toUpperCase();
   // document.getElementById("textChange").innerHTML = test.toUpperCase();
}
function Mootwo() {
    document.getElementById("textChange").style.textTransform = 'uppercase';
}