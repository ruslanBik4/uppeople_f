// Core
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
// Components
import VacanciesFormContainer from "../Freelancer/containers/VacanciesFormContainer";
import Select from "../shared/Select";
import ModalToDelete from "../shared/ModalToDelete";
// HOC
import withModalForLetter from "../hoc/ModalForLetter/withModalForLetter";
// Context
import { ModalConsumer } from "../../providers/ModalProvider";

const WithModalVacanciesFormContainer = withModalForLetter(
  VacanciesFormContainer
);

 export const roles = [
    {
        id: 1,
        name_en: "Admin",
        name: "Админ",
        role: "ROLE_ADMIN"
    },
    {
        id: 2,
        name_en: "Recruiter",
        name: "Рекрутер",
        role: "ROLE_RECRUITER"
    },
    {
        id: 3,
        name_en: "Manager",
        name: "Менеджер",
        role: "ROLE_MANAGER"
    },
    {
        id: 4,
        name_en: "Freelancer",
        name: "Фрилансер",
        role: "ROLE_FREELANCER"
    },
    {
        id: 5,
        name_en: "Partner",
        name: "Партнер",
        role: "ROLE_PARTNER"
    },
    {
        id: 6,
        name_en: "Searcher",
        name: "Сьорчер",
        role: "ROLE_SEARCHER"
    }
]
const UsersTableRow = ({
  idx,
  id,
  name,
  email,
  updateCount,
  createCount,
  sendCount,
  phone,
  last_login,
  role_id,
  tabId,
  usersGroup,
  recruiterId,
  selectRecruiter,
  onChangeRecruiter,
  onDeleteUser
}) => {
  const index = idx + 1;
  const userLink = `/users/${id}`;
  const roleName = roles.find(role => role.id === role_id);

    return (
    <tr key={id.toString()}>
      <th scope="row">
        <Link to={userLink}>{index}({id})</Link>
      </th>
      <td>
        <Link to={userLink}>{name}</Link>
      </td>
      <td>{email}</td>
      {
      tabId === "1" ?
        <td>{updateCount}/{createCount}/{sendCount}</td>
        : null
      }
      <td>{phone}</td>
      <td>{roleName.name_en}</td>
      <td>{last_login}</td>
      {usersGroup === "freelancers" && selectRecruiter !== undefined ? (
        <td>
          <Select
            defaultValue={selectRecruiter.find(
              recruiter => recruiter.id === recruiterId
            )}
            options={selectRecruiter}
            onChange={value => {
              const content = {
                id,
                value
              };
              onChangeRecruiter(content);
            }}
          />
        </td>
      ) : (
        usersGroup === "freelancers" && (
          <td>
            <Select
              options={selectRecruiter}
              onChange={value => {
                const content = {
                  id,
                  value
                };
                onChangeRecruiter(content);
              }}
            />
          </td>
        )
      )}
      <td>
        {role_id === 4 && (
          <ModalConsumer>
            {({ showModal }) => (
              <Button
                title="add vacancy"
                style={{
                  marginRight: "0.25rem",
                  padding: "0.2rem",
                  color: "var(--dark)",
                  backgroundColor: "transparent",
                  borderColor: "transparent"
                }}
                onClick={() =>
                  showModal(WithModalVacanciesFormContainer, {
                    isOpenModal: true,
                    title: "Add vacancy",
                    id: id
                  })
                }
              >
                <i className="cui-user-follow icons font-lg" />
              </Button>
            )}
          </ModalConsumer>
        )}
        <ModalConsumer>
          {({ showModal, hideModal }) => (
            <Button
              title="delete"
              style={{
                margin: 0,
                padding: "0.2rem",
                paddingLeft: "0.5rem",
                backgroundColor: "transparent",
                borderColor: "transparent"
              }}
              onClick={() =>
                showModal(ModalToDelete, {
                  isOpenModal: true,
                  title: "Delete user",
                  name: name,
                  onDelete: () => {
                    onDeleteUser();
                    hideModal();
                  }
                })
              }
            >
              <i className="cui-trash icons font-lg" />
            </Button>
          )}
        </ModalConsumer>
      </td>
    </tr>
  );
};

UsersTableRow.propTypes = {
  idx: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  phone: PropTypes.string,
  role: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name_en: PropTypes.string.isRequired
  }).isRequired,
  onDeleteUser: PropTypes.func.isRequired,
  onChangeRecruiter: PropTypes.func.isRequired
};

UsersTableRow.defaultProps = {
  email: "",
  phone: ""
};

export default UsersTableRow;
