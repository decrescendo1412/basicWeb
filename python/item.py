import requests

# champion Name parsing
for i in range(1000, 10000):
    save_path = "C:\images\item\ " + str(i) + ".png"
    image_url = "http://ddragon.leagueoflegends.com/cdn/13.24.1/img/item/" + str(i) + ".png"

    download_image = requests.get(image_url)
    if download_image.status_code == 200:
        with open(save_path, 'wb') as file:
            file.write(download_image.content)