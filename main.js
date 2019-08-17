$(document).ready(function() {
  $("[data-link]").click(function() {
    window.location.href = $(this).attr("data-link");
    return false;
  });
});

function closeMenu() {
  document.getElementById("close").click();
}

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsByClassName("top-gradient").style.top = "0";
  } else {
    document.getElementsByClassName("top-gradient").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

$(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        var links = this.el.find('.link');

        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
            $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
        };
    }	

    var accordion = new Accordion($('#accordion'), false);
    var accordion = new Accordion($('#mobile-accordion'), false);
});


$(function startHome(){
  $('#content').load('home.html');
});

$(document).ready(function(){
  $("#home").click(function(){
    $("#content").load("home.html");
  });
});

$(document).ready(function(){
  $("#home").click(function(){
    $("#content").load("home.html");
  });
});

$(document).ready(function(){
    $("#planning").click(function(){
      $("#content").load("planning.html");
    });
  });

  $(document).ready(function(){
    $("#overview").click(function(){
      $("#content").load("overview.html");
    });
  });

  $(document).ready(function(){
    $("#data").click(function(){
      $("#content").load("data.html");
    });
  });

  $(document).ready(function(){
    $("#collection").click(function(){
      $("#content").load("collection.html");
    });
  });

  $(document).ready(function(){
    $("#preparation").click(function(){
      $("#content").load("preparation.html");
    });
  });

  $(document).ready(function(){
    $("#analysis").click(function(){
      $("#content").load("analysis.html");
    });
  });

  $(document).ready(function(){
    $("#processed").click(function(){
      $("#content").load("processed.html");
    });
  });

  $(document).ready(function(){
    $("#closure").click(function(){
      $("#content").load("closure.html");
    });
  });
  
  $(document).ready(function(){
    $("#home1").click(function(){
      $("#content").load("home.html");
    });
  });
  
  $(document).ready(function(){
      $("#planning1").click(function(){
        $("#content").load("planning.html");
      });
    });
  
    $(document).ready(function(){
      $("#overview1").click(function(){
        $("#content").load("overview.html");
      });
    });
  
    $(document).ready(function(){
      $("#data1").click(function(){
        $("#content").load("data.html");
      });
    });
  
    $(document).ready(function(){
      $("#collection1").click(function(){
        $("#content").load("collection.html");
      });
    });
  
    $(document).ready(function(){
      $("#preparation1").click(function(){
        $("#content").load("preparation.html");
      });
    });
  
    $(document).ready(function(){
      $("#analysis1").click(function(){
        $("#content").load("analysis.html");
      });
    });
  
    $(document).ready(function(){
      $("#processed1").click(function(){
        $("#content").load("processed.html");
      });
    });
  
    $(document).ready(function(){
      $("#closure1").click(function(){
        $("#content").load("closure.html");
      });
    });

  // When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// ===== Scroll to Top ==== 
$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
      $('#return-to-top').fadeIn(200);    // Fade in the arrow
  } else {
      $('#return-to-top').fadeOut(200);   // Else fade out the arrow
  }
});