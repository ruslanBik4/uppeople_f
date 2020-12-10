// const URL = "http://f2.uppeople.space/api";
const URL = "http://back.uppeople.co/api";
const getToken = () => localStorage.getItem("token");

/**
 * Fetches vacancy profile by id from an api
 *
 * @param {Number} id vacancy id
 * @returns {Promise} Promise object represents operation result
 */
export const getVacancyProfile = id => {
  const token = getToken();
  // console.log("vacancy before");
  return fetch(`${URL}/main/viewVacancy/${id}`, {
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

      throw new Error(`Error while fetching: ${response.statusText}`);
    })
    .then(data => {
      const vacancy = data[0];

      console.log( vacancy);

      const vacancyInfo = {
        id: vacancy.id,
        date: vacancy.date_create,
        company: vacancy.company,
        platform: vacancy.platforms,
        seniority: vacancy.seniorities,
        status: vacancy.status,
        location: vacancy.location,
        salary: vacancy.salary,
        link: vacancy.link,
        description: vacancy.opus,
        details: vacancy.details,
        recruiters_ids: vacancy.recruiters_ids
      };

      return vacancyInfo;
    })
    .catch(error => console.log("error in fetch: ", error));
};
/**
 * Creates new vacancy object
 *
 * @param {Object} vacancy {}
 * @returns {Promise} Promise object represents operation result
 */
export const createNewVacancy = async vacancy => {
  console.log(vacancy);
  const token = getToken();
  try {
    const response = await fetch(`${URL}/main/addNewVacancy`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(vacancy)
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
 *  Updates vacancy by id
 *
 * @param {Number} id vacancy id
 * @param {Object} vacancy {}
 * @returns {Promise} Promise object represents operation result
 */
export const updateVacancy = (id, vacancy) => {
  const token = getToken();
  return fetch(`${URL}/main/editVacancy/${id}`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(vacancy)
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(`${response.statusText}`);
    })
    .then(data => {
      const vacancy = data[0];
      console.log("vacancy response", data);
      const vacancyInfo = {
        id: vacancy.id,
        date: vacancy.date_create,
        company: vacancy.company,
        platform: vacancy.platforms,
        seniority: vacancy.seniorities,
        status: vacancy.status,
        location: vacancy.location,
        salary: vacancy.salary,
        link: vacancy.link,
        description: vacancy.opus,
        details: vacancy.details
      };

      return vacancyInfo;
    })
    .catch(error => console.log("error in fetch: ", error));
};

/**
 * Removes vacancy by id from an api
 *
 * @param {Number} id vacancy id
 * @returns {Promise} Promise object represents operation result
 */
export const deleteVacancy = async id => {
  const token = getToken();
  try {
    const response = await fetch(`${URL}/main/deleteVacancy/${id}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      }
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
 * Gets vacancies object
 *
 * @param {Interger} company_id {}
 * @param {Boolean} isActive active vacancies - true, all vacancies - false
 * @param {Boolean}  withRecruiters find recruiters working with with company- true, with out recruiters - false
 * @returns {Promise} Promise object represents operation result
 */
export const getVacancies = (company_id, isActive = false, withRecruiters = false) => {
  const token = getToken();
  // try {
  console.log(token);
  return fetch(`${URL}/main/returnAllVacancy`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      company_id: company_id,
      withRecruiters: withRecruiters,
      isActive:isActive
    })
  }).then(response => {
    if (response.ok) {
      return response.json();
    }

    throw new Error(`${response.statusText}`);
  }).catch(error => console.log("error in fetch: ", error));
};
//antonmlz_web2
//3nSJ&Yx&

/**
 * Gets vacancies object
 *
 * @param {Array} tags {}
 * @returns {Promise} Promise object represents operation result
 */
export const getTags = async params => {
  const token = getToken();
  try {
    const response = await fetch(`${URL}/main/getTags`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    });
    if (response.ok) {
      return response.json();
    }
    throw new Error(`${response.statusText}`);
  } catch (error) {
    return console.log("error in fetch: ", error);
  }
};