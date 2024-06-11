/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

(() => {
    'use strict'
  
    // --------
    // Tooltips
    // --------
    // Instantiate all tooltips in a docs or StackBlitz
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
      .forEach(tooltip => {
        new bootstrap.Tooltip(tooltip)
      })
  
    // --------
    // Popovers
    // --------
    // Instantiate all popovers in docs or StackBlitz
    document.querySelectorAll('[data-bs-toggle="popover"]')
      .forEach(popover => {
        new bootstrap.Popover(popover)
      })
  
    // -------------------------------
    // Toasts
    // -------------------------------
    // Used by 'Placement' example in docs or StackBlitz
    const toastPlacement = document.getElementById('toastPlacement')
    if (toastPlacement) {
      document.getElementById('selectToastPlacement').addEventListener('change', function () {
        if (!toastPlacement.dataset.originalClass) {
          toastPlacement.dataset.originalClass = toastPlacement.className
        }
  
        toastPlacement.className = `${toastPlacement.dataset.originalClass} ${this.value}`
      })
    }
  
    // Instantiate all toasts in docs pages only
    document.querySelectorAll('.bd-example .toast')
      .forEach(toastNode => {
        const toast = new bootstrap.Toast(toastNode, {
          autohide: false
        })
  
        toast.show()
      })
  
    // Instantiate all toasts in docs pages only
    // js-docs-start live-toast
    const toastTrigger = document.getElementById('liveToastBtn')
    const toastLiveExample = document.getElementById('liveToast')
  
    if (toastTrigger) {
      const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
      toastTrigger.addEventListener('click', () => {
        toastBootstrap.show()
      })
    }
    // js-docs-end live-toast
  
    // -------------------------------
    // Alerts
    // -------------------------------
    // Used in 'Show live alert' example in docs or StackBlitz
  
    // js-docs-start live-alert
    const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
    const appendAlert = (message, type) => {
      const wrapper = document.createElement('div')
      wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
      ].join('')
  
      alertPlaceholder.append(wrapper)
    }
  
    const alertTrigger = document.getElementById('liveAlertBtn')
    if (alertTrigger) {
      alertTrigger.addEventListener('click', () => {
        appendAlert('Nice, you triggered this alert message!', 'success')
      })
    }
    // js-docs-end live-alert
  
    // --------
    // Carousels
    // --------
    // Instantiate all non-autoplaying carousels in docs or StackBlitz
    document.querySelectorAll('.carousel:not([data-bs-ride="carousel"])')
      .forEach(carousel => {
        bootstrap.Carousel.getOrCreateInstance(carousel)
      })
  
    // -------------------------------
    // Checks & Radios
    // -------------------------------
    // Indeterminate checkbox example in docs and StackBlitz
    document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]')
      .forEach(checkbox => {
        if (checkbox.id.includes('Indeterminate')) {
          checkbox.indeterminate = true
        }
      })
  
    // -------------------------------
    // Links
    // -------------------------------
    // Disable empty links in docs examples only
    document.querySelectorAll('.bd-content [href="#"]')
      .forEach(link => {
        link.addEventListener('click', event => {
          event.preventDefault()
        })
      })
  
    // -------------------------------
    // Modal
    // -------------------------------
    // Modal 'Varying modal content' example in docs and StackBlitz
    // js-docs-start varying-modal-content
    const exampleModal = document.getElementById('exampleModal')
    if (exampleModal) {
      exampleModal.addEventListener('show.bs.modal', event => {
        // Button that triggered the modal
        const button = event.relatedTarget
        // Extract info from data-bs-* attributes
        const recipient = button.getAttribute('data-bs-whatever')
        // If necessary, you could initiate an Ajax request here
        // and then do the updating in a callback.
  
        // Update the modal's content.
        const modalTitle = exampleModal.querySelector('.modal-title')
        const modalBodyInput = exampleModal.querySelector('.modal-body input')
  
        modalTitle.textContent = `New message to ${recipient}`
        modalBodyInput.value = recipient
      })
    }
    // js-docs-end varying-modal-content
  
    // -------------------------------
    // Offcanvas
    // -------------------------------
    // 'Offcanvas components' example in docs only
    const myOffcanvas = document.querySelectorAll('.bd-example-offcanvas .offcanvas')
    if (myOffcanvas) {
      myOffcanvas.forEach(offcanvas => {
        offcanvas.addEventListener('show.bs.offcanvas', event => {
          event.preventDefault()
        }, false)
      })
    }
  })()
  


