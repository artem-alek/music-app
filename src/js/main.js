import $ from 'jquery';
import { GH_TOKEN } from './token';
import { trackTemplate } from './trackTemplate';
import { submitButton } from './submitButtons';

$('form').submit(submitButton);

// var piano = "piano";
// getData(piano);

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
