for(let i=1;i<=100;i++)
{
    let a=i;
    if(a%3===0 && a%5===0)
    {
        console.log(a+":"+"FIZZBUZZ");
    }
    else if(a%3===0)
    {
       console.log(a+":"+"FIZZ");
    }
    else if(a%5===0)
    {
        console.log(a+":"+"BUZZ");
    }
}