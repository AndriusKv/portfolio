/* global $ */
"use strict";

(function () {
    var currentSection = "";

    function toggleClass(id) {
        var element = $(id),
            home = $("#nav-home"),
            work = $("#nav-work"),
            contact = $("#nav-contact");

        home.removeClass().addClass("nav-item");
        work.removeClass().addClass("nav-item");
        contact.removeClass().addClass("nav-item");

        element.addClass("active");
    }
    function toggleNavClass(section) {
        var nav = $("#js-nav");

        nav.removeClass().addClass("nav");

        if (section === "work" || section === "contact") {
            nav.addClass("nav-fixed");
        }
        else {
            nav.addClass("default");
        }
    }
    function onScroll() {
        var currentPos = $(document).scrollTop(),
            homeOffset = $("#home").offset().top,
            workOffset = $("#work").offset().top,
            contactOffset = $("#contact").offset().top;

        if (currentSection !== "home" && currentPos > homeOffset && currentPos < workOffset) {
            toggleClass("#nav-home");
            currentSection = "home";
        }
        else if (currentSection !== "work" && currentPos > workOffset - 1 && currentPos < contactOffset - 100) {
            toggleClass("#nav-work");
            currentSection = "work";
        }
        else if (currentSection !== "contact" && currentPos > contactOffset - 101) {
            toggleClass("#nav-contact");
            currentSection = "contact";
        }

        toggleNavClass(currentSection);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, false);
})();

(function navigation() {
    var $body = $("html, body"),
        $window = $(window);

    $(".nav-link").on("click", function(event) {
        event.preventDefault();
        $body.animate({
            scrollTop: $($.attr(this, "href")).offset().top
        }, 400);
    });

    $window.on("beforeunload", function() {
        $window.scrollTop(0);
    });
})();

(function() {
    var submitBtn = $("#js-form-submit");

    function toggleSubmitMsg() {
        $("#js-form-submit-msg").toggle("show");
        submitBtn.toggle("hide");
    }
    function getForm(form) {
        return {
            name: form.name.value || "",
            _replyto: form._replyto.value,
            message: form.message.value
        };
    }
    function checkIfValid(form) {
        var email = form._replyto.value;

        return !!form.message.value && !!email && /@/.test(email);
    }
    function sendMessage(form) {
        $.ajax({
            cache: false,
            url: "http://formspree.io/ikandrius@gmail.com",
            method: "POST",
            data: getForm(form),
            dataType: "json"
        }).done(function() {
            toggleSubmitMsg();

            setTimeout(function() {
                submitBtn.html("Send");
                toggleSubmitMsg();
            }, 5000);

            if (form.reset) {
                form.reset();
            }
        });
    }
    function submitForm() {
        var form = document.getElementById("form"),
            valid = form.checkValidity ? form.checkValidity() : checkIfValid(form);

        if (valid) {
            submitBtn.html("Sending");
            sendMessage(form);
            return false;
        }
        else if (!form.checkValidity) {
            return false;
        }
    }
    submitBtn.on("click", submitForm);
})();