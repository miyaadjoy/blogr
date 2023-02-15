


const dropdown = document.querySelectorAll('.header__mobileDropdown');


for (let i = 0; i < dropdown.length; i++) {
    
    dropdown[i].addEventListener('click', function () {
        if (i === 0) {
            if (dropdown[i].classList.contains('hide')) {
                dropdown[i].classList.remove('hide');
                dropdown[i].classList.add('active');
            } else {
                dropdown[i].classList.add('hide');
                dropdown[i].classList.remove('active');
            }
            
            dropdown[1].classList.add('hide');
            dropdown[2].classList.add('hide');
            dropdown[1].classList.remove('active');
            dropdown[2].classList.remove('active');
            
        }
        else if (i === 1) {
            if (dropdown[i].classList.contains('hide')) {
                dropdown[i].classList.remove('hide');
                dropdown[i].classList.add('active');
            } else {
                dropdown[i].classList.add('hide');
                dropdown[i].classList.remove('active');
            }
            
            dropdown[0].classList.add('hide');
            dropdown[2].classList.add('hide');
            
            dropdown[0].classList.remove('active');
            dropdown[2].classList.remove('active');
            
        }
        
        else if (i === 2) {
            if (dropdown[i].classList.contains('hide')) {
                dropdown[i].classList.remove('hide');
                dropdown[i].classList.add('active');
            } else {
                dropdown[i].classList.add('hide');
                dropdown[i].classList.remove('active');
            }
            
            dropdown[0].classList.add('hide');
            dropdown[1].classList.add('hide');
            
            dropdown[0].classList.remove('active');
            dropdown[1].classList.remove('active');
            
        }


    });

}


//toggle button


const header = document.querySelector('.header');
const toggleBtn = document.querySelector('.header__toggleBtn');

toggleBtn.addEventListener('click', function () {
    
    if (header.classList.contains('toggle')) {
        header.classList.remove('toggle');
        
    } else {
        header.classList.add('toggle');
    }
})



