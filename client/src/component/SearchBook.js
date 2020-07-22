import React from "react";
import Form from "@material-ui/core/FormControl";
import { Input } from "@material-ui/core";

const SearchBook = ({ search, chandleChange }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        margin: " 20px auto",
        justifyContent: "space-between",
      }}
    >
      <div>
        <h3>Books Avaliable</h3>
      </div>
      <div style={{ marginTop: 10 }}>
        <Form>
          <Input
            type="type"
            placeholder="Search ....by author"
            value={search}
            onChange={chandleChange}
          >
            {" "}
          </Input>
        </Form>
      </div>
    </div>
  );
};

export default SearchBook;
