import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

// recoil 상태를 사용하는 컴포넌트는 RecoilRoot가 필요하다. 루트 컴포넌트에 RecoilRoot를 넣는다.
// RecoilRoot는 여러개가 같이 존재할 수 있고, 각각이 독립적인 atom 상태의 providers/store가 된다. atom은 각 루트에 따라 다른 값을 갖게 되는 것이다.
