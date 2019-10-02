window.addEventListener('load', function () {
    new Glider(document.querySelector('.glider0'), {
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: true,
        duration: 0.25,
        arrows: {
            prev: '.glider-prev-0',
            next: '.glider-next-0'
        },
        responsive: [
            {
                breakpoint: 0,
                settings: {
                    slidesToShow: 1,
                    draggable: true,
                }
            },
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1.5,
                    draggable: true,
                }
            }, 
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    draggable: true,
                }
            }
        ]
    });
})

window.addEventListener('load', function () {
    new Glider(document.querySelector('.glider1'), {
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: true,
        duration: 0.25,
        arrows: {
            prev: '.glider-prev-1',
            next: '.glider-next-1'
        },
        responsive: [
            {
                breakpoint: 0,
                settings: {
                    slidesToShow: 1,
                    draggable: true,
                }
            },
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1.5,
                    draggable: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    draggable: true,
                }
            }
        ]
    });
})

window.addEventListener('load', function () {
    new Glider(document.querySelector('.glider2'), {
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: true,
        duration: 0.25,
        arrows: {
            prev: '.glider-prev-2',
            next: '.glider-next-2'
        },
        responsive: [
            {
                breakpoint: 0,
                settings: {
                    slidesToShow: 1,
                    draggable: true,
                }
            },
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1.5,
                    draggable: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    draggable: true,
                }
            }
        ]
    });
})
toggle = () => {
    document.getElementById("change").innerHTML = "/ Month"
    document.getElementById("active-1").classList.add("active-99")
    document.getElementById("active-2").classList.remove("active-99")
    document.getElementById("dollar").innerHTML = "$4.99"

};
toggle_1 = () => {
    document.getElementById("change").innerHTML = "/ Year"
    document.getElementById("active-2").classList.add("active-99")
    document.getElementById("active-1").classList.remove("active-99")
    document.getElementById("dollar").innerHTML = "$49.9"

};
playVideo = () => {
    document.getElementById("videoOverlay").style.display = "block";
};
closeVideo = () => {
    $('#YT_Video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    document.getElementById("videoOverlay").style.display = "none";
};
$(document).ready(function () {
    $('#nav-icon4').click(function () {
        $('#nav-overlay').addClass('open-mobile-nav')
    });

    $('#nav-close').click(function () {
        $('#nav-overlay').removeClass('open-mobile-nav')
    });
    $("#item-1").click(function () {
        $("#para-1").css("opacity", "1");
        $("#para-1").css("margin-bottom", "45px");
        $("#para-1").css("height", "auto");
        $("#para-1").css("transform", "scaleY(1)");
        $("#I1").removeClass("rotate-arrow");

        $("#para-2").css("opacity", "0");
        $("#para-2").css("height", "0");
        $("#para-2").css("margin-bottom", "0");
        $("#para-2").css("transform", "scaleY(0)");
        $("#I2").addClass("rotate-arrow");

        $("#para-3").css("opacity", "0");
        $("#para-3").css("height", "0");
        $("#para-3").css("margin-bottom", "0");
        $("#para-3").css("transform", "scaleY(0)");
        $("#I3").addClass("rotate-arrow");

    });

    $("#item-2").click(function () {

        $("#para-1").css("opacity", "0");
        $("#para-1").css("height", "0");
        $("#para-1").css("margin-bottom", "0");
        $("#para-1").css("transform", "scaleY(0)");
        $("#I1").addClass("rotate-arrow");

        $("#para-2").css("opacity", "1");
        $("#para-2").css("margin-bottom", "45px");
        $("#para-2").css("height", "auto");
        $("#para-2").css("transform", "scaleY(1)");
        $("#I2").removeClass("rotate-arrow");

        $("#para-3").css("opacity", "0");
        $("#para-3").css("height", "0");
        $("#para-3").css("margin-bottom", "0");
        $("#para-3").css("transform", "scaleY(0)");
        $("#I3").addClass("rotate-arrow");
    });

    $("#item-3").click(function () {

        $("#para-3").css("opacity", "1");
        $("#para-3").css("margin-bottom", "45px");
        $("#para-3").css("height", "auto");
        $("#para-3").css("transform", "scaleY(1)");
        $("#I3").removeClass("rotate-arrow");

        $("#para-1").css("opacity", "0");
        $("#para-1").css("height", "0");
        $("#para-1").css("margin-bottom", "0");
        $("#para-1").css("transform", "scaleY(0)");
        $("#I1").addClass("rotate-arrow");

        $("#para-2").css("opacity", "0");
        $("#para-2").css("height", "0");
        $("#para-2").css("margin-bottom", "0");
        $("#para-2").css("transform", "scaleY(0)");
        $("#I2").addClass("rotate-arrow");

    });


});

// function Carousel(containerID) {
//     this.container = document.getElementById(containerID) || document.body;
//     this.slides = this.container.querySelectorAll('.carousel');
//     this.total = this.slides.length - 1;
//     this.current = 0;

//     // start on slide 1
//     this.slide(this.current);
// }
// // NEXT
// Carousel.prototype.next = function (interval) {
//     (this.current === this.total) ? this.current = 0 : this.current += 1;

//     this.stop();
//     this.slide(this.current);

//     if (typeof interval === 'number' && (interval % 1) === 0) {
//         var context = this;
//         this.run = setTimeout(function () {
//             context.next(interval);
//         }, interval);
//     }
// };
// // PREVIOUS
// Carousel.prototype.prev = function (interval) {
//     (this.current === 0) ? this.current = this.total : this.current -= 1;

//     this.stop();
//     this.slide(this.current);

//     if (typeof interval === 'number' && (interval % 1) === 0) {
//         var context = this;
//         this.run = setTimeout(function () {
//             context.prev(interval);
//         }, interval);
//     }
// };
// // STOP PLAYING
// Carousel.prototype.stop = function () {
//     clearTimeout(this.run);
// };
// // SELECT SLIDE
// Carousel.prototype.slide = function (index) {
//     if (index >= 0 && index <= this.total) {
//         this.stop();
//         for (var s = 0; s <= this.total; s++) {
//             if (s === index) {
//                 this.slides[s].style.display = "inline-block";
//             } else {
//                 this.slides[s].style.display = 'none';
//             }
//         }
//     } else {
//         alert("Index " + index + " doesn't exist. Available : 0 - " + this.total);
//     }
// };

const onOpenMeetPopUp = () => {
    document.querySelector(".black-overlay").style.transform = "scale(1)";
    document.querySelector(".black-overlay").style.opacity = "1";
}
const onOpenMeetPopUp1 = () => {
    document.querySelector(".black-overlay-1").style.transform = "scale(1)";

    document.querySelector(".black-overlay-1").style.opacity = "1";
}
const onOpenMeetPopUp2 = () => {
    document.querySelector(".black-overlay-2").style.transform = "scale(1)";

    document.querySelector(".black-overlay-2").style.opacity = "1";
}
const onOpenMeetPopUp3 = () => {
    document.querySelector(".black-overlay-3").style.transform = "scale(1)";

    document.querySelector(".black-overlay-3").style.opacity = "1";
}
const onOpenMeetPopUp4 = () => {
    document.querySelector(".black-overlay-4").style.transform = "scale(1)";

    document.querySelector(".black-overlay-4").style.opacity = "1";
}

const onCloseMeetPopUp = () => {
    document.querySelector(".black-overlay").style.transform = "scale(0)";
    document.querySelector(".black-overlay").style.opacity = "0";
}
const onCloseMeetPopUp1 = () => {
    document.querySelector(".black-overlay-1").style.transform = "scale(0)";
    document.querySelector(".black-overlay-1").style.opacity = "0";
}
const onCloseMeetPopUp2 = () => {
    document.querySelector(".black-overlay-2").style.transform = "scale(0)";
    document.querySelector(".black-overlay-2").style.opacity = "0";
}
const onCloseMeetPopUp3 = () => {
    document.querySelector(".black-overlay-3").style.transform = "scale(0)";
    document.querySelector(".black-overlay-3").style.opacity = "0";
}
const onCloseMeetPopUp4 = () => {
    document.querySelector(".black-overlay-4").style.transform = "scale(0)";
    document.querySelector(".black-overlay-4").style.opacity = "0";
}
 function gotTo(elem) {
     $([document.documentElement, document.body]).animate({
         scrollTop: $(elem).offset().top
     }, 1000);
 };

function closeGotTo(elem) {
    $('#nav-overlay').removeClass('open-mobile-nav');
    gotTo(elem);
};


$(document).ready(function () {
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active-6');
        })
        $(this).addClass('active-6');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('#menu-center a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() >= scrollPos) {
            $('#menu-center ul li a').removeClass("active-6");
            currLink.addClass("active-6");
        }
        else {
            currLink.removeClass("active-6");
        }
    });
}

