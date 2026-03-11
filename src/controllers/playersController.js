import * as playersModel from "../models/playersModel.js";

export const listar = async (req, res) => {
  const players = await playersModel.listarPlayers();
  res.json(players);
};

export const buscarPorId = async (req, res) => {
  const { id } = req.params;
  const player = await playersModel.buscarPlayerPorId(id);

  if (!player) {
    return res.status(404).json({ mensagem: "Player não encontrado" });
  }

  res.json(player);
};

export const criar = async (req, res) => {
  const { nickname, plataforma } = req.body;
  const id = await playersModel.criarPlayer({ nickname, plataforma });

  res.status(201).json({
    id,
    nickname,
    plataforma,
  });
};

export const atualizar = async (req, res) => {
  const { id } = req.params;
  const { nickname, plataforma } = req.body;

  await playersModel.atualizarPlayer(id, { nickname, plataforma });
  res.json({ mensagem: "Player atualizado com sucesso" });
};

export const deletar = async (req, res) => {
  const { id } = req.params;

  await playersModel.deletarPlayer(id);
  res.json({ mensagem: "Player deletado com sucesso" });
};