from ifttt_webhook import IftttWebhook
from pathlib import Path

path = "C:/Users/Cooper/OneDrive/Desktop/Projects/notion-notelifier/"

notionDB = ""

with open(path + 'db.txt') as f:
    notionDB = f.read()

ifttt = IftttWebhook(path + "key.txt")

event_values = {'value1': 'Value for value1',  'value3': 'Value for value3'}
ifttt.trigger('notion_notelifier', **event_values)