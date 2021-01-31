// Core
import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { Link } from "react-router-dom";
import { Badge } from "reactstrap";
import {CopyToClipboard} from "react-copy-to-clipboard";

const CandidateTableRow = ({
  id,
  date,
  name,
  platform,
  salary,
  email,
  mobile: phone,
  linkedin,
  skype,
  companies,
  recruiter,
  isOpen,
  open,
  close,
  status,
  color
}) => {
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

  const contactCopied = e => {
    e.target.style.color = "var(--green)"
  };

  let mobileValue = phone;
  let emailValue = email;
  let linkedinValue = linkedin;
  let skypeValue = skype;

  if(phone === "" || null){
    mobileValue = null
  }

  if(email === "" || null){
    emailValue = null
  }

  if(linkedin === "" || null){
    linkedinValue = null
  }

  if(skype === "" || null){
    skypeValue = null
  }

  // if (status !== "" || null) {
  //   let explode = status.split(';');
  //   status = JSON.parse(explode[explode.length - 1]);
  // }
  //
  return (
    <>
      <td>
        {isOpen ? (
          <i
            className="icon-close icons font-xl"
            style={{ color: "var(--red)", cursor: "pointer" }}
            onClick={close}
          />
        ) : (
          <i
            className="icon-plus icons font-xl"
            style={{ color: "var(--green)", cursor: "pointer" }}
            onClick={open}
          />
        )}
      </td>
      <td>{moment(date).format("DD.MM.YY")}</td>
      <td>{platform}</td>
      <td>
        <Link to={`/candidates/${id}`} >{name}</Link>
      </td>
      <td>{salary}</td>
      <td>
        <div className="contacts-col-icons-wrap">
          {
            mobileValue !== null ?
              <CopyToClipboard text={mobileValue}>
                <i className="icon-phone icons font-xl contact-icon"
                   style={{color: "var(--black)", cursor: "pointer"}}
                   onClick={contactCopied}
                />
              </CopyToClipboard>
              : null
          }
          {
            emailValue !== null ?
              <CopyToClipboard text={emailValue}>
                <i className="icon-envelope icons font-xl contact-icon"
                   style={{color: "var(--black)", cursor: "pointer"}}
                   onClick={contactCopied}
                />
              </CopyToClipboard>
              : null
          }
          {
            linkedinValue !== null ?
              <a href={linkedinValue} target="_blank">
                <i className="icon-social-linkedin icons font-xl contact-icon"
                   style={{color: "var(--blue)", cursor: "pointer"}}
                   onClick={contactCopied}
                />
              </a>
              : null
          }
          {
            skypeValue !== null ?
              <CopyToClipboard text={skypeValue}>
                <i className="icon-social-skype icons font-xl contact-icon"
                   style={{color: "var(--blue)", cursor: "pointer"}}
                   onClick={contactCopied}
                />
              </CopyToClipboard>
              : null
          }
        </div>
      </td>
      <td>
        <Badge color={color} style={{backgroundColor:color}}>
        {status["vacStat"]}
      </Badge>
      </td>
      <td>
        {status["compId"] > 0 ?
              <Link
                to={`/companies/${status["compId"].id}`}
                key={`${id}-${status["compId"].id}`}
              >
                {/*<Badge color={getBadge(parsedCompany.vacStat)}>*/}
                  {status["compName"]}
                {/*</Badge>*/}
              </Link>
          : null
          }
      </td>
      <td>{recruiter}</td>
    </>
  );
};

CandidateTableRow.propTypes = {
  id: PropTypes.number.isRequired,
  date: PropTypes.string,
  name: PropTypes.string,
  platform: PropTypes.string,
  salary: PropTypes.string,
  mobile: PropTypes.string,
  email: PropTypes.string,
  linkedin: PropTypes.string,
  skype: PropTypes.string,
  companies: PropTypes.string,
  recruiter: PropTypes.string,
  open: PropTypes.func,
  close: PropTypes.func,
  isOpen: PropTypes.bool.isRequired
};

CandidateTableRow.defaultProps = {
  date: "",
  name: "",
  platform: "",
  salary: "",
  mobile: "",
  email: "",
  linkedin: "",
  skype: "",
  companies: "",
  recruiter: "",
  open: () => null,
  close: () => null
};

export default CandidateTableRow;
