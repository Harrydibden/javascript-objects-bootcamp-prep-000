var playlist = {
  refused: "Shape of Punk to Come",
  takingBackSunday: "Where you want to be"
}

function updatePlaylist(obj, artist, song){
  obj.artist = song;
  return obj;
}

function removeFromPlaylist(obj, artist){
  delete obj.artist;
  return obj;
}