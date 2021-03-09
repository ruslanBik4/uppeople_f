// Core
import React, { Component } from "react";
// Instruments
import {getOptionsForSelects, getRecruiterVacancies} from "../../utils/api";

const getOptions = () => localStorage.getItem("optionsForSelects");

const withOptionsForSelects = WrappedComponent =>
  class withOptionsForSelects extends Component {
    state = {
        platforms: [],
        seniority: [],
        companies: [],
        recruiters: [],
        vacancies: [],
        candidateStatus: [],
        vacancyStatus: [],
        location: [],
        tags: [],
        reasons: [],
        reject_tag: {}
    };

      componentWillReceiveProps() {
        const opts = getOptions();
        if (opts !== null && opts > "") {
            let options = JSON.parse(opts);
            getRecruiterVacancies().then(data => {
                if (data === 401) {
                    this.props.history.push('/login/');
                    return
                }
                options.vacancies = data.vacancies;
            })

            console.log(options)
            this.setState({ ...options });
            return
        }

        getOptionsForSelects().then(optionsForSelects => {
          if (optionsForSelects === 401) {
              this.props.history.push('/login/');
              return
          }
        let options = {
            platforms: optionsForSelects.platforms,
            seniority: optionsForSelects.seniorities,
            companies: optionsForSelects.companies,
            candidateStatus: optionsForSelects.candidateStatus,
            vacancyStatus: optionsForSelects.vacancyStatus,
            location: optionsForSelects.location,
            tags: optionsForSelects.tags,
            reasons: optionsForSelects.reject_reasons,
            reject_tag: optionsForSelects.reject_tag[0],
            recruiters: optionsForSelects.recruiters,
            vacancies: optionsForSelects.vacancies,
        };
            getRecruiterVacancies().then(data => {
                if (data === 401) {
                    this.props.history.push('/login/');
                    return
                }
                options.vacancies = data.vacancies;
            })

          localStorage.setItem('optionsForSelects', JSON.stringify(options));

            console.log(options)
          this.setState({ ...options });
      });
    }

    render() {
      return <WrappedComponent options={this.state} {...this.props} />;
    }
  };

export default withOptionsForSelects;
