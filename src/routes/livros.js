
module.exports = (app) => {
  const controller = app.controllers.LivroController;
  
  app.route('/livros')
    .post(controller.create)
    .get(controller.find);

  app.route('/livros/:id')
    .get(controller.findOne);
};