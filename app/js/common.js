/* ----------------------------------------------------------------
            [ Вызов ( Scrollit ) ]
----------------------------------------------------------------*/

$.scrollIt({
	upKey: 38, // key code to navigate to the next section
	downKey: 40, // key code to navigate to the previous section
	easing: 'swing', // the easing function for animation
	scrollTime: 600, // how long (in ms) the animation takes
	activeClass: 'active', // class given to the active nav element
	onPageChange: null, // function(pageIndex) that is called when page is changed
	topOffset: -150 // offste (in px) for fixed top navigation
});


/* ----------------------------------------------------------------
                [ СТрелка наверх ]
-----------------------------------------------------------------*/

const arrowTop = document.querySelector('.arrow-to-top');

window.addEventListener('scroll', () => {
	var bound = document.querySelector('body').getBoundingClientRect();

	if (bound.top <= -100) {
		arrowTop.classList.remove('hidden');
	} else {
		arrowTop.classList.add('hidden');
		//toggler.getAttribute('aria-expanded') ? null : menu.classList.remove('menu-open');
	}
});


/* ----------------------------------------------------------------
                [ Закрытие Меню ]
-----------------------------------------------------------------*/


const nav = document.querySelector('nav'),
	links = nav.querySelectorAll('.nav-item'),
	toggler = nav.querySelector('.navbar-toggler'),
	collapse = nav.querySelector('.navbar-collapse');

for (let link of links) {
	link.addEventListener('click', () => {
		toggler.classList.toggle('collapsed');
		toggler.dataset.ariaExpanded = false;
		collapse.classList.toggle('show');
	})
}

/* ----------------------------------------------------------------
                [ --- ]
-----------------------------------------------------------------*/