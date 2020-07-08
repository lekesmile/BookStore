import React from "react";
import MaterialTab from "./MaterialTab";

const Formbook = ({ book, deletefromDatabase }) => {
  let columns = [
    { title: "Title", field: "title" },
    { title: "Author", field: "author" },
    { title: "Serial No", field: "serialNo" },
    {
      title: "Published Date",
      type: "date",
      field: "saved",
    },
  ];
  return (
    <div className="materialData">
      <MaterialTab
        title="BookStore"
        data={book}
        columns={columns}
        deleteFromDatabase={deletefromDatabase()}
      />
    </div>
  );
};

export default Formbook;
