import setData from './Components/App/App'

const getData = () => {
    fetch('https://bible-api.com/john%203:16?translation=kjv')
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Something went wrong ...');
      }
    })
     .then(data => setData(data))
}

export default getData 