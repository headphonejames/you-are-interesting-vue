import * as queries from "@/graphql/queries";
import * as mutations from "@/graphql/mutations";

import { API } from "aws-amplify";

export const getConnectionLogs = async () => {
  const connectionLogsQuery: any = await API.graphql({
    query: queries.listConnectionLogs,
  });
  return connectionLogsQuery.data.listConnectionLogs.items;
};

export const createConnectionLogForWorker = async (worker: any) => {
  const connectionLogData = {
    timeContact: Date.now(),
    workerConnectionLogsId: worker.id,
  };
  const connectionLogDBData: any = await API.graphql({
    query: mutations.createConnectionLog,
    variables: { input: connectionLogData },
  });
  const newConnectionLog = connectionLogDBData.data.createConnectionLog;

  // update the worker
  const updatedWorkerData = {
    currentConnectionLogId: newConnectionLog.id,
    id: worker.id,
  };
  await API.graphql({
    query: mutations.updateWorker,
    variables: { input: updatedWorkerData },
  });
  return newConnectionLog;
};

export const updateConnectionLogWithPrompt = async (connectionLog: any) => {
  const newConnectionLogData = {
    id: connectionLog.id,
    prompt: connectionLog.prompt,
    timePrompt: Date.now(),
  };
  return await updateConnectionLogForWorker(newConnectionLogData)
};

export const completeConnectionLog = async (connectionLog: any) => {
  const connectionLogData = {
    timeFinished: Date.now(),
    id: connectionLog.id,
  };
  return await updateConnectionLogForWorker(connectionLogData)
};

export const updateConnectionLogForWorker = async (connectionLogData: any) => {
  const connectionLogDBData: any = await API.graphql({
    query: mutations.updateConnectionLog,
    variables: { input: connectionLogData },
  });
  return connectionLogDBData.data.updateConnectionLog;
};

export const removeConnectionLog = async (connectionLog: any) => {
  const connectionLogData = {
    id: connectionLog.id,
  };
  await API.graphql({
    query: mutations.deleteConnectionLog,
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
    query: queries.listConnectionLogs,
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