import React, { useEffect } from 'react';

export const GoogleTranslate = () => {
  useEffect(() => {
    const addScript = document.createElement('script');
    addScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    addScript.async = true;
    document.body.appendChild(addScript);

(window as any).googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
    };

    return () => {
      document.body.removeChild(addScript);
      delete (window as any).googleTranslateElementInit;
    };
  }, []);

  return <div id="google_translate_element"></div>;
};