export const actions: {[key: string]: any} = {};

export const setAction = (name: string, action: any) => {
  actions[name] = action;
};

export const created = () => {
  window.addEventListener("keydown", handleKeyDown);
};

export const removed = () => {
  window.removeEventListener("keydown", handleKeyDown);
};

export const handleKeyDown = (event: KeyboardEvent) => {
  if (event.code in actions) {
    actions[event.code]();
  }
};
