const QuestionsList = [
  {
    id: '1',
    title: 'Star Wars Quiz',
    description: 'May the 4th be with you!', questions: [
      {
        "id": '1_1',
        "question": "Who is Luke's Father",
        "multiselect": false,
        "answers": [
          {
            "id": '1_1_1',
            "text": "Darth Wader",
            "correct": true
          },
          {
            "id": '1_1_2',
            "text": "Han Solo",
            "correct": false
          },
          {
            "id": '1_1_3',
            "text": "Captain Pickard",
            "correct": false
          }
        ]
      },
      {
        "id": '1_2',
        "question":
          "What's the name of the spaceship owned by Han Solo",
        "multiselect": false,
        "answers": [
          {
            "id": '1_2_1',
            "text": "Enterprise",
            "correct": false
          },
          {
            "id": '1_2_2',
            "text": "Wolf of Wall Stret",
            "correct": false
          },
          {
            "id": '1_2_3',
            "text": "Milenum Falcon",
            "correct": true
          }
        ]
      }
    ]
  },
  {
    id: '2',
    title: 'Do you even react?',
    description: 'Let\'s test your react skills',
    questions: [
      {
        "id": '2_1',
        "question": "What is the answer to Life",
        "multiselect": false,
        "answers": [
          {
            "id": '2_1_1',
            "text": "42",
            "correct": true
          },
          {
            "id": '2_1_2',
            "text": "0.42",
            "correct": false
          },
          {
            "id": '2_1_3',
            "text": "5",
            "correct": false
          }
        ]
      },
      {
        "id": '2_2',
        "question":
          "How many javascript developers do you need to change a lightbulb",
        "multiselect": true,
        "answers": [
          {
            "id": '2_2_1',
            "text": "42",
            "correct": false
          },
          {
            "id": '2_2_2',
            "text": "None",
            "correct": true
          },
          {
            "id": '2_2_3',
            "text": "All of them",
            "correct": true
          }
        ]
      }
    ]
  }];

module.exports = {
  QuestionsList: QuestionsList
}