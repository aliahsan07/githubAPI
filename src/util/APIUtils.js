export default function fetchData(inputData){

  const url = `https://api.github.com/users/${inputData}`;

  fetch(url, {
      method: 'GET',
    }).then(res => res.text())
      .then(body => (JSON.parse(body))) 
      .catch(error => console.error(error));

}