/*
* Notion Test
* @author Cooper Parlee
* 5 November 2021
* Basic test of the notion API for Javascript
*/

import { Client } from "@notionhq/client"
import dotenv from 'dotenv'
import fs from 'fs'
const email = require("./modules/email");

dotenv.config()

const notion = new Client({auth: process.env.NOTION_KEY})

const databaseId = process.env.NOTION_DATABASE_ID
console.log(process.env.NOTION_DATABASE_ID);
console.log(process.env.NOTION_KEY);

const apiUser = process.env.apiUser;
const apiPass = process.env.apiPass;

;(async ()=> {
    const response = await queryDBResponse(process.env.NOTION_DATABASE_ID);

    fs.writeFile("test.json", JSON.stringify(response), function(err){
        if(err) {
	    console.log(err);
        }
    });
    email.sendTestMail("", apiUser, apiPass);
    for (const element of response.results) {
        console.log(element.properties.Name.title[0].text.content);
        var elementSubpage = await queryChildPageInfo(element.id);
        var quotelistDB = await queryDBResponse(elementSubpage.results[0].id);

        fs.writeFile("test2.json", JSON.stringify(quotelistDB), function(err){
            if(err) {
            console.log(err);
            }
        });
        for (const quote of quotelistDB.results){
            try{
                const text = quote.properties.Quote.title[0].plain_text;
                if(text){
                    console.log(text);
                }
                continue;
            } catch (error) {console.error(error);}
            
        }
        
        return;
    }

})()

async function queryDBResponse(database) {
    const response = await notion.databases.query({
        database_id: database,
    })

    return response;
}

async function queryChildPageInfo(id){
    const response = await notion.blocks.children.list({
        block_id: id,
        page_size: 50,
    });
    return response;
}
