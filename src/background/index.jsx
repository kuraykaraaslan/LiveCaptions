// background/index.jsx

var langs = [
    { name: 'Afrikaans', code: 'af-ZA' },
    { name: 'Bahasa Indonesia', code: 'id-ID' },
    { name: 'Bahasa Melayu', code: 'ms-MY' },
    { name: 'Català', code: 'ca-ES' },
    { name: 'Čeština', code: 'cs-CZ' },
    { name: 'Deutsch', code: 'de-DE' },
    { name: 'English', code: 'en-US' },
    { name: 'Español', code: 'es-ES' },
    { name: 'Euskara', code: 'eu-ES' },
    { name: 'Français', code: 'fr-FR' },
    { name: 'Galego', code: 'gl-ES' },
    { name: 'Hrvatski', code: 'hr_HR' },
    { name: 'IsiZulu', code: 'zu-ZA' },
    { name: 'Íslenska', code: 'is-IS' },
    { name: 'Italiano', code: 'it-IT' },
    { name: 'Magyar', code: 'hu-HU' },
    { name: 'Nederlands', code: 'nl-NL' },
    { name: 'Norsk bokmål', code: 'nb-NO' },
    { name: 'Polski', code: 'pl-PL' },
    { name: 'Português', code: 'pt-PT' },
    { name: 'Română', code: 'ro-RO' },
    { name: 'Slovenčina', code: 'sk-SK' },
    { name: 'Suomi', code: 'fi-FI' },
    { name: 'Svenska', code: 'sv-SE' },
    { name: 'Türkçe', code: 'tr-TR' },
    { name: 'български', code: 'bg-BG' },
    { name: 'Pусский', code: 'ru-RU' },
    { name: 'Српски', code: 'sr-RS' },
    { name: '한국어', code: 'ko-KR' },
    { name: '中文', code: 'cmn-Hans-CN' },
    { name: '日本語', code: 'ja-JP' },
    { name: 'Lingua latīna', code: 'la' }
  ];

var enabledTab = null;
var selectedLang = null;
  
export { enabledTab, selectedLang, langs };