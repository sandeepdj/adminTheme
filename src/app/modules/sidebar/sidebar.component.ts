import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
   
  constructor() { }

  ngOnInit() {
  }


 menusList:any[]=[
	{
		"group": "Navigation",
		"Parent": [
			{
				"name": "Dashboard",
				"children": [
					{
						"name": "DEFAULT"
					},
					{
						"name": "E-Commerce"
					},
					{
						"name": "Analytics"
					}
				]
			},
			{
				"name": "Widgets",
				"children": [
					{
						"name": "Statistics"
					},
					{
						"name": "Data"
					},
					{
						"name": "Chart"
					}
				]
			}
		]
	},
	{
		"group": "UI Elelemts",
		"Parent": [
			{
				"name": "Basic",
				"children": [
					{
						"name": "Alert"
					},
					{
						"name": "Button"
					},
					{
						"name": "Accordians"
					},
					{
						"name": "Tabs"
					},
					{
						"name": "Lists"
					}
				]
			},
			{
				"name": "Advance",
				"children": [
					{
						"name": "Modal"
					},
					{
						"name": "Notification"
					},
					{
						"name": "Sliders"
					}
				]
			},
			{
				"name": "Animations",
				"children": []
			}
		]
	},
	{
		"group": "Forms",
		"Parent": [
			{
				"name": "Form",
				"children": [
					{
						"name": "Components"
					},
					{
						"name": "Advance"
					},
					{
						"name": "Validation"
					}
				]
			},
			{
				"name": "Form Picker",
				"children": []
			},
			{
				"name": "Form Select",
				"children": []
			}
		]
	},
	{
		"group": "Tables",
		"Parent": [
			{
				"name": "Bootstrap Tables",
				"children": [
					{
						"name": "Basic Table"
					},
					{
						"name": "Border Table"
					}
				]
			},
			{
				"name": "Data Tables",
				"children": [
					{
						"name": "Basic Table"
					},
					{
						"name": "Paginig Table"
					}
				]
			}
		]
	}
];

}
