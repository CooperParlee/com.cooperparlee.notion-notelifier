/*
* Notion Test
* @author Cooper Parlee
* 5 November 2021
* Basic test of the notion API for Javascript
*/

import { Client } from "@notionhq/client"

const notion = new Client({auth: process.env.NOTION_KEY})

const database Id = process.env.NOTION_DATABASE_ID
