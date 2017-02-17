import $ from 'jquery';
import { getData } from 'soundcloud';

function submitButton (event) {
  event.preventDefault();
  var query = $('#track-input').val();
  getData(query).then(setData);

}

export { submitButton };
