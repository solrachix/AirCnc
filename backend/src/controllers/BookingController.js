const Booking = require('../models/booking')

module.exports = {
    async store(req, res) {
        const { user_id } = req.headers;
        const { spot_id } = req.params;
        const { date } = req.body;
        // console.log(user_id, spot_id, date);

        const booking = await Booking.create({
            user: user_id,
            spot: spot_id,
            date,
        })

        await booking.populate('spot').populate('user').execPopulate();

        return res.json(booking);
    }
};