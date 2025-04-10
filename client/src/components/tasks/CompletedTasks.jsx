import React from "react";
import CompletedTasksList from "./CompletedTasksList";
import EarningsTable from "../earnings/EarningsTable";

const CompletedTasks = () => {

  return (
    <div className="mb-6">
      <div className="px-6 py-6 border-b border-[#3F72AF] bg-[#112D4E] sm:flex sm:items-center sm:justify-between sm:px-8 lg:px-10 shadow-lg">
        <div className="flex-1 min-w-0">
          <h1 className="text-xl font-semibold text-white sm:truncate">Completed Tasks</h1>
        </div>
      </div>
        <CompletedTasksList />
        {/* <EarningsTable /> */}
    </div>
  );
};

export default CompletedTasks;
