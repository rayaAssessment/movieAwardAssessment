import './App.css';
import Categories from './Components/Categories/Categories';
import { useEffect, useState } from 'react';
import api from './Api/Api';
import SubmitButton from './Components/SubmitButton/SubmitButton';

function App() {
  // State initialization and data fetching logic goes here.
  const [ballotData, setBallotData] = useState([]);
  const [selections, setSelections] = useState({});

  useEffect(() => {
    api.getBallotData()
      .then(data => {
        setBallotData(data.items);
      })
      .catch(error => {
        console.error('Error fetching ballot data:', error);
      });
  }, []);

  if (!ballotData) {
    return <div>Loading...</div>;
  }

  const handleNomineeClick = (categoryId, nomineeId) => {
    setSelections((prevSelections) => ({
      ...prevSelections,
      [categoryId]: nomineeId,
    }));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          AWARDS 2021
        </h1>

      </header>
      {console.log(ballotData)}
      {console.log(selections)}
      {ballotData?.map((category) => (
        <Categories key={category.id} category={category} handleNomineeClick={handleNomineeClick} selections={selections}
        />
      ))}
      <SubmitButton />

    </div>
  );
}

export default App;
