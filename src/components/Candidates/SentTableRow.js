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
  recruiter,
  isOpen,
  open,
  close,
  statuses,
  color
}) => {

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
  let statusesVac = ''
  let colour = ''
  let companies = ''
  let stat = ''

  console.log(statuses)
  statuses.map((status, idx) => {
    statusesVac += status["vacStat"];
    {/*todo add link for all companies*/}
    companies += status["compName"];
    colour += status["color"];
  })
  console.log(statusesVac)
  console.log(colour)
  console.log(companies)
  stat = statuses.map(id => id.vacStat)
  console.log(stat)
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
        {statuses.map((status, idx) => (
          <Badge  style={{backgroundColor: `${status["color"]}`, width: "150px"}}>
            {status["vacStat"]}
          </Badge>
        ))}
      </td>
      <td>
      {statuses.map((status, idx)=> (
        <Badge style = {{display: "block", background: "white", width: "150px"}}>
          <Link to={`companies/${status["comp_id"]}`} key={idx}>
          {status["compName"]}
        </Link>
        </Badge>
        
      ))}
      </td>
      <td>{recruiter}</td>
    </>
  );
}

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
  phone: "",
  email: "",
  linkedin: "",
  skype: "",
  companies: "",
  recruiter: "",
  open: () => null,
  close: () => null
};

export default CandidateTableRow;
