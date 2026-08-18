import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../i18n/translations';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const getLanguageFromUrl = () => {
  if (typeof window === 'undefined') return 'en';

  const segments = window.location.pathname.toLowerCase().split('/').filter(Boolean);
  const firstSegment = segments[0];

  if (firstSegment === 'el' || firstSegment === 'gr') {
    return 'el';
  }
  if (firstSegment === 'en') {
    return 'en';
  }

  const params = new URLSearchParams(window.location.search);
  const langParam = (params.get('lang') || params.get('l'))?.toLowerCase();
  if (langParam === 'el' || langParam === 'gr') {
    return 'el';
  }
  if (langParam === 'en') {
    return 'en';
  }

  const hash = window.location.hash.toLowerCase().replace(/^#/, '');
  if (hash === 'el' || hash === 'gr') {
    return 'el';
  }
  if (hash === 'en') {
    return 'en';
  }

  return 'en';
};

const updateUrlForLanguage = (newLang) => {
  if (typeof window === 'undefined') return;
  const segments = window.location.pathname.split('/').filter(Boolean);

  if (segments.length > 0 && ['el', 'gr', 'en'].includes(segments[0].toLowerCase())) {
    segments[0] = newLang;
  } else {
    segments.unshift(newLang);
  }

  const newPath = '/' + segments.join('/');
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.delete('lang');
  searchParams.delete('l');
  const searchStr = searchParams.toString() ? `?${searchParams.toString()}` : '';
  const newUrl = `${newPath}${searchStr}${window.location.hash}`;

  if (window.location.pathname !== newPath || window.location.search !== searchStr) {
    window.history.pushState({ lang: newLang }, '', newUrl);
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(getLanguageFromUrl);

  useEffect(() => {
    const handlePopState = () => {
      setLanguage(getLanguageFromUrl());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const changeLanguage = (newLang) => {
    setLanguage(newLang);
    updateUrlForLanguage(newLang);
  };

  const toggleLanguage = () => {
    const nextLang = language === 'en' ? 'el' : 'en';
    changeLanguage(nextLang);
  };

  const t = (section, key) => {
    try {
      return translations[language][section][key] || key;
    } catch (e) {
      console.warn(`Translation missing for ${section}.${key} in ${language}`);
      return key;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, toggleLanguage, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

