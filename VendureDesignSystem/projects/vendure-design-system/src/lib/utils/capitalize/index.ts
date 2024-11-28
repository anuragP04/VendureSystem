// Function to capitalize a string
const capitalize = (value?: string) => {
  if (value && typeof value === "string") {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
  return "";
};

export { capitalize };
