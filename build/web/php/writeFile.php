<%-- 
    Document   : writeFile
    Created on : 27 janv. 2013, 19:03:45
    Author     : laurentgarnier
--%>


<?php    
    /* create a dom document with encoding utf8 */
    $domtree = new DOMDocument('1.0', 'UTF-8');

    /* create the root element of the xml tree */
    $xmlRoot = $domtree->createElement("xml");
    /* append it to the document created */
    $xmlRoot = $domtree->appendChild($xmlRoot);

    $currentTrack = $domtree->createElement("track");
    $currentTrack = $xmlRoot->appendChild($currentTrack);

    /* you should enclose the following two lines in a cicle */
    $currentTrack->appendChild($domtree->createElement('path','song1.mp3'));
    $currentTrack->appendChild($domtree->createElement('title','title of song1.mp3'));

    $currentTrack->appendChild($domtree->createElement('path','song2.mp3'));
    $currentTrack->appendChild($domtree->createElement('title','title of song2.mp3'));

    /* get the xml printed */
    echo $domtree->saveXML();
?>
