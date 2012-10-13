/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


function loadHeaderPalette(){
                var k=1
                tableHeader[0] = " ";
                tableHeader[k++] = "index";
                tableHeader[k++] = "id";
                tableHeader[k++] = "x";
                tableHeader[k++] = "y";
                tableHeader[k++] = "transx";
                tableHeader[k++] = "transy";
                tableHeader[k++] = "rotation";
                tableHeader[k++] = "forme";
                tableHeader[k++] = "largeur";
                tableHeader[k++] = "hauteur";
                tableHeader[k++] = "arg1";
                tableHeader[k++] = "arg2";
                tableHeader[k++] = "texte";	
                tableHeader[k++] = "fillColor";
                tableHeader[k++] = "strokeColor";
                tableHeader[k++] = "type";
                tableHeader[k++] = "lieu";
                tableHeader[k++] = "room";
                tableHeader[k++] = "marchandise";
                tableHeader[k++] = "quantité";
                tableHeader[k++] = "classement";
                tableHeader[k++] = "sync";
                return tableHeader;
            }
            
function addNewRowPalette(type,id,col,selIndex){
                var lclArrow = new Array(COL_NUMBER);
                lclArrow = loadDefaultValue(type);
                lclArrow[col]=id;
                lclArrow[INDEX_HEADER]=selIndex;
                lclArrow[LIEU_HEADER]=locationVal;
                var l = arrec.length;
                arrec[l] = lclArrow;
                recordLine(lclArrow);
                drawcaps();
            }
            
            function addNewRowCaisse(type,id,col,selIndex,parent){
                var lclArrow = new Array(COL_NUMBER);
                lclArrow = loadDefaultValue(type);
                lclArrow[col]=id;
                lclArrow[INDEX_HEADER]=selIndex;
                lclArrow[VIEW_HEADER]=parent;
                lclArrow[LIEU_HEADER]=locationVal;
                var l = arrec.length;
                arrec[l] = lclArrow;
                //setCookie(COOKIE_NAME+selIndex,lclArrow,5);
                recordLine(lclArrow);
                //sendPhp(lclArrow);
                drawcaps();
            }
            function addNewRowCaisseRow(type,id,col,selIndex,parent,row){
                //var lclArrow = new Array(COL_NUMBER);
                var lclArrow = row;//loadDefaultValue(type);
                lclArrow[col]=id;
                lclArrow[INDEX_HEADER]=selIndex;
                lclArrow[VIEW_HEADER]=parent;
                //var l = arrec.length;
                //arrec[l] = lclArrow;
                //setCookie(COOKIE_NAME+selIndex,lclArrow,5);
                recordLine(lclArrow);
                //sendPhp(lclArrow);
                drawcaps();
            }