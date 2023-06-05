export const dateValidation = (date: string) => {
  const dateValue = new Date(date);
  dateValue.setHours(0, 0, 0, 0);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Check if date is valid and check if the date is in the future
  // TODO: Handle timezones
  return dateValue.toJSON() && today <= dateValue;
};

// Only accept hex color code
export const colorValidation = (color: string) => {
  const hexRegexp = new RegExp(/(^#[1-9|A-F]*)/, 'gi');
  const [hexMatch] = color.match(hexRegexp) ?? [];

  return (color.length === 4 || color.length === 7) && hexMatch === color;
};

export const stringValidation = (name: string) => {
  return name.length > 0;
};

export const numberValidation = (cost: number) => {
  return cost > 0;
};
