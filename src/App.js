import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [portfolioText, setPortfolioText] = useState('');
  const [demoText, setDemoText] = useState('');
  const [memosText, setMemosText] = useState('');
  const [clothingText, setClothingText] = useState('');
  const [demoImages, setDemoImages] = useState([]);
  const [memosImages, setMemosImages] = useState([]);
  const [clothingImages, setClothingImages] = useState([]);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/data/text/portfolio.txt')
      .then(response => response.text())
      .then(data => setPortfolioText(data));

    fetch(process.env.PUBLIC_URL + '/data/text/demo.txt')
      .then(response => response.text())
      .then(data => setDemoText(data));

    fetch(process.env.PUBLIC_URL + '/data/text/memos.txt')
      .then(response => response.text())
      .then(data => setMemosText(data));

    fetch(process.env.PUBLIC_URL + '/data/text/clothing.txt')
      .then(response => response.text())
      .then(data => setClothingText(data));

    // 画像の読み込み
    const importAll = (r) => r.keys().map(r);
    setDemoImages(importAll(require.context('../public/data/images/demo', false, /\.(png|jpe?g|svg)$/)));
    setMemosImages(importAll(require.context('../public/data/images/memos', false, /\.(png|jpe?g|svg)$/)));
    setClothingImages(importAll(require.context('../public/data/images/clothing', false, /\.(png|jpe?g|svg)$/)));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>服飾学生のポートフォリオ</h1>
        <p>{portfolioText}</p>
      </header>
      <section className="section">
        <h2>学校での作業風景</h2>
        <p>{demoText}</p>
        <div className="image-gallery">
          {demoImages.map((image, index) => (
            <img key={index} src={image} alt={`Demo ${index + 1}`} />
          ))}
        </div>
      </section>
      <section className="section">
        <h2>作りたい服の絵</h2>
        <p>{memosText}</p>
        <div className="image-gallery">
          {memosImages.map((image, index) => (
            <img key={index} src={image} alt={`Memo ${index + 1}`} />
          ))}
        </div>
      </section>
      <section className="section">
        <h2>実際に作った服</h2>
        <p>{clothingText}</p>
        <div className="image-gallery">
          {clothingImages.map((image, index) => (
            <img key={index} src={image} alt={`Clothing ${index + 1}`} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
