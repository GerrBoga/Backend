import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      //console.log(__dirname)
      cb(null, __dirname + '/.././public/uploads/');            
      
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      const ext = path.extname(file.originalname);
      cb(null, file.fieldname + '-' + uniqueSuffix + ext);
    }
    
  });
  const fileFilter = (req, file, cb) => {};
  
  const uploader = multer({
    storage: storage,
    fileFilter: fileFilter,
  });
  

export default uploader;