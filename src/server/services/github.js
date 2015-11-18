const callApi = require('./callApi');

function getRepos() {
  return callApi('https://api.github.com/user/repos', data => {
    return {
      id: data.id,
      name: data.name,
      description: data.description,
      url: data.url,
      stargazers_count: data.stargazers_count,
      watchers_count: data.watchers_count,
      private: data.private,
      created_at: data.created_at,
    };
  });
}

module.exports = { getRepos };
