var CoC = CoC || {};
CoC.model = CoC.model || {};
CoC.model.Effect = Backbone.Model.extend({
	defaults: {
    name: "Effect Name",
    uid: "effect",
		base: 10,
    amount:0,
    image:""
  },

  championIds:function(ids){
    if(ids){
      this._championIds = [];
      for(var id in ids)
        this._championIds.push(id);
    }
    return this._championIds;
  }

});