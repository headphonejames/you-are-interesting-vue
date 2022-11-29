/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateWorker = /* GraphQL */ `
  subscription OnCreateWorker($filter: ModelSubscriptionWorkerFilterInput) {
    onCreateWorker(filter: $filter) {
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
export const onUpdateWorker = /* GraphQL */ `
  subscription OnUpdateWorker($filter: ModelSubscriptionWorkerFilterInput) {
    onUpdateWorker(filter: $filter) {
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
export const onDeleteWorker = /* GraphQL */ `
  subscription OnDeleteWorker($filter: ModelSubscriptionWorkerFilterInput) {
    onDeleteWorker(filter: $filter) {
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
      startTime
      stopTime
      notes
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTimesheet = /* GraphQL */ `
  subscription OnUpdateTimesheet(
    $filter: ModelSubscriptionTimesheetFilterInput
  ) {
    onUpdateTimesheet(filter: $filter) {
      id
      startTime
      stopTime
      notes
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTimesheet = /* GraphQL */ `
  subscription OnDeleteTimesheet(
    $filter: ModelSubscriptionTimesheetFilterInput
  ) {
    onDeleteTimesheet(filter: $filter) {
      id
      startTime
      stopTime
      notes
      createdAt
      updatedAt
    }
  }
`;
export const onCreateConnectionLog = /* GraphQL */ `
  subscription OnCreateConnectionLog(
    $filter: ModelSubscriptionConnectionLogFilterInput
  ) {
    onCreateConnectionLog(filter: $filter) {
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
export const onUpdateConnectionLog = /* GraphQL */ `
  subscription OnUpdateConnectionLog(
    $filter: ModelSubscriptionConnectionLogFilterInput
  ) {
    onUpdateConnectionLog(filter: $filter) {
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
export const onDeleteConnectionLog = /* GraphQL */ `
  subscription OnDeleteConnectionLog(
    $filter: ModelSubscriptionConnectionLogFilterInput
  ) {
    onDeleteConnectionLog(filter: $filter) {
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
