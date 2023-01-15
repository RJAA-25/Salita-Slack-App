export const setLocal = (name, obj) => {
  localStorage.setItem(name, JSON.stringify(obj));
};

export const getLocal = (name) => {
  return JSON.parse(localStorage.getItem(name));
};
export const removeLocal = (name) => {
  localStorage.removeItem(name);
};
