let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Disfrutando de los pequeños placeres de la vida.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
