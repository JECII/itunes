function getMusic(){
  var artist = document.getElementById('artist').value;
  itunes.getMusicByArtist(artist).then(drawSongs);
}

var obj= function (title, albumArt, artist,collection,price,preview)
{
    this.title = title;
    this.albumArt= albumArt;
    this.artist = artist;
    this.collection = collection;
    this.price= price;
    this.preview = preview;
}
songList = [{
  title: 'song title',
  albumArt: 'url for song album cover art',
  artist: 'artistName',
  collection: 'album title',
  price: 'price of song',
  preview: 'url will play the song'
}]

function drawSongs(songList){ 
  for (var i=0;i<songList.length;i++)
  { var song= songList[i];
  if(song){
    document.getElementById("songlist").innerHTML += '<li class="list-group-item">' +
    '<h4>'+song.title +'</h4>'+
    '<h3>'+song.artist +'</h3>'+
    '<img src="'+song.albumArt+'">'+ 
    '<h2>' +song.collection + '</h2>'+
    '<h5>Price: $' +song.price +'</h5>'
    +'Click Here'.link(song.preveiw)+
    '</li>';
    }
  }
}

function reset(){
  document.getElementById("songlist").innerText=''
  
} 
  


