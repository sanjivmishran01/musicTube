
function getVideo(inputval) {
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
        key: 'AIzaSyBM9vDKhdLmi64SYdHkWPozUBexdd6NcWk',
        q: 'latest Bollywood Songs',
        part: 'snippet',
        maxResults:20,
        type: 'video',
        videoEmbeddable: true,
    },
    success: function(data){
      for(var i=0; i<data.items.length; i++){
          embedVideo(data, i)
      }
    },
    error: function(response){
        console.log("Request Failed");
    }
  });
}

function embedVideo(data, i) {

$("<div class='video-responsive'><iframe frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen src='https://www.youtube.com/embed/"+data.items[i].id.videoId+"'></iframe><h3 class='title'>"+data.items[i].snippet.title+"</h3></div>").insertAfter(".videoFrame");
//$("<iframe id='"+frame+"' width='727' height='409' src='https://www.youtube.com/embed/"+data.items[i].id.videoId+"' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>").insertAfter(".videoFrame");

}
getVideo();
