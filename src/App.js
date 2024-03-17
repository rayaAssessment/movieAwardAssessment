import './App.css';
import Categories from './Components/Categories/Categories';
import { useEffect, useState } from 'react';
import api from './Api/Api';
import SubmitButton from './Components/SubmitButton/SubmitButton';
import SuccessModal from './Components/Modals/SuccessModal';
import ErrorModal from './Components/Modals/ErrorModal';

function App() {
  // State initialization and data fetching logic goes here.
  const [ballotData, setBallotData] = useState([]);
  const [selections, setSelections] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showPromptModal, setShowPromptModal] = useState(false);


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

  const handleSubmitBallot = (selections) => {
    // Check if any selections have been made
    const hasSelections = Object.keys(selections).length > 0;

    if (!hasSelections) {
      setShowPromptModal(true);
    } else {
      setShowSuccessModal(true);
    }
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
      <SubmitButton selections={selections} handleSubmitBallot={handleSubmitBallot} />
     { showSuccessModal && <SuccessModal onClose={()=>{setShowSuccessModal(false)}}/>}
     { showPromptModal && <ErrorModal  onClose={()=>{setShowPromptModal(false)}}/>}

    </div>
  );
}

export default App;
