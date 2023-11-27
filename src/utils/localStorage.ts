export const getLocalStorage = (key: string) => {
  const data = localStorage.getItem(key) || "{}";
  return JSON.parse(data);
};

export const setLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};
