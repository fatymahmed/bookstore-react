import { apiURL } from '../constants';

const get = (onSuccess, onError) => {
  fetch(apiURL, { method: 'GET' }).then((result) => result.json())
    .then((result) => {
      if (result.error) {
        onError();
      } else {
        onSuccess(result);
      }
    }).catch(error => onError(error));
};

const post = (onSuccess, onError, data) => {
  fetch(apiURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(result => result.json()).then(result => {
    if (result.error) {
      onError();
    } else {
      console.log(result);
      onSuccess(result);
    }
  }).catch(error => onError(error));
};

export {
  get,
  post,
};
