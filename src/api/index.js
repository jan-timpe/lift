export default class LiftData {

  constructor() {
    this.state = {
      lifts: [] 
    }
  }


  lifts = [
    {
      name: 'Squat',
      max: {
        weight: 315,
        date: 'May 28, 2018'
      },
      history: [
        {
          weight: 315,
          date: 'May 28, 2018'
        },
        {
          weight: 305,
          date: 'April 10, 2018'
        }
      ]
    }
  ]




}