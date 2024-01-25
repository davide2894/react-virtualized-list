import { useAppDispatch } from "@customHooks/useAppDispatch";
import { generateFakeDataEntry } from "@data";
import { addFakeDataRow } from "@fakeDataSlice";
import React from "react";
import { toast } from "react-toastify";
import styles from "./AddNewRowButton.module.css";

function AddNewRowButton() {
  const dispatch = useAppDispatch();

  function handleAddNewRow() {
    dispatch(addFakeDataRow(generateFakeDataEntry()));
    toast.success("New row added at the top of the list");
  }

  return (
    <button
      data-testid="addNewRowButtonTestAttribute"
      className={styles.addNewRowButton}
      onClick={handleAddNewRow}>
      Add new item
    </button>
  );
}

export default AddNewRowButton;
