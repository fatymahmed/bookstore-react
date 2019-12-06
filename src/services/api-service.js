const get = (onSuccess, onError, apiURL) => {
  fetch(apiURL, { method: 'GET' }).then((result) => result.json())
    .then((result) => {
      if (result.error) {
        onError();
      } else {
        onSuccess(result);
      }
    }).catch(error => onError(error));
};

const post = (onSuccess, onError, data, apiURL) => {
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
      onSuccess(result);
    }
  }).catch(error => onError(error));
};

const remove = (onSuccess, onError, apiURL) => {
  fetch(apiURL, { method: 'DELETE' }).then(response => response.json()).then(result => {
    if (result.error) {
      onError();
    } else {
      onSuccess(result);
    }
  }).catch(error => onError(error));
};

export {
  get,
  post,
  remove,
};
