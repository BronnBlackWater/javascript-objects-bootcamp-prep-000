var playlist = {'The Rolling Stones': 'I Can\'t get No Satisfaction'}

function updatePlaylist(playlist, artist, song) {
    playlist[artist] = song;
    return playlist;
}

function removeFromPlaylist(object,artist) {
  delete object.artist;
}
