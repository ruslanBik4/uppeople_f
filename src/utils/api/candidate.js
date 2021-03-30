// const URL = "http://f2.uppeople.space/api";
const URL = process.env.REACT_APP_API_ENDPOINT;
const getToken = () => localStorage.getItem("token");


/**
 * Fetches candidate's profile from an api by id
 *
 * @param {Number} id candidate id
 * @returns {Promise} Promise object represents operation result 
 */
export const getCandidateProfile = id => {
  const token = getToken();
  return fetch(`${URL}/main/viewOneCandidate/${id}`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json"
    }
  })
    .then(response => {
      if (response.status > 400 || response.status === 204) {
        return response.status;
      }
      if (response.ok) {
        return response.json();
      }

      throw new Error(`Error while fetching: ${response.statusText}`);
    })
    .then(data => {
      if (data > 200) {
        return data;
      }

      const candidate = data[0];
      const candidateStatuses = data.statuses.map(candidateStatus => ({
        id: candidateStatus.id,
        platform: candidateStatus.platform,
        seniority: candidateStatus.seniority,
        vacancy: candidateStatus.vacancy,
        company: candidateStatus.company,
        dateUpdate: candidateStatus.date_last_change,
        vacancyStatus: candidateStatus.vacancyStatus,
        details: candidateStatus.rej_text
      }));

      const selectCandidateStatus = data.select.candidateStatus;

      const candidateInfo = {
        candidate: {
          id: candidate.id,
          avatar: candidate.avatar,
          name: candidate.name,
          date: candidate.date,
          platform_id: candidate.platform_id,
          platform: candidate.platforms,
          seniority_id: candidate.seniority_id,
          tag:candidate.tags,
          salary: candidate.salary,
          language: candidate.language,
          phone: candidate.phone,
          email: candidate.email,
          skype: candidate.skype,
          linkedIn: candidate.linkedin,
          comment: candidate.comment,
          about: candidate.resume,
          resume: candidate.resume,
          recruter_id: candidate.recruter_id,
          vacancies:candidate.vacancies,
          selectedVacancies: candidate.selectedVacancies
        },
        candidateStatuses,
        selectCandidateStatus
      };

      return candidateInfo;
    })
    .catch(error => console.log("error in fetch: ", error));
};

/**
 * Fetches candidates comments from an api
 *
 * @param {Number} id candidate id
 * @returns {Promise} Promise object represents operation result
 */
