let invoices = {
  unpaid: [],
};

invoices.add = function(name, amount) {
  this.unpaid.push({
    name,
    amount
  });
};

invoices.totalDue = function() {
  return this.unpaid.reduce((total, accum) => total + accum.amount, 0);
}

invoices.add('Due North Development', 250);
invoices.add('Moonbeam Interactive', 187.50);
invoices.add('Slough Digital', 300);

invoices.paid = [];
invoices.payInvoice = function(name) {
  let revisedUnpaid = [];
  this.unpaid.forEach(invoice => {
    if (name === invoice.name) {
      this.paid.push(invoice);
    } else {
      revisedUnpaid.push(invoice);
    }
  });
  this.unpaid = revisedUnpaid;
};

invoices.totalPaid = function() {
  return this.paid.reduce((total, accum) => total + accum.amount, 0);
};

invoices.payInvoice('Due North Development');
invoices.payInvoice('Slough Digital');

console.log(invoices.totalPaid());
console.log(invoices.totalDue());