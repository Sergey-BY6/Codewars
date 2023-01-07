function smallEnough(a, limit){
    return 0 >= (a.filter(t => t > limit)).length
}