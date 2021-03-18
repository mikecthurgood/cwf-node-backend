const fs = require('fs');
const path = require('path');
// leaving in for eventual adding and removing of profile images

const clearImage = filePath => {
    filePath = path.join(__dirname, '..', filePath);
    fs.unlink(filePath, err => console.log(err));
  };

  module.exports = {
      clearImage
  }