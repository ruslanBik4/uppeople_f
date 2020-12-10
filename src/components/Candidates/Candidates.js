import React, {Component} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {Button, Col, Row, TabPane} from "reactstrap";
import {AppSwitch} from "@coreui/react";
// Components
import CandidatesForm from "./Form";
import AllCandidatesTable from "./AllTable";
import SentCandidatesTable from "./SentTable";
import CandidatesFromFreelancersTable from "./FromFreelancers/Table";
import Tabs from "../shared/Tabs/Tabs";
import Select from "../shared/Select";
// Context Provider
import Localization from "../../providers/Localization";
import {Spinner} from "reactstrap";

// Instruments
import {
  getAllCandidates,
  getSentCandidates,
  getCandidatesFromFreelancers,
  filterAndSortAllCandidates,
  filterAndSortSentCandidates
} from "../../utils/api/candidates";
import {
  sendCandidateResume,
  cancelCandidateFromFreelancer
} from "../../utils/api/candidate";

const tabs = [
  {
    id: "1",
    name: "All candidates"
  },
  {
    id: "2",
    name: "Sent candidates"
  },
  {
    id: "3",
    name: "Candidates from freelancers"
  }
];

const localesAllCandidates = [
  "Date",
  "Platform",
  "Name",
  "Tag/Reason",
  "Seniority",
  "Contacts",
  "Recruiter"
];

const localesSentCandidates = [
  "Date",
  "Platform",
  "Name",
  "Salary",
  "Contacts",
  "Status",
  "Companies",
  "Recruiter"
];

