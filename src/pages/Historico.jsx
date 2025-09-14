import React from 'react';
import { useTranslation } from 'react-i18next';

function Historico() {
  const { t } = useTranslation();
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{t('history')}</h1>
      <p>{t('history_content')}</p>
    </div>
  );
}

export default Historico;