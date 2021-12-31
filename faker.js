const faker = require("faker/locale/ru");
const fs = require("fs");
const generateDataFile = (number) => {
   const results = [];
   for (let i = 0; i < number; i++) {
      results.push({
         id: i,
         photo: faker.image.cats(),
         first_name: faker.name.firstName(),
         birthday: faker.date.past(),
         desiredposition: faker.name.jobTitle(),
         work_city: faker.address.cityName(),
         workexperience: [
            {
               id: 1,
               company_name: faker.company.companyName(),
               date_from: faker.date.past(),
               date_to: faker.date.soon()
            }
         ],
         updated_at: faker.date.soon(),
         selected: false
      });
   }
   return results;
};
fs.writeFileSync(
   "./db.json",
   JSON.stringify({ results: generateDataFile(20) })
);