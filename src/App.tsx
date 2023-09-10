import { FC } from 'react';
import { GenericList } from './components/GenericList/GenericList';
import { withPropsLogging } from './HOC/withPropsLogging';

import './style.css';

type TButtonProps = {
  id: number;
};

type TButtonsWrapperProps = {
  data: Array<TButtonProps>;
};

const Button = ({ id }: TButtonProps) => <div key={id}>ID - {id}</div>;

const ButtonsWrapper = ({ data }: TButtonsWrapperProps) => {
  return <GenericList data={data} renderItem={Button} />;
};

const ButtonsWrapperLogger = withPropsLogging(ButtonsWrapper);

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <ButtonsWrapperLogger
        data={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]}
      />
    </div>
  );
};
