import {Component, Inject, OnInit} from '@angular/core';
import {PageScrollService} from 'ngx-page-scroll-core';
import {DOCUMENT} from "@angular/common";

declare var $: any;

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: [
        './landing.component.scss',
        '../../assets/landing/css/bootstrap.css',
        '../../assets/landing/css/fontawesome-all.css',
        '../../assets/landing/css/magnific-popup.css',
        '../../assets/landing/css/styles.css',
        '../shared/shared.stylesheet.scss'
    ]
})

export class LandingComponent implements OnInit {
    atTheTop: boolean = false;

    constructor(private pageScroll: PageScrollService, @Inject(DOCUMENT) private document: any) {
    }

    ngOnInit(): void {
        const amountScrolled = 700;
        $(window).on("scroll load", () => {
            if ($(".navbar").offset().top > 60) {
                $(".fixed-top").addClass("top-nav-collapse");
            } else {
                $(".fixed-top").removeClass("top-nav-collapse");
            }

            if ($(window).scrollTop() > amountScrolled) {
                this.atTheTop = true;
            } else {
                this.atTheTop = false;
            }
        });
    }

    scrollToTop(element : string) {
        this.pageScroll.scroll({
            document: this.document,
            scrollTarget: element,
            scrollOffset: 40
        })
    }
}
