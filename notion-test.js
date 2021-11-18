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
    const response = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID,
    })
    //console.log(response);

    fs.writeFile("test.txt", JSON.stringify(response), function(err){
        if(err) {
	    console.log(err);
        }
    });
    //var list = JSON.parse(response);
    //list.forEach(element => console.log(JSON.stringify(element)));
})()

