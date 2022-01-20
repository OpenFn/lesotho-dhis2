get('dataValueSets', {
  dataSet: 'pBOMPrpg1QX',
  orgUnit: 'DiszpKrYNg8',
  period: '201401',
  fields: '*',
})

// get('dataValueSets', {
//   dataSet: 'ETYQ9xrOgCI',
//   orgUnit: 'hfal93WttYV',
//   period: '202111',
//   children: 'true',
// });

fn(state => {
  console.log('For testing only... view the output');
  console.log(state.data);
  return state;
});
