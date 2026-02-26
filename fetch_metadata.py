import json
import urllib.request
import urllib.parse
from html.parser import HTMLParser
import concurrent.futures
import re
import os

class OGParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.image = None
        self.title = None
        self.in_title = False
        self.fallback_title = None

    def handle_starttag(self, tag, attrs):
        if tag == "title":
            self.in_title = True
        if tag == "meta":
            attrs_dict = dict(attrs)
            prop = attrs_dict.get("property", "") or attrs_dict.get("name", "")
            content = attrs_dict.get("content", "")
            
            if prop in ["og:image", "twitter:image"] and not self.image:
                self.image = content
            elif prop in ["og:title", "twitter:title"] and not self.title:
                self.title = content

    def handle_data(self, data):
        if self.in_title:
            self.fallback_title = data.strip()

    def handle_endtag(self, tag):
        if tag == "title":
            self.in_title = False


def fetch_metadata(article):
    url = article['url']
    if url == '#':
        return article
        
    print(f"Fetching: {url}")
    
    # Try YouTube
    if 'youtube.com' in url or 'youtu.be' in url:
        match = re.search(r'v=([a-zA-Z0-9_-]+)', url)
        if match:
            video_id = match.group(1)
            article['image'] = f"https://img.youtube.com/vi/{video_id}/maxresdefault.jpg"
            try:
                oembed_url = f"https://www.youtube.com/oembed?url={urllib.parse.quote(url)}&format=json"
                req = urllib.request.Request(oembed_url, headers={'User-Agent': 'Mozilla/5.0'})
                with urllib.request.urlopen(req, timeout=5) as response:
                    data = json.loads(response.read().decode())
                    if 'title' in data:
                        article['title'] = data['title']
            except Exception as e:
                print(f"YT oEmbed Error {url}: {e}")
        return article

    # Try TikTok
    if 'tiktok.com' in url or 'vt.tiktok.com' in url:
        try:
            oembed_url = f"https://www.tiktok.com/oembed?url={urllib.parse.quote(url)}"
            req = urllib.request.Request(oembed_url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, timeout=5) as response:
                data = json.loads(response.read().decode())
                if 'thumbnail_url' in data:
                    article['image'] = data['thumbnail_url']
                if 'title' in data:
                    article['title'] = data['title']
        except Exception as e:
            print(f"TikTok oEmbed Error {url}: {e}")
        return article
        
    # Twitter / X fallback since oembed endpoint is deprecated or requires auth headers for simple scraping
    if 'x.com' in url or 'twitter.com' in url:
        # We can't scrape Twitter without API, leave as is
        return article

    # Facebook / Instagram fallback
    if 'instagram.com' in url or 'facebook.com' in url:
        # Often blocked. Let's still try to get a title at least
        pass

    # Generic Scraping
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36'})
        with urllib.request.urlopen(req, timeout=10) as response:
            html = response.read().decode('utf-8', errors='ignore')
            parser = OGParser()
            parser.feed(html)
            if parser.image:
                article['image'] = parser.image
            if parser.title:
                article['title'] = parser.title
            elif parser.fallback_title and article['title'] == "Published Article":
                article['title'] = parser.fallback_title
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        
    return article

def main():
    with open('src/app/media/articles.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extact the JSON array string from "export const preEventArticles = [...];"
    start_idx = content.find('[')
    end_idx = content.rfind(']') + 1
    json_str = content[start_idx:end_idx]
    
    articles = json.loads(json_str)
    
    enhanced_articles = []
    
    # Use ThreadPoolExecutor for concurrent requests
    with concurrent.futures.ThreadPoolExecutor(max_workers=10) as executor:
        results = executor.map(fetch_metadata, articles)
        for res in results:
            enhanced_articles.append(res)
            
    # Write back to articles.js
    output_js = f"export const preEventArticles = {json.dumps(enhanced_articles, indent=4)};"
    with open('src/app/media/articles.js', 'w', encoding='utf-8') as f:
        f.write(output_js)
    print("Finished enhancing references!")

if __name__ == "__main__":
    main()
