const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};


const routes = {
    404: "/assignment/pages/index.html",
    "/assignment/home": "/assignment/pages/index.html",
    "/assignment/about": "/assignment/pages/about.html",
    "/assignment/contact": "/assignment/pages/contact.html",
    "/assignment/guide": "/assignment/pages/guide.html",
};


const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
