function openRegisterModal(obj){
    let id= obj.getAttribute('rel');
    let e =document.getElementById(id);
    e.classList.remove('modal-hide');
    e.classList.add('modal-show');
}

function closeRegisterModal(obj){
    let id= obj.getAttribute('rel');
    let e =document.getElementById(id);
    e.classList.remove('modal-show');
    e.classList.add('modal-hide');
}


let inputs=document.querySelectorAll('.modal-content input');
for(let inp of inputs)
    inp.addEventListener('blur', function(){
        if(!this.value || this.value==='')
            this.classList.add('error');
        else
            this.classList.remove('error');
        
    })


let loadComments = async ()=>{
    let res = await fetch('https://6a8e3992baf2ac84246da3cf.mockapi.io/comments');
    let data = await res.json();

    let c = document.querySelector('.comment-list')
    
    let html ='';
    for (let com of data){
        html =+ 
        `
            <li class="comment flex">
                    <div class="col10">
                        <img src="${com.user}" alt="User Avatar"/>
                    </div>
                    <div class="col90">
                        <a class="user-name" href="#">Ai Hoshino</a>
                        <h4>${com.content}</h4>
                        <p>${moment(com.date).locale('vi').fromNow()}</p>
                    </div>
                </li>
        `;
    }
    c.innerHTML = html;
}