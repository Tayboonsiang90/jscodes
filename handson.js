let student = {
    firstName: 'John',
    lastName: 'Smith',
    'age': 19,
    contact: {
        email: 'johnsmith@fakeschool.com',
        phoneNumber: {
            'country code': '+65',
            'number': '9919912'
        }
    },
    address: {
        'streetName': 'Yishun Ring Road',
        'building': 'Blk 171 #11-221'
    },
    classes: [
        "Computing 101", "Computing 102", "Computing 103"
    ],
    grades: [
        {
            'subject name': 'Computing 1',
            'Grade': 85
        },
        {
            'subject name': 'Computing 2',
            'grade': 31
        },
        {
            'subject name': 'Computing 3',
            'grade': 75
        }
    ]
}
//1
console.log(student.firstName + " " + student.lastName)
//2
console.log(student.age)
//3
console.log(student.contact.phoneNumber['country code']+student.contact.phoneNumber.number)
//4
student.age = 21
//5
student.gender = "male"
//6
student.classes.push("Computing 104")
//8
for (let items in student.address) {
    console.log(items, " : ", student.address[items])
}
//9
student.question9 = function() {
    console.log(`${this.firstName} ${this.lastName} (${this.contact.email})`)
}
student.question9()
//10
if ('age' in  student) {
    console.log(student.age)
}

let message = prompt("Please enter something: ");
alphaCount = {}


