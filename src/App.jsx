import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import Accordion from './todolist/Accordion';
// import LoginForm from './LoginForm/LoginForm';
// import TaskList from './Task/TaskList';
// import RegistrationForm from './Register/RegistrationForm';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import TicTacToe from './TicTacToe/TicTacToe'; // Import the TicTacToe component
import Carousel from './Carousel/Carousel'; // Import the Carousel component
import Navbar from './Navbar';
// import ProductList from './Products/ProductList';
// import CheckoutForm from './CheckoutForm/CheckoutForm';
// import About from './About';
// import ProductList from './Products/ProductList';
// import Navbar from './Navbar'; // Import the Navbar component

// Your existing App component code...


const images = [
  'https://fastly.picsum.photos/id/908/200/200.jpg?hmac=CovMVsq4EkU03tnOxNLyxYsLlemPPHBizxcnmaHaRcU',
  'https://fastly.picsum.photos/id/136/200/200.jpg?hmac=m5kYXq4zQR742H2cLvYw6nX1cJ65qKBb-kY84CbGCaQ',
  'https://fastly.picsum.photos/id/1042/200/200.jpg?hmac=mQH7yDLNQEw36Ill40iNnDXBhGWD744fWhQHOi2oJcA',
  'https://fastly.picsum.photos/id/786/200/300.webp?hmac=kbpRAPv5gYLji6157ovfRl-uwd1pt1aX0pJqwGDJZdQ',
  'https://fastly.picsum.photos/id/906/200/200.jpg?hmac=jQ-m5xgglMRMPvZhK3539qEkxPG1FVUae6AeV_HKQfg',
  'https://fastly.picsum.photos/id/162/200/300.jpg?hmac=j8KV0LSPmue8af4dmytyFqhoPlvcsudNYFaB_i5DINs'
];

const App = () => {
  const [names, setNames] = useState([
    { name: 'Eyal', isActive: true },
    { name: 'Sol', isActive: false },
    { name: 'Paz', isActive: true },
  ]);
  const [newName, setNewName] = useState('');

  const handleInputChange = (event) => {
    setNewName(event.target.value);
  };

  const addName = () => {
    if (newName.trim() !== '') {
      setNames([...names, { name: newName, isActive: true }]);
      setNewName('');
    }
  };

  const deleteName = (index) => {
    setNames(names.filter((_, i) => i !== index));
  };

  const toggleNameStatus = (index) => {
    setNames((prevNames) =>
      prevNames.map((name, i) =>
        i === index ? { ...name, isActive: !name.isActive } : name
      )
    );
  };

  const Counter = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const incrementIndex = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % names.length);
    };

    const decrementIndex = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + names.length) % names.length);
    };

    const studentColor = names[currentIndex].isActive ? '' : '';
    const studentPosition = currentIndex + 1;
    const studentMessage = studentPosition % 2 === 0 ? 'זוגי' : 'אי-זוגי';
    const messageColor = studentPosition % 2 === 0 ? '' : '';

    return (
      <div>
        <h2 style={{ color: studentColor }}>Names Counter: {names[currentIndex].name}</h2>
        <p style={{ color: messageColor }}>Student Position: {studentPosition} ({studentMessage})</p>
        <center>
          <button onClick={incrementIndex}>Next Name</button>
        </center>
        <br />
        <center>
          <button onClick={decrementIndex}>Previous Name</button>
        </center>
      </div>
    );
  };



  return (
    <div style={styles.container}>
      <Navbar></Navbar>
    
      {/* <h1 style={{ color: 'blue' }}>PazM React App</h1> */}
      <Counter />
      <br />
      <Accordion title="Paz App" content="Paz React First App" />
      <br />
      <Accordion title="Greetings" content="Hi" />
      <br />
      <br />
      <ul>
        {names.map((name, index) => (
          <li
            key={index}
            style={{
              color: index % 2 === 0 ? 'blue' : 'red',
              textDecoration: name.isActive ? 'none' : 'line-through',
            }}
          >
            {name.name}
            <br />
            <button onClick={() => deleteName(index)}>Delete</button>
            <button onClick={() => toggleNameStatus(index)}>
              Toggle Status
            </button>
          </li>
        ))}
      </ul>
      <input type="text" value={newName} onChange={handleInputChange} />
      <button onClick={addName}>Add Name</button>
      <br />
      <h3 style={{ color: 'blue' }}>PazM Carousel App</h3>
      <Carousel images={images} interval={2000} />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '50px',
    backgroundColor: '#222',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
  },
};

export default App;
