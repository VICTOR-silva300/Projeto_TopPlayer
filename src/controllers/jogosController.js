import db from "../config/db.js";

export const listar = async (req, res) => {
  const [jogos] = await db.query("SELECT * FROM jogos");
  res.json(jogos);
};

export const buscarPorId = async (req, res) => {
  const { id } = req.params;
  const [jogo] = await db.query("SELECT * FROM jogos WHERE id = ?", [id]);

  if (jogo.length === 0) {
    return res.status(404).json({ mensagem: "Jogo não encontrado" });
  }

  res.json(jogo[0]);
};

export const criar = async (req, res) => {
  const { nome, genero } = req.body;
  const [resultado] = await db.query(
    "INSERT INTO jogos (nome, genero) VALUES (?, ?)",
    [nome, genero]
  );

  res.status(201).json({
    id: resultado.insertId,
    nome,
    genero,
  });
};

export const atualizar = async (req, res) => {
  const { id } = req.params;
  const { nome, genero } = req.body;

  await db.query("UPDATE jogos SET nome = ?, genero = ? WHERE id = ?", [
    nome,
    genero,
    id,
  ]);

  res.json({ mensagem: "Jogo atualizado com sucesso" });
};

export const deletar = async (req, res) => {
  const { id } = req.params;

  await db.query("DELETE FROM jogos WHERE id = ?", [id]);

  res.json({ mensagem: "Jogo deletado com sucesso" });
};