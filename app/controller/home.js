"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // ctx.body = "hello alex from egg";
    await ctx.render("index", { techs: ["js", "html", "css"] });
  }

  async testCtrl() {
    let { ctx } = this;
    ctx.body = "test data from egg";
  }
}

module.exports = HomeController;
