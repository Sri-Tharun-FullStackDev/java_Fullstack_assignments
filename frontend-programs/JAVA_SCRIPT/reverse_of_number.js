let num = 123456;
let num1 = 0;

while(num>0)
    {
        let n=num%10;
        num1 = num1*10 + n;
        num=parseInt(num/10);
    }
console.log(num1);