import {listConnectionLogs, listTimesheets} from "@/graphql/queries";
import {
  updateWorker,
  createConnectionLog,
  deleteConnectionLog,
} from "@/graphql/mutations";

import { API } from "aws-amplify";
import {getTimesheets} from "@/components/Timesheet";

export const getConnectionLogs = async () => {
  const connectionLogsQuery: any = await API.graphql({
    query: listConnectionLogs,
  });
  return connectionLogsQuery.data.listConnectionLogs.items;
};

export const createConnectionLogForWorker = async (worker: any) => {

  const connectionLogData = {
    timeContact: Date.now(),
    workerConnectionLogsId: worker.id,
  };
  const connectionLogDBData: any = await API.graphql({
    query: createConnectionLog,
    variables: { input: connectionLogData },
  });
  const newConnectionLog = connectionLogDBData.data.createConnectionLog;

  const updatedWorkerData = {
    currentConnectionLogId: newConnectionLog.id,
    id: worker.id,
  };
  const updatedWorkerDBData = await API.graphql({
    query: updateWorker,
    variables: { input: updatedWorkerData },
  });
  return newConnectionLog;
};

export const updateConnectionLogForWorker = async (worker: any, connectionLogData: any) => {
  const connectionLogDBData: any = await API.graphql({
    query: createConnectionLog,
    variables: { input: connectionLogData },
  });
  const newConnectionLog = connectionLogDBData.data.createConnectionLog;

  const updatedWorkerData = {
    currentConnectionLogId: newConnectionLog.id,
    id: worker.id,
  };
  const updatedWorkerDBData = await API.graphql({
    query: updateWorker,
    variables: { input: updatedWorkerData },
  });
  return newConnectionLog;
};


export const addConnectionLog = async (worker: any) => {
  if (!worker) return;
  const connectionLogData = {
    startTime: Date.now(),
    workerConnectionLogsId: worker.id,
  };
  const connectionLogDBData = await API.graphql({
    query: createConnectionLog,
    variables: { input: connectionLogData },
  });
  return await getConnectionLogs();
};

export const removeConnectionLog = async (connectionLog: any) => {
  const connectionLogData = {
    id: connectionLog.id,
  };
  await API.graphql({
    query: deleteConnectionLog,
    variables: { input: connectionLogData },
  });
  return await getConnectionLogs();
};

export const removeConnectionLogs = async (connectionLog: any) => {
  // delete all connectionLogs
  const filter = {
    connectionLogConnectionLogsId: {
      eq: connectionLog.id,
    },
  };
  const connectionLogsDB: any = await API.graphql({
    query: listConnectionLogs,
    variables: {
      filter: filter,
    },
  });

  const connectionLogs = connectionLogsDB.data.listConnectionLogs.items;

  for (const connectionLog of connectionLogs) {
    await removeConnectionLog(connectionLog.id);
  }
  return await getConnectionLogs();
};