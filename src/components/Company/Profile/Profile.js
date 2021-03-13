// Core
import React, { Component } from "react";
import { Col, Row, TabPane } from "reactstrap";
import PropTypes from "prop-types";
// Components
import Tabs from "../../shared/Tabs/Tabs";
import CompanyProfileCard from "./Card";
import CompanyProfileContacts from "./Contacts/List";
import CompanyProfileCooperation from "./Cooperation";
import CompanyProfileInfo from "./Info";
import CompanyProfileVacancies from "./Vacancies/Vacancies";
import CompanyProfileCandidates from "./Candidates/Candidates";
import CompanyProfileComments from "./Comments/Comments";
import CompanyProfileSettingsForm from "./SettingsForm";
import Calendar from "../../shared/Calendar";
// Context
import Localization from "../../../providers/Localization";
// Instruments
import { getBase64 } from "../../../utils/selectors";
import {
  getCompanyInfo,
  getCompanyCandidates,
  getCompanyComments,
  filterAndSortCompanyVacancies,
  filterAndSortCompanyCandidates,
  uploadCompanyLogo,
  updateCompanyInfo,
  updateCompanyInfoProfile,
  updateVacancyStatus,
  updateCandidateStatus,
  addUserComment,
  deleteUserComment,
  addCompanyContact,
  editCompanyContact,
  deleteCompanyContact,
  editCompanyComment
} from "../../../utils/api/company";
import CompanyInfo from "./CompanyInfo";

const tabs = [
  { id: "1", name: "Information" },
  { id: "6", name: "Edit Company" },
  { id: "2", name: "Calendar" },
  { id: "3", name: "Vacancies" },
  { id: "4", name: "Candidates" },
  { id: "5", name: "Comments" }
];

const tabsForPartner = [
  { id: "1", name: "Information" },
  { id: "2", name: "Calendar" },
  { id: "3", name: "Vacancies" },
  { id: "4", name: "Candidates" }
];

const localesCandidates = ["Recruiter", "Platform", "Name", "Date", "Salary"];
const localesVacancies = ["Platform", "Seniority", "Details", "Date"];

