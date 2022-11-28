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
        _version
        _deleted
        _lastChangedAt
      }
      connectionLog {
        id
        timeContact
        timePrompt
        timeFinished
        prompt
        rating
        notes
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      logIndex
      timeSheetIndex
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        connectionLog {
          id
          timeContact
          timePrompt
          timeFinished
          prompt
          rating
          notes
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        logIndex
        timeSheetIndex
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncWorkers = /* GraphQL */ `
  query SyncWorkers(
    $filter: ModelWorkerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncWorkers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
          _version
          _deleted
          _lastChangedAt
        }
        connectionLog {
          id
          timeContact
          timePrompt
          timeFinished
          prompt
          rating
          notes
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        logIndex
        timeSheetIndex
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTimesheets = /* GraphQL */ `
  query SyncTimesheets(
    $filter: ModelTimesheetFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTimesheets(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        startTime
        stopTime
        notes
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
      prompt
      rating
      notes
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        prompt
        rating
        notes
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncConnectionLogs = /* GraphQL */ `
  query SyncConnectionLogs(
    $filter: ModelConnectionLogFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncConnectionLogs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
