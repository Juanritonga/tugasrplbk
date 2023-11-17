// ApiService.js
const ApiService = {
    getBooks: (limit = 200) => {
      return fetch(`https://siplah.kemdikbud.go.id/sds/lookup-tables/msts/books/non_text_books.json?_limit=${limit}`)
        .then(response => response.json())
        .catch(error => {
          console.error('Error fetching books:', error);
          throw error;
        });
    },
  
    getBookById: (id) => {
      return fetch(`https://siplah.kemdikbud.go.id/sds/lookup-tables/msts/books/non_text_books/${id}`)
        .then(response => response.json())
        .catch(error => {
          console.error('Error fetching book by id:', error);
          throw error;
        });
    },
    // Metode lain ApiService...
  };
  
  export default ApiService;
  