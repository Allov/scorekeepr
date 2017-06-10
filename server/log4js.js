import log4js from 'log4js';

const appenders = [
  { type: 'console' },
];

if (process.env.NODE_ENV === 'production') {
  appenders.push({ type: 'file', filename: 'scorekeepr.log' });
}

log4js.configure({
  appenders,
});

const logger = log4js.getLogger();

export default logger;
