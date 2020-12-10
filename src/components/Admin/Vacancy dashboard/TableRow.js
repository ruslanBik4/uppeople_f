import React from "react";
import { Link } from "react-router-dom";

const TableRow = ({
  vacancyId,
  vacancy,
  quantity,
  recruiterName,
  conpanyName,
  recruiters,
  companies,
}) => {
  let companyId;
  companies.find((company) => {
    if (company.name === conpanyName) companyId = company.id;
  });

  let recruiterId;
  recruiters.find((recruiter) => {
    if (recruiter.name === recruiterName) recruiterId = recruiter.id;
  });

  return (
    <tr>
      <td className='text-center'>
        <Link to={`/vacancies/${vacancyId}`} target='_blank'>
          {" "}
          {vacancy}
        </Link>
      </td>
      <td className='text-center'>
        <Link to={`/companies/${companyId}`} target='_blank'>
          {" "}
          {conpanyName}
        </Link>
      </td>
      <td className='text-center'>
        <Link to={`/users/${recruiterId}`} target='_blank'>
          {recruiterName}
        </Link>
      </td>
      <td className='text-center'>
        <div>{quantity}</div>
      </td>
    </tr>
  );
};
export default TableRow;
