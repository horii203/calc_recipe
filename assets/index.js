new Vue({
  el: "#app",
  data: {
    ingredients: [
      { name: "", amount: "" },
      { name: "", amount: "" },
      { name: "", amount: "" },
    ],
    numPeople: 4,
    calcPeople: 1,
  },
  methods: {
    // 材料項目追加
    addIngredient() {
      this.ingredients.push({ name: "", amount: "" });
    },
    // 項目削除
    removeIngredient(index) {
      this.ingredients.splice(index, 1);
    },
    // 計算
    calculateAmount(amount) {
      // 入力された文字列から数値部分を取り出し
      const numberPattern = /[-+]?[0-9]*\.?[0-9]+/g;
      const numbers = amount.match(numberPattern);
      if (numbers) {
        // 入力された数値（文字列）を数値に変換し合計する
        const totalAmount = numbers.reduce(
          (acc, num) => acc + parseFloat(num),
          0
        );
        // 人数で割る
        const calculatedAmount = (
          (totalAmount / this.numPeople) *
          this.calcPeople
        ).toFixed(1);
        // 入力された文字列の数値部分を計算後の結果に置き換える
        return amount.replace(
          numberPattern,
          this.formatNumber(calculatedAmount)
        );
      }
      return amount;
    },
    formatNumber(number) {
      return parseFloat(number).toString();
    },
  },
});
