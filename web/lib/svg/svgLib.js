/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function createRootSvg(ref,x,y,h,w){
    var NS="http://www.w3.org/2000/svg";
    var svg=document.createElementNS(NS,ref);
    svg.width=w;
    svg.height=h;
    return svg;
}
  
  function createRootSvg(doc,ref,x,y,h,w){
    var NS="http://www.w3.org/2000/svg";
    var svg=doc.createElementNS(NS,ref);
    svg.width=w;
    svg.height=h;
    return svg;
}

function createLine(id,x1,y1,x2,y2,color,strokeWidth){
    var svg = 'http://www.w3.org/2000/svg';
    elt = document.createElementNS(svg,'line');
    elt.setAttributeNS(null,'id',id);
    elt.setAttributeNS(null,'stroke',color);
    elt.setAttributeNS(null,'stroke-width',strokeWidth);
    elt.setAttributeNS(null,'stroke-opacity','0.5');
    elt.setAttributeNS(null,'x1',x1);
    elt.setAttributeNS(null,'y1',y1);
    elt.setAttributeNS(null,'x2',x2);
    elt.setAttributeNS(null,'y2',y2);
    Display().appendChild( elt );
}
   
   function createLine(doc,group,id,x1,y1,x2,y2,color,strokeWidth){
    var svg = 'http://www.w3.org/2000/svg';
    var elt = doc.createElementNS(svg,'line');
    elt.setAttributeNS(null,'id',id);
    elt.setAttributeNS(null,'stroke',color);
    elt.setAttributeNS(null,'stroke-width',strokeWidth);
    elt.setAttributeNS(null,'stroke-opacity','0.5');
    elt.setAttributeNS(null,'x1',x1);
    elt.setAttributeNS(null,'y1',y1);
    elt.setAttributeNS(null,'x2',x2);
    elt.setAttributeNS(null,'y2',y2);
    group.appendChild( elt );
}

function createRect(id,x,y,h,w,fill){
    var svg = 'http://www.w3.org/2000/svg';
    var elt = document.createElementNS(svg,'rect');
    elt.setAttributeNS(null,'id',id);
    elt.setAttributeNS(null,'fill',fill);
    elt.setAttributeNS(null,'stroke','yellow');
    elt.setAttributeNS(null,'stroke-width','3');
    elt.setAttributeNS(null,'stroke-opacity','0.5');
    elt.setAttributeNS(null,'x',x);
    elt.setAttributeNS(null,'y',y);
    elt.setAttributeNS(null,'width',w);
    elt.setAttributeNS(null,'height',h);
    Display().appendChild( elt );
}

function createRect(doc,group,id,x,y,h,w,fill,strokeColor,strokeWidth,opacity){
    var svg = 'http://www.w3.org/2000/svg';
    var elt = doc.createElementNS(svg,'rect');
    elt.setAttributeNS(null,'id',id);
    elt.setAttributeNS(null,'fill',fill);
    elt.setAttributeNS(null,'stroke',strokeColor);
    elt.setAttributeNS(null,'stroke-width',strokeWidth);
    elt.setAttributeNS(null,'stroke-opacity',opacity);
    elt.setAttributeNS(null,'x',x);
    elt.setAttributeNS(null,'y',y);
    elt.setAttributeNS(null,'width',w);
    elt.setAttributeNS(null,'height',h);
    group.appendChild( elt );
}

function loadExtSvg() { 
    var svg = $('#svgbasics').svg('get'); 
    var img = svg.image(100, 50, 200, 200, "img/uluru.jpg"); 
    svg.title(img, "My image"); 
    svg.image(130, 100, 20, 20, "img/sun.png"); 
}
 
// Callback after loading external document 
function loadDone(svg, error) { 
    svg.text(10, 20, error || 'Loaded into ' + this.id); 
}
            
function svgClear(svg){
    while (svg.lastChild) {
        svg.removeChild(svg.lastChild);
    }
}
            
function svgCreateGroup(doc,svg,id){
    var NS = 'http://www.w3.org/2000/svg';
    var g = doc.createElementNS(NS, "g");
    g.setAttributeNS(null,'id',id);
    g.setAttributeNS(null,'shape-rendering', 'inherit');
    g.setAttributeNS(null,'pointer-events', 'all');
    svg.appendChild(g);
    return g;
}

function makeShape(doc,x,y) {
    var data = doc.createTextNode("Text");
    var svgns    = 'http://www.w3.org/2000/svg';
    var text = doc.createElementNS(svgns, "text");
    text.setAttributeNS(null, "x", x);
    text.setAttributeNS(null, "y", y);
    text.setAttributeNS(null, "fill", "green");
    text.setAttributeNS(null, "text-anchor", "start");
    text.setAttributeNS(null,"style","font-family:times; font-weight:bold");
    text.appendChild(data);
    doc.documentElement.appendChild(text);
}
   