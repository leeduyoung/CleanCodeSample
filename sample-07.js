// # 7.
// 의도를 분명히 밝혀라
// - 코드 맥락이 코드 자체에 명시적으로 드러나야한다.
// - 아래 코드는 지뢰찾기를 만들기위한 코드이다. 게임판에서 각 칸은 단순 배열로 표현하고,
//   배열에서 0번째 값은 칸 상태를 뜻한다.

// EXAMPLE 1
// WORST CODE - (X)
function getThem() {
  let list1 = []

  for (let x of theList) {
    if (x[0] === 4) list1.push(x)
  }

  return list1
}

// BEST CODE - (O)
function getFlaggedCells() {
  let flaggedCells = []

  for (let cell of gameBoard) {
    if (isFlagged(cell)) flaggedCells.push(cell)
  }

  return flaggedCells
}

// EXAMPLE 2
// WORST CODE - (X)
function copyChars(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    arr2[i] = arr1[i]
  }
}

// BEST CODE - (O)
function copyChars(source, destination) {
  for (let i = 0; i < source.length; i++) {
    destination[i] = source[i]
  }
}
