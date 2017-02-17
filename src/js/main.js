import $ from 'jquery';
import { GH_TOKEN } from './token';
import { trackTemplate } from './trackTemplate'

function getData (query) {
  return $.ajax({
    url: `https://api.soundcloud.com/tracks/?client_id=${GH_TOKEN}`,
    dataType: 'json',
    //success: console.log,
    data: {
      q: query
    }
  });
}

function submitButton (event) {
  event.preventDefault();
  var query = $('#track-input').val();
  getData(query).then(setData);

}

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
