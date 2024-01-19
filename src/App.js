import { useState } from "react";
import SpeechToText from "./SpeechToText";
import VoiceSearch from "./VoiceSearch";
import "./App.css";

function App() {
  const [showVoiceSearch, setShowVoiceSearch] = useState(false);
  const [showSpeechToText, setShowSpeechToText] = useState(false);
  const [showHome, setShowHome] = useState(true);

  return (
    <>
      <div className="image"></div>
      <div className="App">
        {showHome && (
          <>
            <button
              onClick={() => {
                setShowHome(false);
                setShowSpeechToText(true);
              }}
            >
              Speech To Text Converter
            </button>
            <button
              onClick={() => {
                setShowHome(false);
                setShowVoiceSearch(true);
              }}
            >
              Voice Search
            </button>
          </>
        )}
        {!showHome && (
          <button
            className="home"
            onClick={() => {
              setShowHome(true);
              setShowSpeechToText(false);
              setShowVoiceSearch(false);
            }}
          >
            Home
          </button>
        )}
        {showSpeechToText && <SpeechToText />}
        {showVoiceSearch && <VoiceSearch />}
      </div>
    </>
  );
}

export default App;
