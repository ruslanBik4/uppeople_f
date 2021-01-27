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
      tag_id: 0,
      language: "",
      salary: null,
      linkedIn: "",
      resume: "",
      comment: "",
      about: "",
      vacancies: []
    }
  };

  componentDidMount() {
    const { id } = this.props.match.params;

    getCandidateProfile(id).then(data => {
      const candidate = data.candidate;
      this.setState({
        candidate
      });
    });
  }

  uploadAvatar = file => {
    const { id } = this.props.match.params;

    uploadCandidateAvatar(id, file).then(data => console.log(data));
  };

  updateCandidate = candidate => {
    updateCandidateProfile(candidate).then(data => {
          console.log(data)
          if (typeof data === 'object') {
            if (data.formErrors === undefined) {
              if (typeof data.formErrors === 'object') {
                Object.entries(data.formErrors).forEach(function (elem, i, arr) {
                      if (elem[0].startsWith("Select")) {
                        let s = elem[0].slice(6).toLowerCase()
                        console.log(elem, s)
                        document.querySelector(".errorlist label").textContent = ("Не выбрано" + elem[0]);
                        document.querySelector('.' + s + '_div > div').classList.add('error');
 
                      }
                      if (elem[0] === 'name') {
                        document.querySelector(".errorlist label").textContent = ("Имя кандидата" + " " + elem[1]);
                      } else if (elem[0] === 'phone') {
                        document.querySelector(".errorlist label").textContent = ("Номер телефона" + " " + elem[1]);
                      } else if (elem[0] === 'email') {
                        document.querySelector(".errorlist label").textContent = ("Электронная почта" + " " + elem[1]);
                      } else if (elem[0] === 'linkedIn') {
                        document.querySelector(".errorlist label").textContent = ("Профиль linkedIn" + " " + elem[1]);
                      } else {
                        document.querySelector(".errorlist label").textContent = (elem[0] + " " + elem[1])
                      }
                      ;

                      let input = document.querySelector('input[name=' + elem[0] + ']');
                      if (input !== undefined) {
                        input.classList.add('error');
                        input.focus();
                      }

                    })
              } else {
                alert(data.formErrors)
              }
            } else {
              this.props.history.push('/candidates/')
            }
          } else if (data === 401) {
            this.props.history.push('/login/')
          } else  {
            alert(data)
          }
        }
    );
  };

  render() {
    // console.log(this.props);
    const { candidate } = this.state;
    const {
      options
    } = this.props;

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
          vacancies={options.vacancies}
          onUploadAvatar={this.uploadAvatar}
          onEditCandidate={this.updateCandidate}
        />
      </>
    );
  }
}

export default withOptionsForSelects(CandidateEdit);
