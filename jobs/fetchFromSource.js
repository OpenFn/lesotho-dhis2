fn(state => {
  const groupBy = (arr, key) => {
    return arr.reduce((rv, x) => {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

  const orgUnits = [
    'hfal93WttYV',
    // 'JEhqFsfXxTt',
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
  ];

  const categoryMap = {
    ETYQ9xrOgCI: 'PITC',
    tsVPADeBpHd: 'CITC',
    BMiVQoY0NzQ: 'Self-Test',
  };

  const agGroupMap = {
    binVVrXjUoo: '15/19/M',
    vfLYjpOKUf6: '15/19/M',
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
  return { ...state, groupBy, orgUnits, categoryMap, agGroupMap };
});

each(
  'orgUnits[*]',
  get(
    'dataValueSets',
    {
      orgUnit: state => state.data,
      dataSet: 'bkBzJ3ETIBD',
      period: '202111',
      fields: '*',
      children: true,
    },
    {},
    state => {
      const { groupBy, categoryMap, agGroupMap } = state;
      const { dataValues } = state.data;

      const translated = dataValues
        .map(x => ({ ...x, category: categoryMap[x.dataElement] }))
        .filter(x => x.category)
        .map(x => ({ ...x, agGroup: agGroupMap[x.categoryOptionCombo] }))
        .filter(x => x.agGroup);

      const grouped = groupBy(translated, 'agGroup');

      Object.keys(grouped).forEach(cat => {
        grouped[cat] = groupBy(grouped[cat], 'category');
      });

      return { ...state, data: grouped };
    }
  )
);

fn(state => {
  console.log('For testing only:' state.data);
  // TODO: @Elias, sum these values inside the groups...
  const countsByGroup = { '20/24/M': 12, '20/24/M': 873 }
  return { ...state, data: countsByGroup };
})