export function createIdGenerator(prefix = "ID") {
  let currentId = 0;

  return function generateId() {
    currentId += 1;
    return `${prefix}-${currentId}`;
  };
}
