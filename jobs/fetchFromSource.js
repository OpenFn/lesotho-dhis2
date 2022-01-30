fn(state => {
  // NOTE: this defines which dataElements we want to pull and labels them.
  const categoryMap = {
    ETYQ9xrOgCI: 'PITC',
    tsVPADeBpHd: 'CITC',
    BMiVQoY0NzQ: 'Self-Test',
  };

  // NOTE: this combines multiple disaggregations into a single age/gender group
  const agGroupMap = {
    binVVrXjUoo: '15/19/M',
    vfLYjpOKUf6: '15/19/M',
    XlGgWHa5Er0: '15/19/F',
    H6gRO6Fk2z5: '15/19/F',
    dn857qxCLjI: '20/24/M',
    oiMr7kc4xQ4: '20/24/M',
    kuaIs6PmO6t: '20/24/F',
    dnENZnNWDsn: '20/24/F',
    EfnRUWLUFgM: '25/29/M',
    C6m6OCR7m6G: '25/29/M',
    yBiyPmKY8Ys: '25/29/F',
    dOp6s9tOpaQ: '25/29/F',
    e82ZBAX5mwf: '30/34/M',
    drpUCVywbI0: '30/34/M',
    ascYulb9hGt: '30/34/F',
    hDYiOpgnUmE: '30/34/F',
    yX8Jw94a50t: '35/39/M',
    TnfsTY77mJy: '35/39/M',
    jy86glDoMLO: '35/39/F',
    EAbeHR61ft1: '35/39/F',
    GLyrxm7RamK: '40/44/M',
    RJSlhFTTNXI: '40/44/M',
    hAyTxAXdvJd: '40/44/F',
    nQrR1Zgq2gr: '40/44/F',
    cICl8QRiG2M: '45/49/M',
    Yg1cxATwSlO: '45/49/M',
    sDN7dWzFX89: '45/49/F',
    NTCqCfaP80J: '45/49/F',
    Q4lUeDf2r7z: '50+/ /M',
    mbz798qghl6: '50+/ /M',
    mt9SWhh1Cre: '50+/ /F',
    yXvU2aw5wyC: '50+/ /F',
  };

  // NOTE: this links the source age/gender group to the destination categoryOptionCombo
  const destGroupMap = {
    '15/19/M': 'G8oqaQnAmQz',
    '15/19/F': 'Ia5XrRgOoZc',
    '20/24/M': 'Wom5jBgNz3u',
    '20/24/F': 'IjAGV77GfF7',
    '25/29/M': 'PDD2n7mrfsl',
    '25/29/F': 'xzKEwR4tzSx',
    '30/34/M': 'F6owQuwE6Wy',
    '30/34/F': 'VPSMkEfibBD',
    '35/39/M': 'nmlGhaT89NX',
    '35/39/F': 'NacBotlhYAT',
    '40/44/M': 'dVV2GGALZwN',
    '40/44/F': 'cC26VA39W5n',
    '45/49/M': 'YIBJdSpwf9U',
    '45/49/F': 'vnrdkNkVJLc',
    '50+/ /M': 'AfFHNHpkv4M',
    '50+/ /F': 'ZazrL0yVNem',
  };

  return {
    ...state,
    categoryMap,
    agGroupMap,
    destGroupMap,
  };
});

get('dataValueSets', {
  orgUnit: [
    'hfal93WttYV',
    'JEhqFsfXxTt',
    // 'HqJwxVQhfyM',
    // 'VSxknPhjR6o',
    // 'M7qFOnwmE3A',
    // 'Qq4jYe5tHnl',
    // 'mNzjvxYEHkq',
    // 'nFPxXeZftGm',
    // 'eWjt9Zl76FS',
    // 'uqh2OI3no6W',
    // 'aeBwvrjdh7m',
    // 'qnw9ul9mgww',
    // 'Kts15CHhP3h',
    // 'Er2eXRYQ5kD',
    // 'mdpCE7IYau0',
    // 'HR8JDs4Sae5',
    // 'GBeQB9YNmP4',
    // 'L4FwAUd37Wp',
    // 'KlCB0HQHtbg',
    // 'dJssgIzIiL4',
    // 'TBh00t5LnBZ',
    // 'lpjb08mkXcY',
    // 'soweCPFSM7L',
    // 'isI5LRdu80m',
  ],
  dataSet: 'bkBzJ3ETIBD',
  period: '202111',
  fields: '*',
  children: true,
});

fn(state => {
  const { categoryMap, agGroupMap, destGroupMap } = state;
  const { dataValues } = state.data;

  const translated = dataValues
    .map(x => ({ ...x, category: categoryMap[x.dataElement] }))
    .filter(x => x.category)
    .map(x => ({ ...x, agGroup: agGroupMap[x.categoryOptionCombo] }))
    .filter(x => x.agGroup)
    .map(x => ({ ...x, destCatCombo: destGroupMap[x.agGroup] }))
    .map(x => ({ ...x, value: parseInt(x.value) }));

  const newDataValues = {};

  translated.forEach(dv => {
    const { orgUnit, value, period, destCatCombo } = dv;
    const groupName = `${dv.orgUnit}${dv.agGroup}`;
    const prevValue =
      (newDataValues[groupName] && newDataValues[groupName].value) || 0;

    newDataValues[groupName] = {
      dataSet: 'Zoi4dBISyyV',
      dataElement: 'Yf8WlTHmR6L',
      attributeOptionCombo: 'qZPpgD4Ykqh',
      categoryOptionCombo: destCatCombo,
      value: prevValue + value,
      orgUnit,
      period,
    };
  });

  return { ...state, data: { dataValues: Object.values(newDataValues) } };
});
