exports.getDashboard = (req, res, next) => {
 // res.sendFile(path.join(rootDir, 'src', 'View', 'admin.html'))
 res.render('admin', {
  docTitle: 'Steak-in Restaurant | The luxury restaurant in Danang',
  pageName: 'Dashboard',
 })
}

exports.getAnalytic = (req, res, next) => {
 res.render('analytic', {
  docTitle: 'Steak-in Restaurant | The luxury restaurant in Danang',
  pageName: 'Analytic',
 })
}

exports.getReview = (req, res, next) => {
 res.render('admin-review', {
  docTitle: 'Steak-in Restaurant | The luxury restaurant in Danang',
  pageName: 'Review',
 })
}

exports.getBookingList = (req, res, next) => {
 res.render('admin-booking-list', {
  docTitle: 'Steak-in Restaurant | The luxury restaurant in Danang',
  pageName: 'Booking List',
 })
}

exports.getCustomerList = (req, res, next) => {
 res.render('admin-customer-list', {
  docTitle: 'Steak-in Restaurant | The luxury restaurant in Danang',
  pageName: 'Customer List',
 })
}