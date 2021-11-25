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
    answers: [0, 1, 2, 0, 2],
    userAnswers: Array<number>(),
  },
  reducers: {
      addAnswer: (state, action: PayloadAction<number>) => {
        state.userAnswers.push(action.payload);
      }
    // 	add: (state, action: PayloadAction<>) => {
    // 		// Redux Toolkit allows us to write "mutating" logic in reducers. It
    // 		// doesn't actually mutate the state because it uses the Immer library,
    // 		// which detects changes to a "draft state" and produces a brand new
    // 		// immutable state based off those changes
    // 		state.items.push(action.payload);
    // 	},
    // toggleCompleted: (state, action: PayloadAction<string>) => {
    //   const todo = state.items.find(item => item.id === action.payload);
    //   if(todo) {
    //     todo.completed = !todo.completed;
    //   }
    // }
  },
});

//export const { add, toggleCompleted } = todoSlice.actions;

export default triviaSlice.reducer;
