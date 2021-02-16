// const URL = "http://f2.uppeople.space/api";
const URL = process.env.REACT_APP_API_ENDPOINT;
const getToken = () => localStorage.getItem("token");

/**
 * Fetches all companies from an api
 *
 * @param {Number} page current page
 * @param {Boolean} isActive active companies - true, all companies - false
 * @param {Boolean}  withRecruiters find recruiters working with with company- true, with out recruiters - false
 * @returns {Promise} Promise object represents operation result
 */
export const getCompanies = (page, isActive, withRecruiters = false) => {
  const token = getToken();
  let filter = {
    IsActive: isActive,
    WithRecruiters: withRecruiters
  }
  return fetch(`${URL}/main/returnAllCompanies/${page}`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(filter)
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`Error while fetching: ${response.statusText}`);
    })
    .then(companies => {
      // const companies = companies.map(company => ({
      //   id: company.id,
      //   name: company.name,
      //   logo: company.logo,
      //   email: company.email,
      //   skype: company.skype,
      //   phone: company.phone,
      //   recruiters: company.recruiters,
      //   vacancies: company.vacancy_count,
      //   candidates: company.candidates_to_company_count
      // }));
      // companies.lenght = undefined;
      const companiesCount = companies.lenght;
      const totalPages = 1;
      const currentPage = 1;
      const perPage = companies.lenght;

      return {
        companies,
        companiesCount,
        totalPages,
        currentPage,
        perPage
      };
    })
    .catch(error => console.log("error in fetch: ", error));
};

/**
 * Filters companies
 *
 * @param {Number} page current page
 * @param {Boolean} isActive active companies - true, all companies - false
 * @param {Object} filter { name, email, skype, phone }
 * @param {Boolean} withRecruiters
 * @returns {Promise} Promise object represents operation result
 */
export const filterAllCompanies = (page, isActive, filter, withRecruiters = false) => {
  const token = getToken();
  filter.IsActive = isActive;
  filter.WithRecruiters = withRecruiters
  return fetch(`${URL}/main/returnAllCompanies/${page}`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(filter)
  })
    .then(response => {
      console.log(response);
      if (response.ok) {
        return response.json();
      }

      throw new Error(`${response.statusText}`);
    })
    .then(companies => {
      // const companies = data.companies.map(company => ({
      //   id: company.id,
      //   name: company.nazva,
      //   logo: company.logo,
      //   email: company.email,
      //   skype: company.skype,
      //   phone: company.phone,
      //   vacancies: company.vacancy_count,
      //   candidates: company.candidates_to_company_count
      // }));
      const companiesCount = companies.lenght;
      const totalPages = 1;
      const currentPage = 1;
      const perPage = companies.lenght;

      return {
        companies,
        companiesCount,
        totalPages,
        currentPage,
        perPage
      };
    })
    .catch(error => console.log("error in fetch: ", error));
};

/**
 * Creates new company
 *
 * @param {Object} company new company object
 * @returns {Promise} Promise object represents operation result
 */
export const createNewCompany = async company => {
  const token = getToken();
  try {
    const response = await fetch(`${URL}/main/addNewCompany`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(company)
    });
    if (response.status === 201) {
      return response.json();
    }
    if (response.status === 400) {
      return response.json();
    }
    if (response.status === 401) {
      return 401;
    }
    if (response.ok) {
      return response.json();
    }
    throw new Error(`${response.statusText}`);
  } catch (error) {
    return console.log("error in fetch: ", error);
  }
};

/**
 * Fetches company's info by id from an api
 *
 * @param {Number} id company id
 * @returns {Promise} Promise object represents operation result
 */
export const getCompanyInfo = id => {
  const token = getToken();
  return fetch(`${URL}/main/viewInformationForCompany/${id}`, {
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
      if (response.status === 400) {
        return response.json();
      }
      if (response.status === 401) {
        return 401;
      }

      throw new Error(`Error while fetching: ${response.statusText}`);
    })
    .then(data => {
      if (data === 401) {
        this.props.history.push('/login/');
      } else {
        const companyInfo = {
          name: data.name,
          logo: data.logo,
          phone: data.phone,
          email: data.email,
          skype: data.skype,
          about: data.about,
          map: data.map,
          calendarEvents: data.calendar,
          sendDetails: data.otpravka,
          termsOfCooperation: data.uslovia,
          interviewDetails: data.interview_detail,
          contacts: data.contacts,
          managers: data.managers
        };

        return companyInfo;
      }
    })
    .catch(error => console.log("error in fetch: ", error));
};

