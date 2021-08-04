import types from "./types";
import shortid from "shortid";

//--------------------------------redux-toolkit
import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("AddContact", (name, number) => {
  return {
    payload: {
      id: shortid.generate(),
      name: name,
      number: number,
    },
  };
});
const deleteContact = createAction("DeleteContact");
const changeFilter = createAction("ChangeFilter");

export default { addContact, deleteContact, changeFilter };

//----------------------------------redux

// const addContact = (name, number) => ({
//   type: types.ADD,
//   payload: {
//     id: shortid.generate(),
//     name: name,
//     number: number,
//   },
// })

// const deleteContact = (id) => ({
//   type: types.DELETE,
//   payload: id,
// })

// const changeFilter = (value) => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// })
// export default { addContact, deleteContact, changeFilter }
