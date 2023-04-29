import {Component, ElementRef, Inject, OnInit, Renderer2, ViewChild} from '@angular/core';
import {NavigationEnd, Router, RouterEvent} from '@angular/router';
import {DOCUMENT, Location} from '@angular/common';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {filter, Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private _router !: Subscription;
  @ViewChild(NavbarComponent) navbar !: NavbarComponent;

  constructor( private renderer : Renderer2, private router: Router, @Inject(DOCUMENT,) private document: any, private element : ElementRef, public location: Location) {}
  ngOnInit() {
    var navbar : HTMLElement = this.element.nativeElement.children[0].children[0];
    // @ts-ignore
    this._router = this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
      if (window.outerWidth > 991) {
        window.document.children[0].scrollTop = 0;
      }else{
        if (window.document.activeElement) { // Add a null check
          window.document.activeElement.scrollTop = 0;
        }
      }
      this.navbar.sidebarClose();
    });
    this.renderer.listen('window', 'scroll', (event) => {
      const number = window.scrollY;
      if (number > 150 || window.pageYOffset > 150) {
        navbar.classList.remove('navbar-transparent');
      } else {
        navbar.classList.add('navbar-transparent');
      }
    });
    var version = 0;
    var ua = window.navigator.userAgent;
    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
      var rv = ua.indexOf('rv:');
      version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }
    if (version) {
      var body = document.getElementsByTagName('body')[0];
      body.classList.add('ie-background');

    }

  }
  removeFooter() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    titlee = titlee.slice( 1 );
    if(titlee === 'signup' || titlee === 'nucleoicons'){
      return false;
    }
    else {
      return true;
    }
  }
}
