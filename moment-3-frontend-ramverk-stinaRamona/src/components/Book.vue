<template>
    <article @click="$emit('deleteBook')">
        <p>{{book.title}} av {{ book.author }}</p>
        <p>Utgiven: {{ book.published }}</p>
        <p>Läst: {{ book.read ? "Ja" : "Nej "}} </p> <!--Ja och nej ist för true/false-->
        <p>Betyg: {{ book.rating }}/5</p>

    </article>
</template>

<script>
export default {
    props: {
        book: Object
    }
}
</script>

<style scoped>
article {
    font-size: 1.2em;
    padding: 1em; 
    border: solid 1px black; 
    background-color: white;
    margin: 1em; 
}
</style>