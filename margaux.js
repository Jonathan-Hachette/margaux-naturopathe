

//Script pour personnaliser le délai d'apparition des paragraphes text-items

   // Initialisation de AOS avec les paramètres pour une seule exécution
 AOS.init({
    once: false
  });

  


    var delay = 0;
    var increment = 300; // Augmente cette valeur pour un décalage plus long
    var textItems = document.querySelectorAll('.text-item');

        // Applique un délai d'animation initial
        textItems.forEach(function(item, index) {
            item.style.animationDelay = delay + 'ms';
            delay += increment;
          });
  
    // Écouteur d'événements pour gérer la sortie des éléments du viewport
    window.addEventListener('scroll', () => {
      document.querySelectorAll('.text-item').forEach((item) => {
        const itemPosition = item.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        if (itemPosition > screenPosition && itemPosition < screenPosition) {
          // Ajouter une classe pour gérer la sortie de l'élément du viewport
          item.classList.add('out-of-viewport');
        } else {
          // Retirer la classe si l'élément revient dans le viewport
          item.classList.remove('out-of-viewport');
        }
      });
    });


// Script permettant de corriger la couleur du header quand il passe sur le 1er fond sombre 

document.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY >= 40) {
        header.classList.add('scrolled');
        header_menu.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled')
        header_menu.classList.remove('scrolled');
    }
});

// Script gérant le filtre gris sur les card de la section-services

// Sélectionne tous les conteneurs avec la classe 'container-hover'
const containers = document.querySelectorAll('.container-hover');

// Boucle sur chaque conteneur
containers.forEach(container => {
  // Attache un gestionnaire d'événement pour l'événement 'mouseover' sur chaque conteneur
  container.addEventListener('mouseover', () => {
    // Boucle sur tous les conteneurs
    containers.forEach(cont => 
      // Si le conteneur n'est pas celui qui est survolé, applique le filtre grisé et un flou légé
      cont !== container ? cont.style.filter = 'grayscale(100%) blur(2px)' : null
    );
  });
  
  // Attache un gestionnaire d'événement pour l'événement 'mouseout' sur chaque conteneur
  container.addEventListener('mouseout', () => {
    // Boucle sur tous les conteneurs et enlève le filtre grisé
    containers.forEach(cont => cont.style.filter = '');
  });
});


// Gestion du formulaire // 

/** Fonction construisant et affichant l'email.
 * @param {string} emailPractitien : Email practicient
 * @param {string} nom : nom de l'utilisateur
 * @param {string} tel : n° de l'utilisateur
 * @param {string} emailUtilisateur : Email de l'utilisateur
 * @param {string} sujet : Sujet de la demande de rdv
 * @param {string} message : Message renseigné par l'utilisateur
 *
 */

function afficherEmail (nom, tel, emailUtilisateur, sujet, message){
  let mailto = `mailto:margauxnaturopathe@hotmail.com?subject=${nom}, ${sujet}&body=${message} %0APouvez-vous me recontacter au ${tel} ou sur mon email : ${emailUtilisateur}`
  location.href = mailto
}

let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
event.preventDefault()


let champNom = document.getElementById("nom");
let nom = champNom.value;

let champSujet = document.getElementById("sujet");
let sujet = champSujet.value;

let champMessage = document.getElementById("message");
let message = champMessage.value;

let champTel = document.getElementById("tel");
let tel = champTel.value;

let champEmail = document.getElementById("email");
let emailUtilisateur = champEmail.value;

afficherEmail (nom, tel, emailUtilisateur, sujet, message);
console.log(afficherEmail.value);

});


