import { find, propEq } from 'ramda';
import { todosLosProyectos } from '../models/proyecto';

const buscarProyecto = (id) =>
  find(propEq('id', parseInt(id)), todosLosProyectos);

export const index = async (req, res) => {
  res.json({ data: todosLosProyectos });
};

export const show = async (req, res) => {
  const proyecto = buscarProyecto(req.params.id);
  if (proyecto) {
    res.json({ data: proyecto });
  } else {
    res
      .status(404)
      .json({ message: `No se encontró un proyecto con id ${req.params.id}` });
  }
};
