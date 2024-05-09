import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'


export default function HomeEN() {
  const navigate = useNavigate()
  
  const onButtonClick = () => {
    navigate("/pl")
  }
  

  return (
  <>
    <div className='topBar'> 
      <input className='Button'
        type="button"
        value={"PL"}
        onClick={onButtonClick}
      />
    </div>

    <div className='page'>
      <header>
        <h1>Hi! Welcome to my site :) </h1>
        <h2>
          <div>About me</div> 
          <div className='introduction'>
            <p> 
              My name is Anna, but I go by <b>wojnan</b> on the internet and everywhere else. <br/>
              I'm Polish Computer Science student and baby programmer :) <br/> 
              I love videogames, science, art and sports (but only when i feel like it) and I'm chronically online. <br/> 
              I dream about making something significant to others, something that can change their lives.
            </p>
          </div>
        </h2>
      </header>

      <div className='panel'>
        <div className='panelTitle'>
          <span>Tools</span>
        </div>
        <ol class="tools">
          <li>IDEs / Editors:	Visual Studio, VS Code, InteliJ</li>
          <li>Versioning:	Git, Github</li>
          <li>Databases: SQL,MySQL</li>
          <li>Graphics/3D modeling: Blender, Medibang, Figma</li>
        </ol> 
      </div>

      <div className='panel'>
        <div className='panelTitle'>
          <span>Development skills</span>
        </div>
        <ol class="skills">
          <li>Web:HTML, CSS, Rect.js, Vite</li>
          <li>Mobile: React native, Expo</li>
          <li>Game: Unity, Unreal Engine </li>
          <li>Software: .Net </li>
        </ol> 
      </div>

      <div className='panel'>
        <div className='panelTitle'>
          <span>Programming languages</span>
        </div>
        <div>C, C++, C#, Java, JavaScript, Python? </div>
      </div>

      <div className='panel'>
        <div className='panelTitle'>
          <span>Languages</span>
        </div>
        <ol class="languages">
          <li>Polish (native)</li>
          <li>English (C1)</li>
          <li>a little of Italian and German</li>
        </ol> 
      </div>

      <footer className='footer'>
        <div>
          <div className='contact'>
            <div>&copy;2024 wojnan </div>
            <div className='links'>
              <a href='mailto: wojnan2020@gmail.com?subject=Email%Subject&body%20text'><img src="/images/email-logo.png" alt="Mail logo" width="30px" height="30px"/></a>
              <a href = "https://github.com/wojnan"><img src="/images/github-logo.png" alt="Github logo" width="20px" height="20px"/></a>
            </div>
            
          </div>
        </div>
      </footer>


    </div>
  </>
  )
}
