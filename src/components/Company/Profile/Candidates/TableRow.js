// Core
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import moment from "moment";
// Components
import Select from "../../../shared/Select";
import { Badge } from 'reactstrap';

const customStyles = {
  menu: (provided, state) => ({
    ...provided,
    position: "relative",
  })
}

const CompanyProfileCandidatesTableRow = ({
  idx,
  id,
  company_id,
  recruiter,
  name,
  date,
  salary,
  email,
  status,
  candidateStatus,
  onChangeCandidateStatus,
  options,
  platforms,
}) =>  {
  const selectedPlatforms = Object.keys(options).filter(key => platforms.includes(options[key].id)).map(key => options[key]);
  console.log(selectedPlatforms);


  return (
  <>

    <th scope="row">{idx + 1}</th>
    <td>{recruiter !== null && recruiter}</td>
    <td>
      {selectedPlatforms.map((selectedPlatform, idx) => (
          <Badge  style={{backgroundColor: "white", width: "250px", display: "block"}}>
            {selectedPlatform["label"]}
          </Badge>
      ))}
      {/* {selectedPlatforms} */}
    </td>
    <td>
      <Link to={`/candidates/${id}`}>{name}</Link>
    </td>
    <td>{moment(date).format("DD.MM.YY")}</td>
    <td>{salary}</td>
    <td>{email}</td>
    <td style={{ minWidth: "9rem" }}>
      <Select
        defaultValue={candidateStatus.find(
          candidateStatus => candidateStatus.id === status
        )}
        options={candidateStatus}
        styles={customStyles}
        onChange={value => {
          const content = {
            id,
            company_id,
            value
          };
          onChangeCandidateStatus(content);
        }}
      />
    </td>
  </>
);
      }

CompanyProfileCandidatesTableRow.propTypes = {
  idx: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  company_id: PropTypes.number.isRequired,
  recruiter: PropTypes.string,
  platform: PropTypes.string,
  name: PropTypes.string,
  date: PropTypes.string,
  salary: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  email: PropTypes.string,
  status: PropTypes.string,
  candidateStatus: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  platforms: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onChangeCandidateStatus: PropTypes.func.isRequired
};

CompanyProfileCandidatesTableRow.defaultProps = {
  recruiter: "",
  platforms: "",
  name: "",
  date: "",
  salary: null,
  email: "",
  status: "",
  candidateStatus: []
};

export default CompanyProfileCandidatesTableRow;
