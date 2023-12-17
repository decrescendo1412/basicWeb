const menu = document.querySelector("#menu");
let buttons = document.querySelectorAll("button");
let infos = [];
let markers = [];
let stores = [];
let typeOn = [];
function Store(name, type, address) {
  this.name = name;
  this.type = type;
  this.address = address;
}

//for(let i = 0; i < 16; i++) {
//  buttons[i] = document.querySelector(`#${i}`);
//}
let url = "https://api.odcloud.kr/api/3056779/v1/uddi:8eeb9ef6-3f48-4474-a27f-f77ff9339e2d?page=1&perPage=400&serviceKey=4PnSZwtUrtwQFKzA81jb0b54mLcNMdrc%2Frik3c%2F3r6CA0tvk5921tbWU9aTFf9r0shT2Nipo9aLGlokbVxGGkg%3D%3D";	
fetch(url)
.then(res => res.json())
.then(json => {
  const data = json.data;
  for(let i = 0; i < data.length; i++) {
    stores.push(new Store(data[i].업소명, data[i].업태, data[i].업소주소));
  }
  var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
  mapOption = { 
    center: new kakao.maps.LatLng(35.864688, 128.593355), // 반월당역 좌표
    level: 3 // 지도의 확대 레벨
  };

  // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
  var map = new kakao.maps.Map(mapContainer, mapOption);
  // 주소-좌표 변환 객체를 생성합니다
  var geocoder = new kakao.maps.services.Geocoder();
  let type = ["경양식","한식","회집","뷔페식","호프/통닭","식육(숯불구이)","분식","일식","중국식","복어취급","냉면집","정종/대포집/소주방","탕류(보신용)","김밥(도시락)","외국음식전문점","기타"];
  
  buttons.forEach(button => {
    button.addEventListener('click', () =>{
      button.classList.toggle('active');
      closeStores();
      if(typeOn.includes(type[button.id])) {
        for(let i = 0; i < typeOn.length; i++) {
          if(typeOn[i] === type[button.id])  {
            typeOn.splice(i, 1);
            break;
          }
        }
      } else {
        typeOn.push(type[button.id]);
      }
      printStores();
    });
  });
  function printStores() {
    for (let i = 0; i < 400; i++) {
      // 주소로 좌표를 검색합니다
      if(typeOn.includes(stores[i].type)){
        geocoder.addressSearch(stores[i].address, function(result, status) {
          // 정상적으로 검색이 완료됐으면 
          if (status === kakao.maps.services.Status.OK) {
              var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
              // 결과값으로 받은 위치를 마커로 표시합니다
              var marker = new kakao.maps.Marker({
                  map: map,
                  position: coords
              });
              markers.push(marker);
              marker.setMap(map);
              // 인포윈도우로 장소에 대한 설명을 표시합니다
              var infowindow = new kakao.maps.InfoWindow({
                  content: `<div style="width:150px;text-align:center;padding:6px 0;">${stores[i].name}</div>`
              });
              infowindow.open(map, marker);
              infos.push(infowindow);
          }
        });
      }
    }
  }
  function closeStores() {
    for(let i=0; i<infos.length; i++){
      infos[i].close();
      markers[i].setMap(null);
    }
  }
});
