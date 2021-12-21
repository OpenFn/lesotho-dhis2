fn(state => {
  console.log(
    'For testing only, see how the final state of the previous',
    'job becomes the initial state for this job:',
    state.data
  );
});

create('dataValueSets', state.data);