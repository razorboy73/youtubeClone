//AIzaSyDb-ML3obDCLUNK4i6cosOjY31do-9q2JY

const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let response = JSON.parse(xhttp.responseText);
    let videoData = response.items.map(function (item) {
      return item.snippet;
    });
    var container = document.querySelector("#video-divs");
    videoData.forEach(function (video) {
      console.log(video);
      let videoContainer = document.createElement("div");
      videoContainer.classList.add("videoContainer");

      videoContainer.innerHTML = `
      <img height=200 src="${video.thumbnails.high.url}" alt="" srcset="">
      
      <h4>${video.title}</h4>
      <p>${video.channelTitle}</p>
      <p>${new Date(video.publishTime).toLocaleDateString()}</p>
      `;
      container.appendChild(videoContainer);
    });
  }
};
xhttp.open(
  "GET",
  "https://www.googleapis.com/youtube/v3/search?part=snippet&q=sailing&key=AIzaSyDb-ML3obDCLUNK4i6cosOjY31do-9q2JY",
  true
);
xhttp.send();
