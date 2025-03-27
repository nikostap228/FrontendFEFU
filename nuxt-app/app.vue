<template>
  <div>
    <header class="page-header">
      <span>Текст для хэдера</span>
    </header>
    
    <main class="content-container">
      <div class="sidebar">
        <span>Заголовок списка:</span>
        <ul>
          <li v-for="n in 3" :key="n">Опция {{ n }}</li>
        </ul>
      </div>
      
      <div class="content-section">
        <div class="banner">
          <span>Баннер</span>
        </div>
        <h1 class="primary-heading">{{ greeting }}</h1>
        <img src="/img/babijon.png" alt="бабиджон">
        <div class="cards-grid">
          <div class="card" v-for="n in 2" :key="n">
            <h3>Карточка {{ n }}</h3>
            <p>Описание карточки {{ n }}</p>
          </div>
        </div>
        <button class="action-button" @click="toggleGreeting">
          Поменять приветствие
        </button>
      </div>
      
      <div class="sidebar">
        <span>Наполнение третьего блока</span>
      </div>
    </main>
    
    <footer class="page-footer">
      <span>Ссылки для связи, информация об авторе</span>
    </footer>
  </div>
</template>

<script setup lang="ts">
const { greeting, toggleGreeting } = useGreeting()
</script>

<style lang="scss">
.page-header,
.page-footer {
  padding: clamp(2rem, 5vw, 3.75rem) 2.5rem;
  border: var(--border);
}

.page-header {
  background: var(--header-bg);
  border-bottom: none;
}

.content-container {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.625rem;
  margin: 0.625rem 0;
}

.primary-heading {
  font-family: var(--accent-font);
  font-size: 3.375rem;
  margin: 0;
  text-align: center;
}

.sidebar {
  background-color: var(--sidebar-bg);
  border: var(--border);
  padding: 1.875rem 1.25rem;
  font-family: var(--accent-font);
}

.content-section {
  background: var(--main-bg);
  border: var(--border);
  padding: 2.5rem 1.25rem;
  display: grid;
  place-items: center;
  grid-auto-rows: max-content;
  row-gap: 1.875rem;
}

.action-button {
  font-family: var(--accent-font);
  font-size: 1.125rem;
  padding: 0.4375rem 0.625rem;
  cursor: pointer;
  border: 1px solid #000;
  background: white;
  border-radius: 4px;
  transition: all 0.3s ease;
  
  &:hover {
    background: #f0f0f0;
  }
}

.page-footer {
  background-color: var(--footer-bg);
  margin-top: auto;
}

ul {
  list-style-type: none;
  padding-left: 0;
  margin: 1rem 0;
}

li {
  margin-bottom: 0.5rem;
}

img {
  max-width: 100%;
  height: auto;
  border: var(--border);
}

.banner {
  background: var(--main-bg);
  padding: 1.5rem;
  border: var(--border);
  text-align: center;
  font-family: var(--accent-font);
  margin-bottom: 1.875rem;
}

.cards-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  width: 100%;
  margin: 1.875rem 0;
}

.card {
  background: white;
  border: var(--border);
  padding: 1.5rem;
  border-radius: 4px;
  
  h3 {
    font-family: var(--accent-font);
    margin: 0 0 1rem 0;
  }
  
  p {
    margin: 0;
  }
}
</style>