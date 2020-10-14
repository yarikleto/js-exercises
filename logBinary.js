const logBinary = n => {
  const result = [];
  for (let i = 31; i >= 0; --i) result.push(n >>> i & 1);
  return result;
};
