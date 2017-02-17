import $ from 'jquery';
import { trackTemplate } from './trackTemplate';
import { submitButton } from './submitButtons';

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
    result.trackTitle = info.title;
    result.artWork = info.artwork_url;
    result.bandName = info.user.username;
    $('.tracks-container').append(trackTemplate(result));
  }
}

export { setData };
