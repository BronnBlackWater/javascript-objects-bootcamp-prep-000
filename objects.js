var playlist = {}

function updatePlaylist(playlist, artist, song) {
    object.artist = song;
    return playlist;
}

function removeFromPlaylist(object,artist) {
  delete object.artist;
}
