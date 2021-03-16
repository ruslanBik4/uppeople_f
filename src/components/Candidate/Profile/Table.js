// Core
import React from "react";
import PropTypes from "prop-types";
import {Table} from "reactstrap";
// Components
import CandidateProfileTableRow from "./TableRow";

const CandidateProfileTable = ({candidateStatuses, ...props}) => {
  // candidateStatuses = candidateStatuses.filter((candidateStatus) => candidateStatus.vacancyStatus.id !== 1);
  const candidateStatusesJSX =
    candidateStatuses.length > 0 ? (
      candidateStatuses.map((candidateStatus, idx) => (
        <tr key={candidateStatus.id}>
          <CandidateProfileTableRow idx={idx} {...candidateStatus} {...props} />
        </tr>
      ))
    ) : (
      <tr style={{color: "var(--secondary)"}}>
        <td colSpan={9} align="center">
          Nothing found
          <span role="img" aria-label="confused face">
            😕card-body
          </span>
        </td>
      </tr>
    );

  return (
    <>
      <h3>Sent CVs</h3>
      <Table style={{background: "var(--white)", height: "500px"}} responsive hover>
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Vacancy</th>
          <th scope="col">Company</th>
          <th scope="col">Salary</th>
          <th scope="col">Last update</th>
          <th scope="col">Status</th>
          <th scope="col">Details</th>
        </tr>
        </thead>
        <tbody>{candidateStatusesJSX}</tbody>
      </Table>
    </>
  );
};

CandidateProfileTable.propTypes = {
  candidateStatuses: PropTypes.arrayOf(PropTypes.shape({}))
};

CandidateProfileTable.defaultProps = {
  candidateStatuses: []
};

export default CandidateProfileTable;
