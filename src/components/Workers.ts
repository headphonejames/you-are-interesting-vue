import {getWorker, listWorkers, listTimesheets} from "@/graphql/queries";
import {createTimesheet, createWorker, deleteWorker, updateWorker} from "@/graphql/mutations";
import { removeTimesheets } from "@/components/Timesheet";
import { API } from "aws-amplify";

export const getWorkers = async () => {
  const workersQuery: any = await API.graphql({
    query: listWorkers,
  });
  return workersQuery.data.listWorkers.items;
};

export const addWorker = async (workerName: string) => {
  if (!workerName) return;
  const workerData = {
    name: workerName,
  };
  const workerDBData: any = await API.graphql({
    query: createWorker,
    variables: { input: workerData },
  });

  const newWorker = workerDBData.data.createWorker;
  const timesheetData = {
    startTime: Date.now(),
    workerTimesheetsId: newWorker.id,
  };
  const timesheetDBData: any = await API.graphql({
    query: createTimesheet,
    variables: { input: timesheetData },
  });
  const newTimesheet = timesheetDBData.data.createTimesheet;

  const updatedWorkerData = {
    currentTimesheetId: newTimesheet.id,
    id: newWorker.id,
  };
  const updatedWorkerDBData = await API.graphql({
    query: updateWorker,
    variables: { input: updatedWorkerData },
  });
  return await getWorkers();
};

export const removeWorker = async (worker: any) => {
  await removeTimesheets(worker.id);

  await API.graphql({
    query: deleteWorker,
    variables: { input: { id: worker.id } },
  });
  return await getWorkers();
};
