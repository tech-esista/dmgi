import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        $(window).on("load", function () {
            var preloaderFadeOutTime = 500;
            function hidePreloader() {
                var preloader = $(".spinner-wrapper");
                setTimeout(function () {
                    preloader.fadeOut(preloaderFadeOutTime);
                }, 500);
            }
            hidePreloader();
        });

        $(window).on("scroll load", function () {
            if ($(".navbar").offset().top > 60) {
                $(".fixed-top").addClass("top-nav-collapse");
            } else {
                $(".fixed-top").removeClass("top-nav-collapse");
            }
        });

        /* Back To Top Button */
        // create the back to top button
        $("body").prepend(
            '<a href="#" class="back-to-top page-scroll">Back to Top</a>'
        );
        var amountScrolled = 700;
        $(window).scroll(function () {
            if ($(window).scrollTop() > amountScrolled) {
                $("a.back-to-top").fadeIn("500");
            } else {
                $("a.back-to-top").fadeOut("500");
            }
        });
    }

}
