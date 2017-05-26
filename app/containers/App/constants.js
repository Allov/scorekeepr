/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOADING = 'scorekeepr/App/LOADING_DOING';
export const LOADING_SUCCESS = 'scorekeepr/App/LOADING_SUCCESS';
export const ERROR = 'scorekeepr/App/ERROR';
export const DISMISS_ERROR = 'scorekeepr/App/DISMISS_ERROR';
export const NOT_FOUND = 'scorekeepr/App/NOT_FOUND';
export const DEFAULT_LOCALE = 'en';
