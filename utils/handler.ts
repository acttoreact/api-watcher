import chalk from 'chalk';

import { Handler } from '../model/watcher';

import out from '../tools/out';
import { fullPath } from '../tools/colors';

/**
 * Main handler for watcher events
 * @param targetPath main path containing both `api` and `model` folders
 * @param eventName event type
 * @param eventPath specific event path (absolute)
 */
const handler: Handler = async (_targetPath, eventName, eventPath): Promise<void> => {
  out.verbose(`Watcher handler. Event ${chalk.italic(eventName)} on file ${fullPath(eventPath)}`);
};

export default handler;