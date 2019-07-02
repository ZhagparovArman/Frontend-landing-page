const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-inform');


function selectItem(e) {
	removeShow();
	const tabContentItem = document.querySelector(`#${this.id}-content`);
	tabContentItem.classList.add('show');
}


function removeShow() {
	tabContentItems.forEach(item => {
		item.classList.remove('show');
	});
}


tabItems.forEach(item => {
	item.addEventListener('click', selectItem);
});