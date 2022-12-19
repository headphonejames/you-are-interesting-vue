import { listTimesheets } from "@/graphql/queries";
import { updateWorker, createTimesheet, deleteTimesheet } from "@/graphql/mutations";

import { API } from "aws-amplify";

export const getTimesheets = async () => {
  const timesheetsQuery: any = await API.graphql({
    query: listTimesheets,
  });
  return timesheetsQuery.data.listTimesheets.items;
};

export const createTimesheetForWorker = async (workerId: string) => {
  const timesheetData = {
    startTime: Date.now(),
    workerTimesheetsId: workerId,
  };
  const timesheetDBData: any = await API.graphql({
    query: createTimesheet,
    variables: { input: timesheetData },
  });
  const newTimesheet = timesheetDBData.data.createTimesheet;

  const updatedWorkerData = {
    currentTimesheetId: newTimesheet.id,
    id: workerId,
  };
  const updatedWorkerDBData = await API.graphql({
    query: updateWorker,
    variables: { input: updatedWorkerData },
  });
}

export const removeTimesheets = async (timesheetId: number) => {
  // delete all timesheets
  const filter = {
    timesheetTimesheetsId: {
      eq: timesheetId,
    },
  };
  const timesheetsDB: any = await API.graphql({
    query: listTimesheets,
    variables: {
      filter: filter,
    },
  });

  const timesheets = timesheetsDB.data.listTimesheets.items;

  for (const timesheet of timesheets) {
    await removeTimesheet(timesheet.id);
  }
  return await getTimesheets();
};

export const addTimesheet = async (workerId: number ) => {
  if (!workerId) return;
  const timesheetData = {
    startTime: Date.now(),
    workerTimesheetsId: workerId,
  };
  const timesheetDBData = await API.graphql({
    query: createTimesheet,
    variables: { input: timesheetData },
  });
  return await getTimesheets();
};

export const removeTimesheet = async (timesheetId: number) => {
  const timesheetData = {
    id: timesheetId,
  };
  await API.graphql({
    query: deleteTimesheet,
    variables: { input: timesheetData },
  });
  return await getTimesheets();
};
