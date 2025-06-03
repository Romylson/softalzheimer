import React from "react";
import { Modal, Button } from "react-bootstrap";
import DiferenciasInovadores from "./DiferenciaisInovadores";

export default function DiferenciaisInovadoresModal({ show, onHide }) {
  const { t } = useTranslation();
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{t("innovative_features_title")}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InnovativeFeatures />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>{t("close") || "Fechar"}</Button>
      </Modal.Footer>
    </Modal>
  );
}
