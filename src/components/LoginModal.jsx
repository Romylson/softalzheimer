import React, { useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../firebase";

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export default function LoginModal({ show, onClose, user, setUser }) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const [criarConta, setCriarConta] = useState(false);

  const handleLoginGoogle = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      onClose();
    } catch (error) {
      setError("Erro no login Google: " + error.message);
    }
    setLoading(false);
  };

  const handleEmailAuth = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      let userCredential;
      if (criarConta) {
        userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      } else {
        userCredential = await signInWithEmailAndPassword(auth, email, senha);
      }
      setUser(userCredential.user);
      onClose();
    } catch (err) {
      setError("Erro: " + err.message);
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    onClose();
  };

  if (!show) return null;

  return (
    <div className="modal-backdrop" style={{
      position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",
      background: "rgba(0,0,0,0.35)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999
    }}>
      <div className="modal-content" style={{
        background: "#fff", borderRadius: 10, padding: 32, minWidth: 320, textAlign: "center"
      }}>
        {user ? (
          <>
            <h5>Olá, {user.displayName || user.email}</h5>
            {user.photoURL && <img src={user.photoURL} alt="avatar" style={{ width: 64, borderRadius: "50%" }} />}
            <p className="mt-3">{user.email}</p>
            <button className="btn btn-danger mt-3" onClick={handleLogout}>Sair</button>
          </>
        ) : (
          <>
            <h5 className="mb-3">{criarConta ? "Criar Conta" : "Login"}</h5>
            <button className="btn btn-outline-primary w-100 mb-3" onClick={handleLoginGoogle} disabled={loading}>
              {loading ? "Entrando..." : "Entrar com Google"}
            </button>
            <div className="text-secondary mb-3">ou</div>
            <form onSubmit={handleEmailAuth}>
              <input
                type="email"
                className="form-control mb-2"
                placeholder="E-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
              <input
                type="password"
                className="form-control mb-2"
                placeholder="Senha"
                value={senha}
                onChange={e => setSenha(e.target.value)}
                required
                autoComplete={criarConta ? "new-password" : "current-password"}
              />
              <button type="submit" className="btn btn-success w-100" disabled={loading}>
                {criarConta ? "Criar Conta" : "Entrar"}
              </button>
            </form>
            <button
              className="btn btn-link mt-2"
              onClick={() => setCriarConta(!criarConta)}
              style={{ fontSize: 14 }}
              type="button"
            >
              {criarConta
                ? "Já tenho conta. Entrar"
                : "Não tem conta? Criar agora"}
            </button>
            {error && <div className="alert alert-danger mt-2 py-2">{error}</div>}
            <button className="btn btn-secondary mt-3" onClick={onClose}>Cancelar</button>
          </>
        )}
      </div>
    </div>
  );
}
