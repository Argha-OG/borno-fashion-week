import re
import json

urls_to_remove = [
    "https://x.com/mynewshub/status/1971201900218548661?t=DojGCoEfFQwFKPzoeJVUMw&s=19",
    "https://www.instagram.com/p/DPB0a9KE847/?igsh=MXMzYnZ3ZDN2ajIw",
    "https://x.com/mynewshub/status/1971201900218548661",
    "https://medialahmy.com/perniagaan/borneo-fashion-week-2025-kembali-dengan-visi-global/syira/",
    "https://www.budiey.com/borneo-fashion-week-2025-angkat-identiti-budaya-ke-pentas-dunia/",
    "https://www.facebook.com/share/v/1B9S1k41jK/?mibextid=wwXIfr",
    "https://utusansarawak.com.my/borneo-fashion-week-2025-angkat-warisan-tekstil-fesyen-lestari/",
    "https://mypermohonan.com/borneo-fashion-week-2025-shines-bright-with-culture-and-couture/",
    "https://t.me/mynewshubviral/35228",
    "https://www.facebook.com/share/p/1JzkfJVHuu/",
    "https://www.facebook.com/247xMedia/posts/",
    "https://www.facebook.com/share/p/1BP4AUya1g/",
    "https://medialahmy.com/perniagaan/borneo-fashion-week-2025-berlangsung-dengan-penuh-meriah/syira/",
    "https://newswav.com/article/borneo-fashion-week-2025-where-style-meets-soul-A2510_kgsW9U",
    "https://www.redtomato.com.my/video/38506.html",
    "https://thesun-ipaper.cld.bz/20251013/6/",
    "http://192.168.56.1:3000/media#",
    "https://www.facebook.com/sarawaktribune/posts/edgy-meets-earth-nasha-prive-wins-big-at-borneo-fashion-week-2025kuching-born-de/1581810466451747/",
    "https://babab.net/artikel/borneo-fashion-week-2025-berlangsung-dengan-penuh-meriah.html",
    "https://vt.tiktok.com/ZSUxPVFup/"
]

file_path = "d:\\Website\\borno-fashion-week\\src\\app\\media\\articles.js"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Instead of parsing JSON, we'll use regex to remove full objects 
# {} blocks that contain our urls_to_remove

def clean_url(u):
    if u.endswith('/'):
        u = u[:-1]
    return u

def strip_query(u):
    return u.split('?')[0]

cleaned_targets = [clean_url(strip_query(u)) for u in urls_to_remove]

# Find all full article blocks matching { ... } with internal braces if any
# We'll assume articles objects look like {\n        "url": ...    } possibly with commas

# More robust manual parsing since we are in a JS file
lines = content.split('\n')
new_lines = []
in_obj = False
current_obj = []

for line in lines:
    if line.strip().startswith('{'):
        in_obj = True
        current_obj = [line]
    elif in_obj:
        current_obj.append(line)
        if line.strip().startswith('}'):
            in_obj = False
            # Check if this object contains a target URL
            obj_text = '\n'.join(current_obj)
            url_match = re.search(r'"url":\s*"(.*?)"', obj_text)
            should_remove = False
            if url_match:
                url_val = url_match.group(1)
                clean_val = clean_url(strip_query(url_val))
                if clean_val in cleaned_targets or url_val in urls_to_remove:
                    should_remove = True
                    # There's a case where the URL was specific but also includes IGSH, so we check original as well
            
            if not should_remove:
                new_lines.extend(current_obj)
    else:
        new_lines.append(line)

with open(file_path, "w", encoding="utf-8") as f:
    f.write('\n'.join(new_lines))

print("Done removing links.")
