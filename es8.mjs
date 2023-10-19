function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}
luckyDraw("Joe")
  .then((r) => {
    console.log(r);
    return luckyDraw("Caroline");
  })
  .then((r) => {
    console.log(r);
    return luckyDraw("Sabrina");
  })
  .then((r) => {
    console.log(r);
  })
  .catch((error) => {
    console.error(error);
  });
