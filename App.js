
const routes = {
    '/login': { templateId: 'login' },
    '/dashboard': { templateId: 'dashboard' },
};

function updateRoute() {

    const path = window.location.pathname;
    const route = routes[path];

    if (!route) {
        return navigate('/login');
    }

    const template = document.getElementById(route.templateId);
    const view = template.content.cloneNode(true);
    const app = document.getElementById('app');

    document.title = template.dataset.title || 'Bank App';

    if (route.afterRender){
        route.afterRender();
    }
    
    app.innerHTML = '';
    app.appendChild(view);
}

function navigate(path) {
    window.history.pushState({}, path, path);
    updateRoute();
}

window.onpopstate = () => updateRoute();
updateRoute();