// Core
import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { Link } from "react-router-dom";
import { Badge } from "reactstrap";
import {CopyToClipboard} from "react-copy-to-clipboard";
import './Candidates.css';
import Select from "../shared/Select";

const CandidateTableRow = ({
  id,
  date,
  name,
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
  color,
  options,
  platforms,
  stats,
  vacancies,
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
  onChangeCandidateStatus,
}) => {

  console.log(selectCandidateStatus);
  console.log(onChangeCandidateStatus);
  console.log(id);
  console.log(company);
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

  console.log(options)
  console.log(statuses);
  let s = statuses.map (item => item.vacStat)
  console.log(s);
  console.log(stats);
  console.log(platforms)
  console.log(vacancies)
  let vac = vacancies.map (item => item.platform_id)
 
  console.log(vac)
  console.log(vac[0])
  // platforms = vac
  console.log(options)
  console.log(platforms)

  let selectedPlatforms

  if (platforms !== undefined && platforms !== null && options !== undefined ) {
    selectedPlatforms = Object.keys(options).filter(key => platforms.includes(options[key].id)).map(key => options[key]);
    // selectedPlatforms = selectedPlatforms[0];
    console.log(selectedPlatforms);
    // this.setState({selectedPlatforms: newResult})
  }
  // selectedPlatforms = selectedPlatforms.label
  console.log(selectedPlatforms);

  let selectedStatuses

  if (s !== undefined && s !== null && stats !== undefined ) {
    selectedStatuses = Object.keys(stats).filter(key => s.includes(stats[key].label)).map(key => stats[key]);
    console.log(selectedStatuses);
  }

  console.log(statuses)
  console.log(statuses.length)
  statuses.map((status, idx) => {
    statusesVac += status["vacStat"];
    {/*todo add link for all companies*/}
    companies += status["compName"];
    colour += status["color"];
  })
  console.log(statusesVac)
  console.log(colour)
  console.log(companies)
  let compFirst = statuses.map(id => id.comp_id)
  console.log(compFirst)
  stat = statuses.map(id => id.vacStat)
  console.log(stat)
  console.log(stat[0])
  let statFirst = stat[0];
  console.log(statFirst)
  console.log(name)
  
  
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
          className={"icon-plus icons font-xl" + " " +(statuses.length > 1 ? "bold": "")}
          // className="errorlist"
          // className="icon-plus icons font-xl"
          style={{ color: "var(--green)", cursor: "pointer"}}

          onClick={open}
        />
          
        )}

      </td>
      <td>{moment(date).format("DD.MM.YY")}</td>
      {/* <td><Badge  style={{backgroundColor: "white", display: "block"}}>
            {selectedPlatforms}
          </Badge></td> */}
          <td class ="child" vertical-align= "middle" style={{ minWidth: "7rem" }}>
        {selectedPlatforms.map((selectedPlatform, idx) => (
          <Badge  style={{backgroundColor: "white", width: "250px", display: "block"}}>
            {selectedPlatform["label"]}
          </Badge>
        ))}
      </td >
      {/* <td> 
        {selectedPlatforms[0]}
      </td> */}
      {/* <td class ="child"  style={{  width: "250px"}}><Select
                          id="platform_id"
                          options={platforms}
                          value={selectedPlatforms[0]}
                          placeholder="Platform"
                          isMulti
                          isClearable
                          // onChange={this.handlePlatformChange}
      /></td> */}
     
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
      {/* <td class ="child" vertical-align= "middle" style={{ minWidth: "7rem" }}>
        {statuses.map((status, idx) => (
          <Badge  style={{backgroundColor: `${status["color"]}`, width: "100px", display: "block"}}>
            {status["vacStat"]}
          </Badge>
        ))}
      </td > */}


      <td class ="child" vertical-align= "middle" style={{ minWidth: "7rem", height: "200px"}}>
      <Select
            // defaultValue={selectCandidateStatus.find(
            //   candidateStatus => candidateStatus.label === status
            // )}
            options={stats}
            // styles={customStyles}
            value={selectedStatuses[0]}
            onChange={value => {
              const content = {
                candidate_id: id,
                vacancy_id: vac[0],
                value
              };
              onChangeCandidateStatus(content);
              console.log(content)
            }}
          />
      {/* {statuses.map((status, idx) => (
      <Badge  style={{backgroundColor: `${status["color"]}`, width: "100px", display: "block"}}>
     {status["vacStat"]}
       {statFirst}
      </Badge>))} */}
       
      </td >
      <td class ="child" verticalAlign = "middle" style={{ minWidth: "7rem" }}>
      {statuses.map((status, idx) => (
        // <Badge style = {{backgroundColor: `${status["color"]}`, display: "block", width: "250px", verticalAlign: "middle"}}>
        <Badge  style={{backgroundColor: `${status["color"]}`, width: "250px", display: "block"}}>
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
  isOpen: PropTypes.bool.isRequired,
  onChangeCandidateStatus: PropTypes.func
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
  close: () => null,
  onChangeCandidateStatus: () => {}
};

export default CandidateTableRow;
