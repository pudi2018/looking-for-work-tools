const ADD_GUM = '加机关枪'
const REMOVE_GUM = '减机关枪'
export function counter (state = 10, action) {
  switch (action.type) {
    case ADD_GUM:
      return state + 1
    case REMOVE_GUM:
      return state - 1
    default:
      return 10
  }
}

export function addGUM () {
  return {type: ADD_GUM}
}
export function removeGUM () {
  return {type: REMOVE_GUM}
}
export function addGunAsync () {
  return dispatch => {
    setTimeout(() => {
      // 异步结束后手动执行
      dispatch(addGUM())
    }, 2000)
  }
}
