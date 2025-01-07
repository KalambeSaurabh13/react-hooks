import logo from './logo.svg';
import './App.css';
import UseState from './hooks/1.useState/UseState';
import Rakuten from './Que/Rakuten';
import UseEffect from './hooks/2.useEffect/UseEffect';

import UseRef from './hooks/5.useRef/UseRef';
import UseId from './hooks/6.UseId/UseId';
import UseReducer from './hooks/7.useReducer/UseReducer';
import ReactMemo from './hooks/3.useMemo/ReactMemo';
import UseMemo from './hooks/3.useMemo/UseMemo';
import UseCallback from './hooks/8.useCallback/UseCallback';

function App() {
  return (
    <div className="App">
      {/* <UseState /> */}
      {/* <UseEffect /> */}
      {/* <ReactMemo /> */}
      {/* <UseMemo/> */}
      {/* <UseRef /> */}
      {/* <UseId /> */}
      {/* <UseReducer /> */}
      <UseCallback />
    </div>
  );
}

export default App;
