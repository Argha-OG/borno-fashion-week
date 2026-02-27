import urllib.request
import json
import re

content = open("d:\\Website\\borno-fashion-week\\src\\app\\media\\articles.js", encoding="utf-8").read()

urls = re.findall(r'"url":\s*"(https://www.instagram.com/[^"]+)"', content)

for url in urls:
    # Use oembed to check if the post exists
    oembed_url = f"https://api.instagram.com/oembed/?url={url}"
    try:
        req = urllib.request.Request(oembed_url, headers={'User-Agent': 'Mozilla/5.0'})
        res = urllib.request.urlopen(req)
    except urllib.error.HTTPError as e:
        if e.code == 404:
            print(f"BROKEN: {url}")
        else:
            print(f"Error {e.code} for {url}")
    except Exception as e:
        print(f"Error checking {url}: {e}")
