each(
  dataPath('dataElements[*]'),
  create('dataValueSets', state => state.data)
);
