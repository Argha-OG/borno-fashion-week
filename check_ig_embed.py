import urllib.request
import re

content = open("d:\\Website\\borno-fashion-week\\src\\app\\media\\articles.js", encoding="utf-8").read()
urls = re.findall(r'"url":\s*"(https://www.instagram.com/[^"]+)"', content)

for url in urls:
    try:
        url_obj = url
        if not url_obj.endswith('/'):
            url_obj = url_obj.split('?')[0]
        # Just use the simple logic from MediaPage
        path = url_obj.replace('https://www.instagram.com', '')
        if path.endswith('/'):
            path = path[:-1]
        
        embed_url = f"https://www.instagram.com{path}/embed"
        req = urllib.request.Request(embed_url, headers={'User-Agent': 'Mozilla/5.0'})
        res = urllib.request.urlopen(req)
        html = res.read().decode('utf-8', errors='ignore')
        
        if "The link to this photo or video may be broken" in html or "post may have been removed" in html:
            print(f"BROKEN IG LINK FOUND: {url}")
            
    except Exception as e:
        print(f"Error on {url}: {e}")
