const UserAllowedToOpenBankAcc = (eligibility , minBalance) => eligibility>=18 && minBalance>=10000;
// console.log(UserAllowedToOpenBankAcc(18,2000))