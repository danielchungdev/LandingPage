import React, { useEffect, useState } from 'react';
import './App.css';
//Typescript website hehexd barely any typescript tho
function App() {
  const [date, setDate] = useState<String>("");
  const[visits, setVisits] = useState<number>(Math.floor(Math.random() * 50));

  useEffect(()=>{
    getDate();
  }, []);

  const secretClickRemove = () => {
    setVisits(visits - 1);
  }

  const secretClickAdd = () => {
    setVisits(visits + 1);
  }

  const getDate = () => {
    let returnDate: String = "";
    let dateOb: Date = new Date();
    let day: String = ("0" + dateOb.getDate()).slice(-2);
    let month: String = ("0" + (dateOb.getMonth() + 1)).slice(-2);
    let year: String = dateOb.getFullYear().toString();
    returnDate = `${month}/${day}/${year}`;
    setDate(returnDate);
  }

  return (
    <div id="container">
        <div id="terminal">
            <div id="header" onClick={secretClickRemove}>~/danielchung/introduction.js</div>
            <div id="wrapper" onClick={secretClickAdd}>
                <p className="text">&nbsp;</p>
                <p className="text">&nbsp;</p>
                <p className="text">&nbsp;</p>
                <p className="text">&nbsp;</p>
                <p className="text">&nbsp;</p>
                <p className="text">&nbsp;</p>
                <p className="text">&nbsp;</p>
                <p className="text" id="comment"># Hi I'm Daniel Chung</p>
                <p className="text" id="comment">⎯</p>
                <p className="text">&nbsp;</p>
                <p className="text" id="comment"># Software Engineer</p>
                <p className="text" id="comment"># Rochester, NY</p>
                <p className="text">&nbsp;</p>
                <p className="text">&nbsp;</p>
                <p className="text" id="line">Currently at RIT, building data pipelines and analyzing data.</p>
                <p className="text" id="line">Interested in Web and Application development.</p>
                <p className="text" id="line">⎯ <a target="_blank" id="link" href="https://github.com/pikachungg">Github</a></p>
                <p className="text" id="line">⎯ <a target="_blank" id="link" href="https://www.linkedin.com/in/danielchungg/">Linkedin</a></p>
                <p className="text">&nbsp;</p>
                <p className="text">&nbsp;</p>
            </div>
            <div id="footer">
              <p className="text" id="header">::{date}</p>
              <p className="text" id="header">+{visits}</p>
            </div>
        </div>
    </div>
  );
}

export default App;
