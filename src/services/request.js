export default function(urlString) {
  return new Promise((resolve, reject) => {
      fetch(urlString)
        .then((response) => response.json())
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    }
  )
}