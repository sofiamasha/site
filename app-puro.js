// Dados dos filmes em formato JSON
const dados = {
    "filmes": [
        {
            "id": 1,
            "titulo": "Vingadores: Ultimato",
            "descricao": "Após Thanos eliminar metade das criaturas vivas, os Vingadores precisam lidar com a perda de amigos e entes queridos.",
            "conteudo": "Após os eventos devastadores de 'Vingadores: Guerra Infinita', o universo está em ruínas devido aos esforços do Titã Louco, Thanos. Com a ajuda de aliados remanescentes, os Vingadores devem se reunir mais uma vez a fim de desfazer as ações de Thanos e restaurar a ordem no universo de uma vez por todas, não importando as consequências.",
            "categoria": "Ação/Aventura",
            "diretor": "Anthony e Joe Russo",
            "destaque": true,
            "lancamento": "2019-04-25",
            "duracao": "181",
            "imagem_principal": "/img/posters/poster1.svg",
            "backdrop": "/img/backdrops/backdrop1.svg",
            "vote_average": 8.3,
            "imagens_complementares": [
                {
                    "id": 1,
                    "src": "/img/backdrops/backdrop1.svg",
                    "descricao": "Cena de batalha épica"
                },
                {
                    "id": 2,
                    "src": "/img/backdrops/backdrop2.svg",
                    "descricao": "Heróis reunidos"
                }
            ],
            "elenco": ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Chris Hemsworth"]
        },
        {
            "id": 2,
            "titulo": "Pantera Negra",
            "descricao": "T'Challa retorna a Wakanda para ser coroado rei, mas quando um antigo inimigo reaparece, seu poder é testado.",
            "conteudo": "Após a morte de seu pai, T'Challa retorna para a nação africana de Wakanda para assumir seu lugar de direito como rei. Quando um poderoso inimigo antigo reaparece, o poder e a coragem de T'Challa como rei e Pantera Negra são testados na defesa de seu povo.",
            "categoria": "Ação/Aventura",
            "diretor": "Ryan Coogler",
            "destaque": true,
            "lancamento": "2018-02-13",
            "duracao": "134",
            "imagem_principal": "/img/posters/poster2.svg",
            "backdrop": "/img/backdrops/backdrop2.svg",
            "vote_average": 7.4,
            "imagens_complementares": [
                {
                    "id": 1,
                    "src": "/img/backdrops/backdrop3.svg",
                    "descricao": "Wakanda Forever"
                },
                {
                    "id": 2,
                    "src": "/img/backdrops/backdrop4.svg",
                    "descricao": "Batalha ritual"
                }
            ],
            "elenco": ["Chadwick Boseman", "Michael B. Jordan", "Lupita Nyong'o"]
        }
    ]
};

// Elementos do DOM
const featuredMoviesContainer = document.getElementById('featured-movies');
const categoriesContainer = document.getElementById('categories-container');
const popularMoviesContainer = document.getElementById('popular-movies');
const movieDetailsContainer = document.getElementById('movie-details-container');
const similarMoviesContainer = document.getElementById('similar-movies');
const favoritesContainer = document.getElementById('favorites-container');
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');

// Função para criar card de filme
function createMovieCard(movie) {
    return `
        <div class="movie-card" data-movie-id="${movie.id}">
            <div class="card-poster">
                <img src="${movie.imagem_principal}" alt="${movie.titulo}">
                <button class="btn-favorite" onclick="toggleFavorite(${movie.id})">
                    <i class="fas fa-heart"></i>
                </button>
                <div class="movie-info-hover">
                    <h4>${movie.titulo}</h4>
                    <p>${movie.descricao}</p>
                    <div class="movie-controls">
                        <a href="detalhes-puro.html?id=${movie.id}" class="movie-control-btn">
                            <i class="fas fa-info"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <h5 class="card-title">${movie.titulo}</h5>
                <div class="movie-rating">
                    <i class="fas fa-star"></i> ${movie.vote_average}
                </div>
            </div>
        </div>
    `;
}

