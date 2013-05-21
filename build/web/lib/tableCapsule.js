/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */  
var INDEX_HEADER = 12;

function getMaxIndex(tableId){
    var cellValue=0;
    var maxValue=0;
    var theTable = document.getElementById(tableId);
    var rowCount = theTable.rows.length;
    for (var i=0;i<rowCount;i++){
        cellValue = readCell(tableId,i,INDEX_HEADER);
        if(cellValue>maxValue){
            maxValue = cellValue;
        }
    }
    return maxValue;
}
function loadHeader(){
                tableHeader[0] = " ";
                tableHeader[1] = "Type";
                tableHeader[2] = "Texte";
                tableHeader[3] = "Font";
                tableHeader[4] = "Couleur";
                tableHeader[5] = "SizeFont";
                tableHeader[6] = "DistanceBord";
                tableHeader[7] = "Cote";
                tableHeader[8] = "widthStroke";	
                tableHeader[9] = "typeImp";
                tableHeader[10] = "linkFile";
                tableHeader[11] = "ordre";
                tableHeader[12] = "index";
                return tableHeader;
            }
            
function loadDefaultValue(type){
                if(type=="vueDev"){
                    defaultValue[1] = 0;
                    defaultValue[2] = "4.22";
                    defaultValue[3] = "orange";
                    defaultValue[4] = 122;
                    defaultValue[5] = 34;
                    defaultValue[6] = "jonc cannelure";
                    defaultValue[7] = "class open";
                    defaultValue[8] = "helio";
                    defaultValue[9] = 0;
                    defaultValue[10] = 0;
                }
                
                if(type=="vueAvant"){
                    defaultValue[1] = decalageVueAvantx;
                    defaultValue[2] = decalageVueAvanty;
                    defaultValue[3] = "orange";
                    defaultValue[4] = 0;
                    defaultValue[5] = 0;
                    defaultValue[6] = "jonc cannelure";
                    defaultValue[7] = "class open";
                    defaultValue[8] = "helio";
                    defaultValue[9] = 0;
                    defaultValue[10] = 1;
                }
                if(type=="vueArriere"){
                    defaultValue[1] = decalageVueArrx;
                    defaultValue[2] = decalageVueArry;
                    defaultValue[3] = "orange";
                    defaultValue[4] = 0;
                    defaultValue[5] = 0;
                    defaultValue[6] = "jonc cannelure";
                    defaultValue[7] = "class open";
                    defaultValue[8] = "helio";
                    defaultValue[9] = 0;
                    defaultValue[10] = 2;
                }
                if(type=="texte"){
                    defaultValue[1] = "champagne";
                    defaultValue[2] = fonts[0];
                    defaultValue[3] = "black";
                    defaultValue[4] = "7";
                    defaultValue[5] = "23";
                    defaultValue[6] = "1";
                    defaultValue[7] = "0.1";
                    defaultValue[8] = "mac";
                    defaultValue[9] = 0;
                    defaultValue[10] = 20;
                }
                
                if(type=="liseret"){
                    defaultValue[1] = 0;
                    defaultValue[2] = 0;
                    defaultValue[3] = "black";
                    defaultValue[4] = "10";
                    defaultValue[5] = "0";
                    defaultValue[6] = "1";
                    defaultValue[7] = "0.1";
                    defaultValue[8] = "mac";
                    defaultValue[9] = 0;
                    defaultValue[10] = 30;
                }
                
                if(type=="logo"){
                    defaultValue[1] = 0;
                    defaultValue[2] = 0;
                    defaultValue[3] = 0;
                    defaultValue[4] = 0.2;
                    defaultValue[5] = 0;
                    defaultValue[6] = 1;
                    defaultValue[7] = 0;
                    defaultValue[8] = "mac";
                    defaultValue[9] = "miniLogoCapsTech.svg";
                    defaultValue[10] = 50;
                }
                
                if(type=="cotation"){
                    defaultValue[1] = decalageVueAvantx;
                    defaultValue[2] = decalageVueAvanty;
                    defaultValue[3] = "red";
                    defaultValue[4] = "black";
                    defaultValue[5] = 0;
                    defaultValue[6] = 0;
                    defaultValue[7] = 0;
                    defaultValue[8] = 0;
                    defaultValue[9] = 0;
                    defaultValue[10] = 80;
                }
                
                if(type=="cartouche"){
                    defaultValue[1] = 1;
                    defaultValue[2] = -100;
                    defaultValue[3] = 450;
                    defaultValue[4] = 0.55;
                    defaultValue[5] = 0;
                    defaultValue[6] = 1;
                    defaultValue[7] = 0;
                    defaultValue[8] = "mac";
                    defaultValue[9] = "cartouche.svg";
                    defaultValue[10] = 100;
                }
                
            }
