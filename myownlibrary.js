function touche(o1,o2)
{
if(o1.x-o2.x< (o2.width+o1.width)/2 &&
o2.x-o1.x<(o2.width+o1.width)/2 && 
o1.y-o2.y<(o2.width+o1.width)/2 &&
o2.y-o1.y<(o2.width+o1.width)/2)
{
return true
}
else{return false}
}