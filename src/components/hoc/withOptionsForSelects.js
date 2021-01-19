// Core
import React, { Component } from "react";
// Instruments
import { getOptionsForSelects } from "../../utils/api";

const withOptionsForSelects = WrappedComponent =>
  class withOptionsForSelects extends Component {
    state = {
      platforms: [],
      seniority: [],
      companies: [],
      recruiters:[],
      vacancies:[],
      location: [],
      tags: [],
      reasons: [],
      reject_tag: {}
    };

    componentDidMount() {
      getOptionsForSelects().then(optionsForSelects => {
          if (optionsForSelects === 401) {
              this.props.history.push('/login/');
              return
          }
        const options = {
          platforms: optionsForSelects.platforms,
          seniority: optionsForSelects.seniorities,
          companies: optionsForSelects.companies,
          location: optionsForSelects.location,
          tags: optionsForSelects.tags,
          reasons: optionsForSelects.reject_reasons,
          reject_tag: optionsForSelects.reject_tag[0],
          recruiters:  optionsForSelects.recruiters,
          vacancies: optionsForSelects.vacancies,
        };

          this.setState({ ...options });
      });
    }

    render() {
      return <WrappedComponent options={this.state} {...this.props} />;
    }
  };

export default withOptionsForSelects;
