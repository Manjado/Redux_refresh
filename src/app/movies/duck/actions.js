import types from './types';

const add = item => ({
  type: types.ADD_MOVIE,
  item
});

const reset = item => ({
  types: types.RESET_MOVIE,
  item
});

export default {
  add,
  reset
};
