const routes = {
    inicio: `
        <section>
            <h2>Início</h2>
            <p>Bem-vindo à ONG Esperança.</p>
        </section>
    `,
    projetos: `
        <section>
            <h2>Projetos</h2>
            <p>Conheça os projetos desenvolvidos pela ONG.</p>
        </section>
    `,
    cadastro: `
        <section>
            <h2>Cadastro</h2>
            <p>Faça seu cadastro para participar da ONG.</p>
        </section>
    `
};

function renderizarPagina(rota) {
    const conteudo = document.getElementById("conteudo");

    if (!conteudo) return;

    conteudo.innerHTML = routes[rota] || routes.inicio;
}

function navegar(rota) {
    history.pushState({ rota }, "", #${rota});
    renderizarPagina(rota);
}

window.addEventListener("popstate", () => {
    const rota = location.hash.replace("#", "") || "inicio";
    renderizarPagina(rota);
});

document.addEventListener("DOMContentLoaded", () => {
    const rota = location.hash.replace("#", "") || "inicio";
    renderizarPagina(rota);
});
