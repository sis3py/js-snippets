function deepFlatten() {
  return arr.reduce(
    (res, item) => [
      ...res,
      ...(Array.isArray(item) ? steamrollArray(item) : [item])
    ],
    []
  );
}
