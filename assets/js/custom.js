document.addEventListener('DOMContentLoaded', function () {
  const cont = document.querySelector('.modal-body .cont');
  const listItems = document.querySelectorAll('.modal-body .list span');

  cont.addEventListener('scroll', function () {
    listItems.forEach(function (listItem) {
      const listItemTop = listItem.getBoundingClientRect().top;
      const listItemBottom = listItem.getBoundingClientRect().bottom;

      if (listItemTop < cont.clientHeight && listItemBottom > 0) {
        // The listItem is in the viewport
        listItem.classList.add('on');
      }
    });
  });
});