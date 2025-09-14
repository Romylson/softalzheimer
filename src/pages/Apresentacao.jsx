import React from 'react';
import { useTranslation } from 'react-i18next';

function Apresentacao() {
  const { t } = useTranslation();
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{t('about_site')}</h1>
      <p>{t('about_content')}</p>
    </div>
  );
}

export default Apresentacao;