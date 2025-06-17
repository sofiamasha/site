

// Dados fictícios dos filmes (JSON) (fiz por link pq imagem por imagem encheria muito)
const moviesData = [
    {
        id: 1,
        title: "Vingadores: Ultimato",
        original_title: "Avengers: Endgame",
        overview: "Após os eventos devastadores de 'Vingadores: Guerra Infinita', o universo está em ruínas devido aos esforços do Titã Louco, Thanos. Com a ajuda de aliados remanescentes, os Vingadores devem se reunir mais uma vez a fim de desfazer as ações de Thanos e restaurar a ordem no universo de uma vez por todas, não importando as consequências.",
        poster_path: "img/posters/poster1.svg",
        backdrop_path: "img/backdrops/backdrop1.svg",
        release_date: "2019-04-24",
        vote_average: 8.3,
        runtime: 181,
        genres: [
            { id: 12, name: "Aventura" },
            { id: 28, name: "Ação" },
            { id: 878, name: "Ficção científica" }
        ],
        tagline: "Parte do caminho é o fim.",
        trailer_key: "g6ng8iy-l0U",
        credits: {
            cast: [
                { id: 1, name: "Robert Downey Jr.", character: "Tony Stark / Homem de Ferro", profile_path: "https://image.tmdb.org/t/p/w185/5qHNjhtjMD4YWH3UP0rm4tKwxCL.jpg" },
                { id: 2, name: "Chris Evans", character: "Steve Rogers / Capitão América", profile_path: "https://image.tmdb.org/t/p/w185/3bOGNsHlrswhyW79uvIHH1V43JI.jpg" },
                { id: 3, name: "Mark Ruffalo", character: "Bruce Banner / Hulk", profile_path: "https://image.tmdb.org/t/p/w185/z3dvKqMNDQWk3QLxzumloQVR0pv.jpg" },
                { id: 4, name: "Chris Hemsworth", character: "Thor", profile_path: "https://image.tmdb.org/t/p/w185/jpurJ9jAcLCYjgHHfYF32m3zJYm.jpg" },
                { id: 5, name: "Scarlett Johansson", character: "Natasha Romanoff / Viúva Negra", profile_path: "https://image.tmdb.org/t/p/w185/6NsMbJXRlDZuDzatN2akFdGuTvx.jpg" },
                { id: 6, name: "Jeremy Renner", character: "Clint Barton / Gavião Arqueiro", profile_path: "https://image.tmdb.org/t/p/w185/yB8BMtvzHlMmRT1WmJzcvYR7piZ.jpg" }
            ]
        }
    },
    {
        id: 2,
        title: "Pantera Negra",
        original_title: "Black Panther",
        overview: "O príncipe T'Challa retorna a Wakanda para ser coroado rei. Assumindo o manto de Pantera Negra, ele vai à caça de um vilão que roubou o vibrânio de seu país, mas logo se vê capturado em um conflito que coloca o destino de Wakanda e do mundo em risco.",
        poster_path: "https://image.tmdb.org/t/p/w500/2yQUnpc1BXgesJrfcdoRa6jTAnA.jpg",
        backdrop_path: "https://image.tmdb.org/t/p/original/b6ZJZHUdMEFECvGiDpJjlfUWela.jpg",
        release_date: "2018-02-13",
        vote_average: 7.4,
        runtime: 134,
        genres: [
            { id: 28, name: "Ação" },
            { id: 12, name: "Aventura" },
            { id: 878, name: "Ficção científica" }
        ],
        tagline: "O rei voltou.",
        trailer_key: "wL4a4MafSjQ",
        credits: {
            cast: [
                { id: 7, name: "Chadwick Boseman", character: "T'Challa / Pantera Negra", profile_path: "https://image.tmdb.org/t/p/w185/3CE9LcdwFxJQI1SP95g2XE8Tq25.jpg" },
                { id: 8, name: "Michael B. Jordan", character: "Erik Killmonger", profile_path: "https://image.tmdb.org/t/p/w185/kc5qAKqhCwfU9zIXqxnkX3xgfhG.jpg" },
                { id: 9, name: "Lupita Nyong'o", character: "Nakia", profile_path: "https://image.tmdb.org/t/p/w185/y40Og1W7lLh0vDc7XQOUEuTJNtu.jpg" },
                { id: 10, name: "Danai Gurira", character: "Okoye", profile_path: "https://image.tmdb.org/t/p/w185/xoo5z8UgojWpBVIbFk5W1l7jhGQ.jpg" },
                { id: 11, name: "Letitia Wright", character: "Shuri", profile_path: "https://image.tmdb.org/t/p/w185/a68xeFVz4ERs2krGTQqDO8XiGQS.jpg" },
                { id: 12, name: "Angela Bassett", character: "Ramonda", profile_path: "https://image.tmdb.org/t/p/w185/7bIXmajXwUuUkMzaYqBQTCcFzDv.jpg" }
            ]
        }
    },
    {
        id: 3,
        title: "Coringa",
        original_title: "Joker",
        overview: "Arthur Fleck trabalha como palhaço para uma agência de talentos e, toda semana, precisa comparecer a uma agente social, devido aos seus conhecidos problemas mentais. Após ser demitido, Fleck reage mal à gozação de três homens em pleno metrô e os mata. Os assassinatos iniciam um movimento popular contra a elite de Gotham City, da qual Thomas Wayne é seu maior representante.",
        poster_path: "https://image.tmdb.org/t/p/w500/qq9G9RPwwBVThA6P3m013yGskXv.jpg",
        backdrop_path: "https://image.tmdb.org/t/p/original/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
        release_date: "2019-10-02",
        vote_average: 8.2,
        runtime: 122,
        genres: [
            { id: 80, name: "Crime" },
            { id: 18, name: "Drama" },
            { id: 53, name: "Thriller" }
        ],
        tagline: "Coloque um sorriso nessa cara.",
        trailer_key: "zAGVQLHvwOY",
        credits: {
            cast: [
                { id: 13, name: "Joaquin Phoenix", character: "Arthur Fleck / Coringa", profile_path: "https://image.tmdb.org/t/p/w185/z8IEEid4z63CnXjjbgYZ1kBEzhs.jpg" },
                { id: 14, name: "Robert De Niro", character: "Murray Franklin", profile_path: "https://image.tmdb.org/t/p/w185/cT8htcckIuyI1Lqwt1CvD02ynTh.jpg" },
                { id: 15, name: "Zazie Beetz", character: "Sophie Dumond", profile_path: "https://image.tmdb.org/t/p/w185/sgxzT54GnvgeMnOZgpQQx9csAdd.jpg" },
                { id: 16, name: "Frances Conroy", character: "Penny Fleck", profile_path: "https://image.tmdb.org/t/p/w185/ufhplDQyIjpksYQx7UT3WaLJZu3.jpg" },
                { id: 17, name: "Brett Cullen", character: "Thomas Wayne", profile_path: "https://image.tmdb.org/t/p/w185/62RaZYkA8ccuRQoJD8AJ1qLg0OK.jpg" },
                { id: 18, name: "Shea Whigham", character: "Detetive Burke", profile_path: "https://image.tmdb.org/t/p/w185/7UzFJxgxGIVnAKiBAgaOZkigjW8.jpg" }
            ]
        }
    },
    {
        id: 4,
        title: "Parasita",
        original_title: "기생충",
        overview: "Toda a família de Ki-taek está desempregada, vivendo num porão sujo e apertado. Uma obra do acaso faz com que o filho adolescente da família comece a dar aulas de inglês à garota de uma família rica. Fascinados com a vida luxuosa destas pessoas, pai, mãe, filho e filha bolam um plano para se infiltrarem também na família burguesa, um a um. No entanto, os segredos e mentiras necessários à ascensão social custarão caro a todos.",
        poster_path: "https://image.tmdb.org/t/p/w500/igw938inb6Fy0YVcwIyxQ7Lu5FE.jpg",
        backdrop_path: "https://image.tmdb.org/t/p/original/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg",
        release_date: "2019-05-30",
        vote_average: 8.5,
        runtime: 132,
        genres: [
            { id: 35, name: "Comédia" },
            { id: 18, name: "Drama" },
            { id: 53, name: "Thriller" }
        ],
        tagline: "Ricos e pobres. Todos são parasitas.",
        trailer_key: "isOGD_7hNIY",
        credits: {
            cast: [
                { id: 19, name: "Song Kang-ho", character: "Kim Ki-taek", profile_path: "https://image.tmdb.org/t/p/w185/hNXDIUAQBPu4OKgWxLvk7IDKEzL.jpg" },
                { id: 20, name: "Lee Sun-kyun", character: "Park Dong-ik", profile_path: "https://image.tmdb.org/t/p/w185/hQkDeEXt9m42V9pAtfkq1jUbyYF.jpg" },
                { id: 21, name: "Cho Yeo-jeong", character: "Choi Yeon-gyo", profile_path: "https://image.tmdb.org/t/p/w185/kPLwoUYFBtsyTF1UUNnZtkrgCxV.jpg" },
                { id: 22, name: "Choi Woo-shik", character: "Kim Ki-woo", profile_path: "https://image.tmdb.org/t/p/w185/kWE95OBBEpSm8Eof4NYrZpMOLPo.jpg" },
                { id: 23, name: "Park So-dam", character: "Kim Ki-jung", profile_path: "https://image.tmdb.org/t/p/w185/nXLG8EDAXECQgQHbKv9fNBEj9dI.jpg" },
                { id: 24, name: "Jang Hye-jin", character: "Chung-sook", profile_path: "https://image.tmdb.org/t/p/w185/uiDwNC69RnYbSP9QgQJcJNeHYFI.jpg" }
            ]
        }
    },
    {
        id: 5,
        title: "1917",
        original_title: "1917",
        overview: "Os cabos Schofield e Blake são jovens soldados britânicos durante a Primeira Guerra Mundial. Quando eles são encarregados de uma missão aparentemente impossível, os dois precisam atravessar território inimigo, lutando contra o tempo, para entregar uma mensagem que pode salvar 1.600 de seus companheiros.",
        poster_path: "https://image.tmdb.org/t/p/w500/iZf0KyrE25z1sage4SYFLCCrMi9.jpg",
        backdrop_path: "https://image.tmdb.org/t/p/original/cqa3sa4c4jevgnEJwq3CMF8UfTG.jpg",
        release_date: "2019-12-25",
        vote_average: 8.0,
        runtime: 119,
        genres: [
            { id: 10752, name: "Guerra" },
            { id: 18, name: "Drama" },
            { id: 28, name: "Ação" }
        ],
        tagline: "Tempo é o inimigo.",
        trailer_key: "YqNYrYUiMfg",
        credits: {
            cast: [
                { id: 25, name: "George MacKay", character: "Lance Corporal Schofield", profile_path: "https://image.tmdb.org/t/p/w185/f4ubxYY2tFOzEBaLuFdLyix9dzY.jpg" },
                { id: 26, name: "Dean-Charles Chapman", character: "Lance Corporal Blake", profile_path: "https://image.tmdb.org/t/p/w185/zHjKCmjTX5W7DSs2KZnRvpNpD15.jpg" },
                { id: 27, name: "Colin Firth", character: "General Erinmore", profile_path: "https://image.tmdb.org/t/p/w185/dYXaHPMZG8eJ3CZXMBQdoyRRWnH.jpg" },
                { id: 28, name: "Benedict Cumberbatch", character: "Colonel Mackenzie", profile_path: "https://image.tmdb.org/t/p/w185/wz3MRiMmoz6b5X0UP9BFzFK1huD.jpg" },
                { id: 29, name: "Mark Strong", character: "Captain Smith", profile_path: "https://image.tmdb.org/t/p/w185/9wUFkf2QklbdTrRZVKw0AmGzNlZ.jpg" },
                { id: 30, name: "Richard Madden", character: "Lieutenant Joseph Blake", profile_path: "https://image.tmdb.org/t/p/w185/iN6yyC3KCHTUDaEI8qFSENCEPKd.jpg" }
            ]
        }
    },
    {
        id: 6,
        title: "Interestelar",
        original_title: "Interstellar",
        overview: "As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar.",
        poster_path: "https://image.tmdb.org/t/p/w500/nCbkOyOMTEwlEV0LtCOvCnwEONA.jpg",
        backdrop_path: "https://image.tmdb.org/t/p/original/pbrkL804c8yAv3zBZR4QPEafpAR.jpg",
        release_date: "2014-11-05",
        vote_average: 8.4,
        runtime: 169,
        genres: [
            { id: 12, name: "Aventura" },
            { id: 18, name: "Drama" },
            { id: 878, name: "Ficção científica" }
        ],
        tagline: "O fim da Terra não será o fim da humanidade.",
        trailer_key: "zSWdZVtXT7E",
        credits: {
            cast: [
                { id: 31, name: "Matthew McConaughey", character: "Joseph Cooper", profile_path: "https://image.tmdb.org/t/p/w185/wJiGedOCZhwMx9DezY8uwbNxmAY.jpg" },
                { id: 32, name: "Anne Hathaway", character: "Dr. Amelia Brand", profile_path: "https://image.tmdb.org/t/p/w185/tLelKoPNiyJCSEtQTz1FGv4TLGc.jpg" },
                { id: 33, name: "Jessica Chastain", character: "Murphy Cooper", profile_path: "https://image.tmdb.org/t/p/w185/nkFrkn5NZVGWb4b2X0yIcXezhyt.jpg" },
                { id: 34, name: "Michael Caine", character: "Professor Brand", profile_path: "https://image.tmdb.org/t/p/w185/kTemnoeeLMB8NpEpPJEN9qZEdmj.jpg" },
                { id: 35, name: "Mackenzie Foy", character: "Young Murphy", profile_path: "https://image.tmdb.org/t/p/w185/xrkzQFRqXI1EzQkh0pT8fheECOS.jpg" },
                { id: 36, name: "Timothée Chalamet", character: "Young Tom", profile_path: "https://image.tmdb.org/t/p/w185/xa1EHgeTviYFIlN8R4ySFR2EF3j.jpg" }
            ]
        }
    },
    {
        id: 7,
        title: "Jurassic Park: O Parque dos Dinossauros",
        original_title: "Jurassic Park",
        overview: "Um parque construído por um milionário tem como habitantes dinossauros diversos, extintos a sessenta e cinco milhões de anos. Isso é possível por ter sido encontrado um inseto fossilizado, que tinha sugado sangue destes dinossauros, de onde pôde-se isolar o DNA, o código químico da vida e, a partir deste ponto, recriá-los em laboratório. Mas, o que parecia ser um sonho se torna um pesadelo, quando a experiência sai do controle de seus criadores.",
        poster_path: "https://image.tmdb.org/t/p/w500/mgjJ7FH4V3exsmoHwXrmsUhn0h1.jpg",
        backdrop_path: "https://image.tmdb.org/t/p/original/wP8zx2VAHS3QrYXQZZbv3L9Gv3F.jpg",
        release_date: "1993-06-11",
        vote_average: 7.9,
        runtime: 127,
        genres: [
            { id: 12, name: "Aventura" },
            { id: 878, name: "Ficção científica" },
            { id: 53, name: "Thriller" }
        ],
        tagline: "Uma experiência de 65 milhões de anos.",
        trailer_key: "QWBKEmWWl38",
        credits: {
            cast: [
                { id: 37, name: "Sam Neill", character: "Dr. Alan Grant", profile_path: "https://image.tmdb.org/t/p/w185/jsJ0R1xS6xmTTXcLH5M79tNOJZz.jpg" },
                { id: 38, name: "Laura Dern", character: "Dr. Ellie Sattler", profile_path: "https://image.tmdb.org/t/p/w185/eLqBUQTsN1V5E70GETHzHz8wIwk.jpg" },
                { id: 39, name: "Jeff Goldblum", character: "Dr. Ian Malcolm", profile_path: "https://image.tmdb.org/t/p/w185/mGVObkhtqCzh9UszIV2qDp2kkPu.jpg" },
                { id: 40, name: "Richard Attenborough", character: "John Hammond", profile_path: "https://image.tmdb.org/t/p/w185/d0GDc7CeKJlfm4gBIB1h7jHSZk8.jpg" },
                { id: 41, name: "Joseph Mazzello", character: "Tim Murphy", profile_path: "https://image.tmdb.org/t/p/w185/rLe7s0M3DU1Tq82d1twEZJ7A07y.jpg" },
                { id: 42, name: "Ariana Richards", character: "Lex Murphy", profile_path: "https://image.tmdb.org/t/p/w185/6wZZgS7osfJDvfizLTveHdkLfP9.jpg" }
            ]
        }
    },
    {
        id: 8,
        title: "Clube da Luta",
        original_title: "Fight Club",
        overview: "Um homem deprimido que sofre de insônia conhece um estranho vendedor chamado Tyler Durden e se vê morando em uma casa suja depois que seu perfeito apartamento é destruído. A dupla forma um clube com regras rígidas onde homens lutam. A parceria perfeita é comprometida quando Marla, uma mulher traumatizada, atrai a atenção de Tyler.",
        poster_path: "https://image.tmdb.org/t/p/w500/r3pPehX4ik8NLYPpbDRAh0YRtMb.jpg",
        backdrop_path: "https://image.tmdb.org/t/p/original/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
        release_date: "1999-10-15",
        vote_average: 8.4,
        runtime: 139,
        genres: [
            { id: 18, name: "Drama" },
            { id: 53, name: "Thriller" }
        ],
        tagline: "A primeira regra do Clube da Luta é: não fale sobre o Clube da Luta.",
        trailer_key: "SUXWAEX2jlg",
        credits: {
            cast: [
                { id: 43, name: "Brad Pitt", character: "Tyler Durden", profile_path: "https://image.tmdb.org/t/p/w185/oTB9vGIBacH5aQNS0pUM74QSWuf.jpg" },
                { id: 44, name: "Edward Norton", character: "Narrador", profile_path: "https://image.tmdb.org/t/p/w185/8nytsqL59SFJTVYVrN72k6qkGgJ.jpg" },
                { id: 45, name: "Helena Bonham Carter", character: "Marla Singer", profile_path: "https://image.tmdb.org/t/p/w185/DDeITcCpnBd0CkAIRPhggy9bt3.jpg" },
                { id: 46, name: "Meat Loaf", character: "Robert 'Bob' Paulson", profile_path: "https://image.tmdb.org/t/p/w185/7gJhAR6rnLA25n6U5h6Naryuq9Y.jpg" },
                { id: 47, name: "Jared Leto", character: "Angel Face", profile_path: "https://image.tmdb.org/t/p/w185/ca3x0OfIKbJppVbQUec2MX1gXn4.jpg" },
                { id: 48, name: "Zach Grenier", character: "Richard Chesler", profile_path: "https://image.tmdb.org/t/p/w185/fSyQKZO39sLJKtMw6hle5nqzHzT.jpg" }
            ]
        }
    }
];

