/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createWorker = /* GraphQL */ `
  mutation CreateWorker(
    $input: CreateWorkerInput!
    $condition: ModelWorkerConditionInput
  ) {
    createWorker(input: $input, condition: $condition) {
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
export const updateWorker = /* GraphQL */ `
  mutation UpdateWorker(
    $input: UpdateWorkerInput!
    $condition: ModelWorkerConditionInput
  ) {
    updateWorker(input: $input, condition: $condition) {
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
export const deleteWorker = /* GraphQL */ `
  mutation DeleteWorker(
    $input: DeleteWorkerInput!
    $condition: ModelWorkerConditionInput
  ) {
    deleteWorker(input: $input, condition: $condition) {
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
export const createPrompt = /* GraphQL */ `
  mutation CreatePrompt(
    $input: CreatePromptInput!
    $condition: ModelPromptConditionInput
  ) {
    createPrompt(input: $input, condition: $condition) {
      id
      prompt
      createdAt
      updatedAt
    }
  }
`;
export const updatePrompt = /* GraphQL */ `
  mutation UpdatePrompt(
    $input: UpdatePromptInput!
    $condition: ModelPromptConditionInput
  ) {
    updatePrompt(input: $input, condition: $condition) {
      id
      prompt
      createdAt
      updatedAt
    }
  }
`;
export const deletePrompt = /* GraphQL */ `
  mutation DeletePrompt(
    $input: DeletePromptInput!
    $condition: ModelPromptConditionInput
  ) {
    deletePrompt(input: $input, condition: $condition) {
      id
      prompt
      createdAt
      updatedAt
    }
  }
`;
export const createTimesheet = /* GraphQL */ `
  mutation CreateTimesheet(
    $input: CreateTimesheetInput!
    $condition: ModelTimesheetConditionInput
  ) {
    createTimesheet(input: $input, condition: $condition) {
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
export const updateTimesheet = /* GraphQL */ `
  mutation UpdateTimesheet(
    $input: UpdateTimesheetInput!
    $condition: ModelTimesheetConditionInput
  ) {
    updateTimesheet(input: $input, condition: $condition) {
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
export const deleteTimesheet = /* GraphQL */ `
  mutation DeleteTimesheet(
    $input: DeleteTimesheetInput!
    $condition: ModelTimesheetConditionInput
  ) {
    deleteTimesheet(input: $input, condition: $condition) {
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
export const createConnectionLog = /* GraphQL */ `
  mutation CreateConnectionLog(
    $input: CreateConnectionLogInput!
    $condition: ModelConnectionLogConditionInput
  ) {
    createConnectionLog(input: $input, condition: $condition) {
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
export const updateConnectionLog = /* GraphQL */ `
  mutation UpdateConnectionLog(
    $input: UpdateConnectionLogInput!
    $condition: ModelConnectionLogConditionInput
  ) {
    updateConnectionLog(input: $input, condition: $condition) {
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
export const deleteConnectionLog = /* GraphQL */ `
  mutation DeleteConnectionLog(
    $input: DeleteConnectionLogInput!
    $condition: ModelConnectionLogConditionInput
  ) {
    deleteConnectionLog(input: $input, condition: $condition) {
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
