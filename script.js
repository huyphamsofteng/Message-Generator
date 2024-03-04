//recursion function
const drawTree_down = num =>
{ 
    let arr = []
    for (let i = 0; i < num ; i++){
        arr.push("*")
    }
    console.log(arr.join(""))
    if ( num === 0 ){
        return
    }
    drawTree_down(num -1)
}
//normal loop
const drawTree_up = num =>
{ 
    let arr = []
    for (let i = 1; i <= num; i++){
        for (let j = 1; j <= i; j++){
            arr.push("*")
        }
        console.log(arr.join(""))
        arr = []
    }
}

// Grand Tree
const drawTree_grand = num => {
    for ( let i = 1; i <= num; i++){
        dot = i * 2 - 1
        space = (num - i)*2
        let arr = []
        for ( let j  = 0 ; j <= space ; j++){
            if ( space !== 0 ){
                arr.push(" ")
                if (j === space /2 -1){
                    for (let k = 1; k <= dot; k++){
                        arr.push("*")
                    }
                }
            }
            else{
                for (let k = 1; k <= dot; k++){
                    arr.push("*")
                }               
            }
        }
        console.log(arr.join(""))
        arr = []
    }
}

const random_num = () => {
    return Math.floor(Math.random()*9)+1 //get random number from 0 - 1 then * 9 and round up to integer
}
//code run
let arr = []
while ( arr.length < random_num()){
    arr.push("-")
}
let magic_count = random_num()


drawTree_up(magic_count)
console.log(arr.join(""))
drawTree_down(magic_count)
console.log(arr.join(""))
drawTree_grand(magic_count)
console.log("")
console.log(`Draw Complete with ${magic_count} as a lucky number`)
