const express = require('express');
const multer = require('multer');
const UploadConfig = require('./config/upload')
const SessionController = require('./controllers/SessionController');
const SpotConstroller = require('./controllers/SpotConstroller');
const DashBoardControllers = require('./controllers/DashBoardControllers');
const BookingController = require('./controllers/BookingController');

const routes = express.Router();

const upload = multer(UploadConfig);


routes.post('/sessions', SessionController.store);

routes.post('/Spots', upload.single('thumbnail'), SpotConstroller.store)

routes.get('/spots', SpotConstroller.index)

routes.get('/DashBoard', DashBoardControllers.show)

routes.post('/spots/:spot_id/bookings', upload.single('thumbnail'), BookingController.store)

module.exports = routes;