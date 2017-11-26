import SpotifyWebApi from 'spotify-web-api-node';

var overridAccToken = 'BQDAatJKy0qV72XlDC-e50KKhoBpK6SRwn19nzaOYhsBpTW6CQURR_pHQ8IcuxbwYJhNXYlUjVtIBM8-um_AtgniLJtKVoTXfImqdOSqzw7y7i90vXPzML8QH4EDyJ8N75Fkr8TgDAnH7GQZ0RvRmbVgNSaNlOpjeewxxX4qDaFfjqsq2ywMfUY8Okwv4vPlxw';

export function getClientAuthorization() {
    var scopes = ['playlist-read-private', 'playlist-modify-private', 'streaming', 'user-read-playback-state', 'user-modify-playback-state', 'user-read-currently-playing'],
        redirectUri = 'http://beatstreet.tech/loginResult',
        clientId = '1ee50d582cdf4b418e31e20189774f36',
        state = 'banter';

// Setting credentials can be done in the wrapper's constructor, or using the API object's setters.
    var spotifyApi = new SpotifyWebApi({
        redirectUri : redirectUri,
        clientId : clientId
    });

    var scopeList = '';

    for (var i = 0; i < scopes.length; ++i) {
        scopeList += scopes[i] + " ";
    }

// Create the authorization URL
    var authorizeURL = spotifyApi.createAuthorizeURL(scopes, state);

// https://accounts.spotify.com:443/authorize?client_id=5fe01282e44241328a84e7c5cc169165&response_type=code&redirect_uri=https://example.com/callback&scope=user-read-private%20user-read-email&state=some-state-of-my-choice
    console.log(authorizeURL);

    window.location.href = authorizeURL;
}

export function setAccessToken(t) {
    localStorage.setItem('accessToken', overridAccToken);
}

export function searchTracks(q) {
    var spotifyApi = new SpotifyWebApi();

    localStorage.setItem('accessToken', overridAccToken);

    spotifyApi.setAccessToken(localStorage.getItem('accessToken'));

    var tracks = spotifyApi.searchTracks(q);

    console.log(tracks);
}

export function getCurrentTrack() {
    var spotifyApi = new SpotifyWebApi();

    localStorage.setItem('accessToken', overridAccToken);

    spotifyApi.setAccessToken(localStorage.getItem('accessToken'));

    var curTrack = spotifyApi.getMyCurrentPlayingTrack();

    console.log(curTrack);
}

export function pauseSong() {
    var spotifyApi = new SpotifyWebApi();

    localStorage.setItem('accessToken', overridAccToken);

    spotifyApi.setAccessToken(localStorage.getItem('accessToken'));

    spotifyApi.pause();
}

export function playSong() {
    var spotifyApi = new SpotifyWebApi();

    localStorage.setItem('accessToken', overridAccToken);

    spotifyApi.setAccessToken(localStorage.getItem('accessToken'));

    spotifyApi.play();
}

export function playSpecificSong(uri) {
    var spotifyApi = new SpotifyWebApi();

    localStorage.setItem('accessToken', overridAccToken);

    spotifyApi.setAccessToken(localStorage.getItem('accessToken'));

    spotifyApi.play({
        context_uri:uri,
    });
}