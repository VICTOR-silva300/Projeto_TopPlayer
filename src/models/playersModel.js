import db from "../config/db.js"

export async function listarPlayers() {
  const [resultado] = await db.query(
    "SELECT id, nickname, plataforma, criado_em FROM players ORDER BY id DESC"
  );
  return resultado;
}

export async function buscarPlayerPorId(id) {
  const [resultado] = await db.query(
    "SELECT id, nickname, plataforma, criado_em FROM players WHERE id = ?",
    [id]
  );
  return resultado[0];
}

export async function criarPlayer({ nickname, plataforma }) {
  const [resultado] = await db.query(
    "INSERT INTO players (nickname, plataforma) VALUES (?, ?)",
    [nickname, plataforma]
  );
  return resultado.insertId;
}

export async function atualizarPlayer(id, { nickname, plataforma }) {
  await db.query(
    "UPDATE players SET nickname = ?, plataforma = ? WHERE id = ?",
    [nickname, plataforma, id]
  );
}

export async function deletarPlayer(id) {
  await db.query("DELETE FROM players WHERE id = ?", [id]);
}