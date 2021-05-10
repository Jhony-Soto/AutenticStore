const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            callBack(null, './filesTemp');
        } else {
        // callBack(null, false);
            return callBack(new Error('Solo se acepta formato (.png, .jpg and .jpeg) para la imagen  !'));
        }
    },
    filename: (req, file, callBack) => {
        callBack(null, Date.now()+'-' + file.originalname);
    }
})

const upload = multer({
    storage: storage
});

module.exports = upload