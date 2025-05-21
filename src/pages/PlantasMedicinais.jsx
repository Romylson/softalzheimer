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
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export default function PlantasMedicinaisPage() {
  const [plantas, setPlantas] = useState([]);
  const [form, setForm] = useState({ nome: "", origem: "", mecanismos: "" });
  const [imagem, setImagem] = useState(null);
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({ nome: "", origem: "", mecanismos: "", imagemURL: "" });
  const [editImagem, setEditImagem] = useState(null);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    fetchPlantas();
  }, []);

  async function fetchPlantas() {
    const querySnapshot = await getDocs(collection(db, "plantas"));
    const lista = [];
    querySnapshot.forEach((doc) => {
      lista.push({ id: doc.id, ...doc.data() });
    });
    setPlantas(lista);
  }

  async function adicionarPlanta(e) {
    e.preventDefault();
    if (!form.nome) return;

    let imagemURL = "";
    if (imagem) {
      imagemURL = await uploadToCloudinary(imagem);
    }

    await addDoc(collection(db, "plantas"), { ...form, imagemURL });
    setForm({ nome: "", origem: "", mecanismos: "" });
    setImagem(null);
    fetchPlantas();
  }

  async function excluirPlanta(id) {
    await deleteDoc(doc(db, "plantas", id));
    fetchPlantas();
  }

  function startEdit(planta) {
    setEditId(planta.id);
    setEditForm({
      nome: planta.nome,
      origem: planta.origem,
      mecanismos: planta.mecanismos,
      imagemURL: planta.imagemURL || "",
    });
    setEditImagem(null);
  }

  function cancelEdit() {
    setEditId(null);
    setEditForm({ nome: "", origem: "", mecanismos: "", imagemURL: "" });
    setEditImagem(null);
  }

  async function salvarEdit(e) {
    e.preventDefault();
    let imagemURL = editForm.imagemURL;

    if (editImagem) {
      imagemURL = await uploadToCloudinary(editImagem);
    }

    await updateDoc(doc(db, "plantas", editId), { ...editForm, imagemURL });
    setEditId(null);
    setEditForm({ nome: "", origem: "", mecanismos: "", imagemURL: "" });
    setEditImagem(null);
    fetchPlantas();
  }

  // VALIDAÇÃO de arquivo para cadastro
  function handleImagem(e) {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Apenas imagens são permitidas!");
        return;
      }
      if (file.size > 2 * 1024 * 1024) {
        alert("Arquivo muito grande! Máximo 2MB.");
        return;
      }
      setImagem(file);
    }
  }
  // VALIDAÇÃO de arquivo para edição
  function handleEditImagem(e) {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Apenas imagens são permitidas!");
        return;
      }
      if (file.size > 2 * 1024 * 1024) {
        alert("Arquivo muito grande! Máximo 2MB.");
        return;
      }
      setEditImagem(file);
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Plantas Medicinais no Tratamento</h1>

      <form onSubmit={adicionarPlanta} className="flex flex-col gap-2 mb-6">
        <Input
          placeholder="Nome da planta"
          value={form.nome}
          onChange={e => setForm(f => ({ ...f, nome: e.target.value }))}
        />
        <Input
          placeholder="Origem"
          value={form.origem}
          onChange={e => setForm(f => ({ ...f, origem: e.target.value }))}
        />
        <Input
          placeholder="Mecanismos de ação"
          value={form.mecanismos}
          onChange={e => setForm(f => ({ ...f, mecanismos: e.target.value }))}
        />
        <Input
          type="file"
          accept="image/*"
          onChange={handleImagem}
        />
        <Button type="submit">
          Adicionar Planta
        </Button>
      </form>

      <Input
        className="mb-4"
        placeholder="Buscar por nome ou origem..."
        value={busca}
        onChange={e => setBusca(e.target.value)}
      />

      <div className="grid md:grid-cols-2 gap-4">
        {plantas
          .filter(p =>
            p.nome.toLowerCase().includes(busca.toLowerCase()) ||
            p.origem.toLowerCase().includes(busca.toLowerCase())
          )
          .map(p =>
            editId === p.id ? (
              <motion.div
                key={p.id}
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
                      value={editForm.origem}
                      onChange={e => setEditForm(f => ({ ...f, origem: e.target.value }))}
                    />
                    <Input
                      value={editForm.mecanismos}
                      onChange={e => setEditForm(f => ({ ...f, mecanismos: e.target.value }))}
                    />
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={handleEditImagem}
                    />
                    {editForm.imagemURL && (
                      <img src={editForm.imagemURL} alt="Planta" className="w-16 h-16 object-cover rounded" />
                    )}
                    <div className="flex gap-2 mt-2">
                      <Button type="submit" variant="default">Salvar</Button>
                      <Button type="button" variant="secondary" onClick={cancelEdit}>Cancelar</Button>
                    </div>
                  </form>
                </Card>
              </motion.div>
            ) : (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="mb-4 flex flex-row items-center gap-4 p-4 bg-green-50">
                  {p.imagemURL && (
                    <img src={p.imagemURL} alt={p.nome} className="w-24 h-24 object-cover rounded-lg" />
                  )}
                  <CardContent>
                    <h2 className="text-xl font-bold">{p.nome}</h2>
                    <p className="text-gray-700 text-sm mb-1">Origem: {p.origem}</p>
                    <p className="text-gray-700 text-sm mb-1">Mecanismos: {p.mecanismos}</p>
                    <div className="flex gap-2 mt-2">
                      <Button size="sm" variant="outline" onClick={() => startEdit(p)}>
                        Editar
                      </Button>
                      <Button size="sm" variant="destructive" onClick={() => excluirPlanta(p.id)}>
                        Excluir
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
