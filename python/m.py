import requests

champion = []

# get Json File
datas = requests.get('https://ddragon.leagueoflegends.com/cdn/12.6.1/data/ko_KR/champion.json')
datas = datas.json()

# champion Name parsing
for data in datas["data"]:
    champion.append(data)


for champ in champion:
    save_path = "C:\images\champ\ " + champ + ".png"
    image_url = "http://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/" + champ + ".png"

    download_image = requests.get(image_url)

    with open(save_path, 'wb') as file:
        file.write(download_image.content)