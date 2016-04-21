function getMusic() {
  var artist = document.getElementById('artist').value;
  itunes.getMusicByArtist(artist).then(drawSongs);
}

var obj = function (title, albumArt, artist, collection, price, preview) {
  this.title = title;
  this.albumArt = albumArt;
  this.artist = artist;
  this.collection = collection;
  this.price = price;
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

function drawSongs(songList) {
  for (var i = 0; i < songList.length; i++) {
    var song = songList[i];
    if (song) {
      document.getElementById("songlist").innerHTML += '<li class="list-group-item"><div class="row">'
        + '<div class="col-sm-2"><img src="' + song.albumArt + '" alt="album"/></div>'
        + '<div class="col-sm-3">Title: ' + song.title + '<br>Collection: ' + song.collection + '</div>'
        + '<div class="col-sm-5"><audio controls><source src="' + song.preview + '" type="audio/ogg"></audio> </div><div class="col-sm-2">Price: $' + song.price + '</div></div></li><br>';
    }
  }
}

function reset() {
  document.getElementById("songlist").innerText = ''

}

$("Reset").css('background-color', "blue")

