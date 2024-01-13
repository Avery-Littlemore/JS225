let invoices = {
  unpaid: [],
};

invoices.add = function(name, amount) {
  this.unpaid.push({ name, amount })
}

invoices.totalDue = function() {
  return this.unpaid.reduce((total, accum) => total + accum.amount, 0);
}

invoices.add('Due North Development', 250);
invoices.add('Moonbeam Interactive', 187.50);
invoices.add('Slough Digital', 300);

console.log(invoices.totalDue());

invoices.paid = [];

invoices.payInvoice = function(name) {
  let newUnpaid = [];
  for (let i = 0; i < this.unpaid.length; i += 1) {  
    if (this.unpaid[i].name === name) {
      this.paid.push(this.unpaid[i]);
    } else {
      newUnpaid.push(this.unpaid[i]);
    }
  }
  this.unpaid = newUnpaid;
}

invoices.totalPaid = function() {
  return this.paid.reduce((total, accum) => total + accum.amount, 0);
}

invoices.payInvoice('Due North Development');
invoices.payInvoice('Slough Digital');

console.log(invoices.totalPaid());
console.log(invoices.totalDue());