var obj = {
    name:"guvi",
    age:32
  }
  // JSON:
  // javascript Object notation
  var obj = {
    "name":"guvi",
    "age":32
  }
  // Why JSON??
  // Why API??
  // Application Programming Interface
  var res = {
          "state": "Tripura",
          "ruralHospitals": 99,
          "ruralBeds": 1140,
          "urbanHospitals": 56,
          "urbanBeds": 3277,
          "totalHospitals": 155,
          "totalBeds": 4417,
          "asOn": "2017-12-31T00:00:00.000Z"
        }
  console.log(res.state);
  console.log(res["state"]);
  Array Of JSON:
  var arr = [
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "userId": 1,
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    }]
    
    console.log(arr[1].id);