import { useState } from 'react'
import './Popup.css'

import { enabledTab, selectedLang, langs } from '../background/index.jsx';

function App() {
  function getCurrentTabID() {
    return chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        return tabs[0].id;
    });
  }

  function setSelectLang() {
    var selectedLangCode = document.getElementById("selectedLang").value;
    langs.forEach((lang) => {
      if (lang.code === selectedLangCode) {
        selectedLang = lang;
      }
    });
  }

  function enableToolbar() {
    enabledTab = getCurrentTabID();
  }

  return (
    <main>
        {/* Card Content */}
        <div className="p-4">

          {/* Select Dropdown 1 */}
          <div class="sm:flex rounded-lg shadow-sm">
            <span class="py-3 px-4 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-50 text-sm text-gray-500 -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:w-auto sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400">Language
            </span>
            <select id="selectedLang" class="block w-full border-transparent rounded-lg focus:ring-blue-600 focus:border-blue-600 dark:bg-gray-800" onChange={setSelectLang}>
              {selectedLang ? (
                <option value={selectedLang.code}>{selectedLang.name}</option>
              ) : (
                <option value="en-US">English</option>
              )}
              {langs.map((lang) => {
                if (lang.code !== (selectedLang ? selectedLang.code : "en-US")) {
                  return <option value={lang.code}>{lang.name}</option>;
                }
                return null;
              })}

            </select>
          </div>

          {/* Button */}
          <div className="flex items-center justify-end">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" onClick={enableToolbar}>
              Start
            </button>
          </div>

        </div>
    </main>
  )
}

export default App
