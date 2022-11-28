import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type WorkerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TimesheetMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ConnectionLogMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerWorker = {
  readonly id: string;
  readonly name: string;
  readonly logIndex?: number | null;
  readonly timeSheetIndex?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyWorker = {
  readonly id: string;
  readonly name: string;
  readonly logIndex?: number | null;
  readonly timeSheetIndex?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Worker = LazyLoading extends LazyLoadingDisabled ? EagerWorker : LazyWorker

export declare const Worker: (new (init: ModelInit<Worker, WorkerMetaData>) => Worker) & {
  copyOf(source: Worker, mutator: (draft: MutableModel<Worker, WorkerMetaData>) => MutableModel<Worker, WorkerMetaData> | void): Worker;
}

type EagerTimesheet = {
  readonly id: string;
  readonly startTime?: string | null;
  readonly stopTime?: string | null;
  readonly notes?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTimesheet = {
  readonly id: string;
  readonly startTime?: string | null;
  readonly stopTime?: string | null;
  readonly notes?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Timesheet = LazyLoading extends LazyLoadingDisabled ? EagerTimesheet : LazyTimesheet

export declare const Timesheet: (new (init: ModelInit<Timesheet, TimesheetMetaData>) => Timesheet) & {
  copyOf(source: Timesheet, mutator: (draft: MutableModel<Timesheet, TimesheetMetaData>) => MutableModel<Timesheet, TimesheetMetaData> | void): Timesheet;
}

type EagerConnectionLog = {
  readonly id: string;
  readonly timeContact?: string | null;
  readonly timePrompt?: string | null;
  readonly timeFinished?: string | null;
  readonly prompt?: string | null;
  readonly rating?: number | null;
  readonly notes?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyConnectionLog = {
  readonly id: string;
  readonly timeContact?: string | null;
  readonly timePrompt?: string | null;
  readonly timeFinished?: string | null;
  readonly prompt?: string | null;
  readonly rating?: number | null;
  readonly notes?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ConnectionLog = LazyLoading extends LazyLoadingDisabled ? EagerConnectionLog : LazyConnectionLog

export declare const ConnectionLog: (new (init: ModelInit<ConnectionLog, ConnectionLogMetaData>) => ConnectionLog) & {
  copyOf(source: ConnectionLog, mutator: (draft: MutableModel<ConnectionLog, ConnectionLogMetaData>) => MutableModel<ConnectionLog, ConnectionLogMetaData> | void): ConnectionLog;
}