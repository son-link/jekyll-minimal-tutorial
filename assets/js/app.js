qs = function(ele){
	return document.querySelector(ele);
}

var main_nav = qs('#main-nav');
var toggle_nav = qs('#toggle_nav');
var search_div = qs('#search-div');
var search_btn = qs('#search-btn');

toggle_nav.addEventListener('click', function(e){
	e.preventDefault();
	e.stopPropagation();
	main_nav.classList.toggle('open');
});

var tables = document.querySelectorAll('table');
tables.forEach(function(t){
	t.classList.add('responsive');
	th = t.querySelectorAll('thead th');
	tr = t.querySelectorAll('tbody tr');
	tr.forEach(function(e){
		th.forEach(function(e2, i){
			e.children[i].setAttribute('data-title', e2.innerHTML);
		});
	});
});

search_btn.addEventListener('click', function(){
	if (window.innerWidth > 768) qs('body').classList.add('no-scroll');
	if (!search_div.classList.contains('open')) {
		qs('#search-btn').setAttribute('class', 'icon-close');
		search_div.classList.add('open');
	}else{
		if (window.innerWidth > 768) qs('body').classList.remove('no-scroll');
		closeSearch();
		qs('#search-btn').setAttribute('class', 'icon-search');
		search_div.classList.remove('open')
	}
});

qs('#close-search').addEventListener('click', closeSearch);

function closeSearch(){
	qs('#search-input').value = '';
	qs('body').classList.remove('no-scroll');
	qs('#search-btn').setAttribute('class', 'icon-search');
	search_div.classList.remove('show');
}