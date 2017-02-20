import $ from 'jquery';
import { trackTemplate, audioSelect } from './trackTemplate';
import { getData } from './soundcloud';

$('form').submit(submitButton);

function submitButton (event) {
  event.preventDefault();
  var query = $('#track-input').val();
  getData(query).then(setData);
}

function setData (data) {
  var result = {};
  for (var i=0; i<data.length; i++){
    var info = data[i];
    result.stream = info.stream_url;
    result.trackTitle = info.title;
    result.artWork = info.artwork_url;
    result.bandName = info.user.username;
    $('.tracks-container').append(trackTemplate(result));
  }
  $('.image-click').click(setAudioLink)

}

function setAudioLink (event) {
 var target = $(event.currentTarget);
 var stream = target.data("streamurl");
 audioSelect(stream);
 document.querySelector('.audio-play').play();
}
