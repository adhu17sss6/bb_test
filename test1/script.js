$(function(){
	Backbone.emulateJSON = true;
	//Backbone.sync = function(method, model, options) {
	//	console.log(method);
	//	console.log(model);
	//	console.log(options);
	//}
	
	var Model_test = Backbone.Model.extend({		
		defaults:{
			field1:"field num 1",
			field2:"field num 2",
			field3:"field num 3",
		},
		state:{
			success:function(model, response){
				console.log(response);
			},
			error:function(){
				console.log("error");
			}
		},
		fetch_:function(){			
			this.fetch(this.state);		
		},
		save_:function(hash){	
			this.save(hash,this.state);
		},
		url: 'http://localhost/test/'
	});
	
	
	var collection = Backbone.Collection.extend({
		url: '/test/'
	});	
	
	var Test_view =  Backbone.View.extend({		
		el:$("body"),	
		initialize:function(){			
			this.listenTo(this.model, "change", this.render);
			var t_names = ["test","test2","test3"];
			this.templates = {};
			for(var i=0; i<t_names.length; i++){			
				 this.templates[t_names[i]] = _.template($('#'+t_names[i]).html());
			}			
			this.render();
		},
		change:function(data){
			console.log(data)
			this.render();
		},
		events:{
			"click a":"click",
		},
		click:function(e){
			var this_ = $(e.target);			
			var text = this_.text();			
			var width = Math.round(text.length*6.5);
			e.target.outerHTML = this.templates.test2({text:text,width:width});
			return false;
		},
		render:function(){						
			$(this.el).html(this.templates.test(this.model.toJSON()));			
			return this;
		}
	});
	
	var model_test = new Model_test();		
	var test_view = new Test_view({model:model_test});
	//console.log(model_test.attributes);
	setTimeout(function(){
		model_test.save_({"ad":"as"},{wait: true});				
	},1500);
	model_test.fetch_();				
	
	
	
	
	
	
});