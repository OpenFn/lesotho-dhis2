fn(state => {
  const orgunits = [
    "hfal93WttYV",
    "JEhqFsfXxTt",
    // "HqJwxVQhfyM",
    // "VSxknPhjR6o",
    // "M7qFOnwmE3A",
    // "Qq4jYe5tHnl",
    // "mNzjvxYEHkq",
    // "nFPxXeZftGm",
    // "eWjt9Zl76FS",
    // "uqh2OI3no6W",
    // "aeBwvrjdh7m",
    // "qnw9ul9mgww",
    // "Kts15CHhP3h",
    // "Er2eXRYQ5kD",
    // "mdpCE7IYau0",
    // "HR8JDs4Sae5",
    // "GBeQB9YNmP4",
    // "L4FwAUd37Wp",
    // "KlCB0HQHtbg",
    // "dJssgIzIiL4",
    // "TBh00t5LnBZ",
    // "lpjb08mkXcY",
    // "soweCPFSM7L",
    // "isI5LRdu80m",
  ]
  return { ...state, dataSet: 'bkBzJ3ETIBD', fields: '*', period: '202111', orgunits, dataValueSets: []};
})

each("orgunits[*]", get('dataValueSets', {
  dataSet: state => state.dataSet,
  orgUnit: state => state.data,
  period: state => state.period,
  fields: state => state.fields,
}, {}, state => ({ ...state, dataValueSets: [ ...state.dataValueSets, state.data]}));

fn(state => {
  console.log('For testing only... view the output');
  console.log(state.dataValueSets);
  return state;
});
