export let actions: {[key: string]: any} = {};

export const setAction = (name: string, action: any) => {
  actions[name] = action;
};

export const attachKeyboard = () => {
  window.addEventListener("keydown", handleKeyDown);
};

export const removeKeyboard = () => {
  window.removeEventListener("keydown", handleKeyDown);
};

export const clearBindings = () => {
  actions = {};
};

export const handleKeyDown = (event: KeyboardEvent) => {
  if (event.code in actions) {
    actions[event.code]();
  }
};
