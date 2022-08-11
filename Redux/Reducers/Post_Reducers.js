// const initialState = {
//   posts: [
//     {id: '1', title: 'First Post!', content: 'Hello!'},
//     {id: '2', title: 'Second Post', content: 'More text'},
//   ],
// };

// const Post_Reducers = (state = initialState, action) => {
//   switch (action.type) {
//     case 'addpost': {
//       return {
//         ...state,
//         //posts: {...state.posts, [action.payload.id]: action.payload.title},
//         //posts: [...state.posts, action.payload],
//         posts: state.posts.concat(action.payload),
//       };
//       break;
//     }
//     case 'updatepost': {
//       const {id, content} = action.payload;
//       console.log(action.payload);
//       const existingPost = state.posts.find(post => post.id === id);
//       console.log(existingPost);
//       if (existingPost) {
//         console.log(action.payload.id);
//         existingPost.content = content;
//         // return {
//         //   ...state,
//         //   abc: content,
//         // };
//       }
//     }
//   }
// };

// export default Post_Reducers;

import {createSlice} from '@reduxjs/toolkit';

const initialState = [
  {id: '1', title: 'First Post!', content: 'Hello!'},
  {id: '2', title: 'Second Post', content: 'More text'},
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
    },
    postUpdated(state, action) {
      const {id, title, content} = action.payload;
      const existingPost = state.find(post => post.title === title);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
  },
});

export const {postAdded, postUpdated} = postsSlice.actions;
export default postsSlice.reducer;
