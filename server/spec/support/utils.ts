export const dateFormatter = (date: Date) => {
  const year = date.getFullYear();

  // Month start at index 0
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}-${month}-${day}`;
};
