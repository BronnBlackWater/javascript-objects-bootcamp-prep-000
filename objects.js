var playlist = {}

function updatePlaylist(object, artist, song) {
    return object.artist = song;
}

function removeFromPlaylist(object,artist) {
  delete object.artist;
}
