class BankAccount:
    def __init__(self, accountNumber, balance=0):
        self.accountNumber = accountNumber
        self.balance = balance
    def __str__(self):
        return f"""
        accountNumber: {self.accountNumber}
        balance: {self.balance}"""
    def deposit (self, amount):
        self.balance = self.balance + amount
    def withdraw (self, amount):
        self.balance = self.balance - amount
    def transfer (self, amount, otherAccount):
        self.balance = self.balance - amount
        otherAccount.balance = otherAccount.balance + amount 

account1 = BankAccount(1, 200)
account2 = BankAccount(2)

print(account1)
print(account2)

account1.transfer(50, account2)

print(account1)
print(account2)