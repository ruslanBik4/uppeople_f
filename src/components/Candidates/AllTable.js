// Core
import React, {Component} from "react";
import PropTypes from "prop-types";
import {Col, Row, Table} from "reactstrap";
// Components
import CandidateTableRow from "./AllTableRow";
import CandidateExpandableTableRow from "./ExpandableAllTableRow";
import LocaleSelector from "../LocaleSelector";
import PaginationBackend from "../shared/PaginationBackend";
// HOC
import OpenClose from "../../render_prop/OpenClose";

class AllCandidatesTable extends Component {

  render() {
    const {
      userRole,
      candidates,
      pageSize,
      totalItems,
      totalPages,
      currentPage,
      onChangePage,
      onSort,
      loading
    } = this.props;

    const loadingStyle = {
      background: "var(--white)",
      pointerEvents: "none",
      opacity: 0.4
    }

    const tableStyle = {
      background: "var(--white)",
    };

    const candidatesJSX =
      candidates.length > 0 ? (
        candidates.map((candidate, idx) => (

          <OpenClose
            key={idx}
            render={(isOpen, open, close) =>
              isOpen ? (
                <>
                  <tr>
                    <CandidateTableRow
                      isOpen={isOpen}
                      close={close}
                      {...candidate}
                    />
                  </tr>
                  <tr>
                    <td colSpan="8">
                      <Table style={{background: "var(--white)"}} size="sm">
                        <thead>
                        <tr>
                          <th>Follow-Up</th>
                          <th>Recruiter</th>
                          <th>Comment</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <CandidateExpandableTableRow
                            userRole={userRole}
                            candId={candidate.id}
                            candidateStatus={candidate.status}
                          />
                        </tr>
                        </tbody>
                      </Table>
                    </td>
                  </tr>
                </>
              ) : (
                <tr key={idx}>
                  <CandidateTableRow
                    idx={idx}
                    {...candidate}
                    isOpen={isOpen}
                    open={open}
                  />
                </tr>
              )
            }
          />
        ))
      ) : (
        <tr style={{color: "var(--secondary)"}}>
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
            <LocaleSelector onSort={onSort}/>
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
                // onPageChange={this.onPageChange}
              />
            </Col>
          </Row>
        ) : null}
      </>
    );
  };
}
AllCandidatesTable.propTypes = {
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
      vacancies: PropTypes.array,
      recruiter: PropTypes.string
    })
  ),
  currentPage: PropTypes.number,
  pageSize: PropTypes.number,
  totalItems: PropTypes.number,
  totalPages: PropTypes.number,
  onChangePage: PropTypes.func,
  onSort: PropTypes.func,
  loading: PropTypes.bool
};

AllCandidatesTable.defaultProps = {
  candidates: [],
  currentPage: null,
  pageSize: null,
  totalItems: null,
  totalPages: null,
  onChangePage: () => null,
  onSort: () => null
};

export default AllCandidatesTable;
