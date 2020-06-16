export default class EmployeeModel {
    constructor(identityNo = "36271732494",
                fullname="Jack Bauer",
                iban = "TR298167364121525592890059",
                photo = null,
                birthYear = 1995,
                salary = 100000,
                department = "SALES",
                fulltime = true
                ) {
        this.identityNo = identityNo;
        this.fullname = fullname;
        this.iban= iban;
        this.photo = photo; //base-64 encoded string
        this.birthYear = birthYear;
        this.salary	= salary;
        this.department	= department;
        this.fulltime = fulltime;
    }
}