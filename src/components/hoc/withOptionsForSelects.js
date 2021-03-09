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

    componentDidMount() {
        getRecruiterVacancies().then(data => {
            if (data === 401) {
                this.props.history.push('/login/');
                return
            }
            const vacancies =  data.vacancies;
            this.setState({ ...vacancies }) ;
        })

        const opts = getOptions();
        if (opts !== null && opts > "") {
            let options = JSON.parse(opts);
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
        };

          localStorage.setItem('optionsForSelects', JSON.stringify(options));

          this.setState({ ...options });
      });
    }

    render() {
        const { vacancies, platforms } = this.state
        console.log(vacancies, platforms)

        return <WrappedComponent options={this.state} {...this.props} />;
    }
  };

export default withOptionsForSelects;