function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}
function openInSameTab(url) {
    var win = window.open(url);
    win.focus();
}
//   $(() => {
//     $.validator.setDefaults({
//     highlight: function (element) {
//         $(element)
//         .addClass('has-error');
        
//     },
//         unhighlight: function (element) {
//             $(element)
               
//             .removeClass('has-error');
//         }
//     }
//     );
//     $.validator.addMethod("lettersonly", function (value, element) {
//         return this.optional(element) || /^[a-z]+$/i.test(value);
//     }, "Letters only please");
//     $("#buissnes").validate({
//         rules:{
//             email:{
//                 required:true,
//                 email:true
//             },
//             FirmName:{
//                 required:true,
//                 lettersonly: true

//             },
//             Name:{
//                 required:true,
//                 lettersonly: true

//             }
//         },
//          messages: {},
//         errorElement: 'div',
//         errorLabelContainer: '.errorTxt'

//     });

//     $("#buissnes-2").validate({
//         rules:{ 
//             email2:{
//                 required:true,
//                 email:true
//             },
//             FirmName2:{
//                 required:true,
//                 lettersonly: true

//             },
//             Name2:{
//                 required:true,
//                 lettersonly: true

//             }
//         },
//         messages: {},
//         errorElement: 'div',
//         errorLabelContainer: '.errorTxt'

