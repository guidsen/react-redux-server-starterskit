const fetch = require('isomorphic-fetch');

module.exports = function callApi(url, mapper) {
  return new Promise((resolve, reject) => {
    return fetch(url, {
      headers: { 'Authorization': 'token 5ad38701aa6fc572f0b0a13dfe8ea5c755b6b12d' },
    }).then(res => {
      if (!res.ok) reject(res);
      return res.json();
    })
    .then(data => {
      resolve(data.map(item => {
        return mapper(item);
      }));
    });
  });
};
