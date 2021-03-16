// const URL = "http://f2.uppeople.space/api";
const URL = process.env.REACT_APP_API_ENDPOINT;
const getToken = () => localStorage.getItem("token");

/**
 * Fetches user from an api by id
 *
 * @param {Number} id user id
 * @returns {Promise} Promise object represents operation result
 */
export const getUser = id => {
  const token = getToken();
  return fetch(`${URL}/admin/view-editUser/${id}`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
    },
  })
    .then(response => {
      if (response.status > 400) {
        return response.status;
      }
      if (response.ok||response.status === 0) {
        return response.json();
      }

      throw new Error(`Error while fetching: ${response.statusText}`);
    })
    .catch(error => console.log("error in fetch: ", error));
};

/**
 * Creates new user object
 *
 * @param {Object} user object user to create
 * @returns {Promise} Promise object represents operation result
 */
export const addNewUser = async user => {
  const token = getToken();

    const response = await fetch(`${URL}/admin/newUser/`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });

      return {
        status: response.status,
        data: response.json()
      }
};

/**
 * Updates user object
 *
 * @param {Object} user object user to update
 * @returns {Promise} Promise object represents operation result
 */
export const updateUser = async user => {
  const token = getToken();
  try {
    const response = await fetch(`${URL}/admin/editUser`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });
    if (response.ok) {
      return response.json();
    }
    throw new Error(`${response.statusText}`);
  } catch (error) {
    return console.log("error in fetch: ", error);
  }
};

/**
 * Removes user by id from an api
 *
 * @param {Number} id user's id
 * @returns {Promise} Promise object represents operation result
 */
export const deleteUserById = id => {
  const token = getToken();
  return fetch(`${URL}/admin/deleteUser/${id}`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json"
    }
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(`${response.statusText}`);
    })
    .then(data => {
      const users = {
        staff: data.users,
        partners: data.partners,
        freelancers: data.freeLancers
      };

      return users;
    })
    .catch(error => console.log("error in fetch: ", error));
};

/**
 * Uploads user's avatar (image) to the server
 *
 * @param {Number} id user id
 * @param {Object} file image to upload
 * @returns {Promise} Promise object represents operation result
 */
export const uploadUserAvatar = async (id, file) => {
  const token = getToken();
  const obj = {
    avatar: file
  };

  try {
    const response = await fetch(`${URL}/admin/addAvatarUser/${id}`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    });
    if (response.ok) {
      return response.json();
    }
    throw new Error(`${response.statusText}`);
  } catch (error) {
    return console.log("error in fetch: ", error);
  }
};