// Função para carregar filmes
function loadMovies() {
    const filmes = dados.filmes;
    const destaques = filmes.filter(movie => movie.destaque);

    if (featuredMoviesContainer) {
        featuredMoviesContainer.innerHTML = destaques.map(movie => createMovieCard(movie)).join('');
    }

    if (popularMoviesContainer) {
        popularMoviesContainer.innerHTML = filmes.map(movie => createMovieCard(movie)).join('');
    }

    if (document.getElementById('recommended-movies')) {
        document.getElementById('recommended-movies').innerHTML = 
            filmes.sort(() => 0.5 - Math.random()).slice(0,4)
                .map(movie => createMovieCard(movie)).join('');
    }
}

// Função para carregar detalhes do filme
function loadMovieDetails(movieId) {
    const movie = dados.filmes.find(m => m.id === movieId);

    if (!movie || !movieDetailsContainer) return;

    const template = document.getElementById('movie-details-template');
    const movieDetails = document.importNode(template.content, true);

    movieDetails.querySelector('.movie-backdrop').style.backgroundImage = `url('${movie.backdrop}')`;
    movieDetails.querySelector('.movie-poster-img').src = movie.imagem_principal;
    movieDetails.querySelector('.movie-title').textContent = movie.titulo;
    movieDetails.querySelector('.movie-tagline').textContent = movie.descricao;

    const metaInfo = `
        <span><i class="far fa-calendar-alt"></i> ${formatDate(movie.lancamento)}</span>
        <span><i class="far fa-clock"></i> ${movie.duracao} min</span>
        <span><i class="fas fa-star"></i> ${movie.vote_average}/10</span>
        <span><i class="fas fa-film"></i> ${movie.categoria}</span>
    `;
    movieDetails.querySelector('.movie-meta').innerHTML = metaInfo;

    const overview = movieDetails.querySelector('#overview .lead');
    if (overview) overview.textContent = movie.conteudo;

    // Carregar imagens complementares
    const castContainer = movieDetails.querySelector('#cast-container');
    if (castContainer && movie.imagens_complementares) {
        movie.imagens_complementares.forEach(img => {
            castContainer.innerHTML += `
                <div class="cast-card">
                    <div class="cast-avatar">
                        <img src="${img.src}" alt="${img.descricao}">
                    </div>
                    <p class="cast-character">${img.descricao}</p>
                </div>
            `;
        });
    }

    movieDetailsContainer.innerHTML = '';
    movieDetailsContainer.appendChild(movieDetails);
}


// Lista de categorias (gêneros)
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

// Função para alternar favoritos
function toggleFavorite(movieId) {
    let favorites = getFavorites();
    const index = favorites.indexOf(movieId);

    if (index === -1) {
        favorites.push(movieId);
        showNotification('Filme adicionado aos favoritos', 'success');
    } else {
        favorites.splice(index, 1);
        showNotification('Filme removido dos favoritos', 'info');
    }

    localStorage.setItem('filmflix_favorites', JSON.stringify(favorites));
    updateFavoriteButtons();
}

// Função para obter favoritos do localStorage
function getFavorites() {
    const favoritesJSON = localStorage.getItem('filmflix_favorites');
    return favoritesJSON ? JSON.parse(favoritesJSON) : [];
}

