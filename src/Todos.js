import { atom } from 'recoil';

export const todosState = atom({
  key: 'todos', // unique ID
  default: [], // default value
});

// atom은 상태이다. 리액트의 state,props와 비슷하지만 리덕스의 store의 상태들처럼 구독할 수 있고 atom의 상태가 변경되면 구독하고 있는 컴포너트들이 다시 렌더링되면서 변경된 atom의 상태를 공유한다.
