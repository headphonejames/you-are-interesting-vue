import { listWorkers } from "@/graphql/queries";
import { createWorker, deleteWorker } from "@/graphql/mutations";

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
    logIndex: 0,
    timeSheetIndex: 0,
  };
  await API.graphql({
    query: createWorker,
    variables: { input: workerData },
  });
  return await getWorkers();
};

export const removeWorker = async (worker: any) => {
  const workerData = {
    id: worker.id,
  };
  await API.graphql({
    query: deleteWorker,
    variables: { input: workerData },
  });
  return await getWorkers();
};
