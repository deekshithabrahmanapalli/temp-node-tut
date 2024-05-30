const  {readFile,writeFile}=require('fs');
console.log('start')
 readFile('./content/subfolder/first.txt','utf-8',(err,res)=>{
     if(err){
         console.log(err)
     }
     const first = res;
     readFile('./content/subfolder/second.txt','utf-8',(err,res)=>{
        if(err){
            console.log(err)
        }
        const second = res;
        writeFile('./content/subfolder/result-async.txt',`Here is the result: ${first},${second}`,(err,res)=>{
            if(err){
                console.log(err)
            }
            // console.log(res);
            console.log('async')
       

 })
})
 })
 console.log('end')