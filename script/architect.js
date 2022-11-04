/*Architect - Designed by Anurag (anxsion), exclusively for BukAnt. */

var year = '2022';

var iconset =[
    '<svg width=\"48\" height=\"48\" onclick=\"accountDrawer()\"><path fill=\"currentColor\" d=\"M24 23.95q-3.3 0-5.4-2.1-2.1-2.1-2.1-5.4 0-3.3 2.1-5.4 2.1-2.1 5.4-2.1 3.3 0 5.4 2.1 2.1 2.1 2.1 5.4 0 3.3-2.1 5.4-2.1 2.1-5.4 2.1ZM8 40v-4.7q0-1.9.95-3.25T11.4 30q3.35-1.5 6.425-2.25Q20.9 27 24 27q3.1 0 6.15.775 3.05.775 6.4 2.225 1.55.7 2.5 2.05.95 1.35.95 3.25V40Zm3-3h26v-1.7q0-.8-.475-1.525-.475-.725-1.175-1.075-3.2-1.55-5.85-2.125Q26.85 30 24 30t-5.55.575q-2.7.575-5.85 2.125-.7.35-1.15 1.075Q11 34.5 11 35.3Zm13-16.05q1.95 0 3.225-1.275Q28.5 18.4 28.5 16.45q0-1.95-1.275-3.225Q25.95 11.95 24 11.95q-1.95 0-3.225 1.275Q19.5 14.5 19.5 16.45q0 1.95 1.275 3.225Q22.05 20.95 24 20.95Zm0-4.5ZM24 37Z\"/></svg>',
    '<svg id=\"menu\" width=\"48\" height=\"48\" onclick=\"categoriesMobileDrawer(\'open\')\"><path fill=\"currentColor\" d=\"M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z\"/></svg>',
    '<svg height=\"48\" width=\"48\" onclick=\"categoriesMobileDrawer(\'close\')\"><path d=\"m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z\"/></svg>'
];

var path = [
    'page/',
    '',
    '../',
    '../../'
];

var indexpath = [
    'index.html',
    '../index.html',
    '../../index.html',
    '../../../index.html'
];

var logopath = [
    '',
    '../',
    '../../',
    '../../../'
];



function architect(opcode){
    var Navigation=[
        '<a href=\"'+ path[opcode] +'about.html\">ABOUT US</a>',
        '<a href=\"'+ path[opcode] +'author.html\">AUTHORS</a>',
        '<a href=\"'+ path[opcode] +'blog.html\">BLOG</a>',
        '<a href=\"'+ path[opcode] +'poster.html\">POSTER KAVITA</a>',
    ];
    
    var category = [
        '<a href=\"'+ path[opcode] +'category/bukanttitles.html\">BukAnt Titles</a>',
        '<a href=\"'+ path[opcode] +'category/fiction.html\">Fiction</a>',
        '<a href=\"'+ path[opcode] +'category/nonfiction.html\">Non-Fiction</a>',
        '<a href=\"'+ path[opcode] +'category/children.html\">Children</a>',
        '<a href=\"'+ path[opcode] +'category/poetry.html\">Poetry</a>'
    ];
    
    var otherInformation =[
        '<a href=\"'+ path[opcode] +'terms.html\">Terms and Conditions</a>',
        '<a href=\"'+ path[opcode] +'privacy.html\">Privacy Policy</a>'
    ];
    
    var navigation="<div class=\"navContainerA\"><img onclick=\"window.open(\'" + indexpath[opcode] + "\', \'_parent\');\" src=\"" + logopath[opcode] + "asset/image/banner/logoBanner.png\" alt=\"Logo\"></div><div class=\"navContainerB\"><p onclick=\"booksGenreWeb()\">BOOKS</p>"+ Navigation[0]+ Navigation[1]+ Navigation[2]+ Navigation[3] +"</div><div class=\"navContainerC\">"+ iconset[0]+ iconset[1] +"</div>";
    
    var catMobile=iconset[2]+"<h6 onclick=\"booksGenreMobile()\">BOOKS</h6><div id=\"booksGenre\">"+ category[0] + category[1] + category[2] + category[3] + category[4] +"</div>"+ Navigation[0]+ Navigation[1]+ Navigation[2]+ Navigation[3];
    
    var catWeb= category[0] + category[1] + category[2] + category[3] + category[4];
    
    var user= otherInformation[0] + otherInformation[1];
    
    var footer = "<h6>Copyright &copy; " + year +" Bukant</h6><p>Made with &#10084; by Anurag (<span onclick=\"window.open(\'https://anxsion.github.io\', \'_blank\')\"><u>anxsion</u></span>)</p>";
    
    document.getElementById("navigationId").insertAdjacentHTML("beforeend",navigation);
    document.getElementById("categoriesMobile").insertAdjacentHTML("beforeend",catMobile);
    document.getElementById("categoriesWeb").insertAdjacentHTML("beforeend",catWeb);
    document.getElementById("user").insertAdjacentHTML("beforeend",user);
    document.getElementById("footerId").insertAdjacentHTML("beforeend",footer);
}