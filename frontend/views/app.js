define([
    "app",
    "views/sidebar"
],function(){

    var url = window.location.protocol +"//"+ window.location.hostname+ ":" +window.location.port + window.location.pathname;
    
    var toolbar = {
        rows:[
            {view: "toolbar",padding: 8, elements: [
                    //{view: "button",type: "icon",icon: "bars",width: 37,align: "left",css: "app_button",click: function(){$$("sidemenu").toggle();}},
                    //{view:"label",css:{'color':"white",'font-weight':"bold",'font-size':"18px"},label:"Purchasing Information System"},
                    {view: "label",label: "<div class='header'><span style='font-size:20px';'font-weight:bold'>Purchasing Information System </span><div class='detail'></div>"},
                    {view: "label", align: "right", label: "<div class='header'><span style='font-size:20px';'font-weight:bold'>PT Yamaha Motor Parts Manufacturing Indonesia </span><div class='detail'></div>"},
                    {view: "label", label: "", width: 10}
                ]
            }
        ]
    };
    
    var sidebar = {
        id:"sidemenu",
        view: "sidebar",
        //collapsed: true,
        width: 215,
        scroll: "native-y",
        on:{
            onBeforeSelect:function(id){
                if(this.getItem(id).$count){
                    //debugger;
                    return false;
                }
            },
            onAfterSelect:function(id){
                this.$scope.show("./"+id);
                var item = this.getItem(id);
                webix.$$("title").parse({title: item.value});
            }
        },
        data:menu_data 
    };
    
    var body = {
        rows:[
            { 
                height: 40, 
                id: "title", 
                css: "title", 
                template: "<div class='header'><span style='font-weight:bold'>#title#</span><div class='detail'></div>", 
                data:{
                    text: "",
                    title: ""
                }
            },

            
            {
                view: "scrollview", 
                scroll:"false", 
                body:{ 
                    cols:[
                        { $subview:true }
                    ] 
                }
            }
        ]
    };
        
    var layout = {
        rows:[ 
            toolbar,
            {
                cols:[
                    {rows:[
                        sidebar
                    ]},
                    body
				]
            },
            {
                template:"<div  style='font-size:70%;'>\n\
                            Created By <a href='mailto:'>PT Yamaha Motor Part Mfg Indonesia</a>\n\
                            &copy; 2020  Ver. : 1.0 \n\
                          </div>",
                height:20 
            }
        ] 
    };
        
	return  {
        $ui:layout,
        $menu:"sidemenu",
        //$onurlchange:function(config, url, $scope){
			//$$("sidemenu").select(url[0].page);
		//}
	};
});
