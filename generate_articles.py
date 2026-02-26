import json
from urllib.parse import urlparse
import re

links_text = """https://www.facebook.com/reel/841844204934802
https://www.instagram.com/reel/DPBVB7UEra9/?igsh=MTJ3ZG11MnRrZDlmeg==
https://www.instagram.com/reel/DPBRpzuktEN/?igsh=MWtmdHNpMGwxN2Vv
https://www.instagram.com/reel/DPBRpzuktEN/?igsh=MWtmdHNpMGwxN2Vv
https://www.mynewshub.tv/2025/09/borneo-fashion-week-2025-angkat-warisan-ke-persada-dunia/
https://t.me/mynewshubviral/34699?single
https://x.com/mynewshub/status/1971201900218548661?t=DojGCoEfFQwFKPzoeJVUMw&s=19
https://www.instagram.com/p/DPB4ue2E6LW/?igsh=c2w0MGs0Ym14OHRw
https://www.instagram.com/p/DPB0a9KE847/?igsh=MXMzYnZ3ZDN2ajIw
https://mypermohonan.com/borneo-fashion-week-2025-kembali-angkat-fesyen-ke-pentas-dunia/
https://www.thestar.com.my/aseanplus/aseanplus-news/2025/09/25/the-flavours-of-the-region-come-alive-at-the-borneo-fashion-week-2025-on-oct-10
https://www.buzzingmalaysia.com/post/borneo-fashion-week-2025-fesyen-berjiwa-warisan-bernyawa
https://mdaily.co/fashion-with-purpose-jadi-nadi-borneo-fashion-week-2025/
https://msmusicscene.com/borneo-fashion-week-2025-angkat-tema-fashion-with-purpose-padu-kelestarian-warisan-borneo/
https://www.instagram.com/reel/DPCsnxXk-Fr/?igsh=ZzAyeW1scjR4M29n
https://mediapanasonline.com/borneo-fashion-2025-bakal-angkat-ke-pentas-antarabangsa/
https://www.zizihashim.rocks/gaya-hidup/gema-estetika-borneo-fashion-week-bfw-2025-siap-sedia-angkat-tirai-10-11-oktober-2025
https://tehtariktimes.com/borneo-fashion-week-2025-kelestarian-warisan-tempatan-bertemu-dunia/
https://suara.tv/26/09/2025/borneo-fashion-week-2025-menganyam-tradisi-menjahit-masa-depan/
https://www.platformmalaysia.com/2025/09/global-vision-meets-heritage-borneo.html
https://luminews.my/news/3594602
https://www.tiktok.com/@astrogempak/video/7553962677966556433
https://suaramerdeka.com.my/borneo-fashion-week-2025-fashion-with-purpose-angkat-warisan-dan-kelestarian/
https://www.tvsarawak.my/2025/09/25/borneo-fashion-week-2025-tampil-dengan-tema-fashion-with-purpose/
https://www.instagram.com/p/DPB4ue2E6LW/
https://x.com/mynewshub/status/1971201900218548661
https://www.malaysianupdates.com/borneo-fashion-week-2025-pentas-global-fesyen-berteraskan-kelestarian-budaya/
https://www.instagram.com/p/DPD12HdEm6R/?igsh=dTBnbjRpY2syZjYx
https://medialahmy.com/perniagaan/borneo-fashion-week-2025-kembali-dengan-visi-global/syira/
https://www.wajibtonton.com/2025/09/borneo-fashion-week-2025-serlahkan.html?m=1
https://www.max-infos.com/2025/09/26/borneo-fashion-week-2025-kembali-di-pavilion-damansara-heights-fesyen-kelestarian-warisan-borneo-disatukan/
https://kelkatutv.com/borneo-fashion-week-2025-kembali-dengan-visi-global/
https://www.budiey.com/borneo-fashion-week-2025-angkat-identiti-budaya-ke-pentas-dunia/
https://www.facebook.com/share/v/1B9S1k41jK/?mibextid=wwXIfr
https://murai.my/borneo-fashion-week-2025-bakal-gegar-kl-warisan-fesyen-kejutan-dunia/
https://www.instagram.com/p/DPIUr9LDXAx/?igsh=MTVnN3IyOGpmMWI2Ng==
https://gempak.com/giveaway/gmw-giveaway-borneo-fashion-week-bfw-2025
https://themalaysianreserve.com/2025/09/30/borneo-fashion-week-2025-returns-with-a-global-vision-3/
https://wartaoce.com/borneo-fashion-week-2025-akan-menggempakkan-kl-legasi-fesyen-kejutan-global/
https://about.luminews.my/news/3605273
https://seeni.my/article/gmw-giveaway-borneo-fashion-week-bfw-2025-gempak-136198
https://www.youtube.com/watch?v=yiHhpaNh65I
https://www.instagram.com/p/DPVMJlAkjWS/?igsh=ZTRjcWYyM21ucXU3
https://www.tvsarawak.my/2025/10/03/borneo-fashion-week-2025-angkat-warisan-tekstil-fesyen-lestari/
https://lifestyle.bernama.com/news.php?id=2474282
https://www.malaymail.com/news/life/2025/10/03/borneo-fashion-week-returns-after-five-year-pause-with-focus-on-heritage-and-sustainability/193239#google_vignette
https://suarasarawak.my/borneo-fashion-week-2025-angkat-warisan-tekstil-fesyen-lestari/
https://x.com/TMReserve/status/1972924129964851652
https://www.instagram.com/p/DPVVRR5D5DT/?igsh=cnlocHR3NzJ6MG1u
https://utusansarawak.com.my/borneo-fashion-week-2025-angkat-warisan-tekstil-fesyen-lestari/
https://www.tiktok.com/@utusansarawak/video/7556827013097606418
https://www.thestar.com.my/aseanplus/aseanplus-news/2025/10/04/borneo-fashion-week-returns-with-heritage-and-sustainability-designers-from-brunei-singapore-and-vietnam-also-included
https://www.facebook.com/photo.php?fbid=1422618126537967&id=100063693795286&set=a.691201326346321
https://www.facebook.com/share/1AEbcj5vCJ/?mibextid=wwXIfr
https://x-press.my/?p=13693
https://www.7klik.com/2025/10/borneo-fashion-week-2025-tradisi-borneo.html
https://www.reddit.com/r/nasikatok/comments/1nxnur9/borneo_fashion_week_returns_to_kl_with_heritage/
https://thesun-ipaper.cld.bz/20251004/6/
https://www.utusanborneo.com.my/2025/10/03/borneo-fashion-week-2025-angkat-warisan-tekstil-fesyen-lestari
https://www.pressreader.com/malaysia/utusan-borneo-sarawak/20251005/281865829661149?srsltid=AfmBOorTk3HERpnHRLZwQXzynt_5yTl0JK9qWTI4brJ0kGRGnAQgp2zn
https://ladybosz.com/2025/10/06/borneo-fashion-week-adalah-platform-penceritaan-kelestarian-dan-warisan-budaya/
https://www.instagram.com/p/DPLlwLiCdXp/?igsh=bmcza21wbjl3dmNn
https://www.instagram.com/p/DPnw56NkgBF/
https://www.instagram.com/p/DPnxcpqEjZe/
https://www.instagram.com/p/DPnxoLUkoCs/
https://www.instagram.com/p/DPnxuzmEgwj/
https://www.instagram.com/p/DPnyNFLEsbA/
https://www.instagram.com/p/DPnyE6yEinX/
https://www.instagram.com/p/DPnzb2gEll5/
https://www.instagram.com/p/DPnzrYoEppy/
https://www.instagram.com/p/DPnz5ClEqEB/
https://www.instagram.com/p/DPn0FT3EpDr/
https://www.instagram.com/p/DPn3cLJErjO/
https://www.instagram.com/p/DPn6VZ3EvFm/
https://www.instagram.com/p/DPoH8eBknyN/
https://www.instagram.com/p/DPoJIaeksbf/
https://www.instagram.com/p/DPoJpC9EnTe/
https://www.instagram.com/p/DPoOSwDEr97/
https://www.instagram.com/p/DPoR6AnEuwC/
https://www.instagram.com/p/DPoSLlsko6n/
https://www.instagram.com/p/DPqTxM7ktY3/
https://www.instagram.com/p/DPqUYAwEuEO/
https://www.instagram.com/p/DPqVEnOku7j/
https://www.instagram.com/p/DPqV5OLEjO
https://www.instagram.com/p/DPqXTZvEocU/
https://www.instagram.com/p/DPqX0nhkgml/
https://www.instagram.com/p/DPqZQUJknsE/
https://www.instagram.com/p/DPqZk1GEi28/
https://www.instagram.com/p/DPqaQEQEtB5/
https://www.instagram.com/p/DPsut8zkht7/
https://www.instagram.com/p/DPsQ2fQj6ee/?img_index=3&igsh=MXdkODdoYzJoajEyaA==
https://lifestyle.bernama.com/news-en.php?id=2477818
https://mypermohonan.com/borneo-fashion-week-2025-shines-bright-with-culture-and-couture/
https://siakapkeli.my/2025/10/13/borneo-fashion-week-2025-berlangsung-dengan-penuh-meriah/
https://www.malaysianupdates.com/gaya-dan-budaya-bertemu-di-borneo-fashion-week-2025/
https://www.zizihashim.rocks/gaya-hidup/borneo-fashion-week-2025-menutup-tirai-dengan-gemuruh-standing-ovation
https://t.me/mynewshubviral/35228
https://www.instagram.com/p/DPvGdxFEvzC/?igsh=MXRnNzc4czZzanM1YQ==
https://www.facebook.com/share/p/1JzkfJVHuu/
https://www.malaysianupdates.com/gaya-dan-budaya-bertemu-di-borneo-fashion-week-2025/
https://www.facebook.com/247xMedia/posts/
https://sabahnews.com.my/borneo-fashion-week-2025-angkat-warisan-borneo-dan-kelestarian-fesyen-moden/
https://thestoly.com/2025/10/borneo-fashion-week-2025-where-style-meets-soul/
https://suara.tv/13/10/2025/borneo-fashion-week-2025-bila-fesyen-menjadi-suara-budaya-alam/
https://msmusicscene.com/bfw-2025-tampil-penuh-gaya-dan-makna/
https://www.lazurre.com/2025/10/fashion-with-purpose-borneo-fashion.html
https://www.facebook.com/share/p/1BP4AUya1g/
https://www.thestar.com.my/aseanplus/aseanplus-news/2025/10/13/bisaya-inspired-outfits-shine-at-borneo-fashion-week-2025-as-the-event-dazzles-with-style-and-soul
https://mdaily.co/bfw-2025-fashion-with-purpose-tutup-tirai-dengan-penuh-gemilang/
https://medialahmy.com/perniagaan/borneo-fashion-week-2025-berlangsung-dengan-penuh-meriah/syira/
https://newswav.com/article/borneo-fashion-week-2025-where-style-meets-soul-A2510_kgsW9U
https://www.kopiplanet.com/bfw-2025-bertemakan-fashion-with-purpose-angkat-warisan-borneo-kelestarian-keindahan-rekaan/
https://kelkatutv.com/fesyen-dengan-jiwa-borneo-fashion-week-2025-serlah-keindahan-budaya-dan-alam/
https://destina.my/borneo-fashion-week-2025-rai-keunikan-fesyen-bermakna/
https://www.redtomato.com.my/video/38506.html
https://thesun-ipaper.cld.bz/20251013/6/
https://www.thestar.com.my/aseanplus/aseanplus-news/2025/10/14/borneo-fashion-week-2025-dazzles-the-crowd-with-an-innovative-display-and-style-from-south-east-asia
https://www.utusan.com.my/gaya/fesyen/2025/10/borneo-fashion-week-2025-angkat-warisan-dan-kelestarian-fesyen-borneo/
NONA TV3- TX 2 November 2pm
https://www.instagram.com/p/DP0Xc-vAMOG/?igsh=MXBsbGlnb2o1YXA3YQ==
https://murai.my/borneo-fashion-week-2025-labuh-tirai-dengan-penuh-meriah/
https://ohbulan.com/borneo-fashion-week-serlah-aura-glamour-moden-kekalkan-kelestarian-rekaan/
https://www.facebook.com/sarawaktribune/posts/edgy-meets-earth-nasha-prive-wins-big-at-borneo-fashion-week-2025kuching-born-de/1581810466451747/
https://www.facebook.com/sarawaktribune/posts/edgy-meets-earth-nasha-prive-wins-big-at-borneo-fashion-week-2025kuching-born-de/1581810466451747/
https://www.sarawaktribune.com/edgy-meets-earth-nasha-prive-wins-big-at-borneo-fashion-week-2025/
https://www.hotfm.audio/borneo-fashion-week-kekalkan-kelestarian-rekaan/amp/
https://barangmurah.my/trending/borneo-fashion-week-serlah-aura-glamour-moden-kekalkan-kelestarian-rekaan/
https://www.thestar.com.my/lifestyle/entertainment/2025/10/16/celebrity-stylist-saerah-r-kunjan-wins-green-thread-award-at-borneo-fashion-week
https://babab.net/artikel/borneo-fashion-week-2025-berlangsung-dengan-penuh-meriah.html
https://vt.tiktok.com/ZSUxPVFup/
https://www.instagram.com/reel/DQN8BISCRYr/?igsh=cWI4YTR1OWVxNjc3"""

