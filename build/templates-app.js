angular.module('templates-app', ['home/home.tpl.html']);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<section id=\"home\">\n" +
    "    <div class=\"row collapse\">\n" +
    "        <div class=\"small-12 medium-4 columns ico-link\">\n" +
    "            <!--<img alt=\"About\" data-interchange=\"[assets/image/about.png, (default)], [assets/image/about-retina.png, (retina)]\">-->\n" +
    "            <img alt=\"About\" src=\"assets/image/about.png\">\n" +
    "            <noscript><img src=\"assets/image/about.png\"></noscript>\n" +
    "            <br>\n" +
    "            About\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"small-12 medium-4 columns ico-link\">\n" +
    "            <!--<img alt=\"Portfolio\" data-interchange=\"[assets/image/portfolio.png, (default)], [assets/image/portfolio-retina.png, (retina)]\"> <noscript><img src=\"assets/image/portfolio.png\"></noscript>-->\n" +
    "\n" +
    "            <img alt=\"Portfolio\" src=\"assets/image/portfolio.png\">\n" +
    "            <noscript><img src=\"assets/image/portfolio.png\"></noscript>\n" +
    "            <br>\n" +
    "            Portfolio\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"small-12 medium-4 columns last ico-link\">\n" +
    "            <!--<img alt=\"Contacts\" data-interchange=\"[assets/image/contact.png, (default)], [assets/image/contact-retina.png, (retina)]\"> <noscript><img src=\"assets/image/contact.png\"></noscript>-->\n" +
    "            <img alt=\"Contacts\" src=\"assets/image/contact.png\"> <noscript><img src=\"assets/image/contact.png\"></noscript>\n" +
    "            <br>\n" +
    "            Contacts\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>");
}]);
