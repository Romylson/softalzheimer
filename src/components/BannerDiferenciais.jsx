import { FaCheckCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function BannerDiferenciais() {
  const { t } = useTranslation();
  return (
    <div className="alert alert-info d-flex align-items-center my-4" role="alert">
      <FaCheckCircle className="me-2" />
      <strong>{t("innovative_features_title")}:</strong> {t("scientific_content_desc")}
    </div>
  );
}
