backdrop-filter: blur()
````css
.topbar {
    background: rgba(8, 11, 20, 0.92);
    backdrop-filter: blur(6px);
}
````

Borra o que está atrás do elemento (o conteúdo da página rolando por baixo da topbar), criando aquele efeito de vidro fosco. Só funciona porque o background da topbar é semi-transparente (rgba com alpha < 1).

position: sticky
````css
.sidebar {
    position: sticky;
    top: 56px;
}
````

Meio-termo entre relative e fixed: a sidebar rola normal com a página, mas gruda no topo (56px, embaixo da topbar) quando você tenta passar dela.

appearance: none + gradiente pra seta do select
````css
select {
    appearance: none;
    background-image: linear-gradient(45deg, transparent 50%, var(--text-dim) 50%),
        linear-gradient(135deg, var(--text-dim) 50%, transparent 50%);
}
````

appearance: none remove a seta padrão feia do navegador. Como não usei imagem/ícone externo, desenhei a setinha com dois gradientes lineares triangulares — é um truque comum pra evitar depender de arquivo de ícone.

box-shadow com múltiplos valores
````css
form#missionForm {
    box-shadow: 0 0 40px rgba(34, 229, 255, 0.04), 0 10px 30px rgba(0, 0, 0, 0.4);
}
````

Dá pra empilhar várias sombras separadas por vírgula. Aqui é um glow cyan bem sutil por baixo + uma sombra escura normal por cima, pra dar profundidade.

background-image com vários radial-gradient
````css
body {
    background-image:
        radial-gradient(circle at 18% 30%, rgba(34, 229, 255, 0.07) 0%, transparent 45%),
        radial-gradient(circle at 85% 80%, rgba(120, 60, 230, 0.10) 0%, transparent 50%),
        radial-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px);
    background-size: auto, auto, 22px 22px;
}
````

Três gradientes empilhados: dois "glows" de cor posicionados em cantos diferentes da tela, e o terceiro é o grid de pontinhos (um radial-gradient bem pequeno de 1px repetido a cada 22px).