export default class Candidates extends Component {
  static propTypes = {
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      role: PropTypes.number.isRequired,
      companyId: PropTypes.number
    })
  };

  state = {
    allCandidatesData: {
      allCandidates: [],
      allCandidatesCount: null,
      allTotalPages: null,
      allPerPage: null,
      currentAllPage: 1,
      allPlatforms: [],
      allStatuses: [],
      allRecruiters: [],
      allSeniority: [],
      tags: [],
      reasons: [],
      loading: true
    },
    sentCandidatesData: {
      sentCandidates: [],
      sentCandidatesCount: null,
      sentTotalPages: null,
      sentPerPage: null,
      currentSentPage: 1,
      sentPlatforms: [],
      sentCompanies: [],
      sentStatuses: [],
      sentRecruiters: [],
      loadingSent: false
    },

    candidatesFromFreelancersData: {
      candidatesFF: [],
      candidatesCountFF: null,
      totalPagesFF: null,
      perPageFF: null,
      statusesFF: [],
      currentPageFF: 1
    },
    filterAndSortCandidates: {
      search: "",
      dateFrom: "",
      dateTo: "",
      selectCompanies: [],
      selectPlatforms: [],
      selectStatuses: [],
      selectRecruiter: "",
      selectTag: [],
      selectReason: [],
      mySent: false
    },
    filterAndSortCandidatesFF: {
      search: "",
      dateFrom: "",
      dateTo: "",
      selectCompanies: [],
      selectPlatforms: [],
      selectRecruiter: ""
    },
    dataForSendResumeForm: {},
    isActive: true,
    activeTabId: "1"
  };

  componentDidMount() {
    const {
      user: {role}
    } = this.props;

    const {
      allCandidatesData: {currentAllPage},
      sentCandidatesData: {currentSentPage},
      candidatesFromFreelancersData: {currentPageFF},
    } = this.state;

    console.log('ROLE: ', role);

    role !== 4 && role !== 5
      ? this.requestForCandidatesForStaff(currentAllPage, currentSentPage, currentPageFF)
      : this.requestForCandidates(currentAllPage, currentSentPage);
  }

  requestForCandidatesForStaff = (currentAllPage, currentSentPage, currentPageFF) => {

    getAllCandidates(currentAllPage).then(allCandidatesData => {
      console.log("all candidates", allCandidatesData);
      this.setState({
        allCandidatesData: {...this.state.allCandidatesData, ...allCandidatesData}
      });
    });

    getSentCandidates(currentSentPage).then(sentCandidatesData => {
      console.log("sent candidates", sentCandidatesData);
      this.setState({
        sentCandidatesData: {...this.state.sentCandidatesData, ...sentCandidatesData}
      });
    });

    getCandidatesFromFreelancers(currentPageFF).then(
      candidatesFromFreelancersData => {
        console.log("freelancers", candidatesFromFreelancersData);
        this.setState({
          candidatesFromFreelancersData: {
            ...this.state.candidatesFromFreelancersData,
            ...candidatesFromFreelancersData
          }
        });
      }
    );
  };

  requestForCandidates = (currentAllPage, currentSentPage) => {

    getAllCandidates(currentAllPage).then(allCandidatesData => {
      this.setState({
        allCandidatesData: {...this.state.allCandidatesData, ...allCandidatesData}
      });
    });

    getSentCandidates(currentSentPage).then(sentCandidatesData => {
      this.setState({
        sentCandidatesData: {...this.state.sentCandidatesData, ...sentCandidatesData}
      });
    });

  };

  // all

  privateAllHandleRecruiterChange = value => {
    const {filterAndSortCandidates} = this.state;
    console.log('privateAllHandleRecruiterChange state:', filterAndSortCandidates);

    this.setState(
      {
        filterAndSortCandidates: {
          ...filterAndSortCandidates,
          selectRecruiter: value
        }
      },
      () => {
        const {filterAndSortCandidates} = this.state;
        this.privateFilterAndSortAllCandidates(filterAndSortCandidates);
      }
    );
  };

  privateAllHandleTagChange = value => {
    const {filterAndSortCandidates} = this.state;
    console.log('privateAllHandleRecruiterChange state:', filterAndSortCandidates);

    this.setState(
      {
        filterAndSortCandidates: {
          ...filterAndSortCandidates,
          selectTag: value
        }
      },
      () => {
        const {filterAndSortCandidates} = this.state;
        this.privateFilterAndSortAllCandidates(filterAndSortCandidates);
      }
    );
  };

  privateAllHandleReasonChange = value => {
    const {filterAndSortCandidates} = this.state;
    console.log('privateAllHandleReasonChange state:', filterAndSortCandidates);

    this.setState(
      {
        filterAndSortCandidates: {
          ...filterAndSortCandidates,
          selectReason: value
        }
      },
      () => {
        const {filterAndSortCandidates} = this.state;
        this.privateFilterAndSortAllCandidates(filterAndSortCandidates);
      }
    );
  };

  // sent

  privateSentHandleRecruiterChange = value => {
    const {filterAndSortCandidates} = this.state;
    console.log('privateSentHandleRecruiterChange state:', filterAndSortCandidates);

    this.setState(
      {
        filterAndSortCandidates: {
          ...filterAndSortCandidates,
          selectRecruiter: value
        }
      },
      () => {
        const {filterAndSortCandidates} = this.state;
        this.privateFilterAndSortSentCandidates(filterAndSortCandidates);
      }
    );
  };

  filterAndSortCandidates = filterAndSort => {
    const {filterAndSortCandidates} = this.state;
    console.log('>>>>>Filter from candidates');
    this.setState(
      {
        filterAndSortCandidates: {
          ...filterAndSortCandidates,
          ...filterAndSort
        }
      },
      () => {
        const {
          allCandidatesData: {currentAllPage},
          sentCandidatesData: {currentSentPage},
          filterAndSortCandidates
        } = this.state;

        filterAndSortAllCandidates(currentAllPage, filterAndSortCandidates).then(
          allCandidatesData => {
            this.setState({
              allCandidatesData: {
                ...this.state.allCandidatesData,
                ...allCandidatesData
              }
            })
          }
        );

        filterAndSortSentCandidates(currentSentPage, filterAndSortCandidates).then(
          sentCandidatesData => {
            this.setState({
              sentCandidatesData: {
                ...this.state.sentCandidatesData,
                ...sentCandidatesData
              }
            })
          }
        );
      }
    );
  };

  // all

  privateFilterAndSortAllCandidates = filterAndSort => {
    const {filterAndSortCandidates} = this.state;
    console.log('>>>>>Filter from candidates');
    console.log(filterAndSortCandidates);
    this.setState(
      {
        filterAndSortCandidates: {
          ...filterAndSortCandidates,
          ...filterAndSort
        }
      },
      () => {
        const {
          allCandidatesData: {currentAllPage},
          filterAndSortCandidates
        } = this.state;

        filterAndSortAllCandidates(currentAllPage, filterAndSortCandidates).then(
          allCandidatesData => {
            this.setState({
              allCandidatesData: {
                ...this.state.allCandidatesData,
                ...allCandidatesData
              }
            })
          }
        );
      }
    );
  };

  // sent

  privateFilterAndSortSentCandidates = filterAndSort => {
    const {filterAndSortCandidates} = this.state;
    console.log('>>>>>Filter from candidates');
    this.setState(
      {
        filterAndSortCandidates: {
          ...filterAndSortCandidates,
          ...filterAndSort
        }
      },
      () => {
        const {
          sentCandidatesData: {currentSentPage},
          filterAndSortCandidates
        } = this.state;


        filterAndSortSentCandidates(currentSentPage, filterAndSortCandidates).then(
          sentCandidatesData => {
            this.setState({
              sentCandidatesData: {
                ...this.state.sentCandidatesData,
                ...sentCandidatesData
              }
            })
          }
        );
      }
    );
  };

  onChangeAllCandidatesPage = (currentAllPage) => {
    console.log('onChangeAllCandidatesPage');

    this.setState(({allCandidatesData}) => ({
      allCandidatesData: {
        ...allCandidatesData,
        loading: true
      }
    }));

    const {filterAndSortCandidates} = this.state;

    filterAndSortAllCandidates(currentAllPage, filterAndSortCandidates).then(
      allCandidatesData =>
        this.setState({
          allCandidatesData: {
            ...this.state.allCandidatesData,
            ...allCandidatesData
          }
        })
    );
  };

  onChangeSentCandidatesPage = (currentSentPage) => {
    console.log('onChangeSentCandidatesPage');

    const {filterAndSortCandidates} = this.state;

    this.setState(({sentCandidatesData}) => ({
      sentCandidatesData: {
        ...sentCandidatesData,
        loadingSent: true
      }
    }));

    filterAndSortSentCandidates(currentSentPage, filterAndSortCandidates).then(
      sentCandidatesData =>
        this.setState({
          sentCandidatesData: {
            ...this.state.sentCandidatesData,
            ...sentCandidatesData
          }
        })
    );
  };

  toggleMySent = () => {
    this.setState(
      state => ({
        filterAndSortCandidates: {
          ...state.filterAndSortCandidates,
          mySent: !state.filterAndSortCandidates.mySent
        }
      }),
      () => {
        const {
          allCandidatesData: {currentAllPage},
          sentCandidatesData: {currentSentPage},
          filterAndSortCandidates
        } = this.state;

        filterAndSortAllCandidates(currentAllPage, filterAndSortCandidates).then(
          allCandidatesData => {
            this.setState({
              allCandidatesData: {
                ...this.state.allCandidatesData,
                ...allCandidatesData
              }
            });
          }
        );

        filterAndSortSentCandidates(currentSentPage, filterAndSortCandidates).then(
          sentCandidatesData => {
            this.setState({
              sentCandidatesData: {
                ...this.state.sentCandidatesData,
                ...sentCandidatesData
              }
            });
          }
        );
      }
    );
  };

  toggleIsActive = () => {
    this.setState(
      state => ({
        isActive: !state.isActive
      }),
      () => console.log(this.state.isActive)
    );
    console.log(this.state.isActive);
  };

  activeTabToggle = (tab) => {
    this.setState({activeTabId: tab});
  };


  sendResume = (id, content) => {
    sendCandidateResume(id, content);

    this.setState(prevState => ({
      candidatesFromFreelancersData: {
        candidatesFF: prevState.candidatesFromFreelancersData.candidatesFF.filter(
          candidate => candidate.id !== id
        )
      }
    }));
  };

  rejectCandidate = (id, content) => {
    // console.log(content);
    cancelCandidateFromFreelancer(id, content).then(data => {
      // console.log(data);
      data
        ? this.setState(prevState => ({
          candidatesFromFreelancersData: {
            candidatesFF: prevState.candidatesFromFreelancersData.candidatesFF.filter(
              candidate => candidate.id !== id
            )
          }
        }))
        : console.log(data);
    });
  };

  render() {
    const {
      allCandidatesData: {
        allCandidates,
        allCandidatesCount,
        allTotalPages,
        allPerPage,
        currentAllPage,
        allPlatforms,
        allSeniority,
        tags,
        reasons,
        loading
      },
      sentCandidatesData: {
        sentCandidates,
        sentCandidatesCount,
        sentTotalPages,
        sentPerPage,
        currentSentPage,
        sentStatuses,
        sentPlatforms,
        sentCompanies,
        sentRecruiters,
        loadingSent
      },
      candidatesFromFreelancersData: {
        candidatesFF,
        candidatesCountFF,
        totalPagesFF,
        perPageFF,
        currentPageFF,
        statusesFF
      },
      filterAndSortCandidates: {selectRecruiter, mySent, selectTag, selectReason},
      activeTabId
    } = this.state;


    const {
      user: {role}
    } = this.props;

    const divStyle = {
      color: 'yellow',
    };

    return (
      <>
        <Row>
          <Col
            style={{
              display: "flex",
              justifyContent: "space-between",
              maxWidth: 200,
              marginBottom: "0.5rem"
            }}
          >
            <h1 style={{marginBottom: 0, fontSize: 24}}>Candidates</h1>
            <span
              style={{
                alignSelf: "flex-end",
                color: "var(--gray)"
              }}
            >
              {activeTabId === "1" ? allCandidatesCount : null}
              {activeTabId === "2" ? sentCandidatesCount : null}
              {activeTabId === "3" ? candidatesCountFF : null}
            </span>
          </Col>
        </Row>
        <Row>
          <Col xl={12}>
            <CandidatesForm
              userRole={role}
              platforms={sentPlatforms}
              companies={sentCompanies}
              statuses={sentStatuses}
              seniority={allSeniority}
              activeTabId={activeTabId}
              onFilter={this.filterAndSortCandidates}
              onAllFilter={this.privateFilterAndSortAllCandidates}
              onSentFilter={this.privateFilterAndSortSentCandidates}
            />
          </Col>
        </Row>
        <Row style={{marginBottom: "1rem"}}>
          {role !== 4 ? (
            <Col lg={activeTabId !== "1" ? 4 : 3} md={6} sm={4} xs={6}>
              <Link
                to="/new-candidate"
                className="btn btn-success pull-left"
                style={{marginRight: "0.4rem"}}
              >
                <i className="fa fa-plus-circle"/> Create
              </Link>
              <Button color="light" onClick={() => null}>
                Export
              </Button>
            </Col>
          ) : (
            <Col>
              <Link to="/new-candidate" className="btn btn-success pull-left">
                <i className="fa fa-plus-circle"/> Create
              </Link>
            </Col>
          )}
          {role !== 4 ? (
            <>
              {
                activeTabId !== "1" ?
                  <Col lg={3} md={3} sm={4} xs={6}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        margin: "0 0.5rem",
                        padding: "0.5rem",
                        color: "var(--gray)"
                      }}
                      className="my-events"
                    >
                      <AppSwitch
                        className="mx-1"
                        color="primary"
                        checked={mySent}
                        onChange={this.toggleMySent}
                      />
                      My Sent
                    </div>
                  </Col>
                  : null
              }
              {activeTabId === '1' ? (
                <>
                  <Col lg={3} md={3} sm={4} xs={12}>
                    <Select
                      isClearable
                      value={selectRecruiter}
                      options={sentRecruiters}
                      placeholder="Choose recruiter"
                      onChange={this.privateAllHandleRecruiterChange}
                    />
                  </Col>

                  <Col lg={3} md={3} sm={4} xs={12}>
                    <Select
                      isClearable
                      value={selectTag}
                      options={tags}
                      placeholder="Tag"
                      onChange={this.privateAllHandleTagChange}
                    />
                  </Col>

                  {selectTag !== null && Object.entries(selectTag).length > 0 && selectTag.id === 3 ? (
                    <Col lg={3} md={3} sm={4} xs={12}>
                      <Select
                        isClearable
                        value={selectReason}
                        options={reasons}
                        placeholder="Reason"
                        onChange={this.privateAllHandleReasonChange}
                      />
                    </Col>) : (<></>)
                  }
                </>
              ) : (activeTabId === '2' ? (
                <Col lg={3} md={3} sm={4} xs={12}>
                  <Select
                    isClearable
                    value={selectRecruiter}
                    options={sentRecruiters}
                    placeholder="Choose recruiter"
                    onChange={this.privateSentHandleRecruiterChange}
                  />
                </Col>
              ) : (
                <Col lg={3} md={3} sm={4} xs={12}>
                  <Select
                    value={selectRecruiter}
                    options={sentRecruiters}
                    placeholder="Choose recruiter"
                    // onChange={this.handleRecruiterChange}
                  />
                </Col>
              ))

              }

            </>
          ) : null}
        </Row>
        <Row>
          <Col style={activeTabId === "1" ? {marginTop: 4} : null}>
            {role !== 4 ? (
              <Tabs tabs={tabs}
                    onClick={this.toggleIsActive}
                    activeTabToggle={this.activeTabToggle}
                    activeTabId={activeTabId}>
                <TabPane tabId="1">
                  <Localization
                    locales={localesAllCandidates}
                    onSort={this.filterAndSortCandidates}
                  >
                    {loading ? (
                      <div className="animated pt-3 text-center">
                        <Spinner
                          color="info"
                          style={{
                            position: "absolute",
                            top: "55%",
                            left: "50%",
                            zIndex: "999"
                          }}
                        />
                      </div>
                    ) : <></>}

                    {allCandidates.length > 0 && (
                      <AllCandidatesTable style={divStyle}
                                          userRole={role}
                                          candidates={allCandidates}
                                          headerColumns={localesAllCandidates}
                                          totalItems={allCandidatesCount}
                                          pageSize={allPerPage}
                                          totalPages={allTotalPages}
                                          currentPage={currentAllPage}
                                          onChangePage={this.onChangeAllCandidatesPage}
                                          loading={loading}
                      />
                    )}
                  </Localization>
                </TabPane>
                <TabPane tabId="2">
                  <Localization
                    locales={localesSentCandidates}
                    onSort={this.filterAndSortCandidates}
                  >

                    {loadingSent ? (
                      <div className="animated pt-3 text-center">
                        <Spinner
                          color="info"
                          style={{
                            position: "absolute",
                            top: "55%",
                            left: "50%",
                            zIndex: "999"
                          }}
                        />
                      </div>
                    ) : <></>}

                    {sentCandidates.length > 0 && (
                      <SentCandidatesTable
                        userRole={role}
                        candidates={sentCandidates}
                        statuses={sentStatuses}
                        headerColumns={localesSentCandidates}
                        totalItems={sentCandidatesCount}
                        pageSize={sentPerPage}
                        totalPages={sentTotalPages}
                        currentPage={currentSentPage}
                        onChangePage={this.onChangeSentCandidatesPage}
                        loading={loadingSent}
                      />
                    )}
                  </Localization>
                </TabPane>
                <TabPane tabId="3">
                  <Localization
                    locales={localesSentCandidates}
                    onSort={this.filterAndSortCandidates}
                  >
                    <CandidatesFromFreelancersTable
                      userRole={role}
                      candidates={candidatesFF}
                      statuses={statusesFF}
                      totalItems={candidatesCountFF}
                      pageSize={perPageFF}
                      totalPages={totalPagesFF}
                      currentPage={currentPageFF}
                      // onChangePage={this.onChangePage}
                      onSendResume={this.sendResume}
                      onRejectCandidate={this.rejectCandidate}
                    />
                  </Localization>
                </TabPane>

              </Tabs>
            ) : (
              <Localization
                locales={localesSentCandidates}
                onSort={this.filterAndSortCandidates}
              >
                {sentCandidates.length > 0 && (
                  <SentCandidatesTable
                    userRole={role}
                    candidates={sentCandidates}
                    statuses={sentStatuses}
                    headerColumns={localesSentCandidates}
                    totalItems={sentCandidatesCount}
                    pageSize={sentPerPage}
                    totalPages={sentTotalPages}
                    currentPage={currentSentPage}
                    onChangePage={this.onChangeSentCandidatesPage}
                  />
                )}
              </Localization>
            )}
          </Col>
        </Row>
      </>
    );
  }
}
