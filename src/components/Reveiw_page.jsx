import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './Reveiw_Page.css';
import axios from 'axios';


const CodeReviewComponent = () => {
  const [code, setCode] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);


const handleReviewCode = () => {
  console.log("Sending code:", code); // frontend log
  setIsLoading(true);
  axios.post('https://dev-lens-production.up.railway.app/review', { prompt: code },
    { withCredentials: true }
  )
    .then((res) => {
      console.log("Backend response:", res.data); // frontend log
      setAiResponse(res.data);
      setIsLoading(false);
    })
    .catch((error) => {
      console.error("Backend error:", error); // frontend log
      setIsLoading(false);
    });
};




  return (
    <div className="code-review-container">
      <div className="panel code-panel">
        <div className="panel-header">
          <h2>Your Code</h2>
        </div>
        <textarea
          className="code-input"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter your code here..."
        />
        <button 
          className="review-button" 
          onClick={handleReviewCode}
          disabled={isLoading || !code.trim()}
        >
          {isLoading ? 'Reviewing...' : 'Review Code'}
        </button>
      </div>
      
      <div className="panel response-panel">
        <div className="panel-header">
          <h2>AI Response</h2>
        </div>
        <div className="response-content">
          {aiResponse ? (
            <ReactMarkdown>{aiResponse}</ReactMarkdown>
          ) : (
            <p className="placeholder-text">AI response will appear here after code review...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CodeReviewComponent;