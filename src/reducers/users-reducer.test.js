import UsersReducer from './users-reducer';

test('sets a user in the store by id', () => {
  const users = [{
    id: "cae5d3af-9ac7-471e-9061-e2e9d75f00e4",
    firstName: "Helen",
    lastName: "Hawkins",
    email: "hhawkins1@posterous.com",
    avatar: "http://dummyimage.com/100x100.jpg/dddddd/000000",
    ip: "179.239.189.173"
  }]

  const updatedStore = UsersReducer({}, { type: 'USERS_LOADING_FULFILLED', payload: users });

  expect(updatedStore.data["cae5d3af-9ac7-471e-9061-e2e9d75f00e4"]).toEqual(users[0]);
});