// Categorias de filmes
const categories = [
    { id: 28, name: "Ação" },
    { id: 12, name: "Aventura" },
    { id: 16, name: "Animação" },
    { id: 35, name: "Comédia" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentário" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Família" },
    { id: 14, name: "Fantasia" },
    { id: 36, name: "História" },
    { id: 27, name: "Terror" },
    { id: 10402, name: "Música" },
    { id: 9648, name: "Mistério" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Ficção científica" },
    { id: 10770, name: "Filme de TV" },
    { id: 53, name: "Thriller" },
    { id: 10752, name: "Guerra" },
    { id: 37, name: "Faroeste" }
];

// Elementos do DOM para a página inicial
const featuredMoviesContainer = document.getElementById('featured-movies');
const categoriesContainer = document.getElementById('categories-container');
const popularMoviesContainer = document.getElementById('popular-movies');

// Elementos do DOM para a página de detalhes
const movieDetailsContainer = document.getElementById('movie-details-container');
const similarMoviesContainer = document.getElementById('similar-movies');

// Formulário de busca
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');

// Elementos para a página de favoritos
const favoritesContainer = document.getElementById('favorites-container');

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    // Verificar qual página está sendo visualizada
    if (document.location.pathname.includes('detalhes.html')) {
        // Estamos na página de detalhes, pegar o ID do filme da URL
        const urlParams = new URLSearchParams(window.location.search);
        const movieId = parseInt(urlParams.get('id'));
        
        if (movieId) {
            // Carregar detalhes do filme
            loadMovieDetails(movieId);
            // Carregar filmes similares (neste caso, outros filmes aleatórios)
            loadSimilarMovies(movieId);
        } else {
            // Redirecionar para a página inicial se não houver ID
            window.location.href = 'index.html';
        }
    } 
    else if (document.location.pathname.includes('favoritos.html')) {
        // Estamos na página de favoritos
        loadFavorites();
    }
    else {
        // Estamos na página inicial
        // Carregar filmes em destaque
        loadFeaturedMovies();
        
        // Carregar categorias
        loadCategories();
        
        // Carregar filmes populares
        loadPopularMovies();
        
        // Carregar filmes recomendados
        loadRecommendedMovies();
    }
    
    // Inicializar formulário de busca
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const query = searchInput.value.trim();
            if (query) {
                // Redirecionar para a página inicial com o parâmetro de busca
                window.location.href = `index.html?search=${encodeURIComponent(query)}`;
            }
        });
    }
    
    // Verificar se há uma busca na URL
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search');
    
    if (searchQuery && document.location.pathname.includes('index.html')) {
        // Fazer a busca
        searchMovies(searchQuery);
    }
});

