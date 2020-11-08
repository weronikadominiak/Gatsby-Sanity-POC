import React, { useState } from 'react';
import Layout from '../components/layout';

const Playground = () => {
  const otherText = useState('this is some text');

  const InputCompoennt = ({ text }) => (
    <div>
      <h2>{text}</h2>
      <input type="text" />
    </div>
  );

  return (
    <Layout>
      <h1>This is React playground</h1>

      <ToggleComponent />
      <InputCompoennt text={otherText} />
    </Layout>
  );
};

const ToggleComponent = () => {
  const [toggleText, setToggleText] = useState(true);

  return (
    <div>
      <button onClick={() => setToggleText(!toggleText)}>Click me</button>
      <h2>Toggle Component</h2>
      {toggleText ? 'this is true' : 'this is false'}
    </div>
  );
};

export default Playground;