export default class CompanyProfile extends Component {
  static propTypes = {
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      role: PropTypes.number.isRequired
    }),
    file: PropTypes.object,
  };

  state = {
    companyInfo: {
      name: "",
      logo: null,
      phone: "",
      email: "",
      skype: "",
      about: null,
      map: "",
      calendarEvents: [],
      sendDetails: null,
      interview_details: null,
      sending: null,
      termsOfCooperation: "",
      contacts: [],
      managers: []
    },
    vacanciesData: {
      vacancies: [],
      vacanciesCount: null,
      totalPages: null,
      perPage: null,
      currentPage: 1,
      vacancyStatus: [],
      candidateStatus: [],
      platform: [],
      seniority: []
    },
    candidatesData: {
      candidates: [],
      candidatesCount: null,
      totalPages: null,
      perPage: null,
      currentPage: 1,
      candidateStatus: [],
      platform: []
    },
    comments: [],
    filterAndSortVacancies: {
      inputDate: "",
      selectPlatforms: [],
      selectSeniorities: [],
      selectStatuses: [
        { id: 0, label: "Hot", value: "hot" },
        { id: 1, label: "Open", value: "open" }
      ],
      currentColumn: "",
      sort: null
    },
    filterAndSortCandidates: {
      email: "",
      name: "",
      date: "",
      selectPlatforms: [],
      selectStatuses: [],
      currentColumn: "",
      sort: null
    }
  };

  componentDidMount() {
    let { id } = this.props.match.params;
    const { role, companyId } = this.props.user;
    const { filterAndSortVacancies } = this.state;
    const vacanciesCurrentPage = this.state.vacanciesData.currentPage;
    const candidatesCurrentPage = this.state.candidatesData.currentPage;

    id = role !== 5 ? id: companyId;

    getCompanyInfo(id).then(companyInfo => {
          companyInfo && this.setState({ ...this.state, companyInfo });
        });

    filterAndSortCompanyVacancies(
      id,
      vacanciesCurrentPage,
      filterAndSortVacancies
    ).then(vacanciesData => this.setState({ ...this.state, vacanciesData }));

    getCompanyCandidates(id, candidatesCurrentPage).then(candidatesData => {
      console.log("data ", candidatesData);
      this.setState({ ...this.state, candidatesData });
    });

    getCompanyComments(id).then(comments => this.setState({ comments }));
  }

  filterAndSortVacancies = filterAndSort => {
    const { id } = this.props.match.params;
    const { filterAndSortVacancies } = this.state;

    this.setState(
      {
        filterAndSortVacancies: {
          ...filterAndSortVacancies,
          ...filterAndSort
        }
      },
      () => {
        const {
          vacanciesData: { currentPage },
          filterAndSortVacancies
        } = this.state;

        filterAndSortCompanyVacancies(
          id,
          currentPage,
          filterAndSortVacancies
        ).then(vacanciesData =>
          this.setState({
            vacanciesData: {
              ...this.state.vacanciesData,
              ...vacanciesData
            }
          })
        );
      }
    );
  };

  filterAndSortCandidates = filterAndSort => {
    const { id } = this.props.match.params;
    const { filterAndSortCandidates } = this.state;

    this.setState(
      {
        filterAndSortCandidates: {
          ...filterAndSortCandidates,
          ...filterAndSort
        }
      },
      () => {
        const {
          candidatesData: { currentPage },
          filterAndSortCandidates
        } = this.state;

        filterAndSortCompanyCandidates(
          id,
          currentPage,
          filterAndSortCandidates
        ).then(candidatesData =>
          this.setState({
            candidatesData: {
              ...this.state.candidatesData,
              ...candidatesData
            }
          })
        );
      }
    );
  };

  updateCompanyProfile = companyInfo => {
    const { id } = this.props.match.params;

    updateCompanyInfo(id, companyInfo);

    this.setState({
      companyInfo: {
        ...this.state.companyInfo,
        email: companyInfo.email,
        phone: companyInfo.phone,
        skype: companyInfo.skype
      }
    });
  };

  handleLogoSelected = ({ target }) => {
    const file = target.files[0];

    getBase64(file, logo => {
      this.setState({
        companyInfo: {
          ...this.state.companyInfo,
          logo
        },
        file
        // updateImage: true
      });
    });
  };

  handleUploadLogo = () => {
    const { id } = this.props.match.params;
    const {
      file
    } = this.state;

    uploadCompanyLogo(id, file).then(data => {
      if (data === 401) {
        this.props.history.push('/login/');
      }
      console.log(data)
    });
  };

  addComment = comment => {
    const { id } = this.props.match.params;

    addUserComment(id, comment).then(newComment =>
      this.setState({
        comments: [newComment, ...this.state.comments]
      })
    );
  };

  deleteComment = commentId => {
    const { id } = this.props.match.params;

    deleteUserComment(id, commentId);

    this.setState({
      comments: this.state.comments.filter(comment => comment.id !== commentId)
    });
  };

  editComment = (commentId, comment) => {
    const { id } = this.props.match.params;

    editCompanyComment(commentId, {comment: comment}).then(() => {
      getCompanyComments(id).then(comments => this.setState({ comments }));
    });
  };

  addContact = contact => {
    const { id  } = this.props.match.params;

    addCompanyContact(id, contact).then(data => {
          if (data === 401) {
            this.props.history.push('/login/')
          } else if (typeof data === 'object') {
            const contacts = this.state.companyInfo.contacts.length > 0 ? [contact, ...this.state.companyInfo.contacts] : [contact];
            this.setState({companyInfo: {...this.state.companyInfo, contacts } })
          }
        }
    );
  };

  editContact = (id, editedContact) => {
    const { id  } = this.props.match.params;
    editCompanyContact(id, editedContact).then(data => {

      if (data === 401) {
        this.props.history.push('/login/')
      } else {
        this.setState({
          companyInfo: {
            ...this.state.companyInfo,
            contacts: this.state.companyInfo.contacts.map(contact =>
                contact.id === editedContact.id ? editedContact : data
            )
          }
        });
      }
    })
  };

  deleteContact = id => {
    deleteCompanyContact(id);
    //todo: add performs response
    this.setState({
      companyInfo: {
        ...this.state.companyInfo,
        contacts: this.state.companyInfo.contacts.filter(
          contact => contact.id !== id
        )
      }
    });
  };

  updateCompanyProfileContent = content => {
    const { id } = this.props.match.params;

    updateCompanyInfoProfile(id, content).then(updatedContent =>
      this.setState({
        companyInfo: {
          ...this.state.companyInfo,
          ...updatedContent
        }
      })
    );
  };

  changeVacancyStatus = content => {
    updateVacancyStatus(content).then(data => console.log(data));
  };

  changeCandidateStatus = content => {
    updateCandidateStatus(content).then(data => console.log(data));
  };

  onChangePageVacancies = currentPage => {
    const { id } = this.props.match.params;
    const { filterAndSortVacancies } = this.state;

    filterAndSortCompanyVacancies(id, currentPage, filterAndSortVacancies).then(
      vacanciesData =>
        this.setState({
          vacanciesData: {
            ...this.state.vacanciesData,
            ...vacanciesData
          }
        })
    );
  };

  onEditCompany = currentPage => {
    const { id } = this.props.match.params;
    const { filterAndSortVacancies } = this.state;

    filterAndSortCompanyVacancies(id, currentPage, filterAndSortVacancies).then(
      vacanciesData =>
        this.setState({
          vacanciesData: {
            ...this.state.vacanciesData,
            ...vacanciesData
          }
        })
    );
  };

  onChangePageCandidates = currentPage => {
    const { id } = this.props.match.params;
    const { filterAndSortCandidates } = this.state;

    filterAndSortCompanyCandidates(
      id,
      currentPage,
      filterAndSortCandidates
    ).then(candidatesData =>
      this.setState({
        candidatesData: {
          ...this.state.candidatesData,
          ...candidatesData
        }
      })
    );
  };

  render() {
    const {
      companyInfo: { name, email, phone, skype, logo, calendarEvents, termsOfCooperation, contacts, managers },
      vacanciesData,
      candidatesData,
      comments
    } = this.state;
    console.log("data candidate", this.state);
    const {
      user: { role } 
    } = this.props;
    const vacanciesCount = vacanciesData && vacanciesData.vacanciesCount;
    const candidatesCount = candidatesData && candidatesData.candidatesCount;
    const commentsCount = comments && comments.length;
    const companyName = name && name;
    let { id } = this.props.match.params;
    const { companyId } = this.props.user;
  
      

    // id = role !== 5 ? id: companyId;

    // getCompanyInfo(id).then(companyInfo => {
    //       companyInfo && this.setState({ ...this.state, companyInfo });
    //     });
    return (
      <>
        <Row>
          <Col md={3}>
            <CompanyProfileCard
              name={name}
              logo={(logo === null ? "/api/img/companies_logo/no_logo.png":  logo.startsWith('data')? logo : "/api/img/" + logo)}
              currentCompany={id}
              onSelectLogo={this.handleLogoSelected}
              onUploadLogo={this.handleUploadLogo}
            />
            <CompanyInfo
              email={email}
              phone={phone}
              skype={skype}
              managers={managers}
            />
            <CompanyProfileContacts
              contacts={contacts}
              onAddContact={this.addContact}
              onEditContact={this.editContact}
              onDeleteContact={this.deleteContact}
            />
            <CompanyProfileCooperation
              termsOfCooperation={termsOfCooperation}
            />
          </Col>
          <Col md={9}>
            {role !== 5 ? (
              <Tabs
                tabs={tabs}
                vacanciesCount={vacanciesCount}
                candidatesCount={candidatesCount}
                commentsCount={commentsCount}
              >
                <TabPane tabId="1">
                  <CompanyProfileInfo
                    companyInfo={this.state.companyInfo}
                    onUpdate={this.updateCompanyProfileContent}
                  />
                </TabPane>
                <TabPane tabId="2">
                  <Row>
                    <Col xl={12}>
                      <Calendar events={calendarEvents} />
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="3">
                  <Localization
                    locales={localesVacancies}
                    onSort={this.filterAndSortVacancies}
                  >
                    <CompanyProfileVacancies
                      vacanciesData={vacanciesData}
                      onChangePage={this.onChangePageVacancies}
                      onChangeVacancyStatus={this.changeVacancyStatus}
                      onFilterVacancies={this.filterAndSortVacancies}
                      currentCompany={companyName}
                    />
                  </Localization>
                </TabPane>
                <TabPane tabId="4">
                  <Localization
                    locales={localesCandidates}
                    onSort={this.filterAndSortCandidates}
                  >
                    <CompanyProfileCandidates
                      candidatesData={candidatesData}
                      onChangePage={this.onChangePageCandidates}
                      onChangeCandidateStatus={this.changeCandidateStatus}
                      onFilterCandidates={this.filterAndSortCandidates}
                    />
                  </Localization>
                </TabPane>
                <TabPane tabId="5">
                  <Row>
                    <Col xl={12}>
                      <CompanyProfileComments
                        auth_user_id={this.props.user.id}
                        comments={comments}
                        onAddComment={this.addComment}
                        onDeleteComment={this.deleteComment}
                        onEditComment={this.editComment}
                      />
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="6">
                  <Row>
                    <Col xl={12}>
                      <CompanyProfileSettingsForm
                        companyInfo={this.state.companyInfo}
                        onUpdateCompanyProfile={this.updateCompanyProfile}
                      />
                    </Col>
                  </Row>
                </TabPane>
              </Tabs>
            ) : (
              <Tabs
                tabs={tabsForPartner}
                vacanciesCount={vacanciesCount}
                candidatesCount={candidatesCount}
              >
                <TabPane tabId="1">
                  <CompanyProfileInfo
                    companyInfo={this.state.companyInfo}
                    onUpdate={this.updateCompanyProfileContent}
                  />
                </TabPane>
                <TabPane tabId="2">
                  <Row>
                    <Col xl={12}>
                      <Calendar events={calendarEvents} />
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="3">
                  <Localization
                    locales={localesVacancies}
                    onSort={this.filterAndSortVacancies}
                  >
                    <CompanyProfileVacancies
                      vacanciesData={vacanciesData}
                      onChangePage={this.onChangePageVacancies}
                      onChangeVacancyStatus={this.changeVacancyStatus}
                      onFilterVacancies={this.filterAndSortVacancies}
                      currentCompany={companyName}
                    />
                  </Localization>
                </TabPane>
                <TabPane tabId="4">
                  <Localization
                    locales={localesCandidates}
                    onSort={this.filterAndSortCandidates}
                  >
                    <CompanyProfileCandidates
                      candidatesData={candidatesData}
                      onChangePage={this.onChangePageCandidates}
                      onChangeCandidateStatus={this.changeCandidateStatus}
                      onFilterCandidates={this.filterAndSortCandidates}
                    />
                  </Localization>
                </TabPane>
              </Tabs>
            )}
          </Col>
        </Row>
      </>
    );
  }
}
