function makeAccount(number) {
  return {
    number,
    balance: 0,
    transactions: [],
    deposit(amount) {
      this.transactions.push({type: 'deposit', amount})
      this.balance += amount;
      return amount;
    },
    withdraw(amount) {
      this.transactions.push({type: 'withdrawal', amount})
      if (this.balance - amount < 0) {
        amount = this.balance;
      }
      this.balance -= amount;
      return amount;
    }
  }
}

function makeBank() {
  return {
    accounts: [],
    openAccount() {
      let obj = makeAccount(101 + this.accounts.length);
      this.accounts.push(obj);
      return obj;
    }
  }
}

let bank = makeBank();
let account = bank.openAccount();
console.log(account.number);
// 101
console.log(bank.accounts);
// [{...}]
console.log(bank.accounts[0]);
// {
//  number: 101,
//  balance: 0,
//  transactions: [],
//  deposit: [Function: deposit],
//  withdraw: [Function: withdraw]
// }
let secondAccount = bank.openAccount();
console.log(secondAccount.number);
// 102