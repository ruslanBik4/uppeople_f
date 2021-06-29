// Core
import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { Link } from "react-router-dom";
import { Badge } from "reactstrap";
// Components
import CandidatesCommentForm from "./CommentSentForm";
import Select from "../shared/Select";
// Instruments
import { updateCandidateStatus } from "../../utils/api/company";
import { saveCommentToCandidate } from "../../utils/api/candidate";
import './Candidates.css';

const CandidateExpandableTableRow = ({
  userRole,
  candId,
  candidateStatus,
  statuses,
  platforms,
  selectedPlatforms,
  options,
}) => {
  
  console.log(options)
  console.log(platforms)
  console.log(selectedPlatforms)
  console.log(candId)

  

  if (platforms !== undefined && platforms !== null && options !== undefined ) {
    selectedPlatforms = Object.keys(options).filter(key => platforms.includes(options[key].id)).map(key => options[key]);
    console.log(selectedPlatforms);
  }

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

  const parsedStatus = candidateStatus;
  const { date, compId, compName, vacStat, commentVac } = parsedStatus;
  const comment = commentVac ? commentVac : "";

  return (
    <>
      {date !== null || compId !== null ? (
        <>
          <td height="300px" vertical-align= "top">{date ? moment(date).format("DD.MM.YY") : ""}</td>
          <td>
            {userRole !== 4 ? (
              <Link to={`/companies/${compId}`}>{compName}</Link>
            ) : (
              compName
            )}
          </td>
          <td>
            {userRole !== 4 ? (
              <Select
                defaultValue={statuses.find(status => status.label === vacStat)}
                options={statuses}
                onChange={value => {
                  const content = {
                    id: candId,
                    company_id: compId,
                    value
                  };

                  updateCandidateStatus(content);
                }}
              />
            ) : (
              <Badge color={getBadge(vacStat)}>{vacStat}</Badge>
            )}
          </td>
          <td>
            {userRole !== 4 ? (
              <CandidatesCommentForm
                value={comment}
                candId={candId}
                compId={compId}
                onSave={saveCommentToCandidate}
              />
            ) : (
              comment
            )}
          </td>
          <td class ="child"  style={{  width: "250px"}}><Select
                          id="platform_id"
                          options={platforms}
                          value={selectedPlatforms}
                          placeholder="Platform"
                          isMulti
                          isClearable
                          // onChange={this.handlePlatformChange}
          /></td>
        </>
      ) : (
        <td colSpan="9" align="middle" valign="middle">
          There are no previous statuses on the candidate.{" "}
          <span role="img" aria-label="confused face">
            😕
          </span>
        </td>
      )}
    </>
  );
};

CandidateExpandableTableRow.propTypes = {
  userRole: PropTypes.number.isRequired,
  candId: PropTypes.number.isRequired,
  candidateStatus: PropTypes.string.isRequired,
  platforms: PropTypes.string.isRequired,
  selectedPlatforms: PropTypes.string.isRequired,
  statuses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default CandidateExpandableTableRow;
