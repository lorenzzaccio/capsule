/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */     
function exportSvg(){
    var content ;//= loadSvg();
    document.getElementById("log").style.display = "block"; 
                
    var xml = $('#svgbasics').svg('get').toSVG();
    content = xml.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') ;
    $('#msg').html(content);
    document.getElementById("log").innerText = content;
}
            

            
function loadSvg(){
    $.get('dessin.svg', function(svg){
        console.log( svg );
    }, 'text');
}
            


function trim(str){
    var outStr = str.replace(/^\s+|\s+$/g, '') ;
    return outStr;
}
            
function doNothing(){}

function random(range) {
    return Math.floor(Math.random() * range);
}

        
// Get the display element.
function getDisplay(doc,id)
{
    return doc.getElementById(id);
}
                
// Determine dimensions of the display element.
// Return this as a 2-tuple (x,y) in an array
function getDimensions(display)
{
    // Our Rendering Element
    //var display = getDisplay();
    var width = parseInt( display.getAttributeNS(null,'width') );
    var height = parseInt( display.getAttributeNS(null,'height') );

    return [width,height];
}
                

            