var figlet = require("figlet");
const color=require('colors')
figlet("Hello syed!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data.rainbow);
});


//   _   _      _ _            _    _     _     _     _          _    _ _
//  | | | | ___| | | ___      / \  | |__ | |__ (_)___| |__   ___| | _| | |
//  | |_| |/ _ \ | |/ _ \    / _ \ | '_ \| '_ \| / __| '_ \ / _ \ |/ / | |
//  |  _  |  __/ | | (_) |  / ___ \| |_) | | | | \__ \ | | |  __/   <|_|_|
//  |_| |_|\___|_|_|\___/  /_/   \_\_.__/|_| |_|_|___/_| |_|\___|_|\_(_|_)


//uncomment the above code