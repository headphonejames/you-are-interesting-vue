// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Staff, Worker, Timesheet, ConnectionLog } = initSchema(schema);

export {
  Staff,
  Worker,
  Timesheet,
  ConnectionLog
};