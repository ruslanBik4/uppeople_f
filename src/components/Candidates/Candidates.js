import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Col, Row, Spinner, TabPane } from 'reactstrap';
import { AppSwitch } from '@coreui/react';
// Components
import CandidatesForm from './Form';
import AllCandidatesTable from './AllTable';
import SentCandidatesTable from './SentTable';
import Tabs from '../shared/Tabs/Tabs';
import Select from '../shared/Select';
// Context Provider
import Localization from '../../providers/Localization';
import { getOptionsForSelects } from '../../utils/api';
// Instruments
import {
  filterAndSortAllCandidates,
  filterAndSortSentCandidates,
  getAllCandidates,
  getSentCandidates,
} from '../../utils/api/candidates';
import { cancelCandidateFromFreelancer, sendCandidateResume } from '../../utils/api/candidate';

const tabs = [
  {
    id: '1',
    name: 'All candidates',
  },
  {
    id: '2',
    name: 'Sent candidates',
  },
];

const localesAllCandidates = [
  'Date',
  'Platform',
  'Name',
  'Tag/Reason',
  'Seniority',
  'Vacancies',
  'Contacts',
  'Recruiter',
];

const localesSentCandidates = [
  'Date',
  'Platform',
  'Name',
  'Salary',
  'Contacts',
  'Status',
  'Companies',
  'Recruiter',
];

