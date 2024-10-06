import zone_sheet from "./index.js";

import "jsuites/dist/jsuites.css";
import "../dist/zone_sheet.css";

let worksheet = zone_sheet(root, {
  minDimensions: [10, 10],
});
