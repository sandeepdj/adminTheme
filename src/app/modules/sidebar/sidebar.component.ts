import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


	linkText:any;
  openMe:string;
  openMe1:boolean= false;
  text:boolean = true;
  constructor() { }

  ngOnInit() {
  }



  openMenu(event,index){
	console.log(event);
	console.log(event.path[2]);
 var path = event.path[2];
 path.target.classList.toggle('active');
	 
   }
 
 



 menusList:any[]=[
	{
	   "name":"Dashboard",
	   "icon":"fa fa-home",
	   "children":[
		  {
			 "name":"DEFAULT"
		  },
		  {
			 "name":"E-Commerce"
		  },
		  {
			 "name":"Analytics"
		  }
	   ]
	},
	{
	   "name":"Widgets",
	   "icon":"fa fa-th",
	   "children":[
		  {
			 "name":"Statistics"
		  },
		  {
			 "name":"Data"
		  },
		  {
			 "name":"Chart"
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
