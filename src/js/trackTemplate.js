import $ from 'jquery'
import { setData } from './main'

function trackTemplate (result) {
  return `
    <div class="result-container">
      <img src="${result.artWork}"/>
      <h3 class="song-name">${result.trackTitle}</h3>
      <h1 class="band-name">${result.bandName}</h1>
    </div>
  `
}

export { trackTemplate };
