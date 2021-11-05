/*
* Notion Test
* @author Cooper Parlee
* 5 November 2021
* Basic test of the notion API for Javascript
*/

import { Client } from "@notionhq/client"

const notion = new Client({auth: process.env.NOTION_KEY})

const databaseId = process.env.NOTION_DATABASE_ID
console.log(process.env.NOTION_DATABASE_ID);
console.log(process.env.NOTION_KEY);

;(async ()=> {
    const response = await notion.databases.query({
        database_id: "323b283f6e6a482c8b32c13f58580ee6",
    })
    console.log(response);
})()

