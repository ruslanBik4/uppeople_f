// Core
import React, { Component } from "react";
// Components
import VacancyEditForm from "./Form";
// HOC
import withOptionsForSelects from "../../hoc/withOptionsForSelects";
// Instruments
import { updateVacancy, getVacancyProfile } from "../../../utils/api/vacancy";

class VacancyEdit extends Component {
  state = {
    vacancy: {
      id: null,
      date: "",
      company: {},
      platform: {},
      seniority: {},
      status: {},
      location: {},
      recruiters_ids: [],
      salary: null,
      link: "",
      description: "",
      details: ""
    }
  };

  componentDidMount() {
    const { id } = this.props.match.params;

    getVacancyProfile(id).then(vacancy => {
      this.setState({ vacancy });
    });
  }

  editVacancy = vacancy => {
    const { id } = this.props.match.params;

    updateVacancy(id, vacancy).then(data => {
      const { history } = this.props;

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
          history.push('/login/')
      } else {
        alert(data)
      }
    });
  };

  render() {
    const { vacancy } = this.state;
    const { options } = this.props;

    return (
      <>
        <h3>Edit Vacancy</h3>
        <VacancyEditForm
          options={options}
          vacancy={vacancy}
          onEditVacancy={this.editVacancy}
        />
      </>
    );
  }
}

export default withOptionsForSelects(VacancyEdit);
