// Core
import React, {Component} from "react";
import PropTypes from "prop-types";
// Components
import VacancyCreateForm from "./Form";
// HOC
import withOptionsForSelects from "../../hoc/withOptionsForSelects";
// Instruments
import {createNewVacancy} from "../../../utils/api/vacancy";

class VacancyCreate extends Component {
  static propTypes = {
    options: PropTypes.shape({
      platforms: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          label: PropTypes.string.isRequired,
          value: PropTypes.string.isRequired
        }).isRequired
      ).isRequired,
      seniority: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          label: PropTypes.string.isRequired,
          value: PropTypes.string.isRequired
        }).isRequired
      ).isRequired,
      companies: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          label: PropTypes.string.isRequired,
          value: PropTypes.string.isRequired
        }).isRequired
      ).isRequired,
      location: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          label: PropTypes.string.isRequired,
          value: PropTypes.string.isRequired
        }).isRequired
      ).isRequired
    }).isRequired
  };

  createVacancy = vacancy => {
    createNewVacancy(vacancy).then(data => {
      const {history} = this.props;
      console.log("CREATED VACANCY", vacancy);
        if (typeof data === 'object') {
            if (data.formErrors !== undefined) {
                if (typeof data.formErrors === 'object') {
                    Object.entries(data.formErrors).forEach(function (elem, i, arr) {
                        if (elem[0].startsWith("Select")) {
                            let s = elem[0].slice(6).toLowerCase()
                            console.log(elem, s)
                            document.querySelector('.'+s+'_div > div').classList.add('error');
                        } else {
                            document.querySelector('input[name='+ elem[0]+']').classList.add('error');
                        }

                    })
                } else {
                    alert(data.formErrors)
                }
            } else {
                history.push(`/vacancies/${data.id}`);
            }
        } else if (data === 401) {
            this.props.history.push('/login/')
        } else {
            alert(data)
        }
    });
  };

  render() {
    const {options} = this.props;
    console.log(options);
    return (
      <>
        <h3>New Vacancy</h3>
        <VacancyCreateForm
          options={options}
          onCreateVacancy={this.createVacancy}
          {...this.props}
        />
      </>
    );
  }
}

export default withOptionsForSelects(VacancyCreate);