//     })
//     $("#notified").validate({
//         rules:{
//             email3:{
//                 required:true,
//                 email:true
//             }

//         },
//         messages: {},
//         errorElement: 'div',
//         errorLabelContainer: '.errorTxt'
         
//     })
//     $("#contact").validate({
//         rules:{
//             email4:{
//                 required:true,
//                 email:true
//             },
//                Name4: {
//                 required: true,
//                 lettersonly: true
//             }

//         },
//         messages: {},
//         errorElement: 'div',
//         errorLabelContainer: '.errorTxt'
//     })
//     // $("#blockstack-id").validate({
//     //     rules:{
//     //         blockstackid:{
//     //             required:true,

//     //         }
//     //     }
//     // })
//     $("#blockstack-id-mobile").validate({
//         rules:{
//             blockstackid:{
//                 required:true,

//             }
//         }
//     })
// });  



    
  function submitId() {
        var inputVal = document.getElementById("blockstackid").value;
        if (inputVal.includes(".id" || ".id.blockstack" || ".dmail.id")) {
            toastr.success('Form Submited Successfully')
        } else {
            toastr.error('Make sure you entered a correct blockstackid')
        }
    }
    
  function submitId2() {
        var inputVal = document.getElementById("E2").value;
        var inputVale = document.getElementById("E1").value;
        var inputVali = document.getElementById("E99").value;
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputVal) && inputVale.trim().length > 1 && inputVali.trim().length > 1)  {
            toastr.success('Form Submited Successfully')
        } 
        else {
            toastr.error('Something went wrong')
        }
    }
  function submitId4() {

        var inputVal = document.getElementById("E4").value;
        var inputVale = document.getElementById("E5").value;
        var inputValu = document.getElementById("E6").value;
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputVal) && inputVale.trim().length > 1 && inputValu.trim().length > 1){
            toastr.success('Form Submited Successfully')
        } 
        else {
            toastr.error('Something went wrong')
        }
    }
  function submitId5() {

        var inputVal = document.getElementById("E7").value;
        var inputVale = document.getElementById("E8").value;
        var inputValu = document.getElementById("E9").value;
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputVal) && inputVale.trim().length > 1 && inputValu.trim().length > 1){
            toastr.success('Form Submited Successfully')
        } 
        else {
            toastr.error('Something went wrong')
        }
    }
  function submitId3() {
        var inputVal22 = document.getElementById("E3").value;
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputVal22))  {
            toastr.success('Form Submited Successfully')
        } 
        else {
            toastr.error('Something went wrong')
        }
    }
    



// $.validator.addMethod("pattern", function (value, element, param) {
//     if (this.optional(element)) {
//         return true;
//     }
//     if (typeof param === "string") {
//         param = new RegExp("^(?:" + param + ")$");
//     }
//     return param.test(value);
// }, "Invalid format.");
