let loading = () => {
    return `<i class="fa-solid fa-spinner fa-spin"></i>`;
}



let loadCategories = async () => {
    let res = await fetch("data/categories.json");
    let data = await res.json();

    return data;
}


let loadBooks = async(kw) => {
    let url = 'https://6a8e3992baf2ac84246da3cf.mockapi.io/Book';

    if (kw){
        url+= `?title=${kw}`
    }

    let res = await fetch(url);
    let data = await res.json();

    return data;
}


let deleteBook = async (id) =>{
    let url= `https://6a8e3992baf2ac84246da3cf.mockapi.io/Book/${id}`;
    let res = await fetch (url, {
        method: "delete"
    });
}


window.onload = () => {
    let m = document.querySelector('.submenu');
    m.innerHTML = loading();


    //Nạp Danh Mục
    loadCategories().then(data =>{
        let html = ``
        for (let d of data){
            html += `<li><a href="#">${d.name}</a></li>`
        }

        m.innerHTML = html;
    });

    let loadBooksHTML = (kw)=>{
        let b =document.querySelector('.books');
        b.innerHTML =loading();

        loadBooks(kw).then(data => {
            let html =``;

            for(let d of data){
                html += `
                <div class="book">
                <div>
                    <a href="bookDetails.html" target="_self"><img src="${d.image}" alt="book image"/> </a>
                    <h3>${d.title}</h3>
                    <p>${d.price.toLocaleString('en')} VNĐ</p>
                    <a href="#" class="close">&times;</a>
                </div>
            </div>
            `;
            }
            b.innerHTML = html;
        }).then(()=> {
            let closes = document.getElementsByClassName('close');
            for(let c of closes){
                c.addEventListener('click', function(){
                    if(confirm('Xóa sách này?') ==true){
                        let id = this.getAttribute("rel");

                        deleteBook(id).then(status => {
                            if(status === 200){
                                b.removeChild(this.parentElement.parentElement);
                                alert("Xóa thành công!");
                            }else{
                                alert("Xóa Thất bại!");
                            }
                        })
                    }
                });
            }
        });
    }

    //Nạp Sách
    loadBooksHTML();

    loadBooks(this.value).then (data => {
        let html =``;

        for(let d of data){
            html += `
            <div class="book">
            <div>
                <a href="bookDetails.html" target="_self"><img src="${d.image}" alt="book image"/> </a>
                <h3>${d.title}</h3>
                <p>${d.price.toLocaleString('en')} VNĐ</p>
                <a href="#" class="close">&times;</a>
            </div>
        </div>
        `;
        }
    })


    //Xử lý tìm kiếm
    let t = document.querySelector('input[type=search]');
    t.addEventListener('change', function(){
        loadBooksHTML(this.value);
    });
}


//Xử lý tắt sách

let x =document.querySelectorAll('.close');
for(let btn of x){
    btn.addEventListener('click', function(){

    });
}

