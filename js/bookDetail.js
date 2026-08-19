let images=document.querySelectorAll('.thumbs img');
for (let img of images)
    img.addEventListener('click',function(){
        let main=document.getElementById('main-img')
        main.src=this.src;
    });


  function addComment(){
    if(confirm('Đăng bình luận.')===true){
        let c =document.getElementById('comment-content');
       
        let h= `
            <li class="comment flex">
                 <div class="col10">
                    <img src="images/AiAvatar.jpg" alt="User Avatar"/>
                </div>
                <div class="col90">
                    <a class="user-name" href="#">Ai Hoshino</a>
                    <h4>${c.value}</h4>
                    <p>${moment(new Date().getTime()).locale('vi').fromNow()}</p>
                </div>
            </li>
        `;
       

        let s = document.querySelector('.comment-list > li:first-child')
        s.insertAdjacentHTML('beforebegin',h)
    }
  }
