<template> 
    <AddBook @bookAdded="getBooks()" />
    <h3>Mina böcker</h3>
    <Book @deleteBook="deleteBook(book._id)" v-for="book in books" :book="book" :key="book._id" />
</template> 

<script>
import Book from '../components/Book.vue'
import AddBook from '../components/AddBook.vue'

export default {
    data() {
        return {
            books: []
        }
    },
    components: {
        Book,
        AddBook,
    }, 
    methods: {
        async getBooks() {
            let response = await fetch("https://hapibooks.onrender.com/books"); 

            let data = await response.json(); 

            this.books = data   
        }, 

        async deleteBook(id) {
            let response = await fetch("https://hapibooks.onrender.com/books/" + id, {
                    method: "DELETE", 
                    headers: {
                        "Accept": "application/json",
                        "Content-type": "application/json"
                    }
                }); 

            let data = await response.json(); 
            
            this.getBooks(); 
        }
    }, 

    mounted() {
        this.getBooks(); 
    }
}
</script> 

<style scoped>
h3 {
    text-align: center; 
}
</style>