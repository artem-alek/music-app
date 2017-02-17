import $ from 'jquery';
import { GH_TOKEN } from './token';

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

export { getdata };
