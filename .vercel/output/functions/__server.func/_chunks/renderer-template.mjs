import { r as HTTPResponse } from "../_libs/h3+rou3+srvx.mjs";
//#region #nitro/virtual/renderer-template
var rendererTemplate = () => new HTTPResponse("<!doctype html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n    <meta name=\"google-site-verification\" content=\"Ug3hakUhp_8biBNeQib_DFl8xJpiJmUqviBsJ0xhAQw\" />\r\n    <meta name=\"monetag\" content=\"7bc13354b35f93ebe9be1a14f314913b\" />\r\n    <meta name=\"description\" content=\"Download MovieDock APK for Android with high-speed links and privacy-first browsing.\" />\r\n    <title>MovieDock — Download Android APK</title>\r\n  </head>\r\n  <body>\r\n    <div id=\"root\"></div>\r\n  </body>\r\n</html>\r\n", { headers: { "content-type": "text/html; charset=utf-8" } });
//#endregion
//#region node_modules/nitro/dist/runtime/internal/routes/renderer-template.mjs
function renderIndexHTML(event) {
	return rendererTemplate(event.req);
}
//#endregion
export { renderIndexHTML as default };