// Função para carregar filmes em destaque (estilo carrossel)
function loadFeaturedMovies() {
    if (!featuredMoviesContainer) return;
    
    featuredMoviesContainer.innerHTML = '';
    
    // Selecionar 8 filmes aleatórios como destaque (mais filmes para o carrossel)
    const randomMovies = getRandomMovies(moviesData, 8);
    
    randomMovies.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.className = 'movie-slider-item';
        movieItem.appendChild(createMovieCard(movie));
        featuredMoviesContainer.appendChild(movieItem);
    });
}

// Função para carregar categorias
function loadCategories() {
    if (!categoriesContainer) return;
    
    categoriesContainer.innerHTML = '';
    
    // Mostrar apenas 8 categorias
    const displayCategories = categories.slice(0, 8);
    
    displayCategories.forEach(category => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'col-6 col-md-4 col-lg-3';
        categoryCard.innerHTML = `
            <a href="index.html?category=${category.id}" class="category-card text-decoration-none">
                <div class="card text-center">
                    <div class="card-body">
                        <h5 class="mb-0">${category.name}</h5>
                    </div>
                </div>
            </a>
        `;
        categoriesContainer.appendChild(categoryCard);
    });
}

// Função para carregar filmes populares (estilo carrossel)
function loadPopularMovies() {
    if (!popularMoviesContainer) return;
    
    popularMoviesContainer.innerHTML = '';
    
    // Mostrar todos os filmes ou filtrar por categoria se especificado na URL
    const urlParams = new URLSearchParams(window.location.search);
    const categoryId = parseInt(urlParams.get('category'));
    
    let moviesToShow = [...moviesData];
    
    if (categoryId) {
        moviesToShow = moviesData.filter(movie => 
            movie.genres.some(genre => genre.id === categoryId)
        );
        
        // Atualizar título da seção se estiver filtrando por categoria
        const categoryName = categories.find(cat => cat.id === categoryId)?.name;
        if (categoryName) {
            const sectionTitle = document.querySelector('.popular-section .section-title');
            if (sectionTitle) {
                sectionTitle.innerHTML = `<i class="fas fa-film text-accent me-2"></i>Filmes de ${categoryName}`;
            }
        }
    }
    
    // Limitar a 10 filmes para o carrossel (melhora a performance pra nao ficar muit informacao)
    const limitedMovies = moviesToShow.slice(0, 10);
    
    limitedMovies.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.className = 'movie-slider-item';
        movieItem.appendChild(createMovieCard(movie));
        popularMoviesContainer.appendChild(movieItem);
    });
}

