import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          <h1>Welcome to the BRAMS Number System</h1>
          <p>
            A new revolutionary number system for encryption and beyond.
          </p>
        </div>
      </header>

      <section className="about-brams">
        <h2>What is the BRAMS Number System?</h2>
        <p>
          The BRAMS number system is a unique numeric representation designed primarily for image encryption and can be adapted for other data types. It provides highly secure, lightweight, and efficient ways to encode information, making it particularly useful for encryption tasks.
        </p>
        
      </section>

      <section className="features">
        <h2>Key Features of BRAMS</h2>
        <ul>
          <li>Highly efficient for encryption.</li>
          <li>Adaptable for other data types, not just images.</li>
          <li>Lightweight and fast processing.</li>
          <li>Secure and resistant to common cryptographic attacks.</li>
        </ul>
      </section>

      <section className="how-it-works">
        <h2>How Does BRAMS Work?</h2>
        <p>
          BRAMS works by converting data into a unique representation that is challenging to decode without specific keys. This allows for secure transmission of sensitive data, especially in image encryption. In the near future, this number system will be adaptable for other objects and types of data.
        </p>
        <p>
          The BRAMS number system is a unique method of encoding colors, primarily used for image encryption. In this system, colors from an image are converted into numerical values based on the RGB (Red, Green, Blue) model. Each color in an image is made up of three components—red, green, and blue—which are represented by values ranging from 0 to 255. BRAMS takes these RGB values and maps them onto a custom scale, using numbers from 1 to 26 to represent different shades of each color.
        </p>
        <p>
          For example, the value of each color component is divided into 26 segments, with each segment being assigned a number between 1 and 26. This transforms an RGB color into a unique set of three numbers that can be further encrypted or used in various applications. The system is designed to be flexible, meaning it can expand to other types of objects and data, making it highly versatile for encryption and data representation tasks.
        </p>
      </section>

      <footer className="App-footer">
        <p>
          Learn more about the BRAMS Number System for your encryption needs. <br />
          Visit our <a href="https://github.com/Bramtheking/imagencryption.git">GitHub repository</a> or contact developer <a href="mailto:bramwela8@gmail.com">Dev</a>.
        </p>
      </footer>
    </div>
  );
}

export default App;
