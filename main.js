const url = "http://localhost:5000/api";

function getUsers() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => (renderApiResult.textContent = JSON.stringify(data)))
    .catch((error) => console.error(error));
}

function getUser(id) {
  fetch(`${url}/${id}`)
    .then((response) => response.json())
    .then((data) => {
      userName.textContent = JSON.stringify(data.name);
      userCity.textContent = JSON.stringify(data.city);
      userAvatar.src = data.avatar;
    })
    .catch((error) => console.error(error));
}

function addUser(newUser) {
  fetch(url, {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-type": "application/json;charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => (alertApi.textContent = data))
    .catch((error) => console.error(error));
}

function updateUser(updateUser, id) {
  fetch(`${url}/${id}`, {
    method: "PUT",
    body: JSON.stringify(updateUser),
    headers: {
      "Content-type": "application/json;charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => (alertApi.textContent = data))
    .catch((error) => console.error(error));
}

function deleteUser(id) {
  fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json;charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => (alertApi.textContent = data))
    .catch((error) => console.error(error));
}

const newUser = {
  name: "Cristiano Ronaldo",
  avatar: "https://www.instagram.com/p/CpgD3nBLNVE/",
  city: "Funchal",
};
addUser(newUser);

const updateUserData = {
  name: "Neymar",
  avatar: "https://www.instagram.com/p/CpdNL1YIm2H/",
  city: "Mogi das Cruzes",
};

getUsers();
getUser(1);

updateUser(updateUserData, 1);
deleteUser(2);

