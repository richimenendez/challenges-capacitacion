
function parentesisValido(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i);
        if(char=="("||char=="["||char=="{")
            stack.push(char); 
        else{
            if(stack.length==0)
                return false;
            const openChar = stack.pop();
            if((openChar=="("&&char!=")")||(openChar=="{"&&char!="}")||(openChar=="["&&char!="]"))
                return false;
        }
    }
    if(stack.length>0)
        return false;
    return true;
}

console.log(parentesisValido("{[]}"));
console.log(parentesisValido("{"));
console.log(parentesisValido("{[)"));
console.log(parentesisValido("{}([])"));
console.log(parentesisValido("()[()[]{}]{()[]{}}"));