import { useState } from "react";
import Microphone from "../Microphone";
import "./VoiceSearch.css";

const VoiceSearch = () => {
  const [transcription, setTranscription] = useState("");
  const items = [
    "Lipitor",
    "Paracetamol",
    "Ortho Evra",
    "Crestor",
    "FiberCon",
    "Azithromycin",
    "Folic Acid",
    "Cipro",
    "Flomax",
    "Actos",
    "Fosamax",
  ];

  return (
    <div className="voiceSearchContainer">
      <ul className="list">
        {items.map((item) => (
          <li
            className={
              item.toLowerCase() === transcription.toLowerCase()
                ? "highlight"
                : ""
            }
          >
            {item}
          </li>
        ))}
      </ul>
      <Microphone setTranscription={setTranscription} />
    </div>
  );
};

export default VoiceSearch;
