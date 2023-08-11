const Connect = require("../model/Connect");

const addConnect = async (req, res, next) => {
  let connect;
  const { name, place, message, phone, feedback, callback } = req.body;
  try {
    connect = new Connect({
      name,
      place,
      message,
      phone,
      feedback,
      callback,
    });
    await connect.save();
  } catch (err) {
    res.status(500).json({ message: "Unable to precess the request" });
  }
  res.status(201).json({ connect });
};

exports.addConnect = addConnect;
