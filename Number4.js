function formating(arr)
{
 var tab="";
 tab="(+212) "+arr[0]+arr[1]+arr[2]+"-"+arr[3] + arr[4]+ arr[5]+arr[6]+ arr[7]+ arr[8];
 return tab;

}

console.log(formating([6,6,5,7,5,4,4,8,2]));