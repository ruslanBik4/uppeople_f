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
    const { id } = this.props.match.params;
console.log(candidate);
    updateCandidateProfile(id, candidate).then(
    this.props.history.push(`/candidates/${id}`)
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
