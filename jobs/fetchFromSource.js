get('dataValueSets', {
  dataSet: 'bkBzJ3ETIBD',
  orgUnit: 'hfal93WttYV',
  period: '202111',
  children: 'true',
});

fn(state => {
  console.log('For testing only... view the output');
  console.log(state.data);
  return state;
});
