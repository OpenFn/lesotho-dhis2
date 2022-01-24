fn(state => {
  const categoriesMapping = {
    ETYQ9xrOgCI: 'PITC',
    tsVPADeBpHd: 'CITC',
    BMiVQoY0NzQ: 'Self-Test'
  }
  
  const getCategory = dataElement => {
    const categories = Object.keys(categoriesMapping)
    if (categories.includes(dataElement)) {
      return categoriesMapping[dataElement]
    }
    return ''
  }
  
  const dissegregationsMapping = {
    'binVVrXjUoo/vfLYjpOKUf6': '15/19/M',
    'XlGgWHa5Er0/H6gRO6Fk2z5': '15/19/F',
    'dn857qxCLjI/oiMr7kc4xQ4': '20/24/M',
    'kuaIs6PmO6t/dnENZnNWDsn': '20/24/F',
    'EfnRUWLUFgM/C6m6OCR7m6G': '25/29/M',
    'yBiyPmKY8Ys/dOp6s9tOpaQ': '25/29/F',
    'e82ZBAX5mwf/drpUCVywbI0': '30/34/M',
    'ascYulb9hGt/hDYiOpgnUmE': '30/34/F',
    'yX8Jw94a50t/TnfsTY77mJy': '35/39/M',
    'jy86glDoMLO/EAbeHR61ft1': '35/39/F',
    'GLyrxm7RamK/RJSlhFTTNXI': '40/44/M',
    'hAyTxAXdvJd/nQrR1Zgq2gr': '40/44/F',
    'cICl8QRiG2M/Yg1cxATwSlO': '45/49/M',
    'sDN7dWzFX89/NTCqCfaP80J': '45/49/F',
    'Q4lUeDf2r7z/mbz798qghl6': '50+/ /M',
    'mt9SWhh1Cre/yXvU2aw5wyC': '50+/ /F',
  }
  
  const getDissegration = categoryOptionCombo => {
    const dissegregations = Object.keys(dissegregationsMapping)
    for (let dissegregation of dissegregations) {
      if (dissegregation.split("/").includes(categoryOptionCombo)) {
        return dissegregationsMapping[dissegregation]
      }
    }
    return ''
  }
  return { ...state, getCategory, getDissegration };
})

fn(state => {
  const orgunits = [
    "hfal93WttYV",
    "JEhqFsfXxTt",
    "HqJwxVQhfyM",
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
  return { ...state, dataSet: 'bkBzJ3ETIBD', fields: '*', period: '202111', orgunits, dataValues: []};
})

each("orgunits[*]", get('dataValueSets', {
  dataSet: state => state.dataSet,
  orgUnit: state => state.data,
  period: state => state.period,
  fields: state => state.fields,
  children: true
}, {}, state => {
  console.log(state.dataValues)
  console.log('------------------------------------------------------------------------')
  return { ...state, dataValues: [ ...state.dataValues, ...state.data.dataValues]}
}));

fn(state => {
  let categories = {}
  
  for (let dataValue of state.dataValues) {
    const dataElement = dataValue.dataElement
    const categoryOptionCombo = dataValue.categoryOptionCombo
    const category = state.getCategory(dataElement)
    const dissegregation = state.getDissegration(categoryOptionCombo)
    if (category !== '' && dissegregation !== '') {
      categories[category] = categories[category] || {};
      categories[category][dissegregation] = categories[category][dissegregation] || []
      categories[category][dissegregation].push(dataValue)
    }
  }
  
  console.log(JSON.stringify(categories, null, 2))
  return state;
})
