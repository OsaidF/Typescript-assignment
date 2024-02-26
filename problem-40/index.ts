/* Album: Write a function called make_album() that builds a Object describing a music album.
The function should take in an artist name and an album title, and it should return a 
Object containing these two pieces of information. Use the function to make three dictionaries 
representing different albums. Print each return value to show that Objects are storing the album 
information correctly. Add an optional parameter to make_album() that allows you to store the number 
of tracks on an album. If the calling line includes a value for the number of tracks, 
add that value to the album’s Object. Make at least one new function call that includes the number
of tracks on an album. */

class Album {
    artist_name: string
    album_title: string
    song_tracks: number
    constructor(name: string, title: string, tracks: number) {
        this.artist_name = name;
        this.album_title = title;
        this.song_tracks = tracks;
    }
}

let album1 = new Album('Stevie Wonders','Songs in the key of life', 6);
let album2 = new Album('The Beatles','Abbey Road', 10)
let album3 = new Album('Nirvana','Nevermind',6)

console.log(`Album 1: '${album1.album_title}' by '${album1.artist_name}', it has ${album1.song_tracks} tracks`);
console.log(`Album 2: '${album2.album_title}' by '${album2.artist_name}', it has ${album2.song_tracks} tracks`);
console.log(`Album 3: '${album3.album_title}' by '${album3.artist_name}', it has ${album3.song_tracks} tracks`);