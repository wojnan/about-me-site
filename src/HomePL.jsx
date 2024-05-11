import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

export default function HomeEN() {
  const navigate = useNavigate();
  const revealRef = useRef(null);

  useEffect(() => {
    if (revealRef.current) {
      const options = {
        root: null,
        threshold: 0.5,
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          console.log('Intersection ratio:', entry.intersectionRatio);
          if (entry.isIntersecting) {
            console.log('Element is visible!');
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, options);

      observer.observe(revealRef.current);

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  const onButtonClick = () => {
    navigate('/');
  };

  return (
    <>
      <div className='topBar'>
        <input
          className='Button'
          type='button'
          value='PL'
          onClick={onButtonClick}
        />
      </div>

      <header>
        <h1>Cześć! Witaj na mojej stronie :)</h1>
        <h2>
          <div ref={revealRef} className='reveal'>
            <div>O mnie</div>
            <div className='introduction'>
              <p>
                Mam na imię Anna, ale używam pseudonimu <span className='wojnan'>wojnan</span> w internecie i wszędzie indziej. <br />
                Jestem polską studentką informatyki i początkującą programistką :)<br />
                Uwielbiam gry komputerowe, nauki ścisłe, sztukę i sport (ale tylko wtedy, gdy czuję na to ochotę) i jestem wiecznie online.  <br />
                Marzę o zrobieniu czegoś znaczącego dla innych, czegoś, co może zmienić ich życie.
              </p>
            </div>
          </div>
        </h2>
      </header>

      <div className='page'>
        <div className='panel'>
          <div className='panelTitle'>
            <span>Języki programowania</span>
          </div>
          <ol>
          <li>C</li>
          <li>C++</li>
          <li>C#</li>
          <li>Java</li>
          <li>JavaScript</li>
          <li>Python</li>
          </ol>
        </div>

        <div className='vl'></div>
        
        <div className='panel'>
          <div className='panelTitle'>
            <span>Narzędzia</span>
          </div>
          <ol>
            <li>Web: HTML, CSS, React.js, Vite</li>
            <li>Mobilne: React native, Expo</li>
            <li>Gry: Unity, Unreal Engine </li>
            <li>Software: .Net </li>
          </ol> 
        </div>
        
        <div className='vl'></div>

        <div className='panel'> 
          <div className='panelTitle'>
            <span>Narzędzia</span>
          </div>
          <ol>
            <li>IDEs / Edytory: Visual Studio, VS Code, InteliJ</li>
            <li>Kontrola wersji: Git, Github</li>
            <li>Bazy danych: SQL, MySQL</li>
            <li>Grafika/modelowanie 3D: Blender, Medibang, Figma</li>
          </ol> 
        </div>

        <div className='vl'></div>

        <div className='panel'>
          <div className='panelTitle'>
            <span>Języki</span>
          </div>
          <ol>
            <li>Polski (ojczysty)</li>
            <li>Angielski (C1)</li>
            <div>Oraz odrobinę:</div>
            <li> Włoski</li>
            <li> Niemiecki</li>
          </ol> 
        </div>
      </div>

      <footer className='footer'>
        <div>
          <div className='contact'>
            <div>©2024 wojnan</div>
            <div className='links'>
              <a href='mailto:wojnan2020@gmail.com?subject=Email%20Subject&body%20text'>
                <img src='/images/email-logo.png'
                alt='Mail logo'
                width='30px'
                height='30px'
                />
              </a>
              <a href='https://github.com/wojnan'>
                <img src='/images/github-logo.png'
                  alt='Github logo'
                  width='25px'
                  height='25px'
                  />
              </a>
            </div>
          </div>
        </div>
      </footer>
      
    </>
  );
}