// Função para carregar detalhes do filme
function loadMovieDetails(movieId) {
    if (!movieDetailsContainer) return;
    
    const movie = moviesData.find(m => m.id === movieId);
    
    if (!movie) {
        movieDetailsContainer.innerHTML = '<div class="alert alert-danger">Filme não encontrado</div>';
        return;
    }
    
    // Atualizar o título da página
    document.title = `${movie.title} - FilmFlix`;
    
    // Usar o template de detalhes do filme
    const template = document.getElementById('movie-details-template');
    const movieDetails = document.importNode(template.content, true);
    
    // Preencher os dados do filme no template
    movieDetails.querySelector('.movie-backdrop').style.backgroundImage = `url('${movie.backdrop_path}')`;
    movieDetails.querySelector('.movie-poster-img').src = movie.poster_path;
    movieDetails.querySelector('.movie-poster-img').alt = movie.title;
    
    movieDetails.querySelector('.movie-title').textContent = `${movie.title} (${movie.release_date.substring(0, 4)})`;
    movieDetails.querySelector('.release-date').innerHTML = `<i class="far fa-calendar-alt me-1"></i> ${formatDate(movie.release_date)}`;
    movieDetails.querySelector('.runtime').innerHTML = `<i class="far fa-clock me-1"></i> ${movie.runtime} min`;
    movieDetails.querySelector('.rating').innerHTML = `<i class="fas fa-star text-warning me-1"></i> ${movie.vote_average}/10`;
    
    // Gêneros
    const genresContainer = movieDetails.querySelector('.movie-genres');
    movie.genres.forEach(genre => {
        const badge = document.createElement('span');
        badge.className = 'badge rounded-pill text-bg-primary me-1';
        badge.textContent = genre.name;
        genresContainer.appendChild(badge);
    });
    
    // Tagline
    const taglineElement = movieDetails.querySelector('.movie-tagline');
    if (movie.tagline) {
        taglineElement.textContent = `"${movie.tagline}"`;
    } else {
        taglineElement.style.display = 'none';
    }
    
    // Sinopse
    movieDetails.querySelector('.movie-overview p').textContent = movie.overview;
    
    // Elenco
    const castContainer = movieDetails.querySelector('#cast-container');
    movie.credits.cast.forEach(person => {
        const castCard = document.createElement('div');
        castCard.className = 'col';
        castCard.innerHTML = `
            <div class="cast-card text-center">
                <div class="cast-avatar mb-2">
                    <img src="${person.profile_path}" class="img-fluid rounded-circle" alt="${person.name}">
                </div>
                <h6 class="cast-name">${person.name}</h6>
                <p class="cast-character small text-muted">${person.character}</p>
            </div>
        `;
        castContainer.appendChild(castCard);
    });
    
    // Trailer ( esta dando errado)
    const trailerTab = movieDetails.querySelector('.trailer-tab-item');
    const trailerIframe = movieDetails.querySelector('.video-container iframe');
    
    if (movie.trailer_key) {
        trailerIframe.src = `https://www.youtube.com/embed/${movie.trailer_key}`;
        trailerIframe.title = `${movie.title} Trailer`;
    } else {
        trailerTab.style.display = 'none';
    }
    
    // Botão de favorito
    const favoriteBtn = movieDetails.querySelector('#favoriteBtn');
    favoriteBtn.dataset.movieId = movie.id;
    
    // Verificar se o filme já está nos favoritos
    const isFavorite = checkIfFavorite(movie.id);
    if (isFavorite) {
        favoriteBtn.classList.add('active');
        favoriteBtn.innerHTML = '<i class="fas fa-heart"></i> Remover dos Favoritos';
    }
    
    // Adicionar event listener para o botão de favorito
    favoriteBtn.addEventListener('click', function() {
        toggleFavorite(movie);
        
        // Atualizar o texto do botão
        if (this.classList.contains('active')) {
            this.innerHTML = '<i class="fas fa-heart"></i> Remover dos Favoritos';
        } else {
            this.innerHTML = '<i class="far fa-heart"></i> Adicionar aos Favoritos';
        }
    });
    
    // Adicionar o template preenchido ao container
    movieDetailsContainer.innerHTML = '';
    movieDetailsContainer.appendChild(movieDetails);
}

