class Cat {
    constructor(name, url) {
        this.name = name;
        this.clickCount = 0;
        this.url = url;
        this.select = null;
        this.display = false;
    }


    updateName() {
        this.select = document.querySelector('select');
        this.select.addEventListener('change', function (event) {
            let main = document.querySelector('main');
            let image = document.querySelector('.image');
            this.display = false;

            switch (event.target.value) {
                case 'default':
                    if (image !== null) {
                        let item = main.lastElementChild;
                        main.removeChild(item);
                        image = document.querySelector('.image');
                    }
                    break;
                case 'Tommy':
                case 'Shaila':
                case 'Jerry':
                case 'Truffles':
                case 'Laila':
                    if (image !== null && this.name === event.target.value) {
                        let item = main.lastElementChild;
                        main.removeChild(item);
                        image = document.querySelector('.image');
                    }
                    if (image === null && this.name === event.target.value) {
                        this.count = 0;
                        let div = document.createElement('div');
                        div.classList.add('image')
                        div.innerHTML += `<h3>${this.name}</h3>
                             <img class="cat" src="${this.url}" alt="cute cat">
                             <p>Click Count=<span class="clickCount">${this.clickCount}</span></p>`;
                        main.appendChild(div);
                        this.display = true;
                        this.updateClick()
                    }
                    break;

            }
        }.bind(this))


    }
    updateClick() {
        if (this.display === true) {
            document.querySelector('.cat').addEventListener('click', function () {
                this.clickCount++;
                document.querySelector('.clickCount').textContent = this.clickCount;
            }.bind(this))

        }

    }

}

const cat1 = new Cat('Tommy', 'images/cat1.jpg');
const cat2 = new Cat('Shaila', 'images/cat2.jpg');
const cat3 = new Cat('Jerry', 'images/cat3.jpg');
const cat4 = new Cat('Truffles', 'images/cat4.jpg');
const cat5 = new Cat('Laila', 'images/cat5.jpg');
cat1.updateName();
cat2.updateName();
cat3.updateName();
cat4.updateName();
cat5.updateName();
