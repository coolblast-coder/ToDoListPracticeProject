export function getAll() {
  return [
    {
      id: 1,
      text: "Learn JS",
      completed: false,
    },
    {
      id: 2,
      text: "Learn React",
      completed: false,
    },
    {
      id: 3,
      text: "Build a React App",
      completed: false,
    },
  ];
}

// export function createNew(text){
//     const nextId = items.length + 1;
//     const newItem = {
//       id: nextId,
//       text: text,
//     };
//     return newItem
// }