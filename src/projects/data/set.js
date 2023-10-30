const set = new Set([1,2,3])
set.add(4)
console.log(set.has(3));
set.delete(3)
console.log("aa", set.size);
set.clear()
for(const item of set){
    console.log(item);
}