export default class Candidates extends Component {
  static propTypes = {
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      role: PropTypes.number.isRequired,
      companyId: PropTypes.number,
    }),
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
      loading: false,
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
      loadingSent: false,
    },
    filterAndSortCandidates: {
      search: '',
      dateFrom: '',
      dateTo: '',
      selectCompanies: [],
      selectPlatforms: [],
      selectStatuses: [],
      selectRecruiter: '',
      selectTag: [],
      selectReason: [],
      mySent: false,
    },
    filterAndSortCandidatesFF: {
      search: '',
      dateFrom: '',
      dateTo: '',
      selectCompanies: [],
      selectPlatforms: [],
      selectRecruiter: '',
    },
    dataForSendResumeForm: {},
    isActive: true,
    activeTabId: '1',
  };
  
  componentDidMount() {
    const {
      user: { role },
    } = this.props;
    
    getOptionsForSelects()
      .then(optionsForSelects => {
        const platforms = optionsForSelects.platforms;
        const seniorities = optionsForSelects.seniorities;
        const tags = optionsForSelects.tags;
        const reasons = optionsForSelects.reject_reasons;
        const reject_tag = optionsForSelects.reject_tag;
        const defaultSelectedtag = optionsForSelects.tags.filter((tag) => tag.id === 1)[0];
        const vacancies = optionsForSelects.vacancies;
        const recruiters = optionsForSelects.recruiters;
        const companies = optionsForSelects.companies;
        const statuses = optionsForSelects.candidateStatus;
        
        this.setState({
          platforms,
          seniorities,
          tags,
          reasons,
          vacancies,
          reject_tag,
          defaultSelectedtag,
          recruiters,
          companies,
          statuses,
        });
      });
    
    const {
      allCandidatesData: { currentAllPage },
      sentCandidatesData: { currentSentPage },
    } = this.state;
    
    role !== 4 && role !== 5
      ? this.requestForCandidatesForStaff(currentAllPage, currentSentPage)
      : this.requestForCandidates(currentAllPage, currentSentPage);
  }
  
  requestForCandidatesForStaff = (currentAllPage, currentSentPage) => {
    this.getAll(currentAllPage);
    this.getSend(currentSentPage);
  };
  
  requestForCandidates = (currentAllPage, currentSentPage) => {
    this.getAll(currentAllPage);
    this.getSend(currentSentPage);
  };
  
  getSend(currentSentPage) {
    getSentCandidates(currentSentPage)
      .then(data => {
        if (data === 401) {
          this.props.history.push('/login/');
        } else {
          const sentCandidatesData = {
            sentCandidates: data.candidates,
            sentCandidatesCount: data.Count,
            sentTotalPages: data.Page,
            sentPerPage: data.perPage,
            currentSentPage: data.currentPage,
          };
          this.setState({
            sentCandidatesData: { ...this.state.sentCandidatesData, ...sentCandidatesData },
          });
        }
      });
  }
  
  getAll(currentAllPage) {
    getAllCandidates(currentAllPage)
      .then(data => {
        if (data === 401) {
          this.props.history.push('/login/');
        } else {
          const allCandidatesData = {
            allCandidates: data.candidates,
            allCandidatesCount: data.Count,
            allTotalPages: data.TotalPage,
            allPerPage: data.perPage,
            currentAllPage: data.currentPage,
          };
          this.setState({
            allCandidatesData: { ...this.state.allCandidatesData, ...allCandidatesData },
          });
        }
      });
  }
  
  privateAllHandleRecruiterChange = value => {
    const { filterAndSortCandidates } = this.state;
    
    this.setState({
        filterAndSortCandidates: {
          ...filterAndSortCandidates,
          selectRecruiter: value,
        },
      },
      () => {
        const { filterAndSortCandidates } = this.state;
        this.privateFilterAndSortAllCandidates(filterAndSortCandidates);
      },
    );
  };
  
  privateAllHandleTagChange = value => {
    const { filterAndSortCandidates } = this.state;
    this.setState(
      {
        filterAndSortCandidates: {
          ...filterAndSortCandidates,
          selectTag: value,
        },
      },
      () => {
        const { filterAndSortCandidates } = this.state;
        this.privateFilterAndSortAllCandidates(filterAndSortCandidates);
      },
    );
  };
  
  privateAllHandleReasonChange = value => {
    const { filterAndSortCandidates } = this.state;
    this.setState(
      {
        filterAndSortCandidates: {
          ...filterAndSortCandidates,
          selectReason: value,
        },
      },
      () => {
        const { filterAndSortCandidates } = this.state;
        this.privateFilterAndSortAllCandidates(filterAndSortCandidates);
      },
    );
  };
  
  privateSentHandleRecruiterChange = value => {
    const { filterAndSortCandidates } = this.state;
    this.setState(
      {
        filterAndSortCandidates: {
          ...filterAndSortCandidates,
          selectRecruiter: value,
        },
      },
      () => {
        const { filterAndSortCandidates } = this.state;
        this.privateFilterAndSortSentCandidates(filterAndSortCandidates);
      },
    );
  };
  
  filterAndSortCandidates = filterAndSort => {
    const { filterAndSortCandidates } = this.state;
    this.setState(
      {
        filterAndSortCandidates: {
          ...filterAndSortCandidates,
          ...filterAndSort,
        },
      },
      () => {
        const {
          allCandidatesData: { currentAllPage },
          sentCandidatesData: { currentSentPage },
          filterAndSortCandidates,
        } = this.state;
        this.filterCand(currentAllPage, filterAndSortCandidates);
        this.filterSent(currentSentPage, filterAndSortCandidates);
      },
    );
  };
  
  filterSent(currentSentPage, filterAndSortCandidates) {
    const filter = this.clearEmptyFilter(filterAndSortCandidates);
    
    filterAndSortSentCandidates(currentSentPage, filter)
      .then(data => {
        if (data === 401) {
          this.props.history.push('/login/');
        } else {
          const sentCandidatesData = {
            sentCandidates: data.candidates,
            sentCandidatesCount: data.Count,
            sentTotalPages: data.Page,
            sentPerPage: data.perPage,
            currentSentPage: data.currentPage,
            sentPlatforms: data.platforms,
            sentCompanies: data.company,
            sentStatuses: data.statuses,
            sentRecruiters: data.recruiter,
            loadingSent: false,
          };
          
          this.setState({
            sentCandidatesData: {
              ...this.state.sentCandidatesData,
              ...sentCandidatesData,
            },
          });
        }
      });
  }
  
  filterCand(currentAllPage, filterAndSortCandidates) {
    this.clearEmptyFilter(filterAndSortCandidates);
    
    filterAndSortAllCandidates(currentAllPage, filterAndSortCandidates)
      .then(data => {
        if (data === 401) {
          this.props.history.push('/login/');
        } else {
          const allCandidatesData = {
            allCandidates: data.candidates,
            allCandidatesCount: data.Count,
            allTotalPages: data.Page,
            allPerPage: data.perPage,
            currentAllPage: data.currentPage,
            allPlatforms: data.platforms,
            allStatuses: data.statuses,
            allRecruiters: data.recruiter,
            allSeniority: data.seniority,
            loading: false,
          };
          this.setState({
            allCandidatesData: {
              ...this.state.allCandidatesData,
              ...allCandidatesData,
            },
          });
        }
      });
  };
  
  clearEmptyFilter(filters) {
    Object.entries(filters).forEach(function(elem) {
      if (elem[1] === '') {
        delete filters[elem[0]];
      }
    });
    
    if (filters.selectCompanies && filters.selectCompanies.length === 0) {
      delete filters.selectCompanies;
    }
    
    if (filters.selectPlatforms && filters.selectPlatforms.length === 0) {
      delete filters.selectPlatforms;
    }
    
    if (filters.selectStatuses && filters.selectStatuses.length === 0) {
      delete filters.selectStatuses;
    }
    
    if (filters.selectRecruiter) {
      if (filters.selectRecruiter.length > 0) {
        Object.defineProperty(filters, 'id_recruiter', { value: filters.selectRecruiter.id, configurable: true });
      }
    }
    
    if (filters.selectSeniority && filters.selectSeniority.length === 0) {
      delete filters.selectSeniority;
    }
    
    if (filters.selectTag && filters.selectTag.length === 0) {
      delete filters.selectTag;
    }
    
    if (filters.selectReason && filters.selectReason.length === 0) {
      delete filters.selectReason;
    }
    
    return filters;
  };
  
  privateFilterAndSortAllCandidates = filterAndSort => {
    const { filterAndSortCandidates } = this.state;
    this.setState(
      {
        filterAndSortCandidates: {
          ...filterAndSortCandidates,
          ...filterAndSort,
        },
      },
      () => {
        const {
          allCandidatesData: { currentAllPage },
          filterAndSortCandidates,
        } = this.state;
        this.filterCand(currentAllPage, filterAndSortCandidates);
      },
    );
  };
  
  privateFilterAndSortSentCandidates = filterAndSort => {
    const { filterAndSortCandidates } = this.state;
    this.setState(
      {
        filterAndSortCandidates: {
          ...filterAndSortCandidates,
          ...filterAndSort,
        },
      },
      () => {
        const {
          sentCandidatesData: { currentSentPage },
          filterAndSortCandidates,
        } = this.state;
        this.filterSent(currentSentPage, filterAndSortCandidates);
      },
    );
  };
  
  onChangeAllCandidatesPage = (currentAllPage) => {
    this.setState(({ allCandidatesData }) => ({
      allCandidatesData: {
        ...allCandidatesData,
        loading: true,
      },
    }));
    const { filterAndSortCandidates } = this.state;
    this.filterCand(currentAllPage, filterAndSortCandidates);
  };
  
  onChangeSentCandidatesPage = (currentSentPage) => {
    const { filterAndSortCandidates } = this.state;
    this.setState(({ sentCandidatesData }) => ({
      sentCandidatesData: {
        ...sentCandidatesData,
        loadingSent: true,
      },
    }));
    this.filterSent(currentSentPage, filterAndSortCandidates);
  };
  
  toggleMySent = () => {
    this.setState(
      state => ({
        filterAndSortCandidates: {
          ...state.filterAndSortCandidates,
          mySent: !state.filterAndSortCandidates.mySent,
        },
      }),
      () => {
        const {
          allCandidatesData: { currentAllPage },
          sentCandidatesData: { currentSentPage },
          filterAndSortCandidates,
        } = this.state;
        this.filterCand(currentAllPage, filterAndSortCandidates);
        this.filterSent(currentSentPage, filterAndSortCandidates);
      },
    );
  };
  
  toggleIsActive = () => {
    this.setState(
      state => ({
        isActive: !state.isActive,
      }),
    );
  };
  
  activeTabToggle = (tab) => {
    this.setState({ activeTabId: tab });
  };
  
  sendResume = (id, content) => {
    sendCandidateResume(id, content);
    this.setState(prevState => ({
      candidatesFromFreelancersData: {
        candidatesFF: prevState.candidatesFromFreelancersData.candidatesFF.filter(
          candidate => candidate.id !== id,
        ),
      },
    }));
  };
  

  render() {
    const {
      platforms,
      seniorities,
      recruiters,
      tags,
      reasons,
      companies,
      statuses,
      allCandidatesData: {
        allCandidates,
        allCandidatesCount,
        allTotalPages,
        allPerPage,
        currentAllPage,
        loading,
      },
      sentCandidatesData: {
        sentCandidates,
        sentCandidatesCount,
        sentTotalPages,
        sentPerPage,
        currentSentPage,
        sentStatuses,
        loadingSent,
      },
      filterAndSortCandidates: { selectRecruiter, mySent, selectTag, selectReason },
      activeTabId,
    } = this.state;
    console.log(this.state)
    
    const {
      user: { role },
    } = this.props;
    
    const divStyle = {
      color: 'yellow',
    };
    
    return (
      <>
        <Row>
          <Col
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              maxWidth: 200,
              marginBottom: '0.5rem',
            }}>
            <h1 style={{ marginBottom: 0, fontSize: 24 }}>Candidates</h1>
            <span
              style={{
                alignSelf: 'flex-end',
                color: 'var(--gray)',
              }}>
              {activeTabId === '1' ? allCandidatesCount : null}
              {activeTabId === '2' ? sentCandidatesCount : null}
            </span>
          </Col>
        </Row>
        <Row>
          <Col xl={12}>
            <CandidatesForm
              userRole={role}
              platforms={platforms}
              companies={companies}
              statuses={statuses}
              seniority={seniorities}
              activeTabId={activeTabId}
              onAllFilter={this.privateFilterAndSortAllCandidates}
              onSentFilter={this.privateFilterAndSortSentCandidates}
            />
          </Col>
        </Row>
        <Row style={{ marginBottom: '1rem' }}>
          {role !== 4 ? (
            <Col lg={activeTabId !== '1' ? 4 : 3} md={6} sm={4} xs={6}>
              <Link
                to='/new-candidate'
                className='btn btn-success pull-left'
                style={{ marginRight: '0.4rem' }}>
                <i className='fa fa-plus-circle' /> Create
              </Link>
              <Button color='light' onClick={() => null}>
                Export
              </Button>
            </Col>
          ) : (
            <Col>
              <Link to='/new-candidate' className='btn btn-success pull-left'>
                <i className='fa fa-plus-circle' /> Create
              </Link>
            </Col>
          )}
          
          {role !== 4 ? (
              <>
                {activeTabId !== '1' ? (
                    <Col lg={3} md={3} sm={4} xs={6}>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'flex-end',
                          alignItems: 'center',
                          margin: '0 0.5rem',
                          padding: '0.5rem',
                          color: 'var(--gray)',
                        }}
                        className='my-events'>
                        <AppSwitch
                          className='mx-1'
                          color='primary'
                          checked={mySent}
                          onChange={this.toggleMySent}
                        /> My Sent
                      </div>
                    </Col>
                  )
                  :
                  null
                }
                
                {activeTabId === '1' ?
                  <>
                    <Col lg={3} md={3} sm={4} xs={12}>
                      <Select
                        isClearable
                        value={selectRecruiter}
                        options={recruiters}
                        placeholder='Choose recruiter'
                        onChange={this.privateAllHandleRecruiterChange}
                      />
                    </Col>
                    
                    <Col lg={3} md={3} sm={4} xs={12}>
                      <Select
                        isClearable
                        value={selectTag}
                        options={tags}
                        placeholder='Tag'
                        onChange={this.privateAllHandleTagChange}
                      />
                    </Col>
                    
                    {selectTag && selectTag.id && selectTag.id === 3 ?
                      <Col lg={3} md={3} sm={4} xs={12}>
                        <Select
                          isClearable
                          value={selectReason}
                          options={reasons}
                          placeholder='Reason'
                          onChange={this.privateAllHandleReasonChange}
                        />
                      </Col>
                      :
                      <></>
                    }
                  </>
                  :
                  (activeTabId === '2' ?
                      <Col lg={3} md={3} sm={4} xs={12}>
                        <Select
                          isClearable
                          value={selectRecruiter}
                          options={recruiters}
                          placeholder='Choose recruiter'
                          onChange={this.privateSentHandleRecruiterChange}
                        />
                      </Col>
                      :
                      <Col lg={3} md={3} sm={4} xs={12}>
                        <Select
                          value={selectRecruiter}
                          options={recruiters}
                          placeholder='Choose recruiter'
                        />
                      </Col>
                  )
                }
              </>
            )
            :
            null}
        </Row>
        <Row>
          <Col style={activeTabId === '1' ? { marginTop: 4 } : null}>
            {role !== 4 ?
              <Tabs
                tabs={tabs}
                onClick={this.toggleIsActive}
                activeTabToggle={this.activeTabToggle}
                activeTabId={activeTabId}>
                <TabPane tabId='1'>
                  <Localization
                    locales={localesAllCandidates}
                    onSort={this.filterAndSortCandidates}>
                    {loading ?
                      <div className='animated pt-3 text-center'>
                        <Spinner
                          color='info'
                          style={{
                            position: 'absolute',
                            top: '55%',
                            left: '50%',
                            zIndex: '999',
                          }}
                        />
                      </div>
                      :
                      <></>
                    }
                    
                    {allCandidates.length > 0 && (
                      <AllCandidatesTable
                        style={divStyle}
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
                
                <TabPane tabId='2'>
                  <Localization
                    locales={localesSentCandidates}
                    onSort={this.filterAndSortCandidates}>
                    {loadingSent ?
                      <div className='animated pt-3 text-center'>
                        <Spinner
                          color='info'
                          style={{
                            position: 'absolute',
                            top: '55%',
                            left: '50%',
                            zIndex: '999',
                          }}
                        />
                      </div>
                      :
                      <></>
                    }
                    {sentCandidates.length > 0 && (
                      <SentCandidatesTable
                        userRole={role}
                        candidates={sentCandidates}
                        statuses={statuses}
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
              </Tabs>
              :
              <Localization
                locales={localesSentCandidates}
                onSort={this.filterAndSortCandidates}>
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
            }
          </Col>
        </Row>
      </>
    );
  }
};
