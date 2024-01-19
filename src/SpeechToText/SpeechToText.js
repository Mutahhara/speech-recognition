import { useState } from "react";
import "./SpeechToText.css";
import Microphone from "../Microphone/MicroPhone";

const SpeechToText = () => {
  const [transcription, setTranscription] = useState("");
  return (
    <div className="speechToTextContainer">
      <div className="textContainer">{transcription}</div>
      <Microphone setTranscription={setTranscription} />
    </div>
  );
};

export default SpeechToText;
