// const URL = "http://f2.uppeople.space/api";
const URL = "/api";
const getToken = () => localStorage.getItem("token");

/**
 * Fetches all candidates
 *
 * @param {Number} page current page
 * @returns {Promise} Promise object represents operation result
 */


export const getAllCandidates = page => {
  const token = getToken();
  console.log(':::::getAllCandidates');
  return fetch(`${URL}/main/allCandidates/${page}`, {
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
      const allCandidatesData = {
        allCandidates: data.candidates,
        allCandidatesCount: data.Count,
        allTotalPages: data.Page,
        allPerPage: data.perPage,
        currentAllPage: data.currentPage,
        allPlatforms: data.platforms,
        allStatuses: data.statuses,
        allRecruiters: data.recruiter,
        allSeniority: data.seniority,
        tags: data.tags,
        reasons: data.reasons,
        loading: false
      };

      return allCandidatesData;
    })
    .catch(error => console.log("error in fetch: ", error));
};

/**
 * Fetches sent candidates
 *
 * @param {Number} page current page
 * @returns {Promise} Promise object represents operation result
 */
export const getSentCandidates = page => {
  const token = getToken();
  return fetch(`${URL}/main/returnAllCandidates/${page}`, {
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
      const sentCandidatesData = {
        sentCandidates: data.candidates,
        sentCandidatesCount: data.Count,
        sentTotalPages: data.Page,
        sentPerPage: data.perPage,
        currentSentPage: data.currentPage,
        sentPlatforms: data.platforms,
        sentCompanies: data.company,
        sentStatuses: data.statuses,
        sentRecruiters: data.recruiter,
        loadingSent: false
      };

      return sentCandidatesData;
    })
    .catch(error => console.log("error in fetch: ", error));
};

/**
 * Fetches candidates sent by freelancer
 *
 * @param {Number} page current page
 * @returns {Promise} Promise object represents operation result
 */
export const getCandidatesFromFreelancers = page => {
  const token = getToken();
  return fetch(`${URL}/main/viewCandidatesFreelancerOnVacancies/${page}`, {
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
      const candidatesFromFreelancersData = {
        candidatesFF: data.candidates,
        candidatesCountFF: data.Count,
        totalPagesFF: data.Page,
        perPageFF: data.perPage,
        statusesFF: data.statuses,
        currentPageFF: data.currentPage
      };

      return candidatesFromFreelancersData;
    })
    .catch(error => console.log("error in fetch: ", error));
};


/**
 * Filters and sorts all candidates
 *
 * @param {Number} page current page
 * @param {Object} filterAndSort object with sorted fields
 * @returns {Promise} Promise object represents operation result
 */
export const filterAndSortAllCandidates = (page, filterAndSort) => {
  const token = getToken();
  console.log(':::::Filtered allCandidates');
  return fetch(`${URL}/main/allCandidates/${page}`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(filterAndSort)
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(`Error while fetching: ${response.statusText}`);
    })
    .then(data => {
      const allCandidatesData = {
        allCandidates: data.candidates,
        allCandidatesCount: data.Count,
        allTotalPages: data.Page,
        allPerPage: data.perPage,
        currentAllPage: data.currentPage,
        allPlatforms: data.platforms,
        allStatuses: data.statuses,
        allRecruiters: data.recruiter,
        allSeniority: data.seniority,
        loading: false
      };

      return allCandidatesData;
    })
    .catch(error => console.log("error in fetch: ", error));
};


/**
 * Filters and sorts sent candidates
 *
 * @param {Number} page current page
 * @param {Object} filterAndSort object with sorted fields
 * @returns {Promise} Promise object represents operation result
 */
export const filterAndSortSentCandidates = (page, filterAndSort) => {
  console.log("Filtered", filterAndSort);
  const token = getToken();
  return fetch(`${URL}/main/returnAllCandidates/${page}`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(filterAndSort)
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(`Error while fetching: ${response.statusText}`);
    })
    .then(data => {

      const sentCandidatesData = {
        sentCandidates: data.candidates,
        sentCandidatesCount: data.Count,
        sentTotalPages: data.Page,
        sentPerPage: data.perPage,
        currentSentPage: data.currentPage,
        sentPlatforms: data.platforms,
        sentCompanies: data.company,
        sentStatuses: data.statuses,
        sentRecruiters: data.recruiter,
        loadingSent: false
      };

      return sentCandidatesData;
    })
    .catch(error => console.log("error in fetch: ", error));
};

/**
 * Filters and sorts sent candidates
 *
 * @returns {Promise} Promise object represents operation result
 */