// Função para carregar filmes similares
function loadSimilarMovies(currentMovieId) {
    if (!similarMoviesContainer) return;
    
    similarMoviesContainer.innerHTML = '';
    
    // Selecionar alguns filmes aleatórios excluindo o filme atual
    const otherMovies = moviesData.filter(movie => movie.id !== currentMovieId);
    const similarMovies = getRandomMovies(otherMovies, 4);
    
    similarMovies.forEach(movie => {
        const movieCol = document.createElement('div');
        movieCol.className = 'col-6 col-md-3';
        movieCol.innerHTML = `
            <div class="similar-movie-card">
                <a href="detalhes.html?id=${movie.id}" class="text-decoration-none">
                    <img src="${movie.poster_path}" class="img-fluid rounded mb-2" alt="${movie.title}">
                    <h6 class="similar-movie-title text-truncate">${movie.title}</h6>
                </a>
            </div>
        `;
        similarMoviesContainer.appendChild(movieCol);
    });
}

// Função para buscar filmes (estilo carrossel)
function searchMovies(query) {
    // Limpar a seção de filmes populares e mostrar os resultados da busca
    if (popularMoviesContainer) {
        popularMoviesContainer.innerHTML = '';
        
        // Atualizar o título da seção
        const sectionTitle = document.querySelector('.popular-section .section-title');
        if (sectionTitle) {
            sectionTitle.innerHTML = `<i class="fas fa-search text-accent me-2"></i>Resultados para "${query}"`;
        }
        
        // Filtrar filmes baseado na query
        const results = moviesData.filter(movie => 
            movie.title.toLowerCase().includes(query.toLowerCase()) ||
            movie.overview.toLowerCase().includes(query.toLowerCase())
        );
        
        if (results.length > 0) {
            // Converter a section para o formato de slider quando houver resultados
            const movieSlider = popularMoviesContainer.parentElement;
            if (movieSlider && movieSlider.classList.contains('row')) {
                movieSlider.classList.remove('row', 'g-4');
                movieSlider.classList.add('movie-slider');
                
                // Envolver o slider em um container de row se necessário
                if (!movieSlider.parentElement.classList.contains('movie-row')) {
                    const movieRow = document.createElement('div');
                    movieRow.className = 'movie-row';
                    movieSlider.parentNode.insertBefore(movieRow, movieSlider);
                    movieRow.appendChild(movieSlider);
                }
            }
            
            results.forEach(movie => {
                const movieItem = document.createElement('div');
                movieItem.className = 'movie-slider-item';
                movieItem.appendChild(createMovieCard(movie));
                popularMoviesContainer.appendChild(movieItem);
            });
        } else {
            // Reverter para o layout de grid para mostrar a mensagem de nenhum resultado
            const movieSlider = popularMoviesContainer.parentElement;
            if (movieSlider && movieSlider.classList.contains('movie-slider')) {
                movieSlider.classList.remove('movie-slider');
                movieSlider.classList.add('row', 'g-4');
                
                // Remover o container de row se existir
                if (movieSlider.parentElement.classList.contains('movie-row')) {
                    const movieRow = movieSlider.parentElement;
                    movieRow.parentNode.insertBefore(movieSlider, movieRow);
                    movieRow.remove();
                }
            }
            
            popularMoviesContainer.innerHTML = `
                <div class="col-12 text-center py-5">
                    <div class="empty-state">
                        <i class="fas fa-search fa-3x mb-3 text-muted"></i>
                        <h3>Nenhum Filme Encontrado</h3>
                        <p>Tente buscar com palavras-chave diferentes</p>
                    </div>
                </div>
            `;
        }
    }
}

