jqueryButton.addEventListener("click", jQueryFunctionCode);
outputButton.addEventListener("click", jQueryFunctionOutput);

//FIRST
function jQueryFunctionCode() {
    //GET FUNCTION LOADED
    let fjquery = document.getElementById("vanillajs");
    var fjqueryData = fjquery.innerHTML;

    //Select the funtion
    switch (fjqueryData) {
        //REady - dom content load
        case 'ready':
            ////When the HTML document has been loaded and you can manipulate it with JavaScript

            $('.code-class').append('<p>$( document ).ready()</p>');
            $('.code-class').append('<p>$( document ).ready(function() {alert( "Im ready!" );});</p>');
            break;
            // case 'click':
            //     //     When an HTML item has been clicked
            //     let codeLiz1ºstClick = document.querySelector(".code-class");
            //     codeListClick.insertAdjacentHTML('beforeend', '<p>&ltbutton onclick="myFunction()">Click me</button&gt</p>');
            //     codeListClick.insertAdjacentHTML('beforeend', '<p>&ltscript&gtfunction myFunction(){document.getElementById("demo").innerHTML = "Hello World";}&ltscript&gt;</p>');
            //     break;
        case 'eight':
            ////When the HTML document has been loaded and you can manipulate it with JavaScript

            $('.code-class').append('<p>&ltimg src="jquery.png" alt="jQuery" id="jqueryImg  width="30" height="30""&gt</p>');
            $('.code-class').append('<p>$( "#jqueryImg" ).load(function() {alert("Image is loaded JQ")});</p>');
            break;
            // case 'click':
            //     //     When an HTML item has been clicked
            //     let codeLiz1ºstClick = document.querySelector(".code-class");
            //     codeListClick.insertAdjacentHTML('beforeend', '<p>&ltbutton onclick="myFunction()">Click me</button&gt</p>');
            //     codeListClick.insertAdjacentHTML('beforeend', '<p>&ltscript&gtfunction myFunction(){document.getElementById("demo").innerHTML = "Hello World";}&ltscript&gt;</p>');
            //     break;
        default:
            //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
            console.info('This is default info of loaded function');
    }
}



//SECOND
function jQueryFunctionOutput() {
    //GET FUNCTION LOADED
    let outVanilla = document.getElementById("vanillajs");
    var outVanillaData = outVanilla.innerHTML;

    //Select the funtion
    switch (outVanillaData) {
        case 'ready':

            //HTML
            $('.output-class').append('<p>$( document ).ready()</p>');
            //JS
            //$('.myBody').append('<script>$(".img").load("#jqueryImg"function(){alert("Image is loaded JQ")});</' + 'script>');
            var myScript = document.createElement("script");
            var scriptContent = document.createTextNode("$( document ).ready(function() {swal( 'Im ready!' );});");
            myScript.appendChild(scriptContent);
            document.body.appendChild(myScript);

            break;
        case 'eight':

            //HTML
            $('.output-class').append('<p class=img><img src="jquery.png" alt="jQuery" id="jqueryImg"  width="30" height="30"></p>');
            //JS
            //$('.myBody').append('<script>$( "#jqueryImg" ).load(function() {alert("Image is loaded JQ")});</' + 'script>');
            var myScript = document.createElement("script");
            var scriptContent = document.createTextNode("$( '#jqueryImg' ).load(function() {swal('msg hereee')});");
            myScript.appendChild(scriptContent);
            document.body.appendChild(myScript);

            break;
        default:
            //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
            console.info('This is default info of the output');
    }

}