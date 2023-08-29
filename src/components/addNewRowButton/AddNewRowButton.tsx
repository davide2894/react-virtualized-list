import { useAppDispatch } from "@/customHooks/useAppDispatch";
import React from "react";
import { addFakeDataRow } from "@/store/features/fakeData/fakeDataSlice";
import { toast } from "react-toastify";
import { generateFakeData } from "@/data/data";
import generateFakeDataEntry from "@/data/generateFakeProduct";

function AddNewRowButton() {
  const dispatch = useAppDispatch();
  function handleAddNewRow() {
    dispatch(addFakeDataRow(generateFakeDataEntry()));
    toast.success("New row added at the top of the list");
  }

  return (
    <button style={{ background: "yellow" }} onClick={handleAddNewRow}>
      AddNewRowButton
    </button>
  );
}

export default AddNewRowButton;
