<template>
    <header>
        <h1>Boklistan</h1>
        <ul id="navList">
            <li><RouterLink to="/" class="link">Start</RouterLink></li>
            <li><RouterLink to="/mina-bocker" class="link">Mina böcker</RouterLink></li>
            <li><RouterLink to="/information" class="link">Information</RouterLink></li>
        </ul>
    </header>
    <div id="picture-container">
            <img src="/src/images/bibliotek_header.jpg" alt="ett bibliotek">
    </div>
</template> 

<script>
    import { RouterLink} from 'vue-router'
    export default {
        components: {
            RouterLink
        }
    }
</script> 

<style scoped>

img {
    width: 100%;
} 

/*navigering*/
h1 {
    color:beige; 
    margin-left:20px; 
    font-size: 2em; 
}

header {
    background-color: rgb(59, 80, 54); 
    padding: 0.5%; 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: fixed;
    z-index: 99;
    width:99%;
    opacity: 0.90; 
}

ul {
    list-style-type: none;
    padding:1%;   
    margin-top:0px;
    margin-right:20px;  
    white-space: nowrap;
} 

ul li {
    display: inline;
    color:#ffff; 
    margin:15px; 
}

.link {
    text-decoration:none; 
    color:beige; 
    padding: 2%; 
    font-weight: bold;
    font-size: 1.5em;
}

/*hover och active för nav*/
.link:hover {
    color:rgb(218, 218, 174)
}

/*responsivitet*/
@media (max-width:1081px){
    header h1 {
        display: none;
    } 

    header {
        justify-content: center; 
    }

}

@media (max-width: 550px) {
    header {
        flex-direction: column;
    }

}

</style>