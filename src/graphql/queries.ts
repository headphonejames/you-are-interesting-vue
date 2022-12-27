/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getWorker = /* GraphQL */ `
  query GetWorker($id: ID!) {
    getWorker(id: $id) {
      id
      name
      timesheets {
        items {
          id
          startTime
          stopTime
          notes
          createdAt
          updatedAt
          workerTimesheetsId
        }
        nextToken
      }
      currentTimesheetId
      connectionLogs {
        items {
          id
          timeContact
          timePrompt
          timeFinished
          prompt
          rating
          notes
          createdAt
          updatedAt
          workerConnectionLogsId
        }
        nextToken
      }
      currentConnectionLogId
      createdAt
      updatedAt
    }
  }
`;
export const listWorkers = /* GraphQL */ `
  query ListWorkers(
    $id: ID
    $filter: ModelWorkerFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listWorkers(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        timesheets {
          nextToken
        }
        currentTimesheetId
        connectionLogs {
          nextToken
        }
        currentConnectionLogId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPrompt = /* GraphQL */ `
  query GetPrompt($id: ID!) {
    getPrompt(id: $id) {
      id
      prompt
      createdAt
      updatedAt
    }
  }
`;
export const listPrompts = /* GraphQL */ `
  query ListPrompts(
    $id: ID
    $filter: ModelPromptFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPrompts(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        prompt
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTimesheet = /* GraphQL */ `
  query GetTimesheet($id: ID!) {
    getTimesheet(id: $id) {
      id
      worker {
        id
        name
        timesheets {
          nextToken
        }
        currentTimesheetId
        connectionLogs {
          nextToken
        }
        currentConnectionLogId
        createdAt
        updatedAt
      }
      startTime
      stopTime
      notes
      createdAt
      updatedAt
      workerTimesheetsId
    }
  }
`;
export const listTimesheets = /* GraphQL */ `
  query ListTimesheets(
    $id: ID
    $filter: ModelTimesheetFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listTimesheets(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        worker {
          id
          name
          currentTimesheetId
          currentConnectionLogId
          createdAt
          updatedAt
        }
        startTime
        stopTime
        notes
        createdAt
        updatedAt
        workerTimesheetsId
      }
      nextToken
    }
  }
`;
export const getConnectionLog = /* GraphQL */ `
  query GetConnectionLog($id: ID!) {
    getConnectionLog(id: $id) {
      id
      worker {
        id
        name
        timesheets {
          nextToken
        }
        currentTimesheetId
        connectionLogs {
          nextToken
        }
        currentConnectionLogId
        createdAt
        updatedAt
      }
      timeContact
      timePrompt
      timeFinished
      prompt
      rating
      notes
      createdAt
      updatedAt
      workerConnectionLogsId
    }
  }
`;
export const listConnectionLogs = /* GraphQL */ `
  query ListConnectionLogs(
    $id: ID
    $filter: ModelConnectionLogFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listConnectionLogs(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        worker {
          id
          name
          currentTimesheetId
          currentConnectionLogId
          createdAt
          updatedAt
        }
        timeContact
        timePrompt
        timeFinished
        prompt
        rating
        notes
        createdAt
        updatedAt
        workerConnectionLogsId
      }
      nextToken
    }
  }
`;
