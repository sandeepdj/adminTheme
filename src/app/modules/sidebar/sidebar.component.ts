import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  current: number = 0;

  constructor() { }

  ngOnInit() {
  }


 menusList:any[]=[
	{
	   "name":"Dashboard",
	   "icon":"fa fa-home",
	   "children":[
		  {
       "name":"Home",
       "url":"Dashboard"
		  },
		  {
       "name":"E-Commerce",
       "url":"Overview"
		  },
		  {
       "name":"Analytics",
       "url":"Analytics"
		  }
	   ]
	},
	{
	   "name":"Masters",
	   "icon":"fa fa-th",
	   "children":[
		  {
       "name":"Financial Year",
       "url":"Financial"
		  },
		  {
       "name":"GST Slab",
       "url":"GSTslab"
		  },
		  {
       "name":"Units",
       "url":"UnitMaster"
		  }
	   ]
	},
	{
	   "name":"Basic",
	   "icon":"fa fa-th-large",
	   "children":[
		  {
			 "name":"Alert"
		  },
		  {
			 "name":"Button"
		  },
		  {
			 "name":"Accordians"
		  },
		  {
			 "name":"Tabs"
		  },
		  {
			 "name":"Lists"
		  }
	   ]
	},
	{
	   "name":"Advance",
	   "icon":"fa fa-sync",
	   "children":[
		  {
			 "name":"Modal"
		  },
		  {
			 "name":"Notification"
		  },
		  {
			 "name":"Sliders"
		  }
	   ]
	},
	{
	   "name":"Animations",
	   "icon":"fa fa-sync",
	   "children":[

	   ]
	},
	{
	   "name":"Form",
	   "icon":"fa fa-sync",
	   "children":[
		  {
			 "name":"Components"
		  },
		  {
			 "name":"Advance"
		  },
		  {
			 "name":"Validation"
		  }
	   ]
	},
	{
	   "name":"Form Picker",
	   "icon":"fa fa-sync",
	   "children":[

	   ]
	},
	{
	   "name":"Form Select",
	   "icon":"fa fa-sync",
	   "children":[

	   ]
	},
	{
	   "name":"Bootstrap Tables",
	   "icon":"fa fa-sync",
	   "children":[
		  {
			 "name":"Basic Table"
		  },
		  {
			 "name":"Border Table"
		  }
	   ]
	},
	{
	   "name":"Data Tables",
	   "icon":"fa fa-sync",
	   "children":[
		  {
			 "name":"Basic Table"
		  },
		  {
			 "name":"Paginig Table"
		  }
	   ]
	}
 ];

}
