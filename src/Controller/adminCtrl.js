exports.getDashboard = (req, res, next) => {
 // res.sendFile(path.join(rootDir, 'src', 'View', 'admin.html'))
 res.render('admin', {
  docTitle: 'Steak-in Restaurant | The luxury restaurant in Danang',
  pageName: 'Dashboard',
 })
}