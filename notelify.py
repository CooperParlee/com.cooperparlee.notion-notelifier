from typing import TYPE_CHECKING
from ifttt_webhook import IftttWebhook
from pathlib import Path
import argparse

path = "C:/Users/Cooper/OneDrive/Desktop/Projects/notion-notelifier/"

parser = argparse.ArgumentParser(description='A test program to send Notion quotes to IFTTT notifs.')
parser.add_argument('--no_notif', dest='send', action='store_false')
parser.set_defaults(send=True)

args = parser.parse_args()

notionDB = ""

with open(path + 'db.txt') as f:
    notionDB = f.read()

ifttt = IftttWebhook(path + "key.txt")
if (args.send == True):
    event_values = {'value1': 'Value for value1',  'value3': 'Value for value3'}
    ifttt.trigger('notion_notelifier', **event_values)
