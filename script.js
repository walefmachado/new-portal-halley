<script>
// Permite que o link principal do dropdown seja clicável em telas grandes
document.querySelectorAll('.nav-item.dropdown').forEach(function(everyitem){
    everyitem.addEventListener('mouseover', function(e){
        let el_link = this.querySelector('a[data-bs-toggle]');
        if(el_link != null){
            let nextEl = el_link.nextElementSibling;
            el_link.classList.add('show');
            nextEl.classList.add('show');
        }
    });
    everyitem.addEventListener('mouseout', function(e){
        let el_link = this.querySelector('a[data-bs-toggle]');
        if(el_link != null){
            let nextEl = el_link.nextElementSibling;
            el_link.classList.remove('show');
            nextEl.classList.remove('show');
        }
    });
});

// Garante que o clique funcione mesmo com o dropdown ativo
document.querySelectorAll('.dropdown-toggle').forEach(function(element){
    element.addEventListener('click', function(e){
        if(window.innerWidth > 992){
            window.location.href = this.getAttribute('href');
        }
    });
});
</script>