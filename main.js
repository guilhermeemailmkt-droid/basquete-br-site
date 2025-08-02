/*
 * Funções JavaScript para funcionalidades básicas do site
 *
 * Este arquivo adiciona interatividade à barra de busca e ao
 * formulário de newsletter. Como o objetivo deste projeto é
 * construir a estrutura inicial do site, as funcionalidades
 * completas de busca e captura de leads serão implementadas no futuro.
 */

// Aguarda o carregamento completo do DOM antes de associar eventos
document.addEventListener('DOMContentLoaded', () => {
  // Manipulação da busca: exibe um alerta ao enviar o formulário
  const searchForm = document.querySelector('.search-form');
  if (searchForm) {
    searchForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const queryInput = searchForm.querySelector('input[type="text"]');
      const query = queryInput ? queryInput.value.trim() : '';
      if (query) {
        // No futuro, redirecionar para a página de resultados
        alert(`Funcionalidade de busca ainda não implementada. Você pesquisou por: ${query}`);
      }
    });
  }

  // Manipulação do formulário de newsletter
  const newsletterForm = document.querySelector('.newsletter form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      const email = emailInput ? emailInput.value.trim() : '';
      if (email) {
        // Aqui você pode implementar integração com serviço de email marketing
        alert('Obrigado por se inscrever na newsletter!');
        emailInput.value = '';
      }
    });
  }
});