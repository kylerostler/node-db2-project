// STRETCH
const cars = [
    {
      vin: '12345678911111111',
      make: 'soul  ',
      model: 'kia',
      mileage: 123000,
      title: 'clean',
      transmission: 'manual'
    },
    {
      vin: '12345678911111112',
      make: 'volkswagen',
      model: 'jetta',
      mileage: 45678,
      title: 'salvage',
    },
    {
      vin: '12345678911111113',
      make: 'toyota',
      model: 'camry',
      mileage: 10101
    }
  ]
  
  exports.seed = function(knex){
    return knex('cars')
    .truncate().then(()=>{
      return knex('cars').insert(cars)
    })
  }