const url = 'https://api.coingecko.com/api/v3/coins/markets';
const options = {
  method: 'GET',
  headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-BWqAE8awtCSzBdWSGU6fFWWT'}
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));
