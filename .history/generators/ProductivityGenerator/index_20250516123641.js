// Copyright Yakoubi Yamina - All rights reserved
import React from "react";
import { useTranslation } from "react-i18next";
import prompts from "./prompts.json";
import "./styles.css";

const ProductivityGenerator = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="generator-container">
      <h2>{t("productivity.title")}</h2>
      <ul>
        {prompts[i18n.language].map((prompt, idx) => (
          <li key={idx}>
            <strong>{prompt.title}</strong>
            <p>{prompt.text}</p>
          </li>
        ))}
      </ul>
      <footer>
        <small>© Yakoubi Yamina - {t("copyright")}</small>
      </footer>
    </div>
  );
};

export default ProductivityGenerator;