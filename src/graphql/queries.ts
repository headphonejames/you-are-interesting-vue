/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getWorker = /* GraphQL */ `
  query GetWorker($id: ID!) {
    getWorker(id: $id) {
      id
      name
      timesheet {
        id
        startTime
        stopTime
        notes
        createdAt
        updatedAt
      }
      connectionLog {
        id
        timeContact
        timePrompt
        timeFinished
        prompt {
          id
          prompt
          createdAt
          updatedAt
        }
        rating
        notes
        createdAt
        updatedAt
      }
      logIndex
      timeSheetIndex
      createdAt
      updatedAt
    }
  }
`;
export const listWorkers = /* GraphQL */ `
  query ListWorkers(
    $filter: ModelWorkerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        timesheet {
          id
          startTime
          stopTime
          notes
          createdAt
          updatedAt
        }
        connectionLog {
          id
          timeContact
          timePrompt
          timeFinished
          rating
          notes
          createdAt
          updatedAt
        }
        logIndex
        timeSheetIndex
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
    $filter: ModelPromptFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrompts(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      startTime
      stopTime
      notes
      createdAt
      updatedAt
    }
  }
`;
export const listTimesheets = /* GraphQL */ `
  query ListTimesheets(
    $filter: ModelTimesheetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTimesheets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        startTime
        stopTime
        notes
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getConnectionLog = /* GraphQL */ `
  query GetConnectionLog($id: ID!) {
    getConnectionLog(id: $id) {
      id
      timeContact
      timePrompt
      timeFinished
      prompt {
        id
        prompt
        createdAt
        updatedAt
      }
      rating
      notes
      createdAt
      updatedAt
    }
  }
`;
export const listConnectionLogs = /* GraphQL */ `
  query ListConnectionLogs(
    $filter: ModelConnectionLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConnectionLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        timeContact
        timePrompt
        timeFinished
        prompt {
          id
          prompt
          createdAt
          updatedAt
        }
        rating
        notes
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
