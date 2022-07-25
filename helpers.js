function randomInt(max,min=0){
    return Math.floor(Math.random() * (max - min) + min);
}
function choice(items){
    const length = items.length;
    return items[randomInt(length)];
}
function remove(items,item){
    for(let count = 0; count < items.length; count++){
        if(items[count] === item){
            return [...items.slice(0,count),...items.slice(count+1)];
        }
    }
}

export {choice,remove};