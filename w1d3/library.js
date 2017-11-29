var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// MY FUNCTIONS:

function length(obj) {
  return Object.keys(obj).length;
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
  for (n in library.playlists) {
    var playlists = library.playlists[n];
    var name = playlists.name;
    var tracks = playlists.tracks;
    console.log(playlists.id + ':', name, '-', tracks.length, 'tracks');
  }
}

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function(trackId) {
  for(n in library.tracks) {
    var tracks = library.tracks[n];
    // if trackId is none, print all tracks.
    if (!trackId || (trackId === tracks.id)) {
      console.log(  tracks.id + ':', tracks.name,
                    'by', tracks.artist,
                    '(' + tracks.album + ')' );
    }
  }
}

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

// function leadingZero(num) {
//   return num > 9 ? num = '0' + num.slice(-2) : num = num;
// }

var printPlaylist = function (playlistId) {
  var playlists = library.playlists[playlistId];
  console.log(playlists.id + ':', playlists.name, '-', length(playlists.tracks),
    (length(playlists.tracks) > 1 ? 'tracks' : 'track'));
  for(n in playlists.tracks) {
    printTracks(playlists.tracks[n])
  }
}


// adds an existing track to an existing playlist


var addTrackToPlaylist = function (trackId, playlistId) {
  var playlist = library.playlists[playlistId];
  var tracks = library.tracks;
  var insertAt = playlist.tracks.length;
  playlist.tracks.splice(insertAt, 0, trackId.toString());
}


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {
  var trackId = uid();
  library.tracks[trackId] = {
    id: trackId,
    name: name,
    artist: artist,
    album: album
  }
}


// adds a playlist to the library

var addPlaylist = function(name) {
  var playlistId = uid();
  library.playlists[playlistId] = {
    id: playlistId,
    name: name,
    tracks: []
  }
}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}