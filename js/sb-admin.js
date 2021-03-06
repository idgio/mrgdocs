(function($) {
  "use strict"; // Start of use strict
  // Configure tooltips for collapsed side navigation
  $('.navbar-sidenav [data-toggle="tooltip"]').tooltip({
    template: '<div class="tooltip navbar-sidenav-tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
  })
  // Toggle the side navigation
  $("#sidenavToggler").click(function(e) {
    e.preventDefault();
    $("body").toggleClass("sidenav-toggled");
    $(".navbar-sidenav .nav-link-collapse").addClass("collapsed");
    $(".navbar-sidenav .sidenav-second-level, .navbar-sidenav .sidenav-third-level").removeClass("show");
  });
  // Force the toggled class to be removed when a collapsible nav link is clicked
  $(".navbar-sidenav .nav-link-collapse").click(function(e) {
    e.preventDefault();
    $("body").removeClass("sidenav-toggled");
  });
  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $('body.fixed-nav .navbar-sidenav, body.fixed-nav .sidenav-toggler, body.fixed-nav .navbar-collapse').on('mousewheel DOMMouseScroll', function(e) {
    var e0 = e.originalEvent,
      delta = e0.wheelDelta || -e0.detail;
    this.scrollTop += (delta < 0 ? 1 : -1) * 30;
    e.preventDefault();
  });
  // Scroll to top button appear
  /*$(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });*/
  // Configure tooltips globally
  $('[data-toggle="tooltip"]').tooltip()
  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.scroll-to-top', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top)
    }, 1000, 'easeInOutExpo');
    event.preventDefault();
  });
  $( document ).ready(function() {
   
    $('body.sticky-footer .content-wrapper').css('min-height',$('#exampleAccordion').height()-56);
    if( $('#details-loan').outerHeight() <= $('.loan-name').outerHeight())
    {
      $('#details-loan').css('height',$('.loan-name').outerHeight());
    }
    else
    {
      $('.loan-name').css('height',$('#details-loan').outerHeight());
    }
    
    if($('#main_space').height() > $('#exampleAccordion').height() )
    {
      $('#exampleAccordion').height($('#main_space').outerHeight()+56);
      /*$(".compilance_box").css('position', 'absolute');
      $(".compilance_box").css('bottom', '0');*/
    }
    $('.link_gray').click(function(){
      $('.link_gray.active').removeClass('active');
      $('.notes.active').fadeOut(0).removeClass('active');
      $('.dettl.active').fadeOut(0).removeClass('active');
      $($(this).attr('href')).fadeIn(300).addClass('active');
      $('.notes[data-id="'+$(this).attr('href')+'"]').fadeIn(300).addClass('active');
      $(this).addClass('active');
    });
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
    var span;
    var el;
    /*var el;
    var options;
    var canvas;
    var span;
    var ctx;
    var radius;
    var curPerc = 0;
    var cucu = true;
    var createCanvasVariable = function(id){  // get canvas
        el = document.getElementById(id);
    };
 
    var createAllVariables = function(){
        options = {
            percent:  el.getAttribute('data-percent') || 25,
            size: el.getAttribute('data-size') || 100,
            lineWidth: el.getAttribute('data-line') || 4,
            rotate: el.getAttribute('data-rotate') || 0,
            color: el.getAttribute('data-color')
        };
 
        canvas = document.createElement('canvas');
        span = document.createElement('span');
       
        if(options.percent >= 50)
        {
          span.className = 'innermsjgood';
          span.innerHTML = '<i class="fa fa-check-25" aria-hidden="true"></i>';
        }
        else
        {
          span.className = 'innermsjbad';
          span.innerHTML = '<i class="fa fa-ex-17" aria-hidden="true"></i>'
        }
       
 
        if (typeof(G_vmlCanvasManager) !== 'undefined') {
            G_vmlCanvasManager.initElement(canvas);
        }
 
        ctx = canvas.getContext('2d');
        canvas.width = canvas.height = options.size;
 
        el.appendChild(span);
        el.appendChild(canvas);
 
        ctx.translate(options.size / 2, options.size / 2); // change center
        ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI); // rotate -90 deg
 
        radius = (options.size - options.lineWidth) / 2;
    };
 
 
    var drawCircle = function(color, lineWidth, percent) {
        percent = Math.min(Math.max(0, percent || 1), 1);
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
        ctx.strokeStyle = color;
        ctx.lineCap = 'square'; // butt, round or square
        ctx.lineWidth = lineWidth;
        ctx.stroke();
    };
    
    function drawCircleanimated(color, lineWidth, percent,size, current) {
      //percent = Math.min(Math.max(0, percent || 1), 1);
      ctx.clearRect(0, 0, size, size);
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, (Math.PI * 2 * current), false);
      ctx.clearRect(0, 0, size, size);
      ctx.strokeStyle = color;
      ctx.lineCap = 'square'; // butt, round or square
      ctx.lineWidth = lineWidth;
      ctx.stroke();
      curPerc++;
      debugger;
      if (curPerc < percent) {
          requestAnimationFrame(function () {
            drawCircleanimated(color, lineWidth, percent,size,curPerc / 100);
           
          });
      }
      else if(cucu)
      {
        cucu = false;
        curPerc=0;
        drawNewGraph('graph1');
        
      }
      //debugger;
    }
    var drawNewGraph = function(id){
        el = document.getElementById(id);
        createAllVariables();
        //drawCircle('#efefef', options.lineWidth, 100 / 100);
        drawCircleanimated(options.color, options.lineWidth, options.percent, options.size);
       
 
    };*/

    var canvas ;
    var context ;
    var x;
    var y ;
    var radius ;
    var endPercent ;
    var curPerc ;
    var counterClockwise ;
    var circ ;
    var quart;
    var second = true;
    function animate( id) {
      canvas = document.getElementById(id);
      context = canvas.getContext('2d');
      context.strokeStyle = canvas.getAttribute("data-color");
      x = canvas.width / 2;
      context.lineWidth = 4;
      y = canvas.height / 2;
      radius = 26;
      endPercent = canvas.getAttribute("data-percent");
      curPerc = 0;
      counterClockwise = false;
      circ = Math.PI * 2;
      quart = Math.PI / 2;
     
      span = document.createElement('span');
     
      if(endPercent >= 50)
      {
        span.className = 'innermsjgood';
        span.innerHTML = '<i class="fa fa-check-25" aria-hidden="true"></i>';
        el = document.getElementById('aproveed');
        el.appendChild(span);
      }
      else
      {
        span.className = 'innermsjbad';
        span.innerHTML = '<i class="fa fa-ex-17" aria-hidden="true"></i>'
        el = document.getElementById('disaproveed');
        el.appendChild(span);
        
      }
      
      showtime();
    }
   
    function showtime(current)
    {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.beginPath();
      context.arc(x, y, radius, -(quart), ((circ) * current) - quart, false);
      context.stroke();
      curPerc++;
      if (curPerc < endPercent) {
          requestAnimationFrame(function () {
            showtime(curPerc / 100)
          });
      }
      else if(second)
      {
        second = false;
        animate('myCanvas2');
      }
    }
    
    try {
      $('.progress-bar').each(function(){
        let val = $(this).attr('aria-valuenow');
        $(this).animate({
          width: val+"%"
        }, 2500);
      });
      animate('myCanvas');
      //drawNewGraph('graph1');
    } catch (error) {
      console.log(error);
    }
    
 
 });
  })(jQuery); // End of use strict
 
