import React from 'react'
import ClickMe from './ClickMe'

const random = (length) => {
  return Math.floor(Math.random() * Math.floor(length))
}

const Profile = (props) => {
  const profile = props.profile[0]
  const ageIndex = random(profile.age.length)
  const starSignIndex = random(profile.starSign.length)
  const faveFoodIndex = random(profile.faveFood.length)
  const faveGymExcerciseIndex = random(profile.faveGymExcercise.length)
  const faveClothingItemIndex = random(profile.faveClothingItem.length)
  const carIndex = random(profile.car.length)
  const superpowerIndex = random(profile.superpower.length)
  const weaknessIndex = random(profile.weakness.length)
  const fetishIndex = random(profile.fetish.length)
  const spiritAnimalIndex = random(profile.spiritAnimal.length)
  return (
    <>
      <h1>Anti-personality Test</h1>
      <h3>{`${props.name}, here is your personality`}</h3>
      <div>
        <p>Spirit Animal: {profile.spiritAnimal[spiritAnimalIndex].name}</p>
        <img src={profile.spiritAnimal[spiritAnimalIndex].image}></img>
      </div>
      <div>
        <p>Age: {profile.age[ageIndex]}</p>
        <p>Star Sign: {profile.starSign[starSignIndex]}</p>
        <p>Fav Food: {profile.faveFood[faveFoodIndex]}</p>
        <p>Fav Gym Exercise: {profile.faveGymExcercise[faveGymExcerciseIndex]}</p>
        <p>Fav Clothing Item: {profile.faveClothingItem[faveClothingItemIndex]}</p>
        <p>Fav Car: {profile.car[carIndex]}</p>
        <p>Your Superpower: {profile.superpower[superpowerIndex]}</p>
        <p>Your Weakness: {profile.weakness[weaknessIndex]}</p>
        <p>Your Fetish: {profile.fetish[fetishIndex]}</p>
      </div>
      <ClickMe />

    </>
  )
}

export default Profile