#!/usr/bin/env node

const { datatype, name, lorem, date } = require('faker/locale/es_MX');
const { concat, times } = require('ramda');

function tareaSimple() {
  return {
    simple: true,
    trabajadores: times(trabajador, datatype.number({ min: 1, max: 10 })),
    responsable: trabajador(),
    horas: datatype.number({ min: 5, max: 20 }),
    infra: datatype.float({ min: 10, max: 5000 }),
    descripcion: lorem.sentence(),
  };
}

function tareaIntegracion() {
  return {
    simple: false,
    tareas: variasTareas(),
    responsable: trabajador(),
  };
}

function variasTareas() {
  return concat(
    times(tareaSimple, datatype.number({ min: 1, max: 6 })),
    times(tareaIntegracion, datatype.number({ min: 0, max: 2 }))
  );
}

function trabajador() {
  return {
    nombre: name.findName(),
    arancel: datatype.number({ min: 500, max: 4000 }),
  };
}

export function proyecto(id) {
  const inicio = date.future();
  return {
    id: id ?? datatype.number(),
    titulo: lorem.slug(),
    inicio: inicio.toISOString(),
    fin_deseado: date.future(undefined, inicio).toISOString(),
    tareas: variasTareas(),
  };
}

export const todosLosProyectos = times((i) => proyecto(i + 1), 20);
