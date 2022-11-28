const equipment = require("../models/SportEquipment");

const getEquipment = async () => {
  await equipment
    .find({})
    .then((data, err) => {
      if (err) {
        return res.status(200).json({ success: false, error: err });
      }
      if (data.length == 0) {
        return res
          .status(400)
          .json({
            success: false,
            message: "There is no equipment to view at this Time.",
          });
      }
      res.status(200).json({ success: true, data: data });
    })
    .catch((err) => {
      if (err) res.status(400).json({ success: false, error: err });
    });
};

const createEquipment = async (req, res) => {
  await equipment
    .insertMany(req.body.equipment)
    .then((equipment) => {
      if (equipment.length == 0) {
        return res
          .status(400)
          .json({ success: false, message: "Cant send empty fields!" });
      }
      return res
        .status(300)
        .json({ success: true, message: "equipment added successfully." });
    })
    .catch((err) => {
      res.status(400).json({ success: false, error: err });
    });
};

module.exports = {
  createEquipment,
  getEquipment,
};
