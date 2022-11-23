/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateStaffInput = {
  id?: string | null,
  name: string,
  _version?: number | null,
};

export type ModelStaffConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelStaffConditionInput | null > | null,
  or?: Array< ModelStaffConditionInput | null > | null,
  not?: ModelStaffConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Staff = {
  __typename: "Staff",
  id: string,
  name: string,
  workers?: ModelWorkerConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelWorkerConnection = {
  __typename: "ModelWorkerConnection",
  items:  Array<Worker | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Worker = {
  __typename: "Worker",
  id: string,
  name: string,
  staff?: Staff | null,
  timesheet?:  Array<Timesheet | null > | null,
  connectionLog?:  Array<ConnectionLog | null > | null,
  logIndex?: number | null,
  timeSheetIndex?: number | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  staffWorkersId?: string | null,
};

export type Timesheet = {
  __typename: "Timesheet",
  id: string,
  startTime?: string | null,
  stopTime?: string | null,
  notes?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ConnectionLog = {
  __typename: "ConnectionLog",
  id: string,
  timeContact?: string | null,
  timePrompt?: string | null,
  timeFinished?: string | null,
  prompt?: string | null,
  rating?: number | null,
  notes?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateStaffInput = {
  id: string,
  name?: string | null,
  _version?: number | null,
};

export type DeleteStaffInput = {
  id: string,
  _version?: number | null,
};

export type CreateWorkerInput = {
  id?: string | null,
  name: string,
  logIndex?: number | null,
  timeSheetIndex?: number | null,
  _version?: number | null,
  staffWorkersId?: string | null,
};

export type ModelWorkerConditionInput = {
  name?: ModelStringInput | null,
  logIndex?: ModelIntInput | null,
  timeSheetIndex?: ModelIntInput | null,
  and?: Array< ModelWorkerConditionInput | null > | null,
  or?: Array< ModelWorkerConditionInput | null > | null,
  not?: ModelWorkerConditionInput | null,
  staffWorkersId?: ModelIDInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateWorkerInput = {
  id: string,
  name?: string | null,
  logIndex?: number | null,
  timeSheetIndex?: number | null,
  _version?: number | null,
  staffWorkersId?: string | null,
};

export type DeleteWorkerInput = {
  id: string,
  _version?: number | null,
};

export type CreateTimesheetInput = {
  id?: string | null,
  startTime?: string | null,
  stopTime?: string | null,
  notes?: string | null,
  _version?: number | null,
};

export type ModelTimesheetConditionInput = {
  startTime?: ModelStringInput | null,
  stopTime?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  and?: Array< ModelTimesheetConditionInput | null > | null,
  or?: Array< ModelTimesheetConditionInput | null > | null,
  not?: ModelTimesheetConditionInput | null,
};

export type UpdateTimesheetInput = {
  id: string,
  startTime?: string | null,
  stopTime?: string | null,
  notes?: string | null,
  _version?: number | null,
};

export type DeleteTimesheetInput = {
  id: string,
  _version?: number | null,
};

export type CreateConnectionLogInput = {
  id?: string | null,
  timeContact?: string | null,
  timePrompt?: string | null,
  timeFinished?: string | null,
  prompt?: string | null,
  rating?: number | null,
  notes?: string | null,
  _version?: number | null,
};

export type ModelConnectionLogConditionInput = {
  timeContact?: ModelStringInput | null,
  timePrompt?: ModelStringInput | null,
  timeFinished?: ModelStringInput | null,
  prompt?: ModelStringInput | null,
  rating?: ModelIntInput | null,
  notes?: ModelStringInput | null,
  and?: Array< ModelConnectionLogConditionInput | null > | null,
  or?: Array< ModelConnectionLogConditionInput | null > | null,
  not?: ModelConnectionLogConditionInput | null,
};

export type UpdateConnectionLogInput = {
  id: string,
  timeContact?: string | null,
  timePrompt?: string | null,
  timeFinished?: string | null,
  prompt?: string | null,
  rating?: number | null,
  notes?: string | null,
  _version?: number | null,
};

export type DeleteConnectionLogInput = {
  id: string,
  _version?: number | null,
};

export type ModelStaffFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelStaffFilterInput | null > | null,
  or?: Array< ModelStaffFilterInput | null > | null,
  not?: ModelStaffFilterInput | null,
};

export type ModelStaffConnection = {
  __typename: "ModelStaffConnection",
  items:  Array<Staff | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelWorkerFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  logIndex?: ModelIntInput | null,
  timeSheetIndex?: ModelIntInput | null,
  and?: Array< ModelWorkerFilterInput | null > | null,
  or?: Array< ModelWorkerFilterInput | null > | null,
  not?: ModelWorkerFilterInput | null,
  staffWorkersId?: ModelIDInput | null,
};

export type ModelTimesheetFilterInput = {
  id?: ModelIDInput | null,
  startTime?: ModelStringInput | null,
  stopTime?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  and?: Array< ModelTimesheetFilterInput | null > | null,
  or?: Array< ModelTimesheetFilterInput | null > | null,
  not?: ModelTimesheetFilterInput | null,
};

export type ModelTimesheetConnection = {
  __typename: "ModelTimesheetConnection",
  items:  Array<Timesheet | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelConnectionLogFilterInput = {
  id?: ModelIDInput | null,
  timeContact?: ModelStringInput | null,
  timePrompt?: ModelStringInput | null,
  timeFinished?: ModelStringInput | null,
  prompt?: ModelStringInput | null,
  rating?: ModelIntInput | null,
  notes?: ModelStringInput | null,
  and?: Array< ModelConnectionLogFilterInput | null > | null,
  or?: Array< ModelConnectionLogFilterInput | null > | null,
  not?: ModelConnectionLogFilterInput | null,
};

export type ModelConnectionLogConnection = {
  __typename: "ModelConnectionLogConnection",
  items:  Array<ConnectionLog | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionStaffFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStaffFilterInput | null > | null,
  or?: Array< ModelSubscriptionStaffFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionWorkerFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  logIndex?: ModelSubscriptionIntInput | null,
  timeSheetIndex?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionWorkerFilterInput | null > | null,
  or?: Array< ModelSubscriptionWorkerFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionTimesheetFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  startTime?: ModelSubscriptionStringInput | null,
  stopTime?: ModelSubscriptionStringInput | null,
  notes?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTimesheetFilterInput | null > | null,
  or?: Array< ModelSubscriptionTimesheetFilterInput | null > | null,
};

export type ModelSubscriptionConnectionLogFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  timeContact?: ModelSubscriptionStringInput | null,
  timePrompt?: ModelSubscriptionStringInput | null,
  timeFinished?: ModelSubscriptionStringInput | null,
  prompt?: ModelSubscriptionStringInput | null,
  rating?: ModelSubscriptionIntInput | null,
  notes?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionConnectionLogFilterInput | null > | null,
  or?: Array< ModelSubscriptionConnectionLogFilterInput | null > | null,
};

export type CreateStaffMutationVariables = {
  input: CreateStaffInput,
  condition?: ModelStaffConditionInput | null,
};

export type CreateStaffMutation = {
  createStaff?:  {
    __typename: "Staff",
    id: string,
    name: string,
    workers?:  {
      __typename: "ModelWorkerConnection",
      items:  Array< {
        __typename: "Worker",
        id: string,
        name: string,
        logIndex?: number | null,
        timeSheetIndex?: number | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        staffWorkersId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateStaffMutationVariables = {
  input: UpdateStaffInput,
  condition?: ModelStaffConditionInput | null,
};

export type UpdateStaffMutation = {
  updateStaff?:  {
    __typename: "Staff",
    id: string,
    name: string,
    workers?:  {
      __typename: "ModelWorkerConnection",
      items:  Array< {
        __typename: "Worker",
        id: string,
        name: string,
        logIndex?: number | null,
        timeSheetIndex?: number | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        staffWorkersId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteStaffMutationVariables = {
  input: DeleteStaffInput,
  condition?: ModelStaffConditionInput | null,
};

export type DeleteStaffMutation = {
  deleteStaff?:  {
    __typename: "Staff",
    id: string,
    name: string,
    workers?:  {
      __typename: "ModelWorkerConnection",
      items:  Array< {
        __typename: "Worker",
        id: string,
        name: string,
        logIndex?: number | null,
        timeSheetIndex?: number | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        staffWorkersId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateWorkerMutationVariables = {
  input: CreateWorkerInput,
  condition?: ModelWorkerConditionInput | null,
};

export type CreateWorkerMutation = {
  createWorker?:  {
    __typename: "Worker",
    id: string,
    name: string,
    staff?:  {
      __typename: "Staff",
      id: string,
      name: string,
      workers?:  {
        __typename: "ModelWorkerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    timesheet?:  Array< {
      __typename: "Timesheet",
      id: string,
      startTime?: string | null,
      stopTime?: string | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
    connectionLog?:  Array< {
      __typename: "ConnectionLog",
      id: string,
      timeContact?: string | null,
      timePrompt?: string | null,
      timeFinished?: string | null,
      prompt?: string | null,
      rating?: number | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
    logIndex?: number | null,
    timeSheetIndex?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    staffWorkersId?: string | null,
  } | null,
};

export type UpdateWorkerMutationVariables = {
  input: UpdateWorkerInput,
  condition?: ModelWorkerConditionInput | null,
};

export type UpdateWorkerMutation = {
  updateWorker?:  {
    __typename: "Worker",
    id: string,
    name: string,
    staff?:  {
      __typename: "Staff",
      id: string,
      name: string,
      workers?:  {
        __typename: "ModelWorkerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    timesheet?:  Array< {
      __typename: "Timesheet",
      id: string,
      startTime?: string | null,
      stopTime?: string | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
    connectionLog?:  Array< {
      __typename: "ConnectionLog",
      id: string,
      timeContact?: string | null,
      timePrompt?: string | null,
      timeFinished?: string | null,
      prompt?: string | null,
      rating?: number | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
    logIndex?: number | null,
    timeSheetIndex?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    staffWorkersId?: string | null,
  } | null,
};

export type DeleteWorkerMutationVariables = {
  input: DeleteWorkerInput,
  condition?: ModelWorkerConditionInput | null,
};

export type DeleteWorkerMutation = {
  deleteWorker?:  {
    __typename: "Worker",
    id: string,
    name: string,
    staff?:  {
      __typename: "Staff",
      id: string,
      name: string,
      workers?:  {
        __typename: "ModelWorkerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    timesheet?:  Array< {
      __typename: "Timesheet",
      id: string,
      startTime?: string | null,
      stopTime?: string | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
    connectionLog?:  Array< {
      __typename: "ConnectionLog",
      id: string,
      timeContact?: string | null,
      timePrompt?: string | null,
      timeFinished?: string | null,
      prompt?: string | null,
      rating?: number | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
    logIndex?: number | null,
    timeSheetIndex?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    staffWorkersId?: string | null,
  } | null,
};

export type CreateTimesheetMutationVariables = {
  input: CreateTimesheetInput,
  condition?: ModelTimesheetConditionInput | null,
};

export type CreateTimesheetMutation = {
  createTimesheet?:  {
    __typename: "Timesheet",
    id: string,
    startTime?: string | null,
    stopTime?: string | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateTimesheetMutationVariables = {
  input: UpdateTimesheetInput,
  condition?: ModelTimesheetConditionInput | null,
};

export type UpdateTimesheetMutation = {
  updateTimesheet?:  {
    __typename: "Timesheet",
    id: string,
    startTime?: string | null,
    stopTime?: string | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteTimesheetMutationVariables = {
  input: DeleteTimesheetInput,
  condition?: ModelTimesheetConditionInput | null,
};

export type DeleteTimesheetMutation = {
  deleteTimesheet?:  {
    __typename: "Timesheet",
    id: string,
    startTime?: string | null,
    stopTime?: string | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateConnectionLogMutationVariables = {
  input: CreateConnectionLogInput,
  condition?: ModelConnectionLogConditionInput | null,
};

export type CreateConnectionLogMutation = {
  createConnectionLog?:  {
    __typename: "ConnectionLog",
    id: string,
    timeContact?: string | null,
    timePrompt?: string | null,
    timeFinished?: string | null,
    prompt?: string | null,
    rating?: number | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateConnectionLogMutationVariables = {
  input: UpdateConnectionLogInput,
  condition?: ModelConnectionLogConditionInput | null,
};

export type UpdateConnectionLogMutation = {
  updateConnectionLog?:  {
    __typename: "ConnectionLog",
    id: string,
    timeContact?: string | null,
    timePrompt?: string | null,
    timeFinished?: string | null,
    prompt?: string | null,
    rating?: number | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteConnectionLogMutationVariables = {
  input: DeleteConnectionLogInput,
  condition?: ModelConnectionLogConditionInput | null,
};

export type DeleteConnectionLogMutation = {
  deleteConnectionLog?:  {
    __typename: "ConnectionLog",
    id: string,
    timeContact?: string | null,
    timePrompt?: string | null,
    timeFinished?: string | null,
    prompt?: string | null,
    rating?: number | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetStaffQueryVariables = {
  id: string,
};

export type GetStaffQuery = {
  getStaff?:  {
    __typename: "Staff",
    id: string,
    name: string,
    workers?:  {
      __typename: "ModelWorkerConnection",
      items:  Array< {
        __typename: "Worker",
        id: string,
        name: string,
        logIndex?: number | null,
        timeSheetIndex?: number | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        staffWorkersId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListStaffQueryVariables = {
  filter?: ModelStaffFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStaffQuery = {
  listStaff?:  {
    __typename: "ModelStaffConnection",
    items:  Array< {
      __typename: "Staff",
      id: string,
      name: string,
      workers?:  {
        __typename: "ModelWorkerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncStaffQueryVariables = {
  filter?: ModelStaffFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncStaffQuery = {
  syncStaff?:  {
    __typename: "ModelStaffConnection",
    items:  Array< {
      __typename: "Staff",
      id: string,
      name: string,
      workers?:  {
        __typename: "ModelWorkerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetWorkerQueryVariables = {
  id: string,
};

export type GetWorkerQuery = {
  getWorker?:  {
    __typename: "Worker",
    id: string,
    name: string,
    staff?:  {
      __typename: "Staff",
      id: string,
      name: string,
      workers?:  {
        __typename: "ModelWorkerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    timesheet?:  Array< {
      __typename: "Timesheet",
      id: string,
      startTime?: string | null,
      stopTime?: string | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
    connectionLog?:  Array< {
      __typename: "ConnectionLog",
      id: string,
      timeContact?: string | null,
      timePrompt?: string | null,
      timeFinished?: string | null,
      prompt?: string | null,
      rating?: number | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
    logIndex?: number | null,
    timeSheetIndex?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    staffWorkersId?: string | null,
  } | null,
};

export type ListWorkersQueryVariables = {
  filter?: ModelWorkerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWorkersQuery = {
  listWorkers?:  {
    __typename: "ModelWorkerConnection",
    items:  Array< {
      __typename: "Worker",
      id: string,
      name: string,
      staff?:  {
        __typename: "Staff",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      timesheet?:  Array< {
        __typename: "Timesheet",
        id: string,
        startTime?: string | null,
        stopTime?: string | null,
        notes?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null > | null,
      connectionLog?:  Array< {
        __typename: "ConnectionLog",
        id: string,
        timeContact?: string | null,
        timePrompt?: string | null,
        timeFinished?: string | null,
        prompt?: string | null,
        rating?: number | null,
        notes?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null > | null,
      logIndex?: number | null,
      timeSheetIndex?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      staffWorkersId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncWorkersQueryVariables = {
  filter?: ModelWorkerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncWorkersQuery = {
  syncWorkers?:  {
    __typename: "ModelWorkerConnection",
    items:  Array< {
      __typename: "Worker",
      id: string,
      name: string,
      staff?:  {
        __typename: "Staff",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      timesheet?:  Array< {
        __typename: "Timesheet",
        id: string,
        startTime?: string | null,
        stopTime?: string | null,
        notes?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null > | null,
      connectionLog?:  Array< {
        __typename: "ConnectionLog",
        id: string,
        timeContact?: string | null,
        timePrompt?: string | null,
        timeFinished?: string | null,
        prompt?: string | null,
        rating?: number | null,
        notes?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null > | null,
      logIndex?: number | null,
      timeSheetIndex?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      staffWorkersId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetTimesheetQueryVariables = {
  id: string,
};

export type GetTimesheetQuery = {
  getTimesheet?:  {
    __typename: "Timesheet",
    id: string,
    startTime?: string | null,
    stopTime?: string | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListTimesheetsQueryVariables = {
  filter?: ModelTimesheetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTimesheetsQuery = {
  listTimesheets?:  {
    __typename: "ModelTimesheetConnection",
    items:  Array< {
      __typename: "Timesheet",
      id: string,
      startTime?: string | null,
      stopTime?: string | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTimesheetsQueryVariables = {
  filter?: ModelTimesheetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTimesheetsQuery = {
  syncTimesheets?:  {
    __typename: "ModelTimesheetConnection",
    items:  Array< {
      __typename: "Timesheet",
      id: string,
      startTime?: string | null,
      stopTime?: string | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetConnectionLogQueryVariables = {
  id: string,
};

export type GetConnectionLogQuery = {
  getConnectionLog?:  {
    __typename: "ConnectionLog",
    id: string,
    timeContact?: string | null,
    timePrompt?: string | null,
    timeFinished?: string | null,
    prompt?: string | null,
    rating?: number | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListConnectionLogsQueryVariables = {
  filter?: ModelConnectionLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListConnectionLogsQuery = {
  listConnectionLogs?:  {
    __typename: "ModelConnectionLogConnection",
    items:  Array< {
      __typename: "ConnectionLog",
      id: string,
      timeContact?: string | null,
      timePrompt?: string | null,
      timeFinished?: string | null,
      prompt?: string | null,
      rating?: number | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncConnectionLogsQueryVariables = {
  filter?: ModelConnectionLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncConnectionLogsQuery = {
  syncConnectionLogs?:  {
    __typename: "ModelConnectionLogConnection",
    items:  Array< {
      __typename: "ConnectionLog",
      id: string,
      timeContact?: string | null,
      timePrompt?: string | null,
      timeFinished?: string | null,
      prompt?: string | null,
      rating?: number | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateStaffSubscriptionVariables = {
  filter?: ModelSubscriptionStaffFilterInput | null,
};

export type OnCreateStaffSubscription = {
  onCreateStaff?:  {
    __typename: "Staff",
    id: string,
    name: string,
    workers?:  {
      __typename: "ModelWorkerConnection",
      items:  Array< {
        __typename: "Worker",
        id: string,
        name: string,
        logIndex?: number | null,
        timeSheetIndex?: number | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        staffWorkersId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateStaffSubscriptionVariables = {
  filter?: ModelSubscriptionStaffFilterInput | null,
};

export type OnUpdateStaffSubscription = {
  onUpdateStaff?:  {
    __typename: "Staff",
    id: string,
    name: string,
    workers?:  {
      __typename: "ModelWorkerConnection",
      items:  Array< {
        __typename: "Worker",
        id: string,
        name: string,
        logIndex?: number | null,
        timeSheetIndex?: number | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        staffWorkersId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteStaffSubscriptionVariables = {
  filter?: ModelSubscriptionStaffFilterInput | null,
};

export type OnDeleteStaffSubscription = {
  onDeleteStaff?:  {
    __typename: "Staff",
    id: string,
    name: string,
    workers?:  {
      __typename: "ModelWorkerConnection",
      items:  Array< {
        __typename: "Worker",
        id: string,
        name: string,
        logIndex?: number | null,
        timeSheetIndex?: number | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        staffWorkersId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateWorkerSubscriptionVariables = {
  filter?: ModelSubscriptionWorkerFilterInput | null,
};

export type OnCreateWorkerSubscription = {
  onCreateWorker?:  {
    __typename: "Worker",
    id: string,
    name: string,
    staff?:  {
      __typename: "Staff",
      id: string,
      name: string,
      workers?:  {
        __typename: "ModelWorkerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    timesheet?:  Array< {
      __typename: "Timesheet",
      id: string,
      startTime?: string | null,
      stopTime?: string | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
    connectionLog?:  Array< {
      __typename: "ConnectionLog",
      id: string,
      timeContact?: string | null,
      timePrompt?: string | null,
      timeFinished?: string | null,
      prompt?: string | null,
      rating?: number | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
    logIndex?: number | null,
    timeSheetIndex?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    staffWorkersId?: string | null,
  } | null,
};

export type OnUpdateWorkerSubscriptionVariables = {
  filter?: ModelSubscriptionWorkerFilterInput | null,
};

export type OnUpdateWorkerSubscription = {
  onUpdateWorker?:  {
    __typename: "Worker",
    id: string,
    name: string,
    staff?:  {
      __typename: "Staff",
      id: string,
      name: string,
      workers?:  {
        __typename: "ModelWorkerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    timesheet?:  Array< {
      __typename: "Timesheet",
      id: string,
      startTime?: string | null,
      stopTime?: string | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
    connectionLog?:  Array< {
      __typename: "ConnectionLog",
      id: string,
      timeContact?: string | null,
      timePrompt?: string | null,
      timeFinished?: string | null,
      prompt?: string | null,
      rating?: number | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
    logIndex?: number | null,
    timeSheetIndex?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    staffWorkersId?: string | null,
  } | null,
};

export type OnDeleteWorkerSubscriptionVariables = {
  filter?: ModelSubscriptionWorkerFilterInput | null,
};

export type OnDeleteWorkerSubscription = {
  onDeleteWorker?:  {
    __typename: "Worker",
    id: string,
    name: string,
    staff?:  {
      __typename: "Staff",
      id: string,
      name: string,
      workers?:  {
        __typename: "ModelWorkerConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    timesheet?:  Array< {
      __typename: "Timesheet",
      id: string,
      startTime?: string | null,
      stopTime?: string | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
    connectionLog?:  Array< {
      __typename: "ConnectionLog",
      id: string,
      timeContact?: string | null,
      timePrompt?: string | null,
      timeFinished?: string | null,
      prompt?: string | null,
      rating?: number | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
    logIndex?: number | null,
    timeSheetIndex?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    staffWorkersId?: string | null,
  } | null,
};

export type OnCreateTimesheetSubscriptionVariables = {
  filter?: ModelSubscriptionTimesheetFilterInput | null,
};

export type OnCreateTimesheetSubscription = {
  onCreateTimesheet?:  {
    __typename: "Timesheet",
    id: string,
    startTime?: string | null,
    stopTime?: string | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateTimesheetSubscriptionVariables = {
  filter?: ModelSubscriptionTimesheetFilterInput | null,
};

export type OnUpdateTimesheetSubscription = {
  onUpdateTimesheet?:  {
    __typename: "Timesheet",
    id: string,
    startTime?: string | null,
    stopTime?: string | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteTimesheetSubscriptionVariables = {
  filter?: ModelSubscriptionTimesheetFilterInput | null,
};

export type OnDeleteTimesheetSubscription = {
  onDeleteTimesheet?:  {
    __typename: "Timesheet",
    id: string,
    startTime?: string | null,
    stopTime?: string | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateConnectionLogSubscriptionVariables = {
  filter?: ModelSubscriptionConnectionLogFilterInput | null,
};

export type OnCreateConnectionLogSubscription = {
  onCreateConnectionLog?:  {
    __typename: "ConnectionLog",
    id: string,
    timeContact?: string | null,
    timePrompt?: string | null,
    timeFinished?: string | null,
    prompt?: string | null,
    rating?: number | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateConnectionLogSubscriptionVariables = {
  filter?: ModelSubscriptionConnectionLogFilterInput | null,
};

export type OnUpdateConnectionLogSubscription = {
  onUpdateConnectionLog?:  {
    __typename: "ConnectionLog",
    id: string,
    timeContact?: string | null,
    timePrompt?: string | null,
    timeFinished?: string | null,
    prompt?: string | null,
    rating?: number | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteConnectionLogSubscriptionVariables = {
  filter?: ModelSubscriptionConnectionLogFilterInput | null,
};

export type OnDeleteConnectionLogSubscription = {
  onDeleteConnectionLog?:  {
    __typename: "ConnectionLog",
    id: string,
    timeContact?: string | null,
    timePrompt?: string | null,
    timeFinished?: string | null,
    prompt?: string | null,
    rating?: number | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
