import axios from 'axios';


// function getSourceList(){
// 	axios
// 	.get('https://newsapi.org/v2/sources?apiKey=099148be22804e849a0c6fe022b7cf5e')
//   .then(function (response) {
// 		console.log(response.data);
// 		return response.data;
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
// }

// export default getSourceList


export async function getSourceList() {
  const response = await axios
    .get('https://newsapi.org/v2/sources?apiKey=099148be22804e849a0c6fe022b7cf5e')
    .catch((error) => console.log(error));
  return response.data;
}
