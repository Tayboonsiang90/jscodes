o = {}
o.a = 1
o.b = 2
o.c = 3

for (let propertyName in o) {
    console.log(propertyName, o[propertyName])
}