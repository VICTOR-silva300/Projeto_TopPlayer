import db from '../config/db.js'

export const listarPartidas = async () => {
  const [rows] = await db.query(`
    SELECT 
      p.id,
      j.nome AS jogo,
      pl.nickname AS player,
      p.pontos,
      p.data_partida
    FROM partidas p
    JOIN jogos j ON j.id = p.jogo_id
    JOIN players pl ON pl.id = p.player_id
    ORDER BY p.id DESC
  `);
  return rows;
};


export const criarPartida = async ({ jogo_id, player_id, pontos, data_partida }) => {
  const [result] = await db.query(
    'INSERT INTO partidas (jogo_id, player_id, pontos, data_partida) VALUES (?, ?, ?, ?)',
    [jogo_id, player_id, pontos, data_partida]
  );
  return result;
};


export const deletarPartida = async (id) => {
  const [result] = await db.query(
    'DELETE FROM partidas WHERE id = ?',
    [id]
  );
  return result;
};