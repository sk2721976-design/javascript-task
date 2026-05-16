
// Task 1
var arr1=[2,3,4,5,6]
var total=0
for(var i=0;i<arr1.length;i++)
{
 total+=arr1[i]  
}

document.write("total ="+total);


// Task 2

var arr1=[2,3,4,5,6]
var total=0
for(var i=0;i<arr1.length;i++)
{
 total+=arr1[i]  
}

document.write("average ="+total/arr1.length);

// Task 3

var bill = +prompt("Enter your bill")

if(bill>=5000)
{
    var discount=bill*0.2;
    var newbill=bill-discount;
    document.write("Here is your bill : "+newbill)
}
else if(bill>=2000)
{
    var discount=bill*0.1;
    var newbill=bill-discount;
    document.write("Here is your bill : "+newbill)
} 
else
{
document.write("No discount")
}