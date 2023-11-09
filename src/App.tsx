import { useMutation, useQuery } from '@apollo/client';
import './App.css';
import { useState } from 'react';
import { FIND, UPDATE } from './graphql/demo';

const App = () => {
  const { loading, data } = useQuery(FIND, {
    variables: {
      id: '22820297-e288-42ba-aadf-3a4062c5c3cb',
    },
  });
  const [update] = useMutation(UPDATE);
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');

  const onChangeNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onChangeDescHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDesc(e.target.value);
  };
  const onClickHandler = () => {
    update({
      variables: {
        id: '22820297-e288-42ba-aadf-3a4062c5c3cb',
        params: {
          desc,
          name,
        },
      },
    });
  };
  return (
    <div>
      <p>
        data:
        {' '}
        {JSON.stringify(data)}
      </p>
      <p>{`${loading}`}</p>

      <p>
        name:
        <input type="text" onChange={onChangeNameHandler} />
      </p>
      <p>
        desc:
        <input type="text" onChange={onChangeDescHandler} />
      </p>
      <p>
        <button type="button" onClick={onClickHandler}>更新</button>
      </p>
    </div>
  );
};
export default App;
