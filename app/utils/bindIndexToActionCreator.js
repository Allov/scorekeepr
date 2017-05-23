export const bindIndexToActionCreator =
  (actionCreator, index) =>
    (...args) =>
      Object.assign(actionCreator(...args), { index });
