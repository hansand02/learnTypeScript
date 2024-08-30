enum LoadingState {
  beforeLoad = "beforeLoad",
  loading = "loading",
  loaded = "loaded",
}

const isLoading = (state: LoadingState) => state === LoadingState.loading;

// literal type
function rollDice(dice: 1|2|3): number {
  let pip = 0;
  for (let i = 0; i < dice; i++) {
    pip += Math.floor(Math.random() * 5 + 1)
  }
  return pip
}

console.log(rollDice(2))
// Invalid
console.log(rollDice(4))