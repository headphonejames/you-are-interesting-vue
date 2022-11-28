// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Worker, Timesheet, ConnectionLog } = initSchema(schema);

export {
  Worker,
  Timesheet,
  ConnectionLog
};