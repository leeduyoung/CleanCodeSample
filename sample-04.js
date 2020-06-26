// # 4.
// 인수(argument) 개수는 3개 이하가 적당하고,
// 그 이상일경우 Object를 인수로 사용하는게 좋다

// WORST CODE - (X)
function createUser(email, password, name, age, birthdate) {
  // TODO:
}

createUser("leeduyoung2002@gmail.com", "asdfasdf", "dylee", "13", "2020-06-26");

// BEST CODE - (O)
function createUser({ email, password, name, age, birthdate }) {
  // TODO:
}

createUser({
  email: "leeduyoung2002@gmail.com",
  password: "asdfasdf",
  name: "dylee",
  age: 13,
  birthdate: "2020-06-26",
});
