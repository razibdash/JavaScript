function myMove() {
    let id = null;
    const elem = document.getElementById("animate");
    const elem2 = document.getElementById("animate2");
    const elem3 = document.getElementById("animate3");
    const elem4 = document.getElementById("animate4");
    const elem5 = document.getElementById("animate5");
    const elem6 = document.getElementById("animate6");
    const elem7 = document.getElementById("animate7");
    const elem8 = document.getElementById("animate8");
    let pos = 0;
    let posi = 350;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++;
        posi--;
        elem.style.top = pos + 'px';
        elem.style.left = pos + 'px';

        elem2.style.top = pos + 'px';
        elem2.style.right = pos + 'px';

        elem3.style.top = pos + 'px';

        elem4.style.right = pos + 'px';

        elem5.style.left = pos + 'px';

        elem6.style.top = posi + 'px';
        elem6.style.left = pos + 'px';

        elem7.style.right = pos + 'px';
        elem7.style.top = posi + 'px';

        elem8.style.bottom = pos + 'px';
      }
    }
    
    
  }