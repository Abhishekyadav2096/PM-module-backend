const fs = require("fs").promises;
const path = require("path");
const multer = require("multer");
const PDFParser = require("pdf-parse");
const manulaModel = require("../models/manual");
const ObjectId = require("mongoose").Types.ObjectId;

// Set storage engine
const storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage }).single("manualFile");

// function to handle manual file upload
exports.uploadManual = async (req, res) => {
  try {
    upload(req, res, async (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      // Check if manual_name is provided
      const { manual_name } = req.body;
      //   console.log(manual_name, "manual_name*****");
      if (!manual_name) {
        return res
          .status(400)
          .json({ error: "manual_name is a required field" });
      }

      // Check if a file is uploaded
      if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
      }

      // Read the content of the PDF file
      const pdfPath = req.file.path;
      const pdfData = await fs.readFile(pdfPath);
      const pdfContent = await PDFParser(pdfData);

      // File uploaded successfully
      const doc = new manulaModel({
        name: manual_name,
        description: pdfContent.text,
        file_path: pdfPath,
        infra_id: new ObjectId("623daad494737ea02ea78cdb"),
      });

      const savedManual = await doc.save();

      res.status(200).json(savedManual);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
