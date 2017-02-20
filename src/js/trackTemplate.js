import $ from 'jquery'
import { setData, stream } from './main'
import { GH_TOKEN } from './token'

function trackTemplate (result) {
  return `
    <div class="result-container">
      <img class="image-click" src="${result.artWork}" data-streamurl="${result.stream}?client_id=${GH_TOKEN}"/>
      <h3 class="song-name">${result.trackTitle}</h3>
      <h1 class="band-name">${result.bandName}</h1>
    </div>
  `
}

function audioSelect  (stream) {
  $('.audio-track').html(`
    <audio class="audio-play" src="${stream}" controls></audio>
  `);

}
export { trackTemplate, audioSelect };