// Função para carregar os favoritos
function loadFavorites() {
    if (!favoritesContainer) return;
    
    const favorites = getFavorites();
    
    if (favorites.length === 0) {
        // Mostrar estado vazio
        const emptyTemplate = document.getElementById('empty-favorites');
        const emptyState = document.importNode(emptyTemplate.content, true);
        favoritesContainer.innerHTML = '';
        favoritesContainer.appendChild(emptyState);
    } else {
        // Mostrar grid de favoritos
        const gridTemplate = document.getElementById('favorites-grid');
        const grid = document.importNode(gridTemplate.content, true);
        favoritesContainer.innerHTML = '';
        favoritesContainer.appendChild(grid);
        
        const favoritesRow = document.getElementById('favorites-row');
        const movieCardTemplate = document.getElementById('movie-card-template');
        
        // Adicionar cada filme favorito ao grid
        favorites.forEach(favId => {
            const movie = moviesData.find(m => m.id === favId);
            if (movie) {
                const movieCard = document.importNode(movieCardTemplate.content, true);
                
                // Preencher dados do filme
                const movieLink = movieCard.querySelector('.movie-link');
                movieLink.href = `detalhes.html?id=${movie.id}`;
                
                const moviePoster = movieCard.querySelector('.movie-poster');
                moviePoster.src = movie.poster_path;
                moviePoster.alt = movie.title;
                
                const movieTitle = movieCard.querySelector('.movie-title');
                movieTitle.textContent = movie.title;
                
                const favoriteBtn = movieCard.querySelector('.btn-favorite');
                favoriteBtn.dataset.movieId = movie.id;
                
                // Adicionar ao grid de favoritos
                favoritesRow.appendChild(movieCard);
                
                // Adicionar event listener para o botão de favorito
                favoriteBtn.addEventListener('click', function() {
                    toggleFavorite(movie);
                    // Recarregar os favoritos após a remoção
                    setTimeout(() => {
                        loadFavorites();
                    }, 300);
                });
            }
        });
    }
}

