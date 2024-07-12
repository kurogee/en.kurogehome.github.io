const menu_urls = [
    ["Index", "index.html"],
    ["About Me", "aboutme.html"],
    ["Projects", "projects.html"],
];

const menu = document.getElementById("menu");
menu.innerHTML = menu_urls.map(([name, url]) => `<a href="./${url}">${name}</a>`).join(" | ");