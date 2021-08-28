exports.getIndex = (req, res, next) => {
 // res.sendFile(path.join(rootDir, 'src', 'View', 'admin.html'))
 res.render('index', {
  docTitle: 'Steak-in | The luxury restaurant in Danang',
  pageName: 'Index',
 })
}

exports.getMenu = (req, res, next) => {
 // res.sendFile(path.join(rootDir, 'src', 'View', 'admin.html'))
 res.render('menu', {
  docTitle: 'Steak-in | Menu',
  pageName: 'Menu',
 })
}

exports.getAbout = (req, res, next) => {
 // res.sendFile(path.join(rootDir, 'src', 'View', 'admin.html'))
 res.render('about-us', {
  docTitle: 'Steak-in | About Us',
  pageName: 'About Us',
 })
}

exports.getBookingDetail = (req, res, next) => {
 // res.sendFile(path.join(rootDir, 'src', 'View', 'admin.html'))
 res.render('booking-detail', {
  docTitle: 'Steak-in | Booking Detail',
  pageName: 'Booking detail',
 })
}

///Thiểu Trang Event




exports.getReview = (req, res, next) => {
 // res.sendFile(path.join(rootDir, 'src', 'View', 'admin.html'))
 res.render('review', {
  docTitle: 'Steak-in | Review',
  pageName: 'Review',
 })
}