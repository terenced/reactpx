const ROOT_URL = 'https://api.500px.com/v1/photos/search';

// THIS IS NOT MY KEY.
const CONSUMER_KEY = 'sPvXEpW2sFrch65rpyZQf01lBHuRGkEDDROTG1r4';

export default function photoSearch(keyword, page, callback) {
  const url = `${ROOT_URL}?term=${keyword}&page=${page}&rpp=20&image_size=440&sort=highest_rating&consumer_key=${CONSUMER_KEY}`
  fetch(url)
  .then(function(response) {
    return response.json();
  }).then(function(data) {
    callback(data);
  }).catch(function(err) {
    console.log('Error ', err);
  });
}

// TODO: Use async version ^_^
// async function photoSearch(keyword, page) {
//   const url = `${ROOT_URL}?term=${keyword}&page=${page}&rpp=20&image_size=440&sort=highest_rating&consumer_key=${CONSUMER_KEY}`
//   const response = await fetch(url)
//   try {
//     const data = await response.json();
//     return data;
//   } catch (err) {
//     console.log(err);
//     return null;
//   }
// }

// export default photoSearch;