// variaveis

 var encontrar = document.getElementById("procurar_modelo");

//funçoes 
function modeloAparelho(nome = new String, model, img, din, cart, din2, cart2, din3, cart3){
    document.getElementById("nome_aparelho").innerHTML = nome;
    document.getElementById("modelo_aparelho").innerHTML = model;
    document.getElementById("img_aparelho").src = img;

    document.getElementById("dinheiro").innerHTML = din;
    document.getElementById("cartao").innerHTML = cart + " até 3X";

    document.getElementById("dinheiro_2").innerHTML = din2;
    document.getElementById("cartao_2").innerHTML = cart2 + " até 3X";

    document.getElementById("dinheiro_3").innerHTML = din3;
    document.getElementById("cartao_3").innerHTML = cart3 + " até 3X";
}


// ============= CELULARES ADICIONADOS ============= \\ 
/*

 - SAMSUNG 
A01

 - IPHONES 
IPHONE 6
IPHONE 6S
IPHONE 7
IPHONE 7 PLUS

 - MOTOROLA

 - XIOME

*/
// ================================================= \\


function encontrarModelo(){

    var modeloPesquisado = encontrar.value.toLocaleUpperCase()                       
     switch(modeloPesquisado){
        // == LINHA SAMSUNG == \\
         case 'A01SM': 
         case 'A01': 
              modeloAparelho("Samsung Galaxy A01", "A01SM", "./imgs/modelos/A01SM.png", 200+",00", 220+",00", 150+",00", 160+",00", 100+",00", 110);
              break;

          // == LINHA IPHONE == \\    
          case 'A1549':
          case 'A1586':
          case 'A1589':
          case 'IPHONE 6':
          case 'IPHONE 6 NORMAL':
          case 'IP 6':
          case 'IP6':
              document.getElementById("container-frontalSemAro").style.display = "none";
              document.getElementById("bnt_infor_com_aro").style.display = "none";
              modeloAparelho("Iphone 6 Normal", "A1586", "./imgs/modelos/IP6N.png", 200+",00", 220+",00", 150+",00", 160+",00", 100+",00", 110);
              break;
          case 'A1633':
          case 'A1688':
          case 'A1700':
          case 'IPHONE 6S':
          case 'IPHONE 6 S':
          case '6 S':
          case '6S':
              document.getElementById("container-frontalSemAro").style.display = "none";
              document.getElementById("bnt_infor_com_aro").style.display = "none";
              modeloAparelho("Iphone 6S", "A1633 - A1688 - A1700", "./imgs/modelos/IP6S.jpg", 200+",00", 220+",00", 150+",00", 160+",00", 100+",00", 110);
              break;    
          case 'A1660':
          case 'A1778':
          case 'A1779 ':
          case 'IPHONE 7':
          case 'IPHONE 7 NORMAL':
          case '7 NORMAL':
              document.getElementById("container-frontalSemAro").style.display = "none";
              document.getElementById("bnt_infor_com_aro").style.display = "none";
              modeloAparelho("Iphone 7 Normal", "A1586 - A1778 - A1779", "./imgs/modelos/IP7N.jpg", 200+",00", 220+",00", 150+",00", 160+",00", 100+",00", 110);
              break; 
          case 'A1661':
          case 'A1784':
          case 'A1785':
          case 'IPHONE 7 PLUS':
          case '7 PLUS':
              document.getElementById("container-frontalSemAro").style.display = "none";
              document.getElementById("bnt_infor_com_aro").style.display = "none";
              modeloAparelho("Iphone 7 PLUS", "A1661 - A1784 - A1785", "./imgs/modelos/IP7P.jpg", 200+",00", 220+",00", 150+",00", 160+",00", 100+",00", 110);
              break; 
              
          // == LINHA MOTOROLA == \\
          // == LINHA XIOME == \\    
         default:
                alert("APARELHO COM NOME '"+modeloPesquisado+"' NAO ENCONTRADO");
            break;
     }  
}


function inicia(){
 
}



//inicialização
window.addEventListener("load",inicia);