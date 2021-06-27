// Core
import React from "react";
import PropTypes from "prop-types";
import { Col, Row, Table } from "reactstrap";
// Components
import CandidateTableRow from "./SentTableRow";
import CandidateExpandableTableRow from "./ExpandableSentTableRow";
import LocaleSelector from "../LocaleSelector";
import PaginationBackend from "../shared/PaginationBackend";
// HOC
import OpenClose from "../../render_prop/OpenClose";

const loadingStyle = {
  background: "var(--white)",
  pointerEvents: "none",
  
}

const tableStyle = {
  background: "var(--white)",
};

const SentCandidatesTable = ({
  userRole,
  candidates,
  statuses,
  selectedVacancies,
  pageSize,
  totalItems,
  totalPages,
  currentPage,
  onChangePage,
  onSort,
  loading,
  options,
}) => {

  console.log(candidates);
  console.log(selectedVacancies);
  console.log(options);
  // console.log(this.props);
  

  const candidatesJSX =
    candidates.length > 0 ? (
      candidates.map((candidate, idx) => (
        <OpenClose
          key={candidate.id}
          render={(isOpen, open, close) =>
            isOpen ? (
              <>
                <tr key={candidate.id}>
                  <CandidateTableRow
                    idx={idx}
                    isOpen={isOpen}
                    close={close}
                    {...candidate}
                    options={options}
                  />
                </tr>
                {candidate.statuses.length > 0 ?
                    <tr key={candidate.id}>
                      <td colSpan="8">
                        <Table style={{ background: "var(--white)" }} size="sm">
                          <thead>
                            <tr>
                              <th>Date</th>
                              <th>Company</th>
                              <th>Status</th>
                              <th>Comment</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <CandidateExpandableTableRow
                                userRole={userRole}
                                candId={candidate.id}
                                candidateStatus={candidate.statuses[0].comments}
                                statuses={statuses}
                                options={options}
                              />
                            </tr>
                          </tbody>
                        </Table>
                      </td>
                    </tr>
                    : null
                  }
              </>
            ) : (
              <tr key={candidate.id}>
                <CandidateTableRow
                  idx={idx}
                  {...candidate}
                  isOpen={isOpen}
                  open={open}
                  options={options}
                />
              </tr>
            )
          }
        />
      ))
    ) : (
      <tr style={{ color: "var(--secondary)" }}>
        <td colSpan={9} align="center">
          Nothing found{" "}
          <span role="img" aria-label="confused face">
            😕
          </span>
        </td>
      </tr>
    );

  return (
    <>
      <Table style={loading ? loadingStyle : tableStyle} responsive>
        <thead>
          <tr>
            <th>+/-</th>
            <LocaleSelector onSort={onSort} />
          </tr>
        </thead>
        <tbody>{candidatesJSX}</tbody>
      </Table>
      {candidates.length > 0 ? (
        <Row>
          <Col>
            <PaginationBackend
              items={candidates}
              totalItems={totalItems}
              pageSize={pageSize}
              totalPages={totalPages}
              initialPage={currentPage}
              onChangePage={onChangePage}
              loading={loading}
              options={options}
            />
          </Col>
        </Row>
      ) : null}
    </>
  );
};

SentCandidatesTable.propTypes = {
  userRole: PropTypes.number.isRequired,
  candidates: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      date: PropTypes.string,
      name: PropTypes.string,
      email: PropTypes.string,
      platform: PropTypes.string,
      salary: PropTypes.string,
      companies: PropTypes.string,
      recruiter: PropTypes.string,
      status: PropTypes.string
    })
  ),
  statuses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  currentPage: PropTypes.number,
  pageSize: PropTypes.number,
  totalItems: PropTypes.number,
  totalPages: PropTypes.number,
  onChangePage: PropTypes.func,
  onSort: PropTypes.func,
  loading: PropTypes.bool,
  options: PropTypes.array,
};

SentCandidatesTable.defaultProps = {
  candidates: [],
  currentPage: null,
  pageSize: null,
  totalItems: null,
  totalPages: null,
  onChangePage: () => null,
  onSort: () => null,
  options: [],
};

export default SentCandidatesTable;
