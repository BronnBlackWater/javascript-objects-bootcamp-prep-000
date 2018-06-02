var playlist = {'The Rolling Stones', 'I Cant get No Satisfaction'}

function updatePlaylist(playlist, artist, song) {
    object.artist = song;
    return playlist;
}

function removeFromPlaylist(object,artist) {
  delete object.artist;
}
