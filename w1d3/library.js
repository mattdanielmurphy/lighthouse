var library = {
  tracks: {
    t01: { id: "t01",
    name: "Code Monkey",
    artist: "Jonathan Coulton",
    album: "Thing a Week Three"},
    t02: { id: "t02",
    name: "Model View Controller",
    artist: "James Dempsey",
    album: "WWDC 2003"},
    t03: { id: "t03",
    name: "Four Thirty-Three",
    artist: "John Cage",
    album: "Woodstock 1952"}
  },
  playlists: {
    p01: { id: "p01",
    name: "Coding Music",
    tracks: ["t01", "t02"]},
    p02: { id: "p02",
      name: "Other Playlist",
      tracks: ["t03"]}
  },
  printPlaylists: function () {
    for (n in this.playlists) {
      var playlists = this.playlists[n];
      var name = playlists.name;
      var tracks = playlists.tracks;
      console.log(playlists.id + ':', name, '-', tracks.length, 'tracks');
    }
  },
  printTracks: function(trackId) {
    for(n in this.tracks) {
      var tracks = this.tracks[n];
      // if trackId is none, print all tracks.
      if (!trackId || (trackId === tracks.id)) {
        console.log(  tracks.id + ':', tracks.name,
                      'by', tracks.artist,
                      '(' + tracks.album + ')' );
      }
    }
  },
  printPlaylist: function(playlistId) {
    var playlists = this.playlists[playlistId];
    console.log(playlists.id + ':', playlists.name, '-', length(playlists.tracks),
      (length(playlists.tracks) > 1 ? 'tracks' : 'track'));
    for(n in playlists.tracks) {
      this.printTracks(playlists.tracks[n])
    }
  },
  addTrackToPlaylist: function(trackId, playlistId) {
    var playlist = this.playlists[playlistId];
    var tracks = this.tracks;
    var insertAt = playlist.tracks.length;
    playlist.tracks.splice(insertAt, 0, trackId.toString());
  },
  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
  addTrack: function (name, artist, album) {
    var trackId = library.uid();
    this.tracks[trackId] = {
      id: trackId,
      name: name,
      artist: artist,
      album: album
    }
  },
  addPlaylist: function(name) {
    var playlistId = library.uid();
    this.playlists[playlistId] = {
      id: playlistId,
      name: name,
      tracks: []
    }
  }
}

function length(obj) {
  return Object.keys(obj).length;
}

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {
  library.tracks.name.search()
}