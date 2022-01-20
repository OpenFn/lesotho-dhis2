fn(state => {
  const orgunits = [
    "hfal93WttYV",
    "JEhqFsfXxTt",
    "HqJwxVQhfyM",
    "VSxknPhjR6o",
    "M7qFOnwmE3A",
    "Qq4jYe5tHnl",
    "mNzjvxYEHkq",
    "nFPxXeZftGm",
    "eWjt9Zl76FS",
    "uqh2OI3no6W",
    "aeBwvrjdh7m",
    "qnw9ul9mgww",
    "Kts15CHhP3h",
    "Er2eXRYQ5kD",
    "mdpCE7IYau0",
    "HR8JDs4Sae5",
    "GBeQB9YNmP4",
    "L4FwAUd37Wp",
    "KlCB0HQHtbg",
    "dJssgIzIiL4",
    "TBh00t5LnBZ",
    "lpjb08mkXcY",
    "soweCPFSM7L",
    "isI5LRdu80m",
  ]
  return { ...state, orgunits };
})

each("orgunits[*]",
  state => get('dataValueSets', {
    dataSet: 'bkBzJ3ETIBD',
    orgUnit: state.data,
    period: '202111',
    fields: '*',
  }, {}, state => {
    console.log("STATE", state)
  })(state)
);

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
