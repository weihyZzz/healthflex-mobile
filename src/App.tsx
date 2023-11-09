import { useQuery } from '@apollo/client';
import './App.css';
import { FIND } from './graphql/demo';

const App = () => {
  const { loading, data } = useQuery(FIND, {
    variables: {
      id: '22820297-e288-42ba-aadf-3a4062c5c3cb',
    },
  });
  return (
    <div>
      <p>
        data:
        {' '}
        {JSON.stringify(data)}
      </p>
      <p>{`${loading}`}</p>
    </div>
  );
};
export default App;
