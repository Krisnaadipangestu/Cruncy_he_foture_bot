const { Controller, Response } = require("pepesan");
const f = require("../utils/Formatter");

module.exports = class BotController extends Controller {


    async introduction(request) {
      return Response.menu.fromArrayOfString(
        [
          f("menu.AmbilProduk"),
          f("menu.alamatKantor")
        ],
        f("intro", [request.name]),
        f("template.menu")
      );
    }

    async product(request) {
      return this.reply("Ini produk restock ")
    }

    async alamatKantor(request) {
      return this.reply("status gaji anda akan segera di proses")
    }

}