import ExoLettreArabeComponent from "./exo-lettre-arabe-component"

  const wordsAndAnswers = [
    {
      word: 'بكر',
      answer:'début'
    },
    {
      word: 'test',
      answer:'milieu'
    },
    {
      word: 'رب',
      answer:'fin'
    },
  ]

const ExoLettreArabeContainer = () =>{ 
return wordsAndAnswers.map(({word,answer})=><ExoLettreArabeComponent word={word} answer={answer}/>)
}

export default ExoLettreArabeContainer;