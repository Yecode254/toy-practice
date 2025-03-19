function marks(m){
    let result;
    if(m>100){
        result="Incorrect input,try again."
        return result;
}else if(m<=100,m>79){
    result="A"
    return result;
}else if (m<79,m>=60){
    result="B"
    return result;
}else if(m<=59,m>49){
    result="C"
    return result;
}else if(m<=49,m>=40){
    result="D"
    return result;
}else{
    result="E"
    return result;
}}
console.log(marks(195));