<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Astra
 * @since 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

get_header(); ?>

<?php if ( astra_page_layout() == 'left-sidebar' ) : ?>

<?php get_sidebar(); ?>

<?php endif ?>



<template>
    <article class="produkt_article">
        <div class="">
            <img class="produkt_billeder" src="" alt="">
        </div>
    </article>
</template>



<div id="primary" <?php astra_primary_class(); ?>>

    <?php astra_primary_content_top(); ?>

    <?php astra_content_page_loop(); ?>

    <?php astra_primary_content_bottom(); ?>

    <div class="galleri_container">
        <div>
            <div class="filtrerings_knap">
                <button class="filtrer">Filtre <img class="filter_icon" src="<?php echo get_stylesheet_directory_uri(); ?>/images/filter_icon.svg" alt="filtrer"></button>
            </div>

            <div id="filter_menu">
                <nav id="filtrering" class="sortering"><button data-produkt="alle">Vis alle værker</button></nav>


                <nav>
                    <div id="former_filtrering" class="sortering"></div>
                </nav>
                <nav>
                    <div id="stoerrelse_filtrering" class="sortering"></div>
                </nav>
            </div>

        </div>

        <div>
            <section class="produkt_container">
            </section>
        </div>

    </div>
</div><!-- #primary -->

<script>
    window.addEventListener("load", sidenVises); //lader siden loade før javascipt startes

    function sidenVises() {
        console.log("filtrer");
        document.querySelector("#filter_menu").classList.add("hide"); //lader vores filtreringsfunktion være skjult på mobilversion
        document.querySelector(".filtrer").addEventListener("click", filtrer); //når man klikker på filtrer starter funktion filtrer
    }

    function filtrer() {
        document.querySelector("#filter_menu").classList.toggle("hide"); //lader filtreringsfunktionen åbne og lukke når man klikker
    }

    let produkter; //laver variabel 'produkter'
    let genre; //laver variabel 'genre'
    let filterprodukt = "alle"; //laver variabel 'filterprodukt' som er lig med 'alle'
    const dburl = "https://tinahvid.dk/wp-json/wp/v2/produkt?per_page=100"; //laver kontant 'dburl' som er lig med alle produkter
    const genreurl = "https://tinahvid.dk/wp-json/wp/v2/genre?per_page=100"; //laver konstant 'genreurl' som er lige med alle genrer

    async function getJson() {
        console.log("getJson");
        const data = await fetch(dburl); //laver konstant 'data' som henter data via dburl-variablen med fetch
        const genredata = await fetch(genreurl); //laver konstant 'genredata' som henter data via genreurl-variablen med fetch
        produkter = await data.json(); //variablen 'produkter' henter json-dataen
        //        produkter.reverse(); //gør så produkterne kommer i omvendt rækkefølge
        genre = await genredata.json(); //variablen 'genre' henter json-dataen
        visProdukter(); //kalder funktionen visProdukter
        opretKnapper(); //kalder funktionen opretKnapper
    }

    function opretKnapper() {
        genre.forEach(genre => { //sætter forEach loop i gang for hver genre


            if (genre.tag == "former") { //if-sætning som siger at hvis genren har tagget 'former' indsættes en knap
                document.querySelector("#former_filtrering").innerHTML += `<button class="filter" data-produkt="${genre.id}">${genre.name}</button>` //tilføjer en knap for hver genre med tagget 'former'
            }
            if (genre.tag == "stoerrelse") { //if-sætning som siger at hvis genren har tagget 'stoerrelse' indsættes en knap
                document.querySelector("#stoerrelse_filtrering").innerHTML += `<button class="filter" data-produkt="${genre.id}">${genre.name}</button>` //tilføjer en knap for hver genre med tagget 'stoerrelse'
            }

        })
        addEventListenersToButtons(); //kalder funktionen addEventListenersToButtons
    }

    function addEventListenersToButtons() {
        document.querySelectorAll(".sortering button").forEach(elm => { //vælger alle knapper inden i .sortering, og laver forEach loop for hver element
            elm.addEventListener("click", filtrering); //for hvert elemenent tilføjer eventlistener 'click' og kommer  til funktionen 'filtrering'
        })
    }

    function filtrering() {
        filterprodukt = this.dataset.produkt; //variablen 'filterprodukt' er lig med det element man har trykket på
        console.log(filterprodukt);
        visProdukter(); //kalder funktionen visProdukter
    }

    function visProdukter() {
        let temp = document.querySelector("template"); //laver variabel 'temp' som er lig med vores template i HTML'en
        let container = document.querySelector(".produkt_container"); //laver variabel 'container' som er lig med .produkt_container
        container.innerHTML = ""; //fjerner indhold i containeren så den kun viser den genre man har klikket på (ikke lægger til)
        console.log(produkter);
        produkter.forEach(produkt) => { //laver forEach loop for hvert produkt
            if (filterprodukt == "alle" || produkt.genre.includes(parseInt(filterprodukt))) { //hvis filterprodukt er lig med "alle" eller hvis produktet har genren man har valgt  (parseInt gør at den læser filterProdukt som tal i stedet for tekst)

                let klon = temp.cloneNode(true).content; //laver variabel 'klon' som kloner alt indholdet i vores template
                klon.querySelector("img").src = produkt.billede.guid; //fortæller hvad der skal indsættes i img
                klon.querySelector("article").addEventListener("click", () => { //når man klikker på article kommer man videre til singleview
                    location.href = produkt.link;
                });
                container.appendChild(klon); //indsætter alt det klonede indhold i container
            }
        })
    }

    getJson(); //henter JSON data

</script>


<?php if ( astra_page_layout() == 'right-sidebar' ) : ?>

<?php get_sidebar(); ?>

<?php endif ?>

<?php get_footer(); ?>
