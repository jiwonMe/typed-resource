function removePropFromObject<T extends Object>(obj: T, prop: keyof T): Object {
  const newObj = { ...obj };
  delete newObj[prop];
  return newObj as Omit<T, typeof prop>;
}

function removePropsFromObject<T extends Object>(
  obj: T,
  props: (keyof T)[]
): Object {
  const newObj = { ...obj };
  props.forEach((prop) => {
    delete newObj[prop];
  });
  return newObj as Omit<T, (typeof props)[number]>;
}

export { removePropFromObject, removePropsFromObject };
