import { FC, PropsWithChildren, useState } from 'react';

import './style.css';

const ButtonsWrapper = ({ children }: PropsWithChildren) => {
  console.log('From Parent');
  const [amount, setAmount] = useState(0);
  return (
    <>
      {amount}
      <button onClick={() => setAmount(amount + 1)}>+1</button>
      {children}
    </>
  );
};

const Test = () => {
  console.log('From Children');
  return <div>Children</div>;
};

export const App = () => {
  return (
    <ButtonsWrapper>
      <Test />
    </ButtonsWrapper>
  );
};
