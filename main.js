let intro= document.querySelector(".intro")

let logo=document.querySelector(".logo-headre")
let logoSpan=document.querySelectorAll(".logo-bac")
window.addEventListener('DOMContentLoaded',
()=>{
    setTimeout(()=>{
        logoSpan.forEach((span,idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            },(idx+1)*400
                
            );
            

            setTimeout(()=>{
                logoSpan.forEach((span,idx)=>{
                    setTimeout(()=>{
                        span.classList.remove('active');
                        span.classList.add('fade');
                    },(idx+1)*50)
                })
            },1500);
            setTimeout(()=>{
                intro.style.top='-100vh';
            },1000)
        }

        )
    }

    )
})

/*btv-footer*/

var totop=document.getElementById("btn-footer")
totop.onclick=function(){
    window.scrollTo(0,0),
    behavior="smooth"
    
}

var direction=document.getElementById("ar")
    direction.onclick=function(){
       document.body.style.direction="rtl"

    }
    var chevron=document.getElementById("chevron")
    chevron.onclick=function(){
       this.getAttribute("data-link")
    }
