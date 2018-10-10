module.exports = router => {
  router.get('/', (req, res) => {
    res.render('index', { title: 'Express' });
  });

  router.use('/users', require('./users'))
}
