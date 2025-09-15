import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';

function ColorTest() {
  const { t } = useTranslation();
  const { color, setColor } = useTheme();

  return (
    <div className="p-4" style={{ backgroundColor: 'var(--background-color)', minHeight: '100vh' }}>
      <h1 className="text-2xl font-bold mb-4">{t('color_test')}</h1>
      <p className="mb-3">{t('choose_color')}</p>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        aria-label={t('choose_color')}
        className="w-16 h-16 border rounded"
      />
      <span className="ms-2 align-middle">{color}</span>
    </div>
  );
}

export default ColorTest;