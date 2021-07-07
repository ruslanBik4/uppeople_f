// Core
import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { Link } from "react-router-dom";
import { Badge } from "reactstrap";
// Components
import Select from "../../shared/Select";

const CandidateProfileTableRow = ({
  userRole,
  idx,
  platform,
  vacancy,
  company,
  dateUpdate,
  vacancyStatus,
  details,
  candidateId,
  selectCandidateStatus,
  onChangeCandidateStatus
}) => {
  console.log(vacancy);
  console.log(vacancy.id);
  console.log(onChangeCandidateStatus);
  const platformName = vacancy !== null ? vacancy.platforms.nazva : "";
  const companyName = company !== null ? company.name : "";
  const salary = vacancy.salary !== null ? vacancy.salary : "0";
  const status = vacancyStatus !== null ? vacancyStatus.status : "";
  const formatedDate = moment(dateUpdate).format("DD.MM.YY");

  const getBadge = status => {
    return status === "OFFER" || status === "Hired"
      ? "success"
      : status === "Hold"
      ? "secondary"
      : status === "Interview"
      ? "warning"
      : status === "Rejected" || status === "Refused"
      ? "danger"
      : status === "Review"
      ? "primary"
      : null;
  };

  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      position: "relative",
    })
  }

  return (
    <>
      <th scope="row">{idx + 1}</th>
      <td><Link to={`/vacancies/${vacancy.id}`} target="_blank">{platformName}</Link></td>
      <td><Link to={`/companies/${company.id}`} target="_blank">{companyName}</Link></td>
      <td>{salary}</td>
      <td>{formatedDate}</td>
      <td style={{ minWidth: "8rem" }}>
        {userRole !== 4 && userRole !== 5 ? (
          <Select
            defaultValue={selectCandidateStatus.find(
              candidateStatus => candidateStatus.label === status
            )}
            options={selectCandidateStatus}
            styles={customStyles}
            onChange={value => 
              {
              const content = {
                candidate_id: candidateId,
                vacancy_id: vacancy.id,
                value
              };
              onChangeCandidateStatus(content);
              console.log(content)
            }}
          />
        ) : (
          <Badge color={getBadge(status)}>{status}</Badge>
        )}
      </td>
      <td>{details}</td>
    </>
  );
};

CandidateProfileTableRow.propTypes = {
  userRole: PropTypes.number.isRequired,
  idx: PropTypes.number,
  platform: PropTypes.shape({
    id: PropTypes.number,
    nazva: PropTypes.string
  }),
  vacancy: PropTypes.shape({
    id: PropTypes.number,
    nazva: PropTypes.string
  }),
  company: PropTypes.shape({
    id: PropTypes.number,
    nazva: PropTypes.string
  }),
  dateUpdate: PropTypes.string,
  vacancyStatus: PropTypes.shape({
    id: PropTypes.number,
    status: PropTypes.string
  }),
  details: PropTypes.string,
  candidateId: PropTypes.number.isRequired,
  selectCandidateStatus: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onChangeCandidateStatus: PropTypes.func
};

CandidateProfileTableRow.defaultProps = {
  idx: null,
  platform: {},
  vacancy: {},
  company: {},
  dateUpdate: "",
  vacancyStatus: {},
  details: "",
  onChangeCandidateStatus: () => {}
};

export default CandidateProfileTableRow;
