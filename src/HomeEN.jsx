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
    navigate('/pl');
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
        <h1>Hi! Welcome to my site :)</h1>
        <h2>
          <div ref={revealRef} className='reveal'>
            <div>About me</div>
            <div className='introduction'>
              <p>
                My name is Anna, but I go by <span className='wojnan'>wojnan</span> on the internet and everywhere else. <br />
                I'm a Polish Computer Science student and a baby programmer :)<br />
                I love videogames, science, art, and sports (but only when Ifeel like it), and I'm chronically online. <br />
                I dream about making something significant for others,something that can change their lives.
              </p>
            </div>
          </div>
        </h2>
      </header>

      <div className='page'>
        <div className='panel'>
          <div className='panelTitle'>
            <span>Programming languages</span>
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
            <span>Development skills</span>
          </div>
          <ol>
            <li>Web: HTML, CSS, React.js, Vite</li>
            <li>Mobile: React native, Expo</li>
            <li>Game: Unity, Unreal Engine </li>
            <li>Software: .Net </li>
          </ol> 
        </div>
        
        <div className='vl'></div>

        <div className='panel'> 
          <div className='panelTitle'>
            <span>Tools</span>
          </div>
          <ol>
            <li>IDEs / Editors: Visual Studio, VS Code, InteliJ</li>
            <li>Versioning: Git, Github</li>
            <li>Databases: SQL, MySQL</li>
            <li>Graphics/3D modeling: Blender, Medibang, Figma</li>
          </ol> 
        </div>

        <div className='vl'></div>

        <div className='panel'>
          <div className='panelTitle'>
            <span>Languages</span>
          </div>
          <ol>
            <li>Polish (native)</li>
            <li>English (C1)</li>
            <div>And a bit of:</div>
            <li> Italian</li>
            <li> German</li>
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
