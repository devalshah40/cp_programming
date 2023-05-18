let delay = () => new Promise((resolve) => setTimeout(resolve, 5));

const users = [
  {
    id: 1,
    name: 'abc',
  },
  {
    id: 2,
    name: 'pqr',
  },
  {
    id: 3,
    name: 'pqr',
  },
];

let getUserInfo = async (id) => {
  await delay();
  const userInfo = users.filter((user) => user.id === id);
  if (userInfo.length > 0) {
    return userInfo;
  } else {
    throw new Error(`User #${id} is not found`);
  }
};

//fetch single user
getUserInfo(2).then((res) => console.log(res));

// //get all users with Promise.all
// async function getAllUsers(userIds) {
//   // Below two are standard ways to get users. 1st one is good as per coding standard for error trace
//   // const promises = userIds.map(async (userId) => await getUserInfo(userId));
//   const promises = userIds.map((userId) => getUserInfo(userId));

//   const usersRes = await Promise.all(promises);
//   console.log(usersRes);
// }

// // getAllUsers([1, 2, 3]);
// // getAllUsers([1, 2, 3, 4]);

// try {
//   getAllUsers([1, 2, 3, 4]);
// } catch (error) {
//   console.log(error);
// }

//get all users with Promise.allSe
async function getAllUsers(userIds) {
  // Below two are standard ways to get users. 1st one is good as per coding standard for error trace
  // const promises = userIds.map(async (userId) => await getUserInfo(userId));
  const promises = userIds.map((userId) => getUserInfo(userId));

  const usersRes = await Promise.allSettled(promises);
  console.log(usersRes);
}

getAllUsers([1, 2, 3]);
getAllUsers([1, 2, 3, 4]);

// try {
//   getAllUsers([1, 2, 3, 4]);
// } catch (error) {
//   console.log(error);
// }
