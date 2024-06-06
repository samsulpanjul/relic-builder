export const getData = (data, callback) => {
  fetch(`https://api.hakush.in/hsr/data/${data}.json`)
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((err) => console.log("Error ", err));
};

export const getItem = (data, item, callback) => {
  if (!item) return;

  fetch(`https://api.hakush.in/hsr/data/en/${data}/${item}.json`)
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((err) => console.log("Error ", err));
};
