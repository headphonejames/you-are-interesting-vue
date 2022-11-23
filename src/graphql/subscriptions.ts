/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateStaff = /* GraphQL */ `
  subscription OnCreateStaff($filter: ModelSubscriptionStaffFilterInput) {
    onCreateStaff(filter: $filter) {
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
export const onUpdateStaff = /* GraphQL */ `
  subscription OnUpdateStaff($filter: ModelSubscriptionStaffFilterInput) {
    onUpdateStaff(filter: $filter) {
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
export const onDeleteStaff = /* GraphQL */ `
  subscription OnDeleteStaff($filter: ModelSubscriptionStaffFilterInput) {
    onDeleteStaff(filter: $filter) {
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
export const onCreateWorker = /* GraphQL */ `
  subscription OnCreateWorker($filter: ModelSubscriptionWorkerFilterInput) {
    onCreateWorker(filter: $filter) {
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
export const onUpdateWorker = /* GraphQL */ `
  subscription OnUpdateWorker($filter: ModelSubscriptionWorkerFilterInput) {
    onUpdateWorker(filter: $filter) {
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
export const onDeleteWorker = /* GraphQL */ `
  subscription OnDeleteWorker($filter: ModelSubscriptionWorkerFilterInput) {
    onDeleteWorker(filter: $filter) {
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
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
export const onUpdateConnectionLog = /* GraphQL */ `
  subscription OnUpdateConnectionLog(
    $filter: ModelSubscriptionConnectionLogFilterInput
  ) {
    onUpdateConnectionLog(filter: $filter) {
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
export const onDeleteConnectionLog = /* GraphQL */ `
  subscription OnDeleteConnectionLog(
    $filter: ModelSubscriptionConnectionLogFilterInput
  ) {
    onDeleteConnectionLog(filter: $filter) {
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
