import * as partidasModel from '../models/partidasModel.js';

export const listar = async (req, res) => {
  const partidas = await partidasModel.listarPartidas();
  return res.status(200).json(partidas);
};

export const criar = async (req, res) => {
  let { jogo_id, player_id, pontos, data_partida } = req.body;

  
  if (!jogo_id || !player_id || pontos == null) {
    return res.status(400).json({ erro: "player_id, jogo_id e pontos são obrigatórios" });
  }

 
  jogo_id = Number(jogo_id);
  player_id = Number(player_id);
  pontos = Number(pontos);

  if (!data_partida) {
    data_partida = new Date().toISOString().split("T")[0]; 
  }

  const partida = { jogo_id, player_id, pontos, data_partida };


  const resultado = await partidasModel.criarPartida(partida);

  return res.status(201).json({ msg: "Partida registrada com sucesso", id: resultado.insertId });
};

export const remover = async (req, res) => {
  const { id } = req.params;

  if (!id) return res.status(400).json({ erro: "ID é obrigatório" });

  await partidasModel.deletarPartida(Number(id));

  return res.status(200).json({ msg: "Partida removida com sucesso" });
};