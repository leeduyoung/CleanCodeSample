// # 3.
// 함수는 하나의 일만 동작하도록 하라

// WORST CODE - (X)
function loadUserData(params) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; user_id=`);
  if (parts.length === 2) {
    const cookie = parts.pop().split(";").shift();
    // TODO: load data using the cookie...
  }
}

// BEST CODE - (O)
function getCookie() {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; user_id=`);

  if (parts.length === 2) return parts.pop().split(";").shift();
}

function loadUserData() {
  const cookie = getCookie();
  // TODO: load data using the cookie...
}