/**
 * Fetches company's candidates by id from an api
 *
 * @param {Number} id company id
 * @param {Number} page current page
 * @returns {Promise} Promise object represents operation result
 */
export const getCompanyCandidates = (id, page) => {
  const token = getToken();
  let filterAndSort = {
    company_id: parseInt( id )
  }

  return fetch(`${URL}/main/viewAllCandidatesForCompany/${page}`, {
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
      const candidatesData = {
        candidates: data.candidates,
        candidatesCount: data.Count,
        totalPages: data.totalPages,
        perPage: data.perPage,
        currentPage: data.currentPage,
        platform: data.platforms,
        candidateStatus: data.statuses
      };

      return candidatesData;
    })
    .catch(error => console.log("error in fetch: ", error));
};

/**
 * Fetches company's comments from an api
 *
 * @param {Number} id company id
 * @returns {Promise} Promise object represents operation result
 */
export const getCompanyComments = async id => {
  const token = getToken();
  try {
    const response = await fetch(`${URL}/main/commentsCompany/${id}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      }
    });
    if (response.ok) {
      return response.json();
    }
    throw new Error(`Error while fetching: ${response.statusText}`);
  } catch (error) {
    return console.log("error in fetch: ", error);
  }
};

/**
 * Fetches, filters and sorts company's vacancies
 *
 * @param {Number} id company id
 * @param {Number} page current page
 * @param {Object} filterAndSort { date, selectPlatforms, selectSeniorities, defaultStatuses, currentColumn, sort }
 * @returns {Promise} Promise object represents operation result
 */
export const filterAndSortCompanyVacancies = (id, page, filterAndSort) => {
  const token = getToken();
  filterAndSort.company_id = parseInt( id );
  return fetch(`${URL}/main/viewAllVacancyInCompany/${page}`, {
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
      const vacanciesData = {
        vacancies: data.vacancies,
        vacanciesCount: data.vacancies.length,
        totalPages: data.totalPages,
        perPage: data.perPage,
        currentPage: data.currentPage,
        candidateStatus: data.candidateStatus,
        vacancyStatus: data.vacancyStatus,
        platform: data.platforms,
        seniority: data.seniority
      };

      return vacanciesData;
    })
    .catch(error => console.log("error in fetch: ", error));
};

/**
 * Fetches, filters and sorts company's candidates
 *
 * @param {Number} id company id
 * @param {Number} page current page
 * @param {Object} filterAndSort { email, name, date, selectPlatforms, selectStatuses, currentColumn, sort }
 * @returns {Promise} Promise object represents operation result
 */
export const filterAndSortCompanyCandidates = (id, page, filterAndSort) => {
  const token = getToken();
  filterAndSort.company_id = parseInt(id)
  return fetch(`${URL}/main/viewAllCandidatesForCompany/${page}`, {
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
      const candidatesData = {
        candidates: data.candidates,
        candidatesCount: data.Count,
        totalPages: data.totalPages,
        perPage: data.perPage,
        currentPage: data.currentPage,
        platform: data.platforms,
        candidateStatus: data.statuses
      };

      return candidatesData;
    })
    .catch(error => console.log("error in fetch: ", error));
};

/**
 * Changes vacancy status
 *
 * @param {*} content
 * @returns {Promise} Promise object represents operation result
 */
export const updateVacancyStatus = async content => {
  const token = getToken();
  try {
    const response = await fetch(`${URL}/main/updateStatusVacancy`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(content)
    });
    if (response.ok) {
      return response.json();
    }
    throw new Error(`Error while fetching: ${response.statusText}`);
  } catch (error) {
    return console.log("error in fetch: ", error);
  }
};

/**
 * Changes candidate status
 *
 * @param {*} content
 * @returns {Promise} Promise object represents operation result
 */
export const updateCandidateStatus = async content => {
  const token = getToken();
  try {
    const response = await fetch(`${URL}/main/updateStatusCandidates`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(content)
    });
    if (response.ok) {
      return response.json();
    }
    throw new Error(`Error while fetching: ${response.statusText}`);
  } catch (error) {
    return console.log("error in fetch: ", error);
  }
};

/**
 * Fetches company's settings by id from an api
 *
 * @param {Number} id company id
 * @returns {Promise} Promise object represents operation result
 */
export const getCompanySettings = async id => {
  const token = getToken();
  try {
    const response = await fetch(`${URL}/main/viewSettingsCompany/${id}`, {
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
 * Uploads company's logo (image) to the server
 *
 * @param {Number} id company id
 * @param {Object} file image to upload
 * @returns {Promise} Promise object represents operation result
 */
export const uploadCompanyLogo = async (id, file) => {
  const token = getToken();
  const obj = {
    logo: file
  };

  try {
    const response = await fetch(`${URL}/main/addLogoCompanies/${id}`, {
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

/**
 * Updates company's settings on the server
 *
 * @param {Number} id company id
 * @param {Object} companyInfo {}
 * @returns {Promise} Promise object represents operation result
 */
export const updateCompanyInfo = async (id, companyInfo) => {
  const token = getToken();
  try {
    const response = await fetch(`${URL}/main/editCompany/${id}`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(companyInfo)
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
 * Posts user's comment
 *
 * @param {Number} id company id
 * @param {Object} comment contains key 'comment' with text (comment) value
 * @returns {Promise} Promise object represents operation result
 */
export const addUserComment = async (id, comment) => {
  const token = getToken();
  try {
    const response = await fetch(`${URL}/main/addCommentForCompany/${id}`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(comment)
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
 * Edit companies comment
 *
 * @param {Number} id comment id
 * @param {String} comment comment
 * @returns {Promise} Promise object represents operation result
 */
export const editCompanyComment = async (id, comment) => {
  const token = getToken();
  try {
    const response = await fetch(`${URL}/main/editCommentCompany/${id}`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(comment)
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
 * Removes user's comment
 *
 * @param {Number} id company id
 * @param {Number} commentId comment id
 * @returns {Promise} Promise object represents operation result
 */
export const deleteUserComment = async (id, commentId) => {
  const token = getToken();
  try {
    const response = await fetch(`${URL}/main/deleteCommentCompany/${id}`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(commentId)
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
 * Fetches contact info from an api
 *
 * @param {Number} id contact id
 * @returns {Promise} Promise object represents operation result
 */
export const getContactInfo = id => {
  const token = getToken();
  return fetch(`${URL}/main/viewEditContactCompany/${id}`, {
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
      const contactState = {
        contact: {
          id: data.id,
          name: data.name,
          email: data.email,
          phone: data.phone,
          skype: data.skype,
          selectedPlatforms: data.platforms.map(platform => {
            const arrOfPlatforms = Object.values(platform.platform);

            const selectedPlatforms = {
              id: arrOfPlatforms[0],
              label: arrOfPlatforms[1],
              value: arrOfPlatforms[1].toLowerCase()
            };

            return selectedPlatforms;
          })
        },
        isChecked: data.all_platforms === 1 ? true : false,
        isDisabled: data.all_platforms === 1 ? true : false
      };

      return contactState;
    })
    .catch(error => console.log("error in fetch: ", error));
};

/**
 * Adds contact into company profile
 *
 * @param {Number} id company id
 * @param {Object} contact {}
 * @returns {Promise} Promise object represents operation result
 */
export const addCompanyContact = async (id, contact) => {
  const token = getToken();
  try {
    const response = await fetch(`${URL}/main/addNewContactForCompany/${id}`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(contact)
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
 * Updates contact in company profile
 *
 * @param {Number} id contact id
 * @param {Object} contact {}
 * @returns {Promise} Promise object represents operation result
 */
export const editCompanyContact = async (id, contact) => {
  const token = getToken();
  try {
    const response = await fetch(`${URL}/main/editContactCompany/${id}`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(contact)
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
 * Removes contact from company profile
 *
 * @param {Number} id contact id
 * @returns {Promise} Promise object represents operation result
 */
export const deleteCompanyContact = async id => {
  const token = getToken();
  try {
    const response = await fetch(`${URL}/main/deleteContactForCompany/${id}`, {
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
 * Updates company info in company profile
 *
 * @param {Number} id company id
 * @param {Object} content {}
 * @returns {Promise} Promise object represents operation result
 */
export const updateCompanyInfoProfile = (id, content) => {
  const token = getToken();
  return fetch(`${URL}/main/editCompany/${id}`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(content)
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(`${response.statusText}`);
    })
    .then(data => {
      for (const key in data) {
        if (key === "otpravka") {
          const sendDetails = {
            sendDetails: data[key]
          };
          return sendDetails;
        } else if (key === "interview_detail") {
          const interviewDetails = {
            interviewDetails: data[key]
          };
          return interviewDetails;
        } else if (key === "about") {
          const about = {
            about: data[key]
          };
          return about;
        } else {
          return data;
        }
      }
    })
    .catch(error => console.log("error in fetch: ", error));
};
