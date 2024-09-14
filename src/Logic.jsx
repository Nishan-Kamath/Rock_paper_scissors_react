import React, { useState } from 'react';

function Logic(){
    const [userChoice, setUserChoice] = useState('');
    const [computerChoice, setComputerChoice] = useState('');
    const [result, setResult] = useState('');
    const [score, setScore] = useState({ user: 0, computer: 0 });

    const choices = ['rock', 'paper', 'scissors'];

  // Function to handle the player's choice
    function handleUserChoice(choice) {
        setUserChoice(choice);
    
        const computerSelection = choices[Math.floor(Math.random() * 3)];
        setComputerChoice(computerSelection);
    
        determineWinner(choice, computerSelection);
    }

  // Function to determine the winner based on user and computer choices
  function determineWinner(user, computer) {
    if (user === computer) {
      setResult("It's a tie!");
    } else if (
      (user === 'rock' && computer === 'scissors') ||
      (user === 'scissors' && computer === 'paper') ||
      (user === 'paper' && computer === 'rock')
    ) {
      setResult('You win!');
      setScore({ ...score, user: score.user + 1 });
    } else {
      setResult('Computer wins!');
      setScore({ ...score, computer: score.computer + 1 });
    }
  }

  return (
    <div className="App">
      <h1>Rock Paper Scissors</h1>

      {/* Score display */}
      <div className="score">
        <h2>Score</h2>
        <p>User: {score.user}</p>
        <p>Computer: {score.computer}</p>
      </div>

      {/* Buttons for selecting Rock, Paper, or Scissors */}
      <div className="choices">
        {choices.map((choice) => (
          <button key={choice} onClick={() => handleUserChoice(choice)}>
            {choice.charAt(0).toUpperCase() + choice.slice(1)}
          </button>
        ))}
      </div>

      {/* Display the user and computer choices */}
      <div className="choices-display">
        <p>You chose: {userChoice || '...'}</p>
        <p>Computer chose: {computerChoice || '...'}</p>
      </div>

      {/* Display the result */}
      <div className="result">
        <h2>{result}</h2>
      </div>
    </div>
  );
}

export default Logic;