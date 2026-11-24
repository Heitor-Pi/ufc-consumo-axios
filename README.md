# UFC Fighters - Consumo de API com React, Vite e Axios

Aplicação desenvolvida em React com Vite e Axios para listar lutadores do UFC consumindo uma API REST pública, com filtro de busca em tempo real pelo nome.

## Tecnologias utilizadas

- Vite
- React (JavaScript ES6+)
- Axios
- Styled Components

## API utilizada

Foi utilizada a API pública de MMA/UFC da ESPN, que retorna os rankings das categorias em JSON sem necessidade de chave de acesso:

- Base URL: `https://site.api.espn.com/apis/site/v2/sports/mma/ufc`
- Endpoint: `GET /rankings`

Para cada lutador são exibidos nome, foto, cartel (vitórias-derrotas-empates), categoria de peso e país.

## Funcionalidades

- Configuração do Axios em arquivo separado (`src/services/api.js`) usando `axios.create()`.
- Requisição GET executada ao carregar a página dentro do `useEffect` no hook `useFighters`.
- Dados, carregamento e erro controlados com `useState`.
- Listagem dos lutadores usando `.map()` com `key` única (`fighter.id`).
- Mensagem de carregamento enquanto a API responde.
- Tratamento de erro com mensagem amigável caso a requisição falhe.
- Card separado no componente `FighterCard`, recebendo os dados via `props`.
- Campo de busca (`input`) para filtrar lutadores pelo nome em tempo real.

## Estrutura de pastas

```text
src/
├── components/
│   ├── FighterCard/
│   │   ├── index.jsx
│   │   └── styles.js
│   ├── Footer/
│   │   ├── index.jsx
│   │   └── styles.js
│   └── Header/
│       ├── index.jsx
│       └── styles.js
├── hooks/
│   └── useFighters.js
├── services/
│   └── api.js
├── styles/
│   ├── GlobalStyles.js
│   └── theme.js
├── App.jsx
├── AppStyles.js
└── main.jsx
```

## Como rodar o projeto

Pré-requisito: ter o Node.js instalado.

1. Clone o repositório:
```bash
git clone https://github.com/Heitor-Pi/ufc-consumo-axios.git
cd ufc-consumo-axios
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse no navegador o endereço mostrado no terminal (normalmente `http://localhost:5173`).

## Como testar

- **Listagem**: ao abrir a página, os cards dos lutadores são carregados automaticamente pela API.
- **Loading**: no DevTools (F12 -> aba Network), mude a velocidade para *Slow 3G* e recarregue a página para ver a mensagem de carregamento.
- **Erro**: no DevTools (F12 -> aba Network), selecione *Offline* e recarregue a página para ver a mensagem de erro sem quebrar a aplicação.
- **Busca**: digite o nome de um lutador no campo de busca (ex: `Oliveira`, `Adesanya`, `Nunes`) para filtrar a lista em tempo real.
