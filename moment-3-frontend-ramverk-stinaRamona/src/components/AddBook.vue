<template>
    <h2>Lägg till ny bok:</h2>
    <form @submit.prevent="addBook()">
        <label for="title">Titel:</label><br>
        <input v-model="title" id="title" name="title" type="text"><br>

        <label for="author">Författare:</label><br>
        <input v-model="author" id="author" name="author" type="text"><br>

        <label for="published">Utkommen:</label><br>
        <input v-model="published" id="published" name="published" type="text"><br>

        <label>Läst?</label><br>
        <input v-model="read" type="radio" id="yes" name="read" :value="true">
        <label for="yes">Ja</label><br>

        <input v-model="read" type="radio" id="no" name="read" :value="false">
        <label for="no">Nej</label><br>
        <br>
        <label for="rating">Betyg 1-5 (om läst):</label><br>
        <input v-model="rating" type="number" name="rating" id="rating" min="1" max="5"><br>
        <br>
        <input type="submit" value="Lägg till"><br>

    </form>
</template>

<script>
export default {
    data() {
        return {
                title: "", 
                author: "", 
                published: "", 
                read: Boolean, 
                rating: "",
        }
    },
    emits:["bookAdded"],
    methods: {
        async addBook() {
            if (this.title.length || this.author.length || this.published.length || this.read.length > 1) {

                let bookInput = {
                    title: this.title, 
                    author: this.author, 
                    published: this.published, 
                    read: this.read, 
                    rating: this.rating
                }

                let response = await fetch("https://hapibooks.onrender.com/books", {
                    method: "POST", 
                    headers: {
                        "Accept": "application/json",
                        "Content-type": "application/json"
                    }, 
                    body: JSON.stringify(bookInput)
                }); 

                let data = await response.json(); 

                //så formuläret rensas sen
                this.title= ""; 
                this.author=""; 
                this.published=""; 
                this.read=""; 
                this.rating=""; 

                //emit för att kalla på funktionen getBooks
                this.$emit("bookAdded");

            }; 
        }
    }
}
</script> 

<style scoped>
/*Formulär*/
form {
    padding: 1em; 
}

/*Textfält */
form input[type="text"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 16px;
} 

/*Knapp */
form input[type="submit"] {
    background-color: rgb(59, 80, 54);
    color: #f3f3e4;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
} 

form input[type="submit"]:hover {
    background-color: rgb(38, 51, 35);
}

form input[type="text"]:focus {
    border-color:rgb(59, 80, 54);
    outline: none;
    box-shadow: rgb(59, 80, 54);
} 

form br {
    line-height: 1.5;
}

h2 {
    text-align: center;
}
</style>