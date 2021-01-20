// Core
import React, {Component} from "react";
// Components
import CandidateCreateForm from "./Form";
// Instruments
import {getOptionsForSelects} from "../../../utils/api";
import {
  uploadCandidateAvatar,
  createNewCandidate
} from "../../../utils/api/candidate";
import CandidateEditForm from "../Edit/Form";
import {toLower} from "@progress/kendo-data-query/dist/npm/filter-serialization.common";

export default class CandidateCreate extends Component {
  state = {
    platforms: [],
    seniorities: [],
    tags: [],
    reasons: [],
    reject_tag: {},
    defaultSelectedtag: {}
  };

  componentDidMount() {
    getOptionsForSelects().then(optionsForSelects => {
      const platforms = optionsForSelects.platforms;
      const seniorities = optionsForSelects.seniorities;
      const tags = optionsForSelects.tags;
      const reasons = optionsForSelects.reject_reasons;
      const reject_tag = optionsForSelects.reject_tag;
      const defaultSelectedtag = optionsForSelects.tags.filter((tag) => tag.id === 1)[0];
      const vacancies = optionsForSelects.vacancies;

      this.setState({
        platforms,
        seniorities,
        tags,
        reasons,
        vacancies,
        reject_tag,
        defaultSelectedtag
      });
    });
  }

  uploadAvatar = (id, file) => {
    uploadCandidateAvatar(id, file).then(data => console.log(data));
  };

  createCandidate = candidate => {
    createNewCandidate(candidate).then(data => {
          console.log(data)
          if (typeof data === 'object') {
            if (data.formErrors !== undefined) {
              if (typeof data.formErrors === 'object') {
                Object.entries(data.formErrors).forEach(function (elem, i, arr) {
                  if (elem[0].startsWith("Select")) {
                    let s = elem[0].slice(6).toLowerCase()
                    console.log(elem, s)
                    // document.querySelector(".errorlist label").textContent = ("Не выбрано" + s);
                    document.querySelector(".errorlist1 label").textContent = ("Не выбрано" +  elem[0]);
                    document.querySelector('.'+s+'_div > div').classList.add('error');
                                        // document.querySelector(s+'_div').classList.add('error');
                  } 
                  if (elem[0] === 'name') {
                    document.querySelector(".errorlist label").textContent = ("Имя кандидата" + " " + elem[1]);
                  }
                  else if (elem[0] === 'phone') {
                    document.querySelector(".errorlist label").textContent = ("Номер телефона" + " " +  elem[1]);
                  }
                  else if (elem[0] === 'email') {
                    document.querySelector(".errorlist label").textContent = ("Электронная почта" + " " +  elem[1]);
                  }
                  else if (elem[0] === 'linkedIn') {
                    document.querySelector(".errorlist label").textContent = ("Профиль linkedIn" + " " +  elem[1]);
                  }
                  else {
                    document.querySelector(".errorlist label").textContent = (elem[0] + " " +  elem[1])
                  };
                  // else {
                  //   document.querySelector(".errorlist label").textContent = "This name is already exist";
                    // document.querySelector('input[name='+ elem[0]+']').classList.add('error');
                    // document.querySelector(".errorlist label").textContent = ("Не выбрано" + s);
                    // document.querySelector(".errorlist1 label").
                  }
                    // document.querySelector(".errorlist label").textContent = "This name is already exist";
                    // document.querySelector(".errorlist label").textContent = ("Не выбрано" + elem[0]);

                )
              } else {
                alert(data.formErrors)
              }
            } else {
              this.props.history.push('/candidates/')
            }
          } else if (data == 401) {
            this.props.history.push('/login/')
          } else  {
            alert(data)
          }
        }
    );
  };

  render() {
    const {platforms, seniorities, tags, reasons, reject_tag, defaultSelectedtag, vacancies} = this.state;

    return (
      <>
        <h3>New Candidate</h3>
        <CandidateCreateForm
          platforms={platforms}
          seniorities={seniorities}
          tags={tags}
          reasons={reasons}
          vacancies={vacancies}
          defaultSelectedtag={defaultSelectedtag}
          reject_tag={reject_tag}
          onUploadAvatar={this.uploadAvatar}
          onCreateCandidate={this.createCandidate}
        />
      </>
    );
  }
}
