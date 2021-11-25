/*
* Notion Test
* @author Cooper Parlee
* 5 November 2021
* Basic test of the notion API for Javascript
*/

import { Client } from "@notionhq/client"
import dotenv from 'dotenv'
import fs from 'fs'

dotenv.config()

const notion = new Client({auth: process.env.NOTION_KEY})

const databaseId = process.env.NOTION_DATABASE_ID
console.log(process.env.NOTION_DATABASE_ID);
console.log(process.env.NOTION_KEY);

;(async ()=> {
    const response = await queryDBResponse(process.env.NOTION_DATABASE_ID);
    //console.log(response.results);

    fs.writeFile("test.txt", JSON.stringify(response), function(err){
        if(err) {
	    console.log(err);
        }
    });
    //var list = JSON.parse(response);
    for (const element of response.results) {
        console.log(element.properties.Name.title[0].text.content);
        var elementDBResult = await queryDBResponse(element.id);
        console.log();
    }

})()

async function queryDBResponse(database) {
    const response = await notion.databases.query({
        database_id: database,
    })

    return response;
}
