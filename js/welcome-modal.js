// localStorage.removeItem('welcomeModalShown');
if (!localStorage.getItem('welcomeModalShown')) {
  setTimeout(function(){
    var modal = document.getElementById('welcome-modal');
    if(modal){
      modal.classList.add('welcome-fadeout');
      setTimeout(function(){ modal.style.display = 'none'; }, 1200);
    }
    localStorage.setItem('welcomeModalShown', 'true');
  }, 2000);
} else {
  var modal = document.getElementById('welcome-modal');
  if(modal) modal.style.display = 'none';
} 