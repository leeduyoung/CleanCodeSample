// # 8.
// 의도가 불분명한 용어는 사용하지 않는다.
// accountData, accountInfo 와 같은 불분명한 용어는 account와의 차이를 알기 어렵다.
// 읽는 사람이 차이를 알 수 있도록 이름을 지어야한다.

// WORST CODE - (X)
function loadUserData(params) {
  let accountData = {}
}

// BEST CODE - (O)
function loadUserData(params) {
  let account = {}
}
