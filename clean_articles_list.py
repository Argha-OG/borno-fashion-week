import re

file_path = "d:\\Website\\borno-fashion-week\\src\\app\\media\\articles.js"
with open(file_path, "r", encoding="utf-8") as f:
    orig = f.read()

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
    "#", # The NONA TV3 one
    "https://www.facebook.com/sarawaktribune/posts/edgy-meets-earth-nasha-prive-wins-big-at-borneo-fashion-week-2025kuching-born-de/1581810466451747/",
    "https://babab.net/artikel/borneo-fashion-week-2025-berlangsung-dengan-penuh-meriah.html",
    "https://vt.tiktok.com/ZSUxPVFup/",
    "https://www.max-infos.com/2025/09/26/borneo-fashion-week-2025-kembali-di-pavilion-damansara-heights-fesyen-kelestarian-warisan-borneo-disatukan/"
]

def clean_url(u):
    if u == "#": return u
    u = u.split('?')[0]
    if u.endswith('/'):
        u = u[:-1]
    return u

clean_urls_to_remove = set(clean_url(u) for u in urls_to_remove)

# find `{ ...\n    },` blocks using regex. 
# We need to correctly capture the json object with trailing comma.

def remove_bad_objects(text):
    # Regex to find individual json objects which might have trailing commas
    pattern = r'(?P<obj>\{\s*"url":\s*"(?P<url>[^"]+)"[^}]+\}(?:,\s*)?)'
    
    def replace_func(match):
        u = match.group('url')
        clean_u = clean_url(u)
        
        # Check against target list
        if u in urls_to_remove or clean_u in clean_urls_to_remove:
            print(f"Removed: {u}")
            return '' # Remove this object block completely
        # Also check exact match
        return match.group('obj')

    return re.sub(pattern, replace_func, text)

new_content = remove_bad_objects(orig)

new_content = re.sub(r',\s*\];', '\n];', new_content)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(new_content)

print(f"Clean up complete. Total links targeted: {len(urls_to_remove)}")
