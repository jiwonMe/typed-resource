function removePropFromObject<T extends NonNullable<unknown>>(
  obj: T,
  prop: keyof T
): NonNullable<unknown> {
  const newObj = { ...obj };
  delete newObj[prop];
  return newObj as Omit<T, typeof prop>;
}

function removePropsFromObject<T extends NonNullable<unknown>>(
  obj: T,
  props: (keyof T)[]
): NonNullable<unknown> {
  const newObj = { ...obj };
  props.forEach((prop) => {
    delete newObj[prop];
  });
  return newObj as Omit<T, (typeof props)[number]>;
}

export { removePropFromObject, removePropsFromObject };
