import * as queries from '@/graphql/queries';
import * as mutations from '@/graphql/mutations';

import { API } from "aws-amplify";

export const getTimesheets = async () => {
  const timesheetsQuery: any = await API.graphql({
    query: queries.listTimesheets,
  });
  return timesheetsQuery.data.listTimesheets.items;
};

export const startShiftForWorker = async (worker: any) => {
  const timesheetData = {
    startTime: Date.now(),
    workerTimesheetsId: worker.id,
  };
  const timesheetDBData: any = await API.graphql({
    query: mutations.createTimesheet,
    variables: { input: timesheetData },
  });
  const newTimesheet = timesheetDBData.data.createTimesheet;

  const updatedWorkerData = {
    currentTimesheetId: newTimesheet.id,
    id: worker.id,
  };
  const updatedWorkerDBData = await API.graphql({
    query: mutations.updateWorker,
    variables: { input: updatedWorkerData },
  });
  return newTimesheet;
};

export const finishShiftForWorker = async (worker: any) => {
  // get the timesheet
  const timesheet = await getTimesheet(worker);
  // update the timesheet
  const updatedTimesheet = {
    stopTime: Date.now(),
    id: timesheet.id,
  };
  const newTimesheet: any = await API.graphql({
    query: mutations.updateTimesheet,
    variables: { input: updatedTimesheet },
  });
  return newTimesheet.data.updateTimesheet;
};

export const getTimesheet = async (worker: any) => {
  const timesheet: any = await API.graphql({
    query: queries.getTimesheet,
    variables: {
      id: worker.currentTimesheetId,
    },
  });
  return timesheet.data.getTimesheet;
};

export const finalizeShiftForWorker = async (worker: any, notes: string) => {
  // get the timesheet
  const timesheet = await getTimesheet(worker);
  // update the timesheet
  const timesheetInput = {
    notes: notes,
    id: timesheet.id,
  };
  const newTimesheet: any = await API.graphql({
    query: mutations.updateTimesheet,
    variables: { input: timesheetInput },
  });
  const updatedWorkerData = {
    currentTimesheetId: "",
    id: worker.id,
  };
  const updatedWorkerDBData = await API.graphql({
    query: mutations.updateWorker,
    variables: { input: updatedWorkerData },
  });
  return  newTimesheet.data.updateTimesheet;
};

export const removeTimesheets = async (timesheet: any) => {
  // delete all timesheets
  const filter = {
    currentTimesheetId: {
      eq: timesheet.id,
    },
  };
  const timesheetsDB: any = await API.graphql({
    query: queries.listTimesheets,
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

export const removeTimesheet = async (timesheet: any) => {
  const timesheetData = {
    id: timesheet.id,
  };
  await API.graphql({
    query: mutations.deleteTimesheet,
    variables: { input: timesheetData },
  });
  return await getTimesheets();
};
