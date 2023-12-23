// content/index.jsx

import React, { useState , useEffect} from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { enabledTab, selectedLang, langs } from '../background/index.jsx';

function Toolbar() {
    const [text, setText] = useState("Click to start live captioning");

    const [stream, setStream] = useState(null);
    const [recognition, setRecognition] = useState(null);

    const [status, setStatus] = useState("stopped");

    const [show, setShow] = useState(false);

    const handleRecognitionClick = async () => {
        if (status === "started") {
            stopRecognition();
        }
        else if (status === "stopped") {
            startRecognition();
        }
    }

    function getCurrentTabID() {
        return chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            enabledTab = tabs[0].id;
        });
    }

    //check if the tab is enabledtab
    useEffect(() => {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            if (tabs[0].id === enabledTab) {
                setShow(true);
            } else {
                setShow(false);
            }
        });
    }, [enabledTab]);






    const startRecognition = () => {
        // start the recognition
        const SpeechRecognition = window.webkitSpeechRecognition;

        const recognition = new SpeechRecognition();
            

        recognition.continuous = true;
        recognition.interimResults = true;


        console.log("recognition started");

        recognition.start();
        setRecognition(recognition);

        recognition.onresult = (event) => {
            const results = event.results;
            const transcript = results[results.length - 1][0].transcript;
            console.log(transcript);
            setText(transcript);
        }
    }

    const stopRecognition = () => {
        // stop the recognition
        recognition.stop();
        setRecognition(null);
        setText("Click to start live captioning");
    }



    return (
        <div>
            <div onClick={startRecognition}>{text}</div>
        </div>
    );
}

const toolbar = document.createElement('div');
toolbar.id = "live-caption-toolbar";
document.body.appendChild(toolbar);

createRoot(toolbar).render(<Toolbar />);
