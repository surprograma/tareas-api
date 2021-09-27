const usuario = { id: 1, nombre: 'pepe' };

export const index = async (req, res) => {
  const data = [usuario];
  res.json({ data });
};

export const show = async (req, res) => {
  if (usuario) {
    res.json({ data: usuario });
  } else {
    res
      .status(404)
      .json({ message: `No se encontró un usuario con id ${req.params.id}` });
  }
};