// Função para criar um card de filme no estilo Netflix
function createMovieCard(movie) {
    const movieCol = document.createElement('div');
    movieCol.className = 'netflix-card';
    
    const releaseYear = movie.release_date ? movie.release_date.substring(0, 4) : 'Desconhecido';
    const genres = movie.genres && movie.genres.length > 0 
        ? movie.genres.slice(0, 2).map(genre => genre.name).join(' • ') 
        : '';
    
    movieCol.innerHTML = `
        <div class="movie-card">
            <div class="card-poster">
                <img src="${movie.poster_path}" alt="${movie.title}" class="img-fluid">
                <button class="btn-favorite" data-movie-id="${movie.id}">
                    <i class="far fa-heart"></i>
                </button>
                <div class="movie-rating">
                    <i class="fas fa-star text-warning"></i>
                    <span>${movie.vote_average}</span>
                </div>
                <div class="movie-info-hover">
                    <div class="movie-controls">
                        <a href="detalhes.html?id=${movie.id}" class="movie-control-btn">
                            <i class="fas fa-play"></i>
                        </a>
                        <button class="movie-control-btn" data-movie-id="${movie.id}">
                            <i class="fas fa-plus"></i>
                        </button>
                        <button class="movie-control-btn favorite-btn" data-movie-id="${movie.id}">
                            <i class="far fa-heart"></i>
                        </button>
                    </div>
                    <div class="mt-2 small text-white">
                        <span>${releaseYear}${genres ? ' • ' + genres : ''}</span>
                    </div>
                </div>
            </div>
            <div class="card-body p-2">
                <h5 class="card-title text-truncate">${movie.title}</h5>
                <a href="detalhes.html?id=${movie.id}" class="stretched-link" aria-label="Ver detalhes de ${movie.title}"></a>
            </div>
        </div>
    `;
    
    // Adicionar event listener para o botão de favorito
    const favoriteBtn = movieCol.querySelector('.btn-favorite');
    favoriteBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite(movie);
    });
    
    // Verificar se já está nos favoritos
    if (checkIfFavorite(movie.id)) {
        const btn = movieCol.querySelector('.btn-favorite');
        btn.classList.add('active');
        btn.querySelector('i').classList.remove('far');
        btn.querySelector('i').classList.add('fas');
    }
    
    return movieCol;
}

