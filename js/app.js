class Cat {
    constructor(name, url, imgClassName, clickCountClassName) {
        this.name = name;
        this.clickCount = 0;
        this.url = url;
        this.imgClassName = imgClassName;
        this.clickCountClassName = clickCountClassName;
    }
    updateName() {
        let main = document.querySelector('main');
        let div = document.createElement('div');
        div.innerHTML += `<div><h3>${this.name}</h3>
                        <img class="cat ${this.imgClassName}" src="${this.url}" alt="cute cat">
                        <p>Click Count=<span class="${this.clickCountClassName}">${this.clickCount}</span></p</div>`;
        main.appendChild(div);
        
    }
    updateClick(imgclassName, clickCountClassName) {
        document.querySelector(imgclassName).addEventListener('click', function () {
            this.clickCount++;
            document.querySelector(clickCountClassName).textContent = this.clickCount;
        }.bind(this))

    }

}

const cat1 = new Cat('Tommy', 'images/cat.jpg', 'image1', 'click-Count1');
const cat2 = new Cat('shaila', 'images/cat2.jpg', 'image2', 'click-Count2');
cat1.updateName();
cat2.updateName();
cat1.updateClick('.image1', '.click-Count1');
cat2.updateClick('.image2', '.click-Count2');