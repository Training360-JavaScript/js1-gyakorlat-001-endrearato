


    const handleClick = () => {
        const button = document.querySelectorAll('.button');
        button.forEach(x => x.addEventListener('click', function() {
            console.log(this.innerText);
        }));
    }
