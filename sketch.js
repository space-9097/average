var weight=[10,11,12,13,14,15]

function average() {
  var sum=weight[0]+weight[1]+weight[2]+weight[3]+weight[4]+weight[5]
  var avg=sum/weight.length
console.log(avg)
}


function setup() 
{
  createCanvas(400,400);
  average()
}

function draw() 
{
background(51);

}

