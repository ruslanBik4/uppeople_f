// Core
import React, {Component} from "react";
// Components
import CandidateCreateForm from "./Form";
// Instruments
import {getOptionsForSelects, getRecruiterVacancies} from "../../../utils/api";
import {
  uploadCandidateAvatar,
  createNewCandidate
} from "../../../utils/api/candidate";
 
export default class CandidateCreate extends Component {
 
  state = {
    platforms: [],
    seniorities: [],
    tags: [],
    reasons: [],
    reject_tag: {},
    defaultSelectedtag: {}, 
    vacancies: [],
    languages: [],
  };

  componentDidMount() {
    getOptionsForSelects().then(optionsForSelects => {
      const platforms = optionsForSelects.platforms;
      const seniorities = optionsForSelects.seniorities;
      const tags = optionsForSelects.tags;
      const reasons = optionsForSelects.reject_reasons;
      const reject_tag = optionsForSelects.reject_tag;
      const defaultSelectedtag = optionsForSelects.tags.find((tag) => tag.id === 1)[0];
      const vacancies = optionsForSelects.vacancies;
      const languages = optionsForSelects.languages;

      this.setState({
        platforms,
        seniorities,
        tags,
        reasons, 
        vacancies,
        reject_tag,
        defaultSelectedtag,
        languages,
      });
    });
    getRecruiterVacancies().then(data => {
      if (data === 401) {
          this.props.history.push('/login/');
          return
      }
      const vacancies =  data.vacancies;
      this.setState({ vacancies }) ;
      console.log(vacancies)
      
  })
  }

  uploadAvatar = (id, file) => {
    uploadCandidateAvatar(id, file).then(data => console.log(data));
  };

  createCandidate = candidate => {
    createNewCandidate(candidate).then(data => {
        console.log(data);
        let lblErrors = document.querySelector(".errorlist label");
        if (data === 201) {
            this.props.history.push(`/candidates/`)
        } else if (data === 401) {
          this.props.history.push('/login/');
        }
          else if (data === 1) {
            lblErrors.textContent = ("Ошибка ввода: 1");
          }
         else if (typeof data === 'object') {
            this.parseResponse(data);

        } else {
            //    unknown response - alert
            alert(data)
        }
    });
  };

    parseResponse(data) {
        let lblErrors = document.querySelector(".errorlist label");
        if (data.formErrors !== undefined) {
            if (typeof data.formErrors === 'object') {
                this.parseErrors(data.formErrors, lblErrors);
            } else {
                alert("Ошибка" + " " + data);
            }
        } else {
            console.log(data);
            Object.entries(data).forEach(function (elem, i, arr) {
                lblErrors.textContent += ("unknown error" + elem[0]);
            });
        }
    }

    parseErrors(formErrors, lblErrors) {
        Object.entries(formErrors).forEach(function (elem, i, arr) {
            if (elem[0].startsWith("Select")) {
                let s = elem[0].slice(6).toLowerCase()
                console.log(elem, s)
                lblErrors.textContent += ("Не выбрано" + elem[0]);
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
    }

    render() {
    const {platforms, seniorities, tags, reasons, reject_tag, defaultSelectedtag, vacancies, languages} = this.state;

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
          languages={languages}
        />
      </>
    );
  }
}
