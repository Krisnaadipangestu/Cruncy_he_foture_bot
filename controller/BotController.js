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
      return this.reply("Ini adalah daftar produk restock silahkan pilih untuk mengambil " )
    }

    async alamatKantor(request) {
      return this.reply("Terima kasih Status gaji anda akan segera di proses ")
    }

}