export const getCandidateComments = async id => {
  const token = getToken();
  try {
    const response = await fetch(`${URL}/main/commentsCandidate/${id}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      }
    });
    if (response.status === 401 || response.status === 404 || response.status === 204) {
      return response.status;
    }
    if (response.ok) {
      return response.json();
    }
    throw new Error(`Error while fetching: ${response.statusText}`);
  } catch (error) {
    return console.log("error in fetch: ", error);
  }
};

/**
 * Posts Candidates comment
 *
 * @param {Number} id candidate id
 * @param {Object} comment contains key 'comment' with text (comment) value
 * @returns {Promise} Promise object represents operation result
 */
export const addCandidateComment = async (id, comment) => {
  const token = getToken();
  try {
    const response = await fetch(`${URL}/main/addCommentForCandidate/${id}`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(comment)
    });
    if (response.status === 401 || response.status === 404 || response.status === 204) {
      return response.status;
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
 * Edit candidates comment
 *
 * @param {Number} id comment id
 * @param {String} comment comment
 * @returns {Promise} Promise object represents operation result
 */
export const editCandidateComment = async (id, comment) => {
  const token = getToken();
  try {
    const response = await fetch(`${URL}/main/editCommentCandidate/${id}`, {
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
 * Removes candidates comment
 *
 * @param {Number} id candidate id
 * @param {Number} commentId comment id
 * @returns {Promise} Promise object represents operation result
 */
export const deleteCandidateComment = async (id, commentId) => {
  const token = getToken();
  try {
    const response = await fetch(`${URL}/main/deleteCommentCandidate/${id}`, {
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
 * Uploads candidate's avatar (image) to the server
 *
 * @param {Number} id candidate id
 * @param {Object} file image to upload
 * @returns {Promise} Promise object represents operation result
 */
export const uploadCandidateAvatar = async (id, file) => {
  const token = getToken();

  let body = new FormData();
  body.append("file", file);

  try {
    const response = await fetch(`${URL}/main/addAvatarCandidate/${id}`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token
      },
      body: body
    });

    if (response.status === 400) {
      return response.json();
    }
    if (response.status > 400) {
      return response.status;
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
 * Creates new candidate object
 *
 * @param {Object} candidate candidate to create
 * @returns {Promise} Promise object represents operation result
 */
export const createNewCandidate = async candidate => {
  const token = getToken();
  try {
    const response = await fetch(`${URL}/main/addNewCandidate`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(candidate)
    });
    // changing successfully
    if (response.status === 201) {
      return 201;
    }
    if (response.status === 400) {
      return response.json();
    }
    if (response.status === 401) {
      return 401;
    }
    throw new Error(`${response.statusText}`);
  } catch (error) {
    return console.log("error in fetch: ", error);
  }
};

/**
 * Updates candidate's profile by id
 *
 * @param {Number} id candidate id
 * @param {Object} candidate candidate to update
 * @returns {Promise} Promise object represents operation result
 */
export const updateCandidateProfile = (id, candidate) => {
  const token = getToken();
  return fetch(`${URL}/main/editCandidate/${id}`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(candidate)
  })
    .then(response => {
      // changing successfully
      if (response.status === 202) {
        return 202;
      }
      // if (response.ok) {
      //   return response.json();
      // }
      if (response.status === 400) {
        return response.json();
      }

      if (response.status === 401) {
        return 401;
      }
        throw new Error(`${response.statusText}`);
    })
    .catch(error => console.log("error in fetch: ", error));
};

/**
 * Removes candidate by id
 *
 * @param {Number} id candidate id
 * @returns {Promise} Promise object represents operation result
 */
export const deleteCandidateProfile = async id => {
  const token = getToken();
  try {
    const response = await fetch(`${URL}/main/deleteCandidate/${id}`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      }
    });
    //accepted successfully
    if (response.status === 202) {
      return 202;
    }
    if (response.status === 400) {
      return response.json();
    }
    if (response.status === 401) {
      return 401;
    }
    throw new Error(`${response.statusText}`);
  } catch (error) {
    return console.log("error in fetch: ", error);
  }
};

/**
 * Receives data from an api for Candidate's send resume form
 *
 * @param {Number} id candidate id
 * @returns {Promise} Promise object represents operation result
 */
export const getDataForSendResumeForm = id => {
  const token = getToken();
  return fetch(`${URL}/interview/viewInformationForSendCV/${id}`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json"
    }
  })
    .then(response => {
      if (response.status === 400) {
        return response.json();
      }
      if (response.status > 400) {
        return response.status;
      }

      if (response.ok) {
        return response.json();
      }
      throw new Error(`${response.statusText}`);
    })
    .then(data => {
      if (data > 400) {
        return data
      }
      const objCompanies = data.companies;
      const companies = Object.keys(objCompanies).map(key => objCompanies[key]);
      const emailTemplate = data.emailTemplay;
      const emailSubject = data.subject;

      const dataForSendResume = {
        companies,
        emailTemplate,
        emailSubject
      };

      return dataForSendResume;
    })
    .catch(error => console.log("error in fetch: ", error));
};

/**
 * Sends candidate's resume to the company
 *
 * @param {Number} id candidate id
 * @param {Object} content {}
 * @returns {Promise} Promise object represents operation result
 */
export const sendCandidateResume = async (id, content) => {
  const token = getToken();
  try {
    const response = await fetch(`${URL}/interview/sendCV/${id}`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(content)
    });
    if (response.status === 401 || response.status === 404 || response.status === 204) {
      return response.status;
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
 * Fetches data for Appoint interview form by candidate id
 *
 * @param {Number} id candidate id
 * @returns {Promise} Promise object represents operation result
 */
export const getDataForAppointInterviewForm = async id => {
  const token = getToken();
  try {
    const response = await fetch(
      `${URL}/interview/inviteOnInterviewView/${id}`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json"
        }
      }
    );
    if (response.status === 204 || response.status > 400) {
      return response.status;
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
 * Sets day and time of an interview and sends corresponding letters to the company's contacts and candidate
 *
 * @param {Number} id candidate id
 * @param {Object} content {}
 * @returns {Promise} Promise object represents operation result
 */
export const appointInterviewForCandidate = async (id, content) => {
  const token = getToken();

  try {
    const response = await fetch(
      `${URL}/interview/inviteOnInterviewSend/${id}`,
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(content)
      }
    );
    if (response.ok) {
      return response.json();
    }
    throw new Error(`${response.statusText}`);
  } catch (error) {
    return console.log("error in fetch: ", error);
  }
};

/**
 * Cancel candidate getting from freelancer in admin/manager/recruiter/ candidates' panel
 *
 * @param {Number} id candidate id
 * @param {Object} content { company id, vacancy id, freelacer id, comment }
 * @returns {Promise} Promise object represents operation result
 */
export const cancelCandidateFromFreelancer = async (id, content) => {
  const token = getToken();
  try {
    const response = await fetch(`${URL}/main/cancelCandFreelancer/${id}`, {
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
    throw new Error(`${response.statusText}`);
  } catch (error) {
    return console.log("error in fetch: ", error);
  }
};

/**
 * Saves comment to candidate in Candidate's expandable table
 *
 * @param {Object} content { candidate id, company id, comment }
 * @returns {Promise} Promise object represents operation result
 */
export const saveCommentToCandidate = async content => {
  const token = getToken();
  try {
    const response = await fetch(`${URL}/main/addCommentForVac`, {
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
    throw new Error(`${response.statusText}`);
  } catch (error) {
    return console.log("error in fetch: ", error);
  }
};

/**
 * Saves comment and date_follow_up to candidate in Candidate's expandable table
 *
 * @param {Object} content { candidate id, company id, comment }
 * @returns {Promise} Promise object represents operation result
 */
export const saveFollowUp = async content => {
  const token = getToken();
  try {
    const response = await fetch(`${URL}/main/saveFollowUp`, {
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

    throw new Error(`${response.statusText}`);
  } catch (error) {
    return console.log("error in fetch: ", error);
  }
};

/**
 * Fetches candidate's logs from an api
 *
 * @param {Number} id candidate id
 * @returns {Object} Promise object represents operation result
 */
export const getCadidateLogs = async id => {
  const token = getToken();
  try {
    const response = await fetch(`${URL}/admin/returnLogsForCand/${id}`, {
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
