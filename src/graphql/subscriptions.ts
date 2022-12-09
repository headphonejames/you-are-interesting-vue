/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateWorker = /* GraphQL */ `
  subscription OnCreateWorker($filter: ModelSubscriptionWorkerFilterInput) {
    onCreateWorker(filter: $filter) {
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
export const onUpdateWorker = /* GraphQL */ `
  subscription OnUpdateWorker($filter: ModelSubscriptionWorkerFilterInput) {
    onUpdateWorker(filter: $filter) {
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
export const onDeleteWorker = /* GraphQL */ `
  subscription OnDeleteWorker($filter: ModelSubscriptionWorkerFilterInput) {
    onDeleteWorker(filter: $filter) {
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
export const onCreatePrompt = /* GraphQL */ `
  subscription OnCreatePrompt($filter: ModelSubscriptionPromptFilterInput) {
    onCreatePrompt(filter: $filter) {
      id
      prompt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePrompt = /* GraphQL */ `
  subscription OnUpdatePrompt($filter: ModelSubscriptionPromptFilterInput) {
    onUpdatePrompt(filter: $filter) {
      id
      prompt
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePrompt = /* GraphQL */ `
  subscription OnDeletePrompt($filter: ModelSubscriptionPromptFilterInput) {
    onDeletePrompt(filter: $filter) {
      id
      prompt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTimesheet = /* GraphQL */ `
  subscription OnCreateTimesheet(
    $filter: ModelSubscriptionTimesheetFilterInput
  ) {
    onCreateTimesheet(filter: $filter) {
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
export const onUpdateTimesheet = /* GraphQL */ `
  subscription OnUpdateTimesheet(
    $filter: ModelSubscriptionTimesheetFilterInput
  ) {
    onUpdateTimesheet(filter: $filter) {
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
export const onDeleteTimesheet = /* GraphQL */ `
  subscription OnDeleteTimesheet(
    $filter: ModelSubscriptionTimesheetFilterInput
  ) {
    onDeleteTimesheet(filter: $filter) {
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
export const onCreateConnectionLog = /* GraphQL */ `
  subscription OnCreateConnectionLog(
    $filter: ModelSubscriptionConnectionLogFilterInput
  ) {
    onCreateConnectionLog(filter: $filter) {
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
      workerConnectionLogsId
    }
  }
`;
export const onUpdateConnectionLog = /* GraphQL */ `
  subscription OnUpdateConnectionLog(
    $filter: ModelSubscriptionConnectionLogFilterInput
  ) {
    onUpdateConnectionLog(filter: $filter) {
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
      workerConnectionLogsId
    }
  }
`;
export const onDeleteConnectionLog = /* GraphQL */ `
  subscription OnDeleteConnectionLog(
    $filter: ModelSubscriptionConnectionLogFilterInput
  ) {
    onDeleteConnectionLog(filter: $filter) {
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
      workerConnectionLogsId
    }
  }
`;
