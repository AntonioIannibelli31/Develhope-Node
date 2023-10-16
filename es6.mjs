import figlet from "figlet";
figlet("Ciao Antonio!!", function (err, data) {
  if (err) {
    console.log("Errore durante l'esecuzione");
    return;
  } else console.log(data);
});
