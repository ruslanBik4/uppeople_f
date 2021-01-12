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
    defaultSelectedTag: {}
  };

  componentDidMount() {
    getOptionsForSelects().then(optionsForSelects => {
      const platforms = optionsForSelects.platforms;
      const seniorities = optionsForSelects.seniorities;
      const tags = optionsForSelects.tags;
      const reasons = optionsForSelects.reject_reasons;
      const reject_tag = optionsForSelects.reject_tag;
      const defaultSelectedTag = optionsForSelects.tags.filter((tag) => tag.id === 1)[0];
      const vacancies = optionsForSelects.vacancies;

      this.setState({
        platforms,
        seniorities,
        tags,
        reasons,
        vacancies,
        reject_tag,
        defaultSelectedTag
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
                    let s = elem[0].slice(7).toLowerCase()
                    document.querySelector('label[for='+ s+']').classList.add('error');
                  } else {
                    document.querySelector('input[name='+ elem[0]+']').classList.add('error');
                  }

                })
              } else {
                alert(data.formErrors)
              }
            } else {
              this.props.history.push('/candidates/')
            }
          } else {
            alert(data)
          }
        }
    );
  };

  render() {
    const {platforms, seniorities, tags, reasons, reject_tag, defaultSelectedTag, vacancies} = this.state;

    return (
      <>
        <h3>New Candidate</h3>
        <CandidateCreateForm
          platforms={platforms}
          seniorities={seniorities}
          tags={tags}
          reasons={reasons}
          vacancies={vacancies}
          defaultSelectedTag={defaultSelectedTag}
          reject_tag={reject_tag}
          onUploadAvatar={this.uploadAvatar}
          onCreateCandidate={this.createCandidate}
        />
      </>
    );
  }
}
