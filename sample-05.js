// # 5.
// boolean 값은 인수로 사용하지 말고, 함수를 분리하자

// WORST CODE - (X)
function createUser({ email, password, name, age, birthdate, isAdmin }) {
  if (isAdmin) {
    // TODO: CREATE ADMIN
  } else {
    // TODO: CREATE NORMAL USER
  }
}
createUser({
  email: "leeduyoung2002@gmail.com",
  password: "asdfasdf",
  name: "dylee",
  age: 13,
  birthdate: "2020-06-26",
  isAdmin: true,
});

// BEST CODE - (O)
function createAdminUser({ email, password, name, age, birthdate }) {
  // TODO: CREATE ADMIN
}

function createNormalUser({ email, password, name, age, birthdate }) {
  // TODO: CREATE NORMAL USER
}

createAdminUser({
  email: "leeduyoung2002@gmail.com",
  password: "asdfasdf",
  name: "dylee",
  age: 13,
  birthdate: "2020-06-26",
});
