get('dataValueSets', {
  dataSet: 'ETYQ9xrOgCI', // Is this the desired data set?
  orgUnit: 'hfal93WttYV', // Three org units?
  period: '202111', // What period do you want?
  children: 'true',
});

fn(state => {
  console.log('For testing only... view the output');
  console.log(state.data);
  return state;
});