// Função para alternar favorito
function toggleFavorite(movie) {
    const favorites = getFavorites();
    const index = favorites.indexOf(movie.id);
    
    if (index === -1) {
        // Adicionar aos favoritos
        favorites.push(movie.id);
        showNotification(`"${movie.title}" adicionado aos favoritos!`, 'success');
    } else {
        // Remover dos favoritos
        favorites.splice(index, 1);
        showNotification(`"${movie.title}" removido dos favoritos`, 'info');
    }
    
    // Salvar favoritos
    localStorage.setItem('filmflix_favorites', JSON.stringify(favorites));
    
    // Atualizar botão
    const button = document.querySelector(`.btn-favorite[data-movie-id="${movie.id}"]`);
    if (button) {
        button.classList.toggle('active');
        
        const icon = button.querySelector('i');
        if (icon) {
            icon.classList.toggle('far');
            icon.classList.toggle('fas');
        }
    }
}

// Função para verificar se um filme está nos favoritos
function checkIfFavorite(movieId) {
    const favorites = getFavorites();
    return favorites.includes(movieId);
}

// Função para obter favoritos do localStorage
function getFavorites() {
    const favoritesJSON = localStorage.getItem('filmflix_favorites');
    return favoritesJSON ? JSON.parse(favoritesJSON) : [];
}



// Função para formatar data (YYYY-MM-DD para DD/MM/YYYY)
function formatDate(dateString) {
    if (!dateString) return 'Desconhecido';
    
    const parts = dateString.split('-');
    if (parts.length !== 3) return dateString;
    
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

// Função para obter filmes aleatórios de uma lista
function getRandomMovies(movies, count) {
    const shuffled = [...movies].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}
