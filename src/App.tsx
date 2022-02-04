import React, { useEffect, useState } from 'react';
import './App.css';

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
            <div id="header" onClick={secretClickRemove}>~/Desktop/introduction.js</div>
            <div id="wrapper" onClick={secretClickAdd}>
                <p className="text">&nbsp;</p>
                <p className="text">&nbsp;</p>
                <p className="text">&nbsp;</p>
                <p className="text"><span className="text" id="keyword">const</span> <span className="text" id="variable">me</span> = <span className="text" id="bracket">{"{"}</span></p>
                <p className="text">&nbsp;&nbsp;&nbsp;&nbsp;<span className="text" id="variable">name:</span> "Daniel Chung",</p>
                <p className="text">&nbsp;&nbsp;&nbsp;&nbsp;<span className="text" id="variable">major:</span> "Web & Mobile Computing",</p>
                <p className="text"><span className="text" id="bracket">{"}"}</span></p>
                <p className="text">&nbsp;</p>
                <p className="text">&nbsp;</p>
                <p className="text">&nbsp;</p>
                <p className="text" id="comment">// Currently 5th year student at RIT.</p>
                <p className="text" id="comment">// Interned at Mindex as a software engineer.</p>
                <p className="text" id="comment">// Interested in fullstack development and Cloud.</p>
                <p className="text" id="comment">// - <a target="_blank" id="link" href="https://github.com/pikachungg">Github</a></p>
                <p className="text" id="comment">// - <a target="_blank" id="link" href="https://www.linkedin.com/in/danielchungg/">Linkedin</a></p>
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