articles = []
lines = [l.strip() for l in links_text.split('\n') if l.strip()]

seen = set()
unique_lines = []
for line in lines:
    if line not in seen:
        seen.add(line)
        unique_lines.append(line)

for line in unique_lines:
    if line.startswith('http'):
        url_obj = urlparse(line)
        domain = url_obj.netloc
        domain = domain.replace('www.', '')
        
        domain_parts = domain.split('.')
        publisher = domain_parts[0].capitalize()
        if publisher == 'Facebook': publisher = 'Facebook'
        elif publisher == 'Instagram': publisher = 'Instagram'
        elif publisher == 'X': publisher = 'X (Twitter)'
        elif publisher == 'T': publisher = 'Telegram'
        elif publisher == 'Tiktok': publisher = 'TikTok'
        elif publisher == 'Youtube': publisher = 'YouTube'
        elif publisher == 'Thestar': publisher = 'The Star'
        elif publisher == 'Malaymail': publisher = 'Malay Mail'
        elif publisher == 'Vt': publisher = 'TikTok'
        else:
            publisher = domain

        path = url_obj.path
        title = "Published Article"
        
        if 'borneo-fashion-week' in path.lower() or 'borneo-fashion' in path.lower() or 'bfw' in path.lower() or 'fesyen' in path.lower():
            parts = [p for p in path.split('/') if p]
            for p in parts:
                if len(p) > 15 and '-' in p:
                    title_words = p.replace('-', ' ')
                    title = ' '.join(word.capitalize() for word in title_words.split())
                    break
            if title == "Published Article":
                title = "Borneo Fashion Week 2025 Feature"

        if 'instagram' in domain:
            title = "Instagram Feature"
        elif 'facebook' in domain:
            title = "Facebook Feature"
        elif 'tiktok' in domain or 'vt.tiktok' in domain:
            title = "TikTok Feature"
        elif 'twitter' in domain or 'x.com' in domain:
            title = "X Feature"
        elif 'youtube' in domain:
            title = "YouTube Feature"
            
        articles.append({
            'url': line,
            'publisher': publisher,
            'title': title
        })
    else:
        articles.append({
            'url': '#',
            'publisher': 'TV3',
            'title': line
        })

output_js = f"export const preEventArticles = {json.dumps(articles, indent=4)};"

with open('src/app/media/articles.js', 'w', encoding='utf-8') as f:
    f.write(output_js)
print("done")