export const getCandidatesAmountByStatuses = (selectedRecruiter, selectedCompany, selectedVacancy, selectedTag, startDate, endDate) => {
  const token = getToken();
  return fetch(`${URL}/main/getCandidatesAmountByStatuses`, {
    // return fetch("https://enpg0sbpob31.x.pipedream.net/", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      recruiter_id: selectedRecruiter,
      company_id: selectedCompany,
      vacancy_id: selectedVacancy,
      tag_id: selectedTag,
      start_date: startDate,
      end_date: endDate,
    })
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(`Error while fetching: ${response.statusText}`);
    })
    .then(data => {
      return data;
    })
    .catch(error => console.log("error in fetch: ", error));
};


/**
 * Filters and sorts sent candidates
 *
 * @returns {Promise} Promise object represents operation result
 */
export const getCandidatesAmountByTags = (selectedRecruiter, selectedCompany, selectedVacancy, startDate, endDate) => {
  const token = getToken();
  return fetch(`${URL}/main/getCandidatesAmountByTags`, {
    // return fetch("https://enpg0sbpob31.x.pipedream.net/", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      recruiter_id: selectedRecruiter,
      company_id: selectedCompany,
      vacancy_id: selectedVacancy,
      // tag_id: selectedTag,
      start_date: startDate,
      end_date: endDate,
    })
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      if (response.status === 401) {
        return 401;
      }

      throw new Error(`Error while fetching: ${response.statusText}`);
    })
    .then(data => {
      return data;
    })
    .catch(error => console.log("error in fetch: ", error));
};

/**
 * Filters and sorts sent candidates
 *
 * @returns {Promise} Promise object represents operation result
 */
export const getStatuses = () => {
  const token = getToken();
  return fetch(`${URL}/main/getStatuses`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json"
    },
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(`Error while fetching: ${response.statusText}`);
    })
    .then(data => {
      return data;
    })
    .catch(error => console.log("error in fetch: ", error));
};


/**
 * Filters and sorts sent candidates
 *
 * @returns {Promise} Promise object represents operation result
 */
export const getCandidatesAmountByVacancies = (selectedRecruiter, selectedCompany) => {
  const token = getToken();
  return fetch(`${URL}/main/getCandidatesAmountByVacancies`, {
    // return fetch("https://enpg0sbpob31.x.pipedream.net/", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      recruiter_id: selectedRecruiter,
      company_id: selectedCompany,
    })
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(`Error while fetching: ${response.statusText}`);
    })
    .then(data => {
      return data;
    })
    .catch(error => console.log("error in fetch: ", error));
};


/**
 * Filters and sorts sent candidates
 *
 * @returns {Promise} Promise object represents operation result
 */
export const getCandidatesGrouped = (selectedRecruiter, selectedCompany) => {
  const token = getToken();
  return fetch(`${URL}/main/getCandidatesGrouped`, {
    // return fetch("https://enpg0sbpob31.x.pipedream.net/", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      recruiter_id: selectedRecruiter,
      company_id: selectedCompany,
    })
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(`Error while fetching: ${response.statusText}`);
    })
    .then(data => {
      return data;
    })
    .catch(error => console.log("error in fetch: ", error));
};

/**
 * changes status on sent candidate
 *
 * @returns {Promise} Promise object represents operation result
 */
export const changeStatus = (candidateId, vacancyId, companyId, statusId) => {
  const token = getToken();
  return fetch(`${URL}/main/changeStatusOnVacancy`, {
    // return fetch("https://enpg0sbpob31.x.pipedream.net/", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      candidate_id: candidateId,
      vacancy_id: vacancyId,
      company_id: companyId,
      status_id: statusId
    })
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(`Error while fetching: ${response.statusText}`);
    })
    .then(data => {
      return data;
    })
    .catch(error => console.log("error in fetch: ", error));
};

/**
 * changes status on sent candidate
 *
 * @returns {Promise} Promise object represents operation result
 */
export const deleteSentCandidateFromVacancy = (candidateId, vacancyId, companyId) => {
  const token = getToken();
  return fetch(`${URL}/main/deleteSentCandidateFromVacancy`, {
    // return fetch("https://enpg0sbpob31.x.pipedream.net/", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      candidate_id: candidateId,
      vacancy_id: vacancyId,
      company_id: companyId,
    })
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(`Error while fetching: ${response.statusText}`);
    })
    .then(data => {
      return data;
    })
    .catch(error => console.log("error in fetch: ", error));
};
