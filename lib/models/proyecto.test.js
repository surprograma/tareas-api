const { proyecto } = require('./proyecto');

describe('Proyecto', () => {
  it('devuelve algo con forma de proyecto', () => {
    expect(proyecto()).toMatchObject({
      id: expect.any(Number),
      titulo: expect.any(String),
      tareas: expect.any(Array),
      inicio: expect.any(String),
      fin_deseado: expect.any(String),
    });
  });
});
