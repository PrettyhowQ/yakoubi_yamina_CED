index.js
frontend/src/generators/ProductivityGenerator/index.jsimport React, { useState, useEffect } from 'react';
import './styles.css';
import prompts from './prompts.json';
import { useTranslation } from 'react-i18next';

export default function ProductivityGenerator() {
  const { t } = useTranslation();
  const [selectedPrompt, setSelectedPrompt] = useState('');

  const generatePrompt = () => {
    const randomIndex = Math.floor(Math.random() * prompts.length);
    setSelectedPrompt(prompts[randomIndex]);
  };

  useEffect(() => {
    generatePrompt();
  }, []);

  return (
    <div className="generator-container">
      <h2>{t('productivity.title')}</h2>
      <p className="prompt-output">{selectedPrompt}</p>
      <button onClick={generatePrompt} className="generate-btn">
        {t('common.generate')}
      </button>
    </div>
  );
}