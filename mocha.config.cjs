#! /usr/bin/env node

require("jsdom-global")(undefined, { url: "https://localhost" });
const jSuites = require("jsuites");
global.jSuites = jSuites;

const zone_sheet = require("./src/index.js");

global.zone_sheet = zone_sheet;
global.root = document.createElement("div");
global.root.style.width = "100%";
global.root.style.height = "100%";
document.body.appendChild(global.root);

exports.mochaHooks = {
  afterEach(done) {
    zone_sheet.destroy(root);
    done();
  },
};
