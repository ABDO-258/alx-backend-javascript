export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) throw Error('Cannot process');
  const groceries = map.forEach((element, key, newMap) => {
    if (element === 1) newMap.set(key, 100);
  });
  return groceries;
}
