G.AddData({
    Name:'Scientexst Mod',
    Author:'matthyplayz',
    desc:'Adds Scientests, a way to produce Insight, but faster. Also adds Inventors, which generate random things faster than the object that usually makes them.',
    engineVersion:1,
    manifest:'https://raw.githubusercontent.com/MatthyPlayz/NELMods/master/NELScientexstManifest.js',
    requires:['Default dataset*'],
    sheets:{'sheet':'./CharSheetScientesxt.png'},//custom stylesheet (note : broken in IE and Edge for the time being)
    func:function()
    {   
		new G.Res({
			name:'creativity',
			desc:'Creativity for [inventor]s to create new things',
			startWith:0,
			visible:false,
			req:{'tribalism':true},
			partOf:'essentials'
		});
		new G.Tech({
			name:'Inventor machinery',
			desc:'@unlocks machinery for [inventor]s, producing [creativity].',
		});
		new G.Unit({
		name:'scientest',
		desc:'@generates [insight] more frequently than a [dreamer]<>A [scientest] spends their time experimenting with different objects around them.',
		icon:[0,0,'sheet'],
		cost:{'food':50},
		use:{'worker':1},
		effects:[
			{type:'gather',what:{'insight':0.3}},
			{type:'gather',what:{'insight':0.15},
			{type:'mult',value:1.2,req:{'wisdom rituals':'on'}}
		],
		category:'discovery',
		req:{'construction':true},
		limitPer:{'house':1},
		});
		new G.Unit({
			name:'inventor',
			desc:'@generates [things] more frequently than the [thing] that generates that.<>A [inventor] makes contraptions that makes things faster than the usual person.',
			icon:[1,0,'sheet'],
			req:{'tribalism':true},
			cost:{'food':50},
			use:{'worker':1},
			effects:[
				{type:'gather',what:{'fruit':0.3},req:{'creativity':5}}
			],
			category:'discovery',
			req:{'construction':true},
			limitPer:{'house':1},
		});
    }
});