import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import ReactTooltip from "react-tooltip";
import "./User.css";

const columns = [
  {
    name: "Name",
    cell: (row) => (
      <img
        style={{ borderRadius: "50%" }}
        height="80px"
        width="80px"
        alt={row.first_name}
        src={row.avatar}
      />
    ),
    width: "100px",
  },
  {
    cell: (row) => (
      <div>
        <div style={{ fontWeight: 700 }}>
          {row.first_name} {row.last_name}
        </div>
        {row.email}
      </div>
    ),
    width: "200px",
  },
  {
    cell: (row) => (
      <div>
        <button data-tip data-for={`row-${row.id}`}>
          Hover
        </button>
      </div>
    ),
  },
  {
    cell: (row) => (
      <ReactTooltip
        id={`row-${row.id}`}
        place="right"
        effect="solid"
        type="light"
      >
        <div className="tooltip">
          <img
            style={{ borderRadius: "50%" }}
            height="80px"
            width="80px"
            alt={row.first_name}
            src={row.avatar}
          />
          <div>
            <div style={{ fontWeight: 700 }}>
              {row.first_name} {row.last_name}
            </div>
            {row.email}
          </div>
          <h3>Your Plan: Standard</h3>
          <button>Active User</button>
        </div>
        <h4>Plan Uses</h4>
        <div className="plan">
          <div className="left">
            <h2>2,450</h2>
            <p>clicks reviewed</p>
          </div>
          <span className="vl"></span>
          <div className="right">
            <h2>5000</h2>
            <p>Monthly clicks</p>
          </div>
        </div>
      </ReactTooltip>
    ),
  },
];

export default function Users() {
  const [users, setUsers] = useState({});
  const [page, setPage] = useState(setGetParams("get") || 1);
  const countPerPage = 6;

  const getUser = async () => {
    axios
      .get(`https://reqres.in/api/users?page=${page}&per_page=${countPerPage}`)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        setUsers({});
      });
  };

  function setGetParams(type) {
    var queryParams = new URLSearchParams(window.location.search);
    if (type === "get") {
      return queryParams.get("page");
    }

    queryParams.set("page", page);
    window.history.replaceState(null, null, "?" + queryParams.toString());
  }

  useEffect(() => {
    getUser();
    setGetParams();
  }, [page]);

  return (
    <div className="App">
      <DataTable
        columns={columns}
        data={users.data}
        pagination
        paginationServer
        paginationTotalRows={users.total}
        paginationPerPage={countPerPage}
        paginationIconFirstPage
        paginationIconLastPage
        paginationComponentOptions={{
          noRowsPerPage: true,
        }}
        onChangePage={(page) => setPage(page)}
      />
    </div>
  );
}