function loadHeaderCapsuleDev(){
    var tableHeaderCaps = [];
    tableHeaderCaps[0] = " ";
    tableHeaderCaps[1] = "Type";
    tableHeaderCaps[2] = "Texte";
    tableHeaderCaps[3] = "Font";
    tableHeaderCaps[4] = "Couleur";
    tableHeaderCaps[5] = "Opacité";
    tableHeaderCaps[6] = "SizeFont";
    tableHeaderCaps[7] = "DistanceBord";
    tableHeaderCaps[8] = "Cote";
    tableHeaderCaps[9] = "widthStroke";	
    tableHeaderCaps[10] = "typeImp";
    tableHeaderCaps[11] = "linkFile";
    tableHeaderCaps[12] = "ordre";
    return tableHeaderCaps;
}
            
            
function loadHeaderCapsule(){
    tableHeader[0] = " ";
    tableHeader[1] = "Type";
    tableHeader[2] = "position";
    tableHeader[3] = "Conicité";
    tableHeader[4] = "Couleur";
    tableHeader[5] = "Opacité";
    tableHeader[6] = "hauteur";
    tableHeader[7] = "diamètre de tête";
    tableHeader[8] = "déboitage";
    tableHeader[9] = "ouverture";	
    tableHeader[10] = "typeImp";
    tableHeader[11] = "linkFile";
    tableHeader[12] = "ordre";
    return tableHeader;
}
            
function loadHeaderVue(){
    tableHeader[0] = " ";
    tableHeader[1] = "Type";
    tableHeader[2] = "PositionX";
    tableHeader[3] = "PositionY";
    tableHeader[4] = "Couleur";
    tableHeader[5] = "Opacité";
    tableHeader[6] = "hauteur";
    tableHeader[7] = "diamètre de tête";
    tableHeader[8] = "déboitage";
    tableHeader[9] = "ouverture";	
    tableHeader[10] = "typeImp";
    tableHeader[11] = "linkFile";
    tableHeader[12] = "ordre";
    return tableHeader;
}
            
function loadHeaderTexte(){
    tableHeader[0] = " ";
    tableHeader[1] = "Type";
    tableHeader[2] = "Texte";
    tableHeader[3] = "Police";
    tableHeader[4] = "Couleur";
    tableHeader[5] = "Opacité";
    tableHeader[6] = "Taille";
    tableHeader[7] = "Hauteur du bord";//avant, arriere,côté ...
    tableHeader[8] = "Vue";
    tableHeader[9] = "Epaisseur du trait";	
    tableHeader[10] = "typeImp";
    tableHeader[11] = "linkFile";
    tableHeader[12] = "ordre";
    return tableHeader;
}
            
function loadHeaderLiseret(){
    tableHeader[0] = " ";
    tableHeader[1] = "Type";
    tableHeader[2] = "";
    tableHeader[3] = "";
    tableHeader[4] = "Couleur";
    tableHeader[5] = "Opacité";
    tableHeader[6] = "";
    tableHeader[7] = "Hauteur du bord";//avant, arriere,côté ...
    tableHeader[8] = "";
    tableHeader[9] = "Epaisseur";	
    tableHeader[10] = "typeImp";
    tableHeader[11] = "linkFile";
    tableHeader[12] = "ordre";
    return tableHeader;
}
function loadHeaderCotation(){
    tableHeader[0] = " ";
    tableHeader[1] = "Type";
    tableHeader[2] = "";
    tableHeader[3] = "";
    tableHeader[4] = "Couleur";
    tableHeader[5] = "";
    tableHeader[6] = "";
    tableHeader[7] = "Hauteur du bord";//avant, arriere,côté ...
    tableHeader[8] = "";
    tableHeader[9] = "Epaisseur";	
    tableHeader[10] = "typeImp";
    tableHeader[11] = "linkFile";
    tableHeader[12] = "ordre";
    return tableHeader;
}
function loadHeaderLogo(){
    tableHeader[0] = " ";
    tableHeader[1] = "Type";
    tableHeader[2] = "Index";
    tableHeader[3] = "décalage X";
    tableHeader[4] = "décalage Y";
    tableHeader[5] = "Opacité";
    tableHeader[6] = "Echelle";
    tableHeader[7] = "Couleur";//avant, arriere,côté ...
    tableHeader[8] = "Vue";
    tableHeader[9] = "";	
    tableHeader[10] = "typeImp";
    tableHeader[11] = "linkFile";
    tableHeader[12] = "ordre";
    return tableHeader;
}
function loadHeaderCartouche(){
    tableHeader[0] = " ";
    tableHeader[1] = "Type";
    tableHeader[2] = "Index";
    tableHeader[3] = "décalage X";
    tableHeader[4] = "décalage Y";
    tableHeader[5] = "Opacité";
    tableHeader[6] = "Echelle";
    tableHeader[7] = "";//avant, arriere,côté ...
    tableHeader[8] = "";	
    tableHeader[9] = "";
    tableHeader[10] = "";
    tableHeader[11] = "linkFile";
    tableHeader[12] = "ordre";
    return tableHeader;
}