function deepFlatten(arr) {
  return arr.reduce(
    (res, item) => [
      ...res,
      ...(Array.isArray(item) ? deepFlatten(item) : [item])
    ],
    []
  );
}
