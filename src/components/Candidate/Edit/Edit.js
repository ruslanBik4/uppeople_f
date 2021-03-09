// Core
import React, { Component } from "react";
// Components
import CandidateEditForm from "./Form";
// HOC
import withOptionsForSelects from "../../hoc/withOptionsForSelects";
// Instruments
import {
  getCandidateProfile,
  uploadCandidateAvatar,
  updateCandidateProfile
} from "../../../utils/api/candidate";
import {getRecruiterVacancies} from "../../../utils/api";

class CandidateEdit extends Component {
  state = {
    candidate: {
      id: null,
      avatar: null,
      name: "",
      date: "",
      phone: "",
      email: "",
      skype: "",
      platform: [],
      seniority_id: [],
      // tag_id: 0,
      language: "",
      salary: null,
      linkedIn: "",
      resume: "",
      comment: "",
      about: "",
      vacancies: []
    },
      vacancies: []
  };

  componentDidMount() {
    const { id } = this.props.match.params;

    getCandidateProfile(id).then(data => {
        if (data === 201) {
            this.props.history.push(`/candidates/`)
        } else if (data === 401) {
            this.props.history.push('/login/')
        } else if (typeof data === 'object') {
            const candidate = data.candidate;
            this.setState({
                candidate
            });
        }
        getRecruiterVacancies().then(data => {
            if (data === 401) {
                this.props.history.push('/login/');
                return
            }
            const vacancies =  data.vacancies;
            this.setState({ ...vacancies }) ;
        })
    });
  }

  uploadAvatar = file => {
    const { id } = this.props.match.params;

    uploadCandidateAvatar(id, file).then(data => console.log(data));
  };

  updateCandidate = candidate => {
    const { id } = this.props.match.params;
    updateCandidateProfile(id,candidate).then(data => {
        console.log(data)
        if (data === 202) {
            this.props.history.push(`/candidates/${id}`)
        } else if (data === 401) {
            this.props.history.push('/login/')
        } else if (typeof data === 'object') {
            let lblErrors = document.querySelector(".errorlist label");
            if (data.formErrors !== undefined) {
                if (typeof data.formErrors === 'object') {
                    Object.entries(data.formErrors).forEach(function (elem, i, arr) {
                        if (elem[0].startsWith("Select")) {
                            let s = elem[0].slice(6).toLowerCase()
                            console.log(elem, s)
                            lblErrors.textContent = ("Не выбрано" + elem[0]);
                            document.querySelector('.' + s + '_div > div').classList.add('error');

                        }
                        if (elem[0] === 'name') {
                            lblErrors.textContent = ("Имя кандидата" + " " + elem[1]);
                        } else if (elem[0] === 'phone') {
                            lblErrors.textContent = ("Номер телефона" + " " + elem[1]);
                        } else if (elem[0] === 'email') {
                            lblErrors.textContent = ("Электронная почта" + " " + elem[1]);
                        } else if (elem[0] === 'linkedIn') {
                            lblErrors.textContent = ("Профиль linkedIn" + " " + elem[1]);
                        } else {
                            lblErrors.textContent = (elem[0] + " " + elem[1])
                        }

 
                        let input = document.querySelector('input[name=' + elem[0] + ']');
                        if (input !== undefined) {
                            input.classList.add('error');
                            input.focus();
                        }

                    })
                } else {
                    alert(data.formErrors)
                }
                //    unknown response - alert
            } else {
                console.log(data);
                Object.entries(data).forEach(function (elem, i, arr) {
                    lblErrors.textContent += ("unknown error" + elem[0]);
                });
            }
        } else {
            alert(data)
        }
    });
  };

  render() {
    const { candidate, vacancies } = this.state;
    const {
      options
    } = this.props;

    console.log(options, vacancies)
    return (
      <>
        <h3>Edit Candidate</h3>
        <CandidateEditForm
          candidate={candidate}
          platforms={options.platforms}
          seniorities={options.seniority}
          tags={options.tags}
          reasons={options.reasons}
          reject_tag={options.reject_tag}
          vacancies={vacancies}
          onUploadAvatar={this.uploadAvatar}
          onEditCandidate={this.updateCandidate}
        />
      </>
    );
  }
}

export default withOptionsForSelects(CandidateEdit);
