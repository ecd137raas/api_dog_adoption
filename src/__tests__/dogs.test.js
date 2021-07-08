const crypto = require('crypto')
const axios = require('axios')

const dogsService = require('../services/dogsService')

const generate = function () {
  return crypto.randomBytes(5).toString('hex')
}

const request = function (url, method, data) {
  return axios({ url, method, data })
}

test('should get dogs', async function () {
  const dog1 = await dogsService.saveDog({
    name: generate(),
    age: '1',
    characteristics: generate(),
    health: generate(),
    gender: generate(),
    size: generate(),
    primary_color: generate(),
    photo: generate(),
    id_dog_adoption_center: '1',
    breeds: generate()
  })
  const response = await request('http://localhost:3333/dogs', 'get')
  const dogs = response.data
  expect(dogs).toHaveLength(1)
  await dogsService.deleteDog(dog1.id)
})

test('should save a dog', async function () {
  const data = {
    name: generate(),
    age: '1',
    characteristics: generate(),
    health: generate(),
    gender: generate(),
    size: generate(),
    primary_color: generate(),
    photo: generate(),
    id_dog_adoption_center: '1',
    breeds: generate()
  }
  const response = await request('http://localhost:3333/dogs', 'post', data)
  const dog = response.data
  expect(dog.name).toBe(data.name)
  expect(dog.breeds).toBe(data.breeds)
  await dogsService.deleteDog(dog.id)
})

test('should update a dog', async function () {
  const dog = await dogsService.saveDog({
    name: generate(),
    age: '1',
    characteristics: generate(),
    health: generate(),
    gender: generate(),
    size: generate(),
    primary_color: generate(),
    photo: generate(),
    id_dog_adoption_center: '1',
    breeds: generate()
  })
  dog.name = generate()
  dog.primary_color = generate()

  await request(`http://localhost:3333/dog/${dog.id}`, 'put', dog)
  const updateDog = await dogsService.getDog(dog.id)

  expect(updateDog.name).toBe(dog.name)
  expect(updateDog.primary_color).toBe(dog.primary_color)

  await dogsService.deleteDog(dog.id)
})

test('should delete a dog', async function () {
  const dog = await dogsService.saveDog({
    name: generate(),
    age: '1',
    characteristics: generate(),
    health: generate(),
    gender: generate(),
    size: generate(),
    primary_color: generate(),
    photo: generate(),
    id_dog_adoption_center: '1',
    breeds: generate()
  })

  await request(`http://localhost:3333/dog/${dog.id}`, 'delete')
  const dogs = await dogsService.getDogs()
  expect(dogs).toHaveLength(0)
})
