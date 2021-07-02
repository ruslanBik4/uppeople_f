// Core
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Badge } from 'reactstrap';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './CandidatesAll.css';
import Select from "../shared/Select";


const CandidateTableRow = (
  {
    id,
    date,
    name,
    seniority,
    platforms,
    email,
    mobile,
    linkedin,
    tag_name,
    tag_color,
    vacancies,
    skype,
    recruiter,
    selectedVacancies,
    isOpen,
    statuses,
    open,
    close,
    options,
  },
  // options,
) => {
  
  const contactCopied = e => {
    e.target.style.color = 'var(--green)';
  };

 
  
  let mobileValue = mobile;
  let emailValue = email;
  let linkedinValue = linkedin;
  let skypeValue = skype;

  console.log(platforms)
  // console.log(data)

  const slicedVacancies = selectedVacancies !== null && selectedVacancies.map(el => ({
    ...el,
    label: `${el.label.slice(0,20)}...`,
}));

console.log('slicedVacancies: ', slicedVacancies)
options = options;
console.log(options)

console.log(CandidateTableRow)

let selectedPlatforms

if (platforms !== undefined && platforms !== null && options !== undefined ) {
  selectedPlatforms = Object.keys(options).filter(key => platforms.includes(options[key].id)).map(key => options[key]);
  console.log(selectedPlatforms);
  // this.setState({selectedPlatforms: newResult})
}


  
  if (mobile === '' || null) {
    mobileValue = null;
  }
  
  if (email === '' || null) {
    emailValue = null;
  }
  
  if (linkedin === '' || null) {
    linkedinValue = null;
  }
  
  if (skype === '' || null) {
    skypeValue = null;
  }
  console.log(statuses)
  return (
    <>
      <td>
        {isOpen ? (
          <i
            className='icon-close icons font-xl'
            style={{ color: 'var(--red)', cursor: 'pointer' }}
            onClick={close}
          />
        ) : (
          <i
            className='icon-plus icons font-xl'
            style={{ color: 'var(--green)', cursor: 'pointer' }}
            onClick={open}
          />
        )}
      </td>
      <td>{moment(date).format('DD.MM.YY')}</td>
       <td class ="child" vertical-align= "middle" style={{ minWidth: "7rem" }}>
        {selectedPlatforms.map((selectedPlatform, idx) => (
          <Badge  style={{backgroundColor: "white", width: "250px", display: "block"}}>
            {selectedPlatform["label"]}
          </Badge>
        ))}
      </td >


      {/* <td class ="child"  style={{  width: "250px"}}><Select
                          id="platform_id"
                          options={platforms}
                          value={selectedPlatforms}
                          placeholder="Platform"
                          isMulti
                          isClearable
                          // onChange={this.handlePlatformChange}
                        /></td> */}
      <td>
        <Link to={`/candidates/${id}`}>{name}</Link>
      </td>
      <td><Badge style={{ backgroundColor: tag_color }}>{tag_name}</Badge></td>
      <td>{seniority}</td>
      <td class ="child"  style={{  width: "250px"}} 
>
        {/* <Col sm={9}> */}
          <Select
                          id="vacancies"
                          isMulti
                          value={slicedVacancies}
                          // options={platformVacancies}
                          // isClearable
                          placeholder="None"
                          style={{zIndex: 2, padding: "0px", }}
                          // style={{padding: "0px"}}
                         

                          
                        />
        {/* </Col> */}
      </td>
      <td justify-content= "center" class ="child" vertical-align= "middle">
        <div className="contacts-col-icons-wrap" justify-content= "center">
          {
            mobileValue !== null ?
              <CopyToClipboard text={mobileValue}>
                <i className='icon-phone icons font-xl contact-icon'
                   style={{ color: 'var(--black)', cursor: 'pointer' }}
                   onClick={contactCopied}
                />
              </CopyToClipboard>
              : null
          }
          {
            emailValue !== null ?
              <CopyToClipboard text={emailValue}>
                <i className='icon-envelope icons font-xl contact-icon'
                   style={{ color: 'var(--black)', cursor: 'pointer' }}
                   onClick={contactCopied}
                />
              </CopyToClipboard>
              : null
          }
          {
            linkedinValue !== null ?
              <a href={linkedinValue} target='_blank' rel='noreferrer'>
                <i className='icon-social-linkedin icons font-xl contact-icon'
                   style={{ color: 'var(--blue)', cursor: 'pointer' }}
                   onClick={contactCopied}
                />
              </a>
              : null
          }
          {
            skypeValue !== null ?
              <CopyToClipboard text={skypeValue}>
                <i className='icon-social-skype icons font-xl contact-icon'
                   style={{ color: 'var(--blue)', cursor: 'pointer' }}
                   onClick={contactCopied}
                />
              </CopyToClipboard>
              : null
          }
        </div>
      </td>
      <td>{recruiter}</td>
    </>
  );
};

CandidateTableRow.propTypes = {
  id: PropTypes.number.isRequired,
  date: PropTypes.string,
  name: PropTypes.string,
  seniority: PropTypes.string,
  platform: PropTypes.string,
  mobile: PropTypes.string,
  email: PropTypes.string,
  linkedin: PropTypes.string,
  vacancies: PropTypes.array,
  skype: PropTypes.string,
  recruiter: PropTypes.string,
  open: PropTypes.func,
  close: PropTypes.func,
  isOpen: PropTypes.bool.isRequired,
  options: PropTypes.array,
};

CandidateTableRow.defaultProps = {
  date: '',
  name: '',
  seniority: '',
  platform: '',
  vacancies: [],
  recruiter: '',
  mobile: '',
  email: '',
  linkedin: '',
  skype: '',
  open: () => null,
  close: () => null,
  options: [],
};

export default CandidateTableRow;
