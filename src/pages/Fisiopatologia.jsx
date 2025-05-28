import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { uploadToCloudinary } from "../utils/uploadCloudinary";
import { Card, CardContent } from "../components/ui/card.jsx";
import { Button } from "../components/ui/button.jsx";
import { Input } from "../components/ui/input.jsx";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import PlacasETauAnimacao from "../components/Fisiopatologia/PlacasETau";
import TimelineProgressao from "../components/Fisiopatologia/TimelineProgressao";
import ComparacaoCerebro from "../components/Fisiopatologia/ComparacaoCerebro";

export default function FisiopatologiaPage() {
  const { t } = useTranslation();
  const [dados, setDados] = useState([]);
  const [form, setForm] = useState({ nome: "", descricao: "", tipo: "" });
  const [imagem, setImagem] = useState(null);
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({ nome: "", descricao: "", tipo: "", imagemURL: "" });
  const [editImagem, setEditImagem] = useState(null);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    fetchDados();
  }, []);

  async function fetchDados() {
    const querySnapshot = await getDocs(collection(db, "fisiopatologia"));
    const lista = [];
    querySnapshot.forEach((doc) => {
      lista.push({ id: doc.id, ...doc.data() });
    });
    setDados(lista);
  }

  async function adicionar(e) {
    e.preventDefault();
    if (!form.nome) return;

    let imagemURL = "";
    if (imagem) {
      imagemURL = await uploadToCloudinary(imagem);
    }

    await addDoc(collection(db, "fisiopatologia"), { ...form, imagemURL });
    setForm({ nome: "", descricao: "", tipo: "" });
    setImagem(null);
    fetchDados();
  }

  async function excluir(id) {
    await deleteDoc(doc(db, "fisiopatologia", id));
    fetchDados();
  }

  function startEdit(item) {
    setEditId(item.id);
    setEditForm({
      nome: item.nome,
      descricao: item.descricao,
      tipo: item.tipo,
      imagemURL: item.imagemURL || "",
    });
    setEditImagem(null);
  }

  function cancelEdit() {
    setEditId(null);
    setEditForm({ nome: "", descricao: "", tipo: "", imagemURL: "" });
    setEditImagem(null);
  }

  async function salvarEdit(e) {
    e.preventDefault();
    let imagemURL = editForm.imagemURL;

    if (editImagem) {
      imagemURL = await uploadToCloudinary(editImagem);
    }

    await updateDoc(doc(db, "fisiopatologia", editId), { ...editForm, imagemURL });
    setEditId(null);
    setEditForm({ nome: "", descricao: "", tipo: "", imagemURL: "" });
    setEditImagem(null);
    fetchDados();
  }

  function handleImagem(e) {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert(t("only_images_allowed"));
        return;
      }
      if (file.size > 2 * 1024 * 1024) {
        alert(t("file_too_large"));
        return;
      }
      setImagem(file);
    }
  }
  function handleEditImagem(e) {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert(t("only_images_allowed"));
        return;
      }
      if (file.size > 2 * 1024 * 1024) {
        alert(t("file_too_large"));
        return;
      }
      setEditImagem(file);
    }
  }

  return (
    <div className="container py-4">
      <h1 className="fw-bold text-center mb-4">{t("physiopathology_alzheimer")}</h1>
      
      {/* Blocos Didáticos/Interativos */}
      <PlacasETauAnimacao />
      <TimelineProgressao />
      <ComparacaoCerebro />

      <hr className="my-5" />

      {/* CRUD abaixo dos blocos */}
      <h2 className="text-xl font-bold mb-4">{t("physiopathology_desc")}</h2>
      <form onSubmit={adicionar} className="flex flex-col gap-2 mb-6">
        <Input
          placeholder={t("mechanism_name")}
          value={form.nome}
          onChange={e => setForm(f => ({ ...f, nome: e.target.value }))}
        />
        <Input
          placeholder={t("mechanism_type")}
          value={form.tipo}
          onChange={e => setForm(f => ({ ...f, tipo: e.target.value }))}
        />
        <Input
          placeholder={t("description")}
          value={form.descricao}
          onChange={e => setForm(f => ({ ...f, descricao: e.target.value }))}
        />
        <Input
          type="file"
          accept="image/*"
          onChange={handleImagem}
        />
        <Button type="submit">{t("add")}</Button>
      </form>

      <Input
        className="mb-4"
        placeholder={t("search_by_name_or_type")}
        value={busca}
        onChange={e => setBusca(e.target.value)}
      />

      <div className="grid md:grid-cols-2 gap-4">
        {dados
          .filter(d =>
            d.nome.toLowerCase().includes(busca.toLowerCase()) ||
            d.tipo.toLowerCase().includes(busca.toLowerCase())
          )
          .map(d =>
            editId === d.id ? (
              <motion.div
                key={d.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="mb-4 flex flex-col items-center gap-4 p-4 bg-yellow-50">
                  <form onSubmit={salvarEdit} className="flex flex-col gap-2 w-full">
                    <Input
                      value={editForm.nome}
                      onChange={e => setEditForm(f => ({ ...f, nome: e.target.value }))}
                      required
                    />
                    <Input
                      value={editForm.tipo}
                      onChange={e => setEditForm(f => ({ ...f, tipo: e.target.value }))}
                    />
                    <Input
                      value={editForm.descricao}
                      onChange={e => setEditForm(f => ({ ...f, descricao: e.target.value }))}
                    />
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={handleEditImagem}
                    />
                    {editForm.imagemURL && (
                      <img src={editForm.imagemURL} alt={t("mechanism")} className="w-16 h-16 object-cover rounded" />
                    )}
                    <div className="flex gap-2 mt-2">
                      <Button type="submit" variant="default">{t("save")}</Button>
                      <Button type="button" variant="secondary" onClick={cancelEdit}>{t("cancel")}</Button>
                    </div>
                  </form>
                </Card>
              </motion.div>
            ) : (
              <motion.div
                key={d.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="mb-4 flex flex-row items-center gap-4 p-4 bg-green-50">
                  {d.imagemURL && (
                    <img src={d.imagemURL} alt={d.nome} className="w-24 h-24 object-cover rounded-lg" />
                  )}
                  <CardContent>
                    <h2 className="text-xl font-bold">{d.nome}</h2>
                    <p className="text-gray-700 text-sm mb-1">{t("type")}: {d.tipo}</p>
                    <p className="text-gray-700 text-sm mb-1">{d.descricao}</p>
                    <div className="flex gap-2 mt-2">
                      <Button size="sm" variant="outline" onClick={() => startEdit(d)}>
                        {t("edit")}
                      </Button>
                      <Button size="sm" variant="destructive" onClick={() => excluir(d.id)}>
                        {t("delete")}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
        )}
      </div>
    </div>
  );
}
