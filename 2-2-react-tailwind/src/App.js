import React from 'react';
import ResortsExample from './components/ResortsExample';
import InputField from './components/InputField';
import {ReactComponent as Heart} from './assets/icon-heart.svg';
import {ReactComponent as Star} from './assets/icon-star.svg';

function App() {
  return (
    <div className="p-20">
      <InputField iconStart={Heart} iconEnd={Star} />
    </div>
  );
}

export default App;
