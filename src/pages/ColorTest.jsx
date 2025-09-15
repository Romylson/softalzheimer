import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function ColorTest() {
  const { t } = useTranslation();
  const [color, setColor] = useState('#ffffff');
  const colors = ['#ffffff', '#f8f9fa', '#add8e6', '#90ee90', '#ffcccb'];

  return (
    <div className="p-4" style={{ backgroundColor: color, minHeight: '100vh' }}>
      <h1 className="text-2xl font-bold mb-4">{t('color_test')}</h1>
      <p>{t('choose_color')}</p>
      <div className="d-flex gap-2 mt-3">
        {colors.map((c) => (
          <button
            key={c}
            className="btn"
            style={{ backgroundColor: c, border: '1px solid #000' }}
            onClick={() => setColor(c)}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ColorTest;
