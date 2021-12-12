//document.getElementById("accueil").style.display = "none";
//document.getElementById("main").style.display = "flex";
//let x=centre.dataset.x;
//document.getElementById("droite").style.backgroundImage="url('./assets/img/"+goto+"-"+yRight+".jpg')";
//centre.dataset.x=goto;

function pushTheButton () {
    const theButton=document.querySelector('#theButton');
    let data=Number(theButton.dataset.x);
    if (data===0) document.getElementById("s1").style.display = "flex";
    data++;
    getData(data);
    theButton.dataset.x=data;
    document.getElementById("img").style.backgroundImage="url('./assets/img/"+data+".jpg')";
}

function getData(data) {
    if (data===1) {//
        document.getElementById("titre").textContent="Pourquoi crée une librairie ?";
        document.getElementById("texteInfoTitre").textContent="Simplifiez vous la vie";
        document.getElementById("texteInfoP1").textContent="Des fonctionnalités récurentes : Nous fesons tous des taches régulières que nous répétons trop souvent. Ces fonctionnalités peuvent être codée pour être plus simple à utiliser";
        document.getElementById("texteInfoP2").textContent="";
        document.getElementById("texteInfoP3").textContent="";
        document.getElementById("texteInfoP4").textContent="";
        document.getElementById("texteInfoP5").textContent="";
        document.getElementById("texteInfoP6").textContent="";
    }
    if (data===2) {//
        document.getElementById("texteInfoP3").textContent="Des raccourcis de code : Factorisez vos animations pour y faire appel plus facilement";
    }
    if (data===3) {//
        document.getElementById("texteInfoP5").textContent="Une configuration rapide, portable et homogène : Placez vos reset.css ou autres fichiers de configuration afin de repartir directement avec un projet prêt à l'emploi";
    }
    if (data===4) {//
        document.getElementById("titre").textContent="Par ou commencer ?";
        document.getElementById("texteInfoTitre").textContent="Inclure votre framework/libraire";
        document.getElementById("texteInfoP1").textContent="la première chose à faire est de pouvoir inclure votre projet complet sur votre page";
        document.getElementById("texteInfoP2").textContent="";
        document.getElementById("texteInfoP3").textContent="";
        document.getElementById("texteInfoP4").textContent="";
        document.getElementById("texteInfoP5").textContent="";
        document.getElementById("texteInfoP6").textContent="";
    }
    if (data===5) {//
        document.getElementById("texteInfoP2").textContent="Difficile de tester sans ça.";
    }
    if (data===6) {//
        document.getElementById("texteInfoP3").textContent="Commencez par votre css : <link href=\"https://votresite/nomLibrairie.css\" rel=\"stylesheet\"/>";

    }
    if (data===7) {//
        document.getElementById("texteInfoP4").textContent="placez ensuite votre javascript : <script src=\"https://votresite/nomLibrairie.js\"></script>";
    }
    if (data===8) {//
        document.getElementById("texteInfoP6").textContent="Créez les 2 fichiers. Et voilà, on peut commencer à écrire notre librairie";
    }
    if (data===9) {//
        document.getElementById("titre").textContent="Première fonction simple";
        document.getElementById("texteInfoTitre").textContent="Simplifier vos codes";
        document.getElementById("texteInfoP1").textContent="Commençons avec une fonction simple à mettre en place. On va simplifier un code souvent utiliser : document.getElementById('nomElement')";
        document.getElementById("texteInfoP2").textContent="";
        document.getElementById("texteInfoP3").textContent="";
        document.getElementById("texteInfoP4").textContent="";
        document.getElementById("texteInfoP5").textContent="";
        document.getElementById("texteInfoP6").textContent="";
    }
    if (data===10) {//
        document.getElementById("texteInfoP2").textContent="Regardons le code de plus près ... simple et efficace, on vient de crée une première fonction à notre framework.";
    }
    if (data===11) {//
        document.getElementById("texteInfoP3").textContent="Poussons un peu plus loin avec un simplification de code plus utile : le random en javascript";
    }
    if (data===12) {//
        document.getElementById("texteInfoP4").textContent="Inspectons un peu le code...";
    }
    if (data===13) {//
        document.getElementById("titre").textContent="Utilisez vos fonctions pour crée d'autres fonctions";
        document.getElementById("texteInfoTitre").textContent="Appelez vos fonctions pour en crée d'autre";
        document.getElementById("texteInfoP1").textContent="Voici le code d'une fonction qui affiche une alert box animée. ";
        document.getElementById("texteInfoP2").textContent="";
        document.getElementById("texteInfoP3").textContent="";
        document.getElementById("texteInfoP4").textContent="";
        document.getElementById("texteInfoP5").textContent="";
        document.getElementById("texteInfoP6").textContent="";
    }
    if (data===14) {//
        document.getElementById("texteInfoP3").textContent="Mais ne nous attardons pas plus sur cette fonction, partons plutot sur une autre fonction qui va déclencher la première suite à un click";
    }
    if (data===15) {//
        document.getElementById("texteInfoP4").textContent="Inspectons un peu le code .....  Vous voyez que l'on peut donc facilement incorporer des fonctions déjà crée pour leurs implementer des comportements complémentaires";
    }
    if (data===16) {//
        document.getElementById("texteInfoP5").innerHTML="Voyons voir directement ce que donne cette fonction : <a href='https://salukimakingcode.github.io/pack/' target='_blank'>Lien</a>";
    }
    if (data===17) {
        document.getElementById("titre").textContent="Inclure d'autre framework/libraire";
        document.getElementById("texteInfoTitre").textContent="Incluez et simplifiez des librairies";
        document.getElementById("texteInfoP1").textContent="Vous pouvez aussi facilement inclure d'autres libraires / framework au vôtre. Nous allons voir ici le résultat de l'inclusion de animate.css.";
        document.getElementById("texteInfoP2").textContent="";
        document.getElementById("texteInfoP3").textContent="";
        document.getElementById("texteInfoP4").textContent="";
        document.getElementById("texteInfoP5").textContent="";
        document.getElementById("texteInfoP6").textContent="";
    }
    if (data===18) {
        document.getElementById("texteInfoP2").innerHTML="Vous pouvez crée des fonctions un peu plus avancées que celle proposé par une librairie en codant son comportement. Ici, nous avons le déclenchement d'une animation suite à un click avec un possibilité d'utilisé un .then après l'exécution de la fonction. <a href='https://salukimakingcode.github.io/pack/' target='_blank'>Regardons cela en image</a>";
    }
    if (data===19) {
        document.getElementById("titre").textContent="Construire des modules complets";
        document.getElementById("texteInfoTitre").textContent="Simplifiez la mise en place de bloc réutilisable";
        document.getElementById("texteInfoP1").textContent="Vous pouvez faire énormément de choses différentes : Crée un menu, crée un footer, crée un card, ect.... La seule limite est votre imagination.";
        document.getElementById("texteInfoP2").textContent="Vous pouvez découvrir à droite un menu que j'ai crée avec ma librairie. Celui-ci est responsive :)";
        document.getElementById("texteInfoP3").textContent="";
        document.getElementById("texteInfoP4").textContent="";
        document.getElementById("texteInfoP5").textContent="";
        document.getElementById("texteInfoP6").textContent="";
    }
    if (data===20) {
        document.getElementById("texteInfoP3").innerHTML="Ce qui vous permet en quelques lignes de faire fonctionner le menu suivant : <a href='https://salukimakingcode.github.io/pack/test.html' target='_blank'>Voir le menu</a>";
    }
    if (data===21) {
        document.getElementById("titre").textContent="Quelques conseils";
        document.getElementById("texteInfoTitre").textContent="Pensez à :";
        document.getElementById("texteInfoP1").textContent="- Quand vous crée un nouveau site, pensez à insérer vos fichiers CSS après l'insertion de votre libraire. Vous pourrez ainsi modifier son comportement facilement.";
        document.getElementById("texteInfoP2").textContent="";
        document.getElementById("texteInfoP3").textContent="";
        document.getElementById("texteInfoP4").textContent="";
        document.getElementById("texteInfoP5").textContent="";
        document.getElementById("texteInfoP6").textContent="";
    }
    if (data===22) {
        document.getElementById("texteInfoP2").textContent="- Documenter vos fonctions. Tout d'abord car cela permettra à d'autres développeurs d'utiliser ce que vous avez crée, mais aussi car vous n'utiliserez pas toutes vos fonctions tous le temps et vous pourriez oublier les options que vous avez crée.";
    }
    if (data===23) {
        document.getElementById("texteInfoP3").textContent="- Ne surcharger pas de framework et librairie externe ! Cela peut vite devenir une usine à gaz réduisant les performances de votre site. Préfèré plutot l'inclusion conditionnel des libraires/framework externe pour ne prendre que celle dont vous avez besoin.";
    }
    if (data===24) {
        document.getElementById("texteInfoP4").textContent="- Minifier vos fichiers. Il sera plus difficile de venir 'voler' votre code, et le download de vos fichiers gagnera un petit peu en performance";
    }
    if (data===25) {
        document.getElementById("texteInfoP5").textContent="- Optimisez votre code une fois qu'il est fonctionnel.";
    }
    if (data===26) {
        document.getElementById("titre").textContent="A vous de jouer !";
        document.getElementById("texteInfoTitre").textContent="Sky is the limit !";
        document.getElementById("texteInfoP1").textContent="Vous avez maintenant les bases nécessaires pour créer votre propre librairie.";
        document.getElementById("texteInfoP2").textContent="Vous pouvez aussi allez plus loin en créant carrément un framework si l'envie vous en prend.";
        document.getElementById("texteInfoP3").textContent="La seule limite est votre imagination et votre implication.";
        document.getElementById("texteInfoP4").textContent="";
        document.getElementById("texteInfoP5").textContent="";
        document.getElementById("texteInfoP6").textContent="";
    }
}