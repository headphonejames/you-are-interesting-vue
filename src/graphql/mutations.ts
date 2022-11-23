/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createStaff = /* GraphQL */ `
  mutation CreateStaff(
    $input: CreateStaffInput!
    $condition: ModelStaffConditionInput
  ) {
    createStaff(input: $input, condition: $condition) {
      id
      name
      workers {
        items {
          id
          name
          logIndex
          timeSheetIndex
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          staffWorkersId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateStaff = /* GraphQL */ `
  mutation UpdateStaff(
    $input: UpdateStaffInput!
    $condition: ModelStaffConditionInput
  ) {
    updateStaff(input: $input, condition: $condition) {
      id
      name
      workers {
        items {
          id
          name
          logIndex
          timeSheetIndex
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          staffWorkersId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteStaff = /* GraphQL */ `
  mutation DeleteStaff(
    $input: DeleteStaffInput!
    $condition: ModelStaffConditionInput
  ) {
    deleteStaff(input: $input, condition: $condition) {
      id
      name
      workers {
        items {
          id
          name
          logIndex
          timeSheetIndex
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          staffWorkersId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createWorker = /* GraphQL */ `
  mutation CreateWorker(
    $input: CreateWorkerInput!
    $condition: ModelWorkerConditionInput
  ) {
    createWorker(input: $input, condition: $condition) {
      id
      name
      staff {
        id
        name
        workers {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
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
      staffWorkersId
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
      staff {
        id
        name
        workers {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
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
      staffWorkersId
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
      staff {
        id
        name
        workers {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
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
      staffWorkersId
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
export const updateTimesheet = /* GraphQL */ `
  mutation UpdateTimesheet(
    $input: UpdateTimesheetInput!
    $condition: ModelTimesheetConditionInput
  ) {
    updateTimesheet(input: $input, condition: $condition) {
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
export const deleteTimesheet = /* GraphQL */ `
  mutation DeleteTimesheet(
    $input: DeleteTimesheetInput!
    $condition: ModelTimesheetConditionInput
  ) {
    deleteTimesheet(input: $input, condition: $condition) {
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
export const createConnectionLog = /* GraphQL */ `
  mutation CreateConnectionLog(
    $input: CreateConnectionLogInput!
    $condition: ModelConnectionLogConditionInput
  ) {
    createConnectionLog(input: $input, condition: $condition) {
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
export const updateConnectionLog = /* GraphQL */ `
  mutation UpdateConnectionLog(
    $input: UpdateConnectionLogInput!
    $condition: ModelConnectionLogConditionInput
  ) {
    updateConnectionLog(input: $input, condition: $condition) {
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
export const deleteConnectionLog = /* GraphQL */ `
  mutation DeleteConnectionLog(
    $input: DeleteConnectionLogInput!
    $condition: ModelConnectionLogConditionInput
  ) {
    deleteConnectionLog(input: $input, condition: $condition) {
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
