import requests

# champion Name parsing
for i in range(8000, 10000):
    save_path = "C:\images\perks\ " + str(i) + ".png"
    image_url = "https://opgg-static.akamaized.net/meta/images/lol/perk/" + str(i) + ".png"

    download_image = requests.get(image_url)
    if download_image.status_code == 200:
        with open(save_path, 'wb') as file:
            file.write(download_image.content)
