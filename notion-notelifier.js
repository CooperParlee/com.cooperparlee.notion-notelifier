/*
* Notion Notelifier
* @author Cooper Parlee
* 25 November 2021
* A simple Javascript application to retrieve Notion book notes, then send them via
* email.
*/

import { Client } from "@notionhq/client"
import dotenv from 'dotenv'
import fs from 'fs'

dotenv.config();
const args = process.argv;

const notion = new Client({auth: process.env.NOTION_KEY});
const databaseId = process.env.NOTION_DATABASE_ID;

function compileFromDB (dbID, bookName){
    //Format quote...,pg,book,\n
    var file = fs.readFile("db.csv");
    const quoteListDB = await queryDBResponse(dbID);
    
    for (const quote of quoteListDB.results){
        const text;
        const loc;
        try {
            text = quote.properties.Quote.title[0].plain_text;
            loc = quote.properties.Location.rich_text[0].text.content;
        } catch (error) { console.error(error); continue; }
    }
}

async function queryDBResponse(database) {
    const response = await notion.databases.query({
        database_id: database,
    })

    return response;
}

async function queryChildPageInfo(id){
    const response = await notion.blocks.children.list({
        block_id: id,
        page_size: 1000,
    });
    return response;
}