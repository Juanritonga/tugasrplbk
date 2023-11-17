// ApiService.js
const ApiService = {
  getBooks: () => {
    return fetch('https://siplah.kemdikbud.go.id/sds/lookup-tables/msts/books/non_text_books.json')
      .then(response => response.json())
      .catch(error => {
        console.error('Error fetching books:', error);
        throw error;
      });
  },

  getBookById: (id) => {
    return ApiService.getBooks() // Mengambil seluruh daftar buku
      .then(books => books.find(book => book.id === id)) // Mencari buku berdasarkan ID
      .catch(error => {
        console.error('Error fetching book by ID:', error);
        throw error;
      });
  },
  // Metode lain ApiService...
};

export default ApiService;
