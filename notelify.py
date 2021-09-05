from ifttt_webhook import IftttWebhook
from pathlib import Path

path = "C:/Users/Cooper/OneDrive/Desktop/Projects/notion-notelifier/"
event_values = {'value1': 'Value for value1',  'value3': 'Value for value3'}

ifttt = IftttWebhook(path + "key.txt")
ifttt.trigger('notion_notelifier', **event_values)