/*
* Notion Notelifier
* @author Cooper Parlee
* 5 September 2021
* A simple Javascript application to retrieve Notion book notes, then send them via
* IFTTT webhooks to my phone.
*/

// Refs
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var fs = require('fs');

function ReadFromFile(fileURL){
    try {  
        var data = fs.readFileSync(fileURL, 'utf8');
        return data;  
    } catch(e) {
        console.log('Error:', e.stack);
        return ""; 
    }
}

// Consts
const targetURL = "https://maker.ifttt.com/trigger/notion_notelifier/with/key/" + ReadFromFile("key.txt");

// Main

var req = new XMLHttpRequest();
req.open("POST", targetURL, true);
req.setRequestHeader('Content-Type', 'application/json');
req.send(JSON.stringify({
    "value1" : "bee movie",
    "value2" : "pebis",
    "value3" : "holy shit im cold"
}))