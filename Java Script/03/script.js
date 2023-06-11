let arr = ["Akhil", 1, 2.33, true, ["gupta", "33", false, {"name": "Akhil", "gender": "Male", "hobby": ["trekking","biking"]}]]
console.log(arr)

console.log(arr[4][3]["name"])
console.log(arr[4][3].hobby[0])

arr.forEach(item => 
    {
        if (typeof item == Object) 
        {
            console.log(item[4])
        }
    }
)

arr[arr.length] = "New Append"
console.log(arr)

console.log(arr.join("  |  "))


var arr1 = ["Red", "Yellow", "Blue", "Green"]
console.log("Defaulte value",arr1)
arr1.push("Pink", "Black", "White")
console.log("Value after push", arr1)
arr1.unshift("Purple", "Brown")
console.log("Value after unshift", arr1)
arr1.pop()
console.log("Value after pop", arr1)
arr1.shift()
console.log("Value after shift", arr1)

arr1.forEach (function (item) {
    console.log(item)
})

arr.forEach ((item) => {
    console.log(item)
})


var f = arr1.find(item => (item === "Blue"))
console.log(f)
console.log(arr1.splice(arr1.indexOf(arr1.find(item => (item === "Blue"))),1))
console.log(arr1)


function add (a,b) {
    let c = a + b;
    return c;
}

const mult = function (a, b) {
    let c = a * b;
    return c;
}

console.log("Add 2 + 4 = ", add(2,4))
console.log("Multiply 2 * 4 = ", mult(2,4))


const mul_advance = (a, b) => {
    let c = a * b;
    return c;
}

console.log("Multiply 2 * 9 = ", mul_advance(2,9))

const myData = {
    "Item1": {
        "f_name": "Aman",
        "l_name": "Sharma",
        "gender": "Male"
    },

    "Item2": {
        "f_name": "Ashish",
        "l_name": "Mishra",
        "gender": "M"
    }
}
console.log(Object.keys(myData.Item1))
console.log(Object.values(myData.Item1))



const Data = [
    {
        "f_name": "Aman",
        "l_name": "Sharma",
        "gender": "Male"
    },
    {
        "f_name": "Ashish",
        "l_name": "Mishra",
        "gender": "M"
    }
]
const newArr = Data.map((item) => {
    return item.f_name
})

console.log(newArr)