const { parse } = require("csv-parse");
const fs = require("fs");
const results = [];
let numOfplanets = 0;
function isHabitablePlanet(planet) {
  return (
    planet.koi_disposition === "CONFIRMED" &&
    1.1 > planet.koi_insol > 0.36 &&
    planet.koi_prad < 1.6
  );
}
fs.createReadStream("./kepler_data.csv")
  .pipe(
    parse({
      comment: "#",
      columns: true,
    })
  )
  .on("data", (data) => {
    if (isHabitablePlanet(data)) {
      results.push(data);
    }
    numOfplanets++;
  })
  .on("end", () => {
    const percentage = (results.length / numOfplanets) * 100;
    console.log("Habitable planets : %d", results.length);
    const planetNames = results.map((a) => a.kepler_name);
    console.log("Planets Name :");
    console.log(planetNames);
    console.log(
      `${parseFloat(percentage).toFixed(2)}% of planets are habitable`
    );
  })
  .on("error", (e) => {
    console.log(e);
  });
