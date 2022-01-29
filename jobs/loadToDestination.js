fn(state => {
  console.log(state.data);
  return state;
});

// Option 1, use the bulk create endpoint.
create('dataValueSets', state.data.dataElements);

// Option 2, perform a "create" on each individual dataElement.
// each(
//   dataPath('dataElements[*]'),
//   create('dataValueSets', state => state.data)
// );