import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const triviaSlice = createSlice({
  name: 'trivia',
  initialState: {
    questions: [
      {
        title: 'If you freeze water, what do you get?',
        possibleAnswers: ['Ice', 'Water', 'Juice'],
      },
      {
        title:
          'Where does the President of the United States live while in office?',
        possibleAnswers: ['New York', 'The White House', 'The Moon'],
      },
      {
        title: 'Which Disney movie is Elsa in?',
        possibleAnswers: ['lion King', 'Mickey Mouse', 'Frozen'],
      },
      {
        title: 'What do bees make?',
        possibleAnswers: ['Hoeny', 'Milk', 'Apples'],
      },
      {
        title: 'In what country were the Olympic Games invented?',
        possibleAnswers: ['Israel', 'USA', 'Greece'],
      },
    ],
    currentQuestionIndex: 0,
    answers: [0, 1, 2, 0, 2],
    userAnswers: Array(5).fill(-1),
  },
  reducers: {
    addAnswer: (state, action: PayloadAction<number>) => {
      if (state.userAnswers.length === 0) {
        state.userAnswers = Array<number>(state.questions.length);
        console.log(state.userAnswers);
      }
      state.userAnswers[state.currentQuestionIndex] = action.payload;
    },
    incrementTheIndex: (state) => {
      state.currentQuestionIndex += 1;
    },
    decrementTheIndex: (state) => {
      state.currentQuestionIndex -= 1;
    },
    reset: (state) => {
      console.log('reset');
      state.userAnswers = Array(5).fill(-1);
      state.currentQuestionIndex = 0;
    },
  },
});

export const { addAnswer, incrementTheIndex, decrementTheIndex, reset } = triviaSlice.actions;

export default triviaSlice.reducer;
