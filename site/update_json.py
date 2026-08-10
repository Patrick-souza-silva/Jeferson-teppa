import json
import os
import re

json_path = r"c:\meu\JefersonTeppa\site\src\assets\data.json"

with open(json_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace .mov and .MOV with .mp4
new_content = re.sub(r'(?i)\.mov', '.mp4', content)

with open(json_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Replaced .mov with .mp4 in data.json")
