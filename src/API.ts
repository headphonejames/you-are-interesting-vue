/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateWorkerInput = {
  id?: string | null,
  name: string,
  currentTimesheetId?: string | null,
  currentConnectionLogId?: string | null,
};

export type ModelWorkerConditionInput = {
  name?: ModelStringInput | null,
  currentTimesheetId?: ModelStringInput | null,
  currentConnectionLogId?: ModelStringInput | null,
  and?: Array< ModelWorkerConditionInput | null > | null,
  or?: Array< ModelWorkerConditionInput | null > | null,
  not?: ModelWorkerConditionInput | null,
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

export type Worker = {
  __typename: "Worker",
  id: string,
  name: string,
  timesheets?: ModelTimesheetConnection | null,
  currentTimesheetId?: string | null,
  connectionLogs?: ModelConnectionLogConnection | null,
  currentConnectionLogId?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelTimesheetConnection = {
  __typename: "ModelTimesheetConnection",
  items:  Array<Timesheet | null >,
  nextToken?: string | null,
};

export type Timesheet = {
  __typename: "Timesheet",
  id: string,
  worker?: Worker | null,
  startTime?: string | null,
  stopTime?: string | null,
  notes?: string | null,
  createdAt: string,
  updatedAt: string,
  workerTimesheetsId?: string | null,
};

export type ModelConnectionLogConnection = {
  __typename: "ModelConnectionLogConnection",
  items:  Array<ConnectionLog | null >,
  nextToken?: string | null,
};

export type ConnectionLog = {
  __typename: "ConnectionLog",
  id: string,
  worker?: Worker | null,
  timeContact?: string | null,
  timePrompt?: string | null,
  timeFinished?: string | null,
  prompt?: string | null,
  rating?: number | null,
  notes?: string | null,
  createdAt: string,
  updatedAt: string,
  workerConnectionLogsId?: string | null,
};

export type UpdateWorkerInput = {
  id: string,
  name?: string | null,
  currentTimesheetId?: string | null,
  currentConnectionLogId?: string | null,
};

export type DeleteWorkerInput = {
  id: string,
};

export type CreatePromptInput = {
  id?: string | null,
  prompt: string,
};

export type ModelPromptConditionInput = {
  prompt?: ModelStringInput | null,
  and?: Array< ModelPromptConditionInput | null > | null,
  or?: Array< ModelPromptConditionInput | null > | null,
  not?: ModelPromptConditionInput | null,
};

export type Prompt = {
  __typename: "Prompt",
  id: string,
  prompt: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePromptInput = {
  id: string,
  prompt?: string | null,
};

export type DeletePromptInput = {
  id: string,
};

export type CreateTimesheetInput = {
  id?: string | null,
  startTime?: string | null,
  stopTime?: string | null,
  notes?: string | null,
  workerTimesheetsId?: string | null,
};

export type ModelTimesheetConditionInput = {
  startTime?: ModelStringInput | null,
  stopTime?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  and?: Array< ModelTimesheetConditionInput | null > | null,
  or?: Array< ModelTimesheetConditionInput | null > | null,
  not?: ModelTimesheetConditionInput | null,
  workerTimesheetsId?: ModelIDInput | null,
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

export type UpdateTimesheetInput = {
  id: string,
  startTime?: string | null,
  stopTime?: string | null,
  notes?: string | null,
  workerTimesheetsId?: string | null,
};

export type DeleteTimesheetInput = {
  id: string,
};

export type CreateConnectionLogInput = {
  id?: string | null,
  timeContact?: string | null,
  timePrompt?: string | null,
  timeFinished?: string | null,
  prompt?: string | null,
  rating?: number | null,
  notes?: string | null,
  workerConnectionLogsId?: string | null,
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
  workerConnectionLogsId?: ModelIDInput | null,
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

export type UpdateConnectionLogInput = {
  id: string,
  timeContact?: string | null,
  timePrompt?: string | null,
  timeFinished?: string | null,
  prompt?: string | null,
  rating?: number | null,
  notes?: string | null,
  workerConnectionLogsId?: string | null,
};

export type DeleteConnectionLogInput = {
  id: string,
};

export type ModelWorkerFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  currentTimesheetId?: ModelStringInput | null,
  currentConnectionLogId?: ModelStringInput | null,
  and?: Array< ModelWorkerFilterInput | null > | null,
  or?: Array< ModelWorkerFilterInput | null > | null,
  not?: ModelWorkerFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelWorkerConnection = {
  __typename: "ModelWorkerConnection",
  items:  Array<Worker | null >,
  nextToken?: string | null,
};

export type ModelPromptFilterInput = {
  id?: ModelIDInput | null,
  prompt?: ModelStringInput | null,
  and?: Array< ModelPromptFilterInput | null > | null,
  or?: Array< ModelPromptFilterInput | null > | null,
  not?: ModelPromptFilterInput | null,
};

export type ModelPromptConnection = {
  __typename: "ModelPromptConnection",
  items:  Array<Prompt | null >,
  nextToken?: string | null,
};

export type ModelTimesheetFilterInput = {
  id?: ModelIDInput | null,
  startTime?: ModelStringInput | null,
  stopTime?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  and?: Array< ModelTimesheetFilterInput | null > | null,
  or?: Array< ModelTimesheetFilterInput | null > | null,
  not?: ModelTimesheetFilterInput | null,
  workerTimesheetsId?: ModelIDInput | null,
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
  workerConnectionLogsId?: ModelIDInput | null,
};

export type ModelSubscriptionWorkerFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  currentTimesheetId?: ModelSubscriptionStringInput | null,
  currentConnectionLogId?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionWorkerFilterInput | null > | null,
  or?: Array< ModelSubscriptionWorkerFilterInput | null > | null,
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

export type ModelSubscriptionPromptFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  prompt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPromptFilterInput | null > | null,
  or?: Array< ModelSubscriptionPromptFilterInput | null > | null,
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

export type CreateWorkerMutationVariables = {
  input: CreateWorkerInput,
  condition?: ModelWorkerConditionInput | null,
};

export type CreateWorkerMutation = {
  createWorker?:  {
    __typename: "Worker",
    id: string,
    name: string,
    timesheets?:  {
      __typename: "ModelTimesheetConnection",
      items:  Array< {
        __typename: "Timesheet",
        id: string,
        startTime?: string | null,
        stopTime?: string | null,
        notes?: string | null,
        createdAt: string,
        updatedAt: string,
        workerTimesheetsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    currentTimesheetId?: string | null,
    connectionLogs?:  {
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
        workerConnectionLogsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    currentConnectionLogId?: string | null,
    createdAt: string,
    updatedAt: string,
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
    timesheets?:  {
      __typename: "ModelTimesheetConnection",
      items:  Array< {
        __typename: "Timesheet",
        id: string,
        startTime?: string | null,
        stopTime?: string | null,
        notes?: string | null,
        createdAt: string,
        updatedAt: string,
        workerTimesheetsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    currentTimesheetId?: string | null,
    connectionLogs?:  {
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
        workerConnectionLogsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    currentConnectionLogId?: string | null,
    createdAt: string,
    updatedAt: string,
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
    timesheets?:  {
      __typename: "ModelTimesheetConnection",
      items:  Array< {
        __typename: "Timesheet",
        id: string,
        startTime?: string | null,
        stopTime?: string | null,
        notes?: string | null,
        createdAt: string,
        updatedAt: string,
        workerTimesheetsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    currentTimesheetId?: string | null,
    connectionLogs?:  {
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
        workerConnectionLogsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    currentConnectionLogId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePromptMutationVariables = {
  input: CreatePromptInput,
  condition?: ModelPromptConditionInput | null,
};

export type CreatePromptMutation = {
  createPrompt?:  {
    __typename: "Prompt",
    id: string,
    prompt: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePromptMutationVariables = {
  input: UpdatePromptInput,
  condition?: ModelPromptConditionInput | null,
};

export type UpdatePromptMutation = {
  updatePrompt?:  {
    __typename: "Prompt",
    id: string,
    prompt: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePromptMutationVariables = {
  input: DeletePromptInput,
  condition?: ModelPromptConditionInput | null,
};

export type DeletePromptMutation = {
  deletePrompt?:  {
    __typename: "Prompt",
    id: string,
    prompt: string,
    createdAt: string,
    updatedAt: string,
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
    worker?:  {
      __typename: "Worker",
      id: string,
      name: string,
      timesheets?:  {
        __typename: "ModelTimesheetConnection",
        nextToken?: string | null,
      } | null,
      currentTimesheetId?: string | null,
      connectionLogs?:  {
        __typename: "ModelConnectionLogConnection",
        nextToken?: string | null,
      } | null,
      currentConnectionLogId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    startTime?: string | null,
    stopTime?: string | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
    workerTimesheetsId?: string | null,
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
    worker?:  {
      __typename: "Worker",
      id: string,
      name: string,
      timesheets?:  {
        __typename: "ModelTimesheetConnection",
        nextToken?: string | null,
      } | null,
      currentTimesheetId?: string | null,
      connectionLogs?:  {
        __typename: "ModelConnectionLogConnection",
        nextToken?: string | null,
      } | null,
      currentConnectionLogId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    startTime?: string | null,
    stopTime?: string | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
    workerTimesheetsId?: string | null,
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
    worker?:  {
      __typename: "Worker",
      id: string,
      name: string,
      timesheets?:  {
        __typename: "ModelTimesheetConnection",
        nextToken?: string | null,
      } | null,
      currentTimesheetId?: string | null,
      connectionLogs?:  {
        __typename: "ModelConnectionLogConnection",
        nextToken?: string | null,
      } | null,
      currentConnectionLogId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    startTime?: string | null,
    stopTime?: string | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
    workerTimesheetsId?: string | null,
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
    worker?:  {
      __typename: "Worker",
      id: string,
      name: string,
      timesheets?:  {
        __typename: "ModelTimesheetConnection",
        nextToken?: string | null,
      } | null,
      currentTimesheetId?: string | null,
      connectionLogs?:  {
        __typename: "ModelConnectionLogConnection",
        nextToken?: string | null,
      } | null,
      currentConnectionLogId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    timeContact?: string | null,
    timePrompt?: string | null,
    timeFinished?: string | null,
    prompt?: string | null,
    rating?: number | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
    workerConnectionLogsId?: string | null,
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
    worker?:  {
      __typename: "Worker",
      id: string,
      name: string,
      timesheets?:  {
        __typename: "ModelTimesheetConnection",
        nextToken?: string | null,
      } | null,
      currentTimesheetId?: string | null,
      connectionLogs?:  {
        __typename: "ModelConnectionLogConnection",
        nextToken?: string | null,
      } | null,
      currentConnectionLogId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    timeContact?: string | null,
    timePrompt?: string | null,
    timeFinished?: string | null,
    prompt?: string | null,
    rating?: number | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
    workerConnectionLogsId?: string | null,
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
    worker?:  {
      __typename: "Worker",
      id: string,
      name: string,
      timesheets?:  {
        __typename: "ModelTimesheetConnection",
        nextToken?: string | null,
      } | null,
      currentTimesheetId?: string | null,
      connectionLogs?:  {
        __typename: "ModelConnectionLogConnection",
        nextToken?: string | null,
      } | null,
      currentConnectionLogId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    timeContact?: string | null,
    timePrompt?: string | null,
    timeFinished?: string | null,
    prompt?: string | null,
    rating?: number | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
    workerConnectionLogsId?: string | null,
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
    timesheets?:  {
      __typename: "ModelTimesheetConnection",
      items:  Array< {
        __typename: "Timesheet",
        id: string,
        startTime?: string | null,
        stopTime?: string | null,
        notes?: string | null,
        createdAt: string,
        updatedAt: string,
        workerTimesheetsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    currentTimesheetId?: string | null,
    connectionLogs?:  {
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
        workerConnectionLogsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    currentConnectionLogId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListWorkersQueryVariables = {
  id?: string | null,
  filter?: ModelWorkerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListWorkersQuery = {
  listWorkers?:  {
    __typename: "ModelWorkerConnection",
    items:  Array< {
      __typename: "Worker",
      id: string,
      name: string,
      timesheets?:  {
        __typename: "ModelTimesheetConnection",
        nextToken?: string | null,
      } | null,
      currentTimesheetId?: string | null,
      connectionLogs?:  {
        __typename: "ModelConnectionLogConnection",
        nextToken?: string | null,
      } | null,
      currentConnectionLogId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPromptQueryVariables = {
  id: string,
};

export type GetPromptQuery = {
  getPrompt?:  {
    __typename: "Prompt",
    id: string,
    prompt: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPromptsQueryVariables = {
  id?: string | null,
  filter?: ModelPromptFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListPromptsQuery = {
  listPrompts?:  {
    __typename: "ModelPromptConnection",
    items:  Array< {
      __typename: "Prompt",
      id: string,
      prompt: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTimesheetQueryVariables = {
  id: string,
};

export type GetTimesheetQuery = {
  getTimesheet?:  {
    __typename: "Timesheet",
    id: string,
    worker?:  {
      __typename: "Worker",
      id: string,
      name: string,
      timesheets?:  {
        __typename: "ModelTimesheetConnection",
        nextToken?: string | null,
      } | null,
      currentTimesheetId?: string | null,
      connectionLogs?:  {
        __typename: "ModelConnectionLogConnection",
        nextToken?: string | null,
      } | null,
      currentConnectionLogId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    startTime?: string | null,
    stopTime?: string | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
    workerTimesheetsId?: string | null,
  } | null,
};

export type ListTimesheetsQueryVariables = {
  id?: string | null,
  filter?: ModelTimesheetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListTimesheetsQuery = {
  listTimesheets?:  {
    __typename: "ModelTimesheetConnection",
    items:  Array< {
      __typename: "Timesheet",
      id: string,
      worker?:  {
        __typename: "Worker",
        id: string,
        name: string,
        currentTimesheetId?: string | null,
        currentConnectionLogId?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      startTime?: string | null,
      stopTime?: string | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      workerTimesheetsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetConnectionLogQueryVariables = {
  id: string,
};

export type GetConnectionLogQuery = {
  getConnectionLog?:  {
    __typename: "ConnectionLog",
    id: string,
    worker?:  {
      __typename: "Worker",
      id: string,
      name: string,
      timesheets?:  {
        __typename: "ModelTimesheetConnection",
        nextToken?: string | null,
      } | null,
      currentTimesheetId?: string | null,
      connectionLogs?:  {
        __typename: "ModelConnectionLogConnection",
        nextToken?: string | null,
      } | null,
      currentConnectionLogId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    timeContact?: string | null,
    timePrompt?: string | null,
    timeFinished?: string | null,
    prompt?: string | null,
    rating?: number | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
    workerConnectionLogsId?: string | null,
  } | null,
};

export type ListConnectionLogsQueryVariables = {
  id?: string | null,
  filter?: ModelConnectionLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListConnectionLogsQuery = {
  listConnectionLogs?:  {
    __typename: "ModelConnectionLogConnection",
    items:  Array< {
      __typename: "ConnectionLog",
      id: string,
      worker?:  {
        __typename: "Worker",
        id: string,
        name: string,
        currentTimesheetId?: string | null,
        currentConnectionLogId?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      timeContact?: string | null,
      timePrompt?: string | null,
      timeFinished?: string | null,
      prompt?: string | null,
      rating?: number | null,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
      workerConnectionLogsId?: string | null,
    } | null >,
    nextToken?: string | null,
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
    timesheets?:  {
      __typename: "ModelTimesheetConnection",
      items:  Array< {
        __typename: "Timesheet",
        id: string,
        startTime?: string | null,
        stopTime?: string | null,
        notes?: string | null,
        createdAt: string,
        updatedAt: string,
        workerTimesheetsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    currentTimesheetId?: string | null,
    connectionLogs?:  {
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
        workerConnectionLogsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    currentConnectionLogId?: string | null,
    createdAt: string,
    updatedAt: string,
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
    timesheets?:  {
      __typename: "ModelTimesheetConnection",
      items:  Array< {
        __typename: "Timesheet",
        id: string,
        startTime?: string | null,
        stopTime?: string | null,
        notes?: string | null,
        createdAt: string,
        updatedAt: string,
        workerTimesheetsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    currentTimesheetId?: string | null,
    connectionLogs?:  {
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
        workerConnectionLogsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    currentConnectionLogId?: string | null,
    createdAt: string,
    updatedAt: string,
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
    timesheets?:  {
      __typename: "ModelTimesheetConnection",
      items:  Array< {
        __typename: "Timesheet",
        id: string,
        startTime?: string | null,
        stopTime?: string | null,
        notes?: string | null,
        createdAt: string,
        updatedAt: string,
        workerTimesheetsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    currentTimesheetId?: string | null,
    connectionLogs?:  {
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
        workerConnectionLogsId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    currentConnectionLogId?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePromptSubscriptionVariables = {
  filter?: ModelSubscriptionPromptFilterInput | null,
};

export type OnCreatePromptSubscription = {
  onCreatePrompt?:  {
    __typename: "Prompt",
    id: string,
    prompt: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePromptSubscriptionVariables = {
  filter?: ModelSubscriptionPromptFilterInput | null,
};

export type OnUpdatePromptSubscription = {
  onUpdatePrompt?:  {
    __typename: "Prompt",
    id: string,
    prompt: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePromptSubscriptionVariables = {
  filter?: ModelSubscriptionPromptFilterInput | null,
};

export type OnDeletePromptSubscription = {
  onDeletePrompt?:  {
    __typename: "Prompt",
    id: string,
    prompt: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTimesheetSubscriptionVariables = {
  filter?: ModelSubscriptionTimesheetFilterInput | null,
};

export type OnCreateTimesheetSubscription = {
  onCreateTimesheet?:  {
    __typename: "Timesheet",
    id: string,
    worker?:  {
      __typename: "Worker",
      id: string,
      name: string,
      timesheets?:  {
        __typename: "ModelTimesheetConnection",
        nextToken?: string | null,
      } | null,
      currentTimesheetId?: string | null,
      connectionLogs?:  {
        __typename: "ModelConnectionLogConnection",
        nextToken?: string | null,
      } | null,
      currentConnectionLogId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    startTime?: string | null,
    stopTime?: string | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
    workerTimesheetsId?: string | null,
  } | null,
};

export type OnUpdateTimesheetSubscriptionVariables = {
  filter?: ModelSubscriptionTimesheetFilterInput | null,
};

export type OnUpdateTimesheetSubscription = {
  onUpdateTimesheet?:  {
    __typename: "Timesheet",
    id: string,
    worker?:  {
      __typename: "Worker",
      id: string,
      name: string,
      timesheets?:  {
        __typename: "ModelTimesheetConnection",
        nextToken?: string | null,
      } | null,
      currentTimesheetId?: string | null,
      connectionLogs?:  {
        __typename: "ModelConnectionLogConnection",
        nextToken?: string | null,
      } | null,
      currentConnectionLogId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    startTime?: string | null,
    stopTime?: string | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
    workerTimesheetsId?: string | null,
  } | null,
};

export type OnDeleteTimesheetSubscriptionVariables = {
  filter?: ModelSubscriptionTimesheetFilterInput | null,
};

export type OnDeleteTimesheetSubscription = {
  onDeleteTimesheet?:  {
    __typename: "Timesheet",
    id: string,
    worker?:  {
      __typename: "Worker",
      id: string,
      name: string,
      timesheets?:  {
        __typename: "ModelTimesheetConnection",
        nextToken?: string | null,
      } | null,
      currentTimesheetId?: string | null,
      connectionLogs?:  {
        __typename: "ModelConnectionLogConnection",
        nextToken?: string | null,
      } | null,
      currentConnectionLogId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    startTime?: string | null,
    stopTime?: string | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
    workerTimesheetsId?: string | null,
  } | null,
};

export type OnCreateConnectionLogSubscriptionVariables = {
  filter?: ModelSubscriptionConnectionLogFilterInput | null,
};

export type OnCreateConnectionLogSubscription = {
  onCreateConnectionLog?:  {
    __typename: "ConnectionLog",
    id: string,
    worker?:  {
      __typename: "Worker",
      id: string,
      name: string,
      timesheets?:  {
        __typename: "ModelTimesheetConnection",
        nextToken?: string | null,
      } | null,
      currentTimesheetId?: string | null,
      connectionLogs?:  {
        __typename: "ModelConnectionLogConnection",
        nextToken?: string | null,
      } | null,
      currentConnectionLogId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    timeContact?: string | null,
    timePrompt?: string | null,
    timeFinished?: string | null,
    prompt?: string | null,
    rating?: number | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
    workerConnectionLogsId?: string | null,
  } | null,
};

export type OnUpdateConnectionLogSubscriptionVariables = {
  filter?: ModelSubscriptionConnectionLogFilterInput | null,
};

export type OnUpdateConnectionLogSubscription = {
  onUpdateConnectionLog?:  {
    __typename: "ConnectionLog",
    id: string,
    worker?:  {
      __typename: "Worker",
      id: string,
      name: string,
      timesheets?:  {
        __typename: "ModelTimesheetConnection",
        nextToken?: string | null,
      } | null,
      currentTimesheetId?: string | null,
      connectionLogs?:  {
        __typename: "ModelConnectionLogConnection",
        nextToken?: string | null,
      } | null,
      currentConnectionLogId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    timeContact?: string | null,
    timePrompt?: string | null,
    timeFinished?: string | null,
    prompt?: string | null,
    rating?: number | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
    workerConnectionLogsId?: string | null,
  } | null,
};

export type OnDeleteConnectionLogSubscriptionVariables = {
  filter?: ModelSubscriptionConnectionLogFilterInput | null,
};

export type OnDeleteConnectionLogSubscription = {
  onDeleteConnectionLog?:  {
    __typename: "ConnectionLog",
    id: string,
    worker?:  {
      __typename: "Worker",
      id: string,
      name: string,
      timesheets?:  {
        __typename: "ModelTimesheetConnection",
        nextToken?: string | null,
      } | null,
      currentTimesheetId?: string | null,
      connectionLogs?:  {
        __typename: "ModelConnectionLogConnection",
        nextToken?: string | null,
      } | null,
      currentConnectionLogId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    timeContact?: string | null,
    timePrompt?: string | null,
    timeFinished?: string | null,
    prompt?: string | null,
    rating?: number | null,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
    workerConnectionLogsId?: string | null,
  } | null,
};