// Função para mostrar notificação
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-icon">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
        </div>
        <div class="notification-message">${message}</div>
    `;

    document.body.appendChild(notification);
    setTimeout(() => notification.classList.add('show'), 10);
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function updateFavoriteButtons() {
    const favoriteButtons = document.querySelectorAll('.btn-favorite');
    favoriteButtons.forEach(button => {
        const movieId = parseInt(button.getAttribute('onclick').match(/\d+/)[0]);
        if (getFavorites().includes(movieId)) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}


// Evento inicial quando o DOM é carregado
document.addEventListener('DOMContentLoaded', function() {
    // Verificar qual página está sendo visualizada
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = parseInt(urlParams.get('id'));

    if (window.location.pathname.includes('detalhes-puro.html') && movieId) {
        // Estamos na página de detalhes, pegar o ID do filme da URL
        loadMovieDetails(movieId);
        // Carregar filmes similares (neste caso, outros filmes aleatórios)
        loadSimilarMovies(movieId);
    } else if (window.location.pathname.includes('favoritos-puro.html')) {
        // Estamos na página de favoritos
        loadFavorites();
    } else {
        // Estamos na página inicial
        loadMovies();
        loadCategories();

        // Inicializar seção hero com um filme aleatório (if movies array has data)
        const filmes = dados.filmes;
        if (filmes.length > 0) {
            const randomHeroMovie = filmes[Math.floor(Math.random() * filmes.length)];
            if (randomHeroMovie && document.getElementById('hero-section')) {
                document.getElementById('hero-section').style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${randomHeroMovie.backdrop}')`;
                document.getElementById('hero-section').style.backgroundSize = 'cover';
                document.getElementById('hero-section').style.backgroundPosition = 'center';
                document.getElementById('hero-section').style.height = '500px';
                document.getElementById('hero-section').style.display = 'flex';
                document.getElementById('hero-section').style.alignItems = 'center';
                document.getElementById('hero-section').style.position = 'relative';
            }
        }
    }

    // Inicializar o formulário de busca
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchQuery = searchInput.value.trim();
            if (!searchQuery) return;

            // Se estivermos na página inicial, buscar diretamente
            if (!window.location.pathname.includes('detalhes-puro.html') && 
                !window.location.pathname.includes('favoritos-puro.html')) {
                loadMoviesFiltered(searchQuery);
            } else {
                // Se estivermos em outra página, redirecionar para a página inicial com a query
                window.location.href = `index-puro.html?search=${encodeURIComponent(searchQuery)}`;
            }
        });
    }

    // Verificar se há uma query de busca na URL
    const searchQuery = urlParams.get('search');
    if (searchQuery && popularMoviesContainer) {
        searchInput.value = searchQuery;
        loadMoviesFiltered(searchQuery);
    }
});

// Função para carregar categorias
function loadCategories() {
    if (!categoriesContainer) return;

    categoriesContainer.innerHTML = '';

    // Mostrar apenas 8 categorias
    const displayCategories = categories.slice(0, 8);

    displayCategories.forEach(category => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'col col-6 col-md-4 col-lg-3';
        categoryCard.innerHTML = `
            <a href="index-puro.html?category=${category.id}" class="category-card">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${category.name}</h5>
                    </div>
                </div>
            </a>
        `;
        categoriesContainer.appendChild(categoryCard);
    });
}


// Função para carregar filmes similares
function loadSimilarMovies(currentMovieId) {
    if (!similarMoviesContainer) return;

    similarMoviesContainer.innerHTML = '';

    // Selecionar alguns filmes aleatórios excluindo o filme atual
    const otherMovies = dados.filmes.filter(movie => movie.id !== currentMovieId);
    const similarMovies = getRandomMovies(otherMovies, 4);

    similarMovies.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.className = 'movie-slider-item';
        movieItem.innerHTML = createMovieCard(movie); 
        similarMoviesContainer.appendChild(movieItem);
    });
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

        // Adicionar cada filme favorito ao grid
        favorites.forEach(favId => {
            const movie = dados.filmes.find(m => m.id === favId); 
            if (movie) {
                favoritesRow.innerHTML += createMovieCard(movie); 
                updateFavoriteButtons();
            }
        });
    }
}

// Função para formatar data 
function formatDate(dateString) {
    if (!dateString) return 'Desconhecido';

    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
}

// Função para obter filmes aleatórios de uma lista
function getRandomMovies(movies, count) {
    const shuffled = [...movies].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function loadMoviesFiltered(query) {
    const results = dados.filmes.filter(movie =>
        movie.titulo.toLowerCase().includes(query.toLowerCase()) ||
        movie.descricao.toLowerCase().includes(query.toLowerCase())
    );

    if (popularMoviesContainer) {
        popularMoviesContainer.innerHTML = results.length > 0 
            ? results.map(movie => createMovieCard(movie)).join('')
            : '<div class="empty-state"><i class="fas fa-search fa-3x"></i><h3>Nenhum Filme Encontrado</h3></div>';
    }
}