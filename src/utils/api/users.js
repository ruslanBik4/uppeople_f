// const URL = "http://f2.uppeople.space/api";
const URL = process.env.REACT_APP_API_ENDPOINT;
const getToken = () => localStorage.getItem("token");

/**
 * Fetches all users from an api
 * @returns {Promise} Promise object represents operation result
 */
export const getUsers = () => {
  const token = getToken();

  return fetch(`${URL}/admin/all-staff`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json"
    }
  })
    .then(response => {
        if (response.status > 400) {
            return response.status;
        }
      if (response.ok || response.status === 400) {
        return response.json();
      }
      throw new Error(`Error while fetching: ${response.statusText}`);
    })
    .catch(error => console.log("error in fetch: ", error));
};
