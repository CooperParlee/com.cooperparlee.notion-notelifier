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
    const listUsersResponse = await notion.users.list();
    console.log(await listUsersResponse);
})()

