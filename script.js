//javascript for scroll to top buttom
const scrollBtn= document.querySelector(".scrollTotop-btn");
window.addEventListener("scroll",function(){
    scrollBtn.classList.toggle("active", window.scrollY > 500);
});

scrollBtn.addEventListener("click",()=>{
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
})



// $(document).ready(function(){
//     $("#submit-form").validate({
//         rules:{
//             name:{
//             required:true,
//             minlength:4,
//             maxlength:15
//         },
//         phone:{
//             required:true,
//             number:true,
//             minlength:10
//         },
//         mail:{
//             required:true,
//             email:true
//         },
//         content:{
//             required:true,
//             minlength:10
            

//         }

//     },
//     messages:{
//         name:{
//             required:"Enter the name"
    
//         },
    
//     phone:{
//          required:"Enter the number"
        
//     },
//     mail:{
//         required:"Enter the mail"
        
//     },
//     content:{
        

//     }
// }

//     })
// })

