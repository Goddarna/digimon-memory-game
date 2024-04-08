export default function fetchData(endpoint) {
  //   try {
  //     const response = await fetch(endpoint);

  //     if (!response.ok) {
  //       throw new Error("Cound not fetch data from", endpoint);
  //     }
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  return new Promise((resolve, reject) => {
    fetch(endpoint)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response not ok");
        }

        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });

  //   fetch(endpoint)
  //     .then((response) => {
  //       // If response is not ok, throw error
  //       if (!response.ok) {
  //         throw new Error("Cound not fetch data from", endpoint);
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       // Fetch data
  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
}
