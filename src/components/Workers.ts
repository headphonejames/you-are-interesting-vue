import {getWorker, listWorkers} from "@/graphql/queries";
import { createWorker, deleteWorker, updateWorker } from "@/graphql/mutations";
import { removeTimesheets } from "@/components/Timesheet";
import { removeConnectionLogs } from "@/components/ConnectionLog";
import { API } from "aws-amplify";

export const getWorkers = async () => {
  const workersQuery: any = await API.graphql({
    query: listWorkers,
  });
  return workersQuery.data.listWorkers.items;
};

export const modifyWorker = async (workerObj: any) => {
  if (!workerObj) return;
  await API.graphql({
    query: updateWorker,
    variables: { input: workerObj },
  });
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
