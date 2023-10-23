import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import { fuseAnimations } from '@fuse/animations';

@Component({
    selector     : 'profile',
    templateUrl  : './profile.component.html',
    styleUrls    : ['./profile.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class ProfileComponent implements OnInit
{
    profile: any;
    /**
     * Constructor
     */
    constructor()
    {
    }

    ngOnInit(): void {
        let enterprice = sessionStorage.getItem("EntrepriseData");
        this.profile = ['', '', '', '', ''];
        if (enterprice != undefined) {
            this.profile = enterprice.split(',');
        }
    }

}
