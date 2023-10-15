/*
    地图使用到的基础常量
*/ 
let middleX = 8192;
let middleY = 8192;
let w = 300;
let h = 300;
let factor = 16384 / w;
let towers_data_radiant = [
    { "cx": (-1657+middleX)/factor, "cy": h-(-1512.5+middleY)/factor, "radius": 6, "color": 'rgb(155, 204, 26)', "name": "Tier 1 Tower Mid","Vision_D":1900/factor,"Vision_N":800/factor,"TrueSight":700/factor, "Health":1300},
    { "cx": (-3549+middleX)/factor, "cy": h-(-2785.5+middleY)/factor, "radius": 6, "color": 'rgb(155, 204, 26)', "name": "Tier 2 Tower Mid","Vision_D":1900/factor,"Vision_N":800/factor,"TrueSight":700/factor, "Health":1600},
    { "cx": (-4544+middleX)/factor, "cy": h-(-4096+middleY)/factor, "radius": 6, "color": 'rgb(155, 204, 26)', "name": "Tier 3 Tower Mid","Vision_D":1900/factor,"Vision_N":800/factor,"TrueSight":700/factor, "Health":1600},
    { "cx": (-5680+middleX)/factor, "cy": h-(-4880+middleY)/factor, "radius": 6, "color": 'rgb(155, 204, 26)', "name": "Tier 4 Tower Left","Vision_D":1900/factor,"Vision_N":800/factor,"TrueSight":700/factor, "Health":1600},
    { "cx": (-5392+middleX)/factor, "cy": h-(-5168+middleY)/factor, "radius": 6, "color": 'rgb(155, 204, 26)', "name": "Tier 4 Tower Right","Vision_D":1900/factor,"Vision_N":800/factor,"TrueSight":700/factor, "Health":1600},
    { "cx": (-6117+middleX)/factor, "cy": h-(1806+middleY)/factor, "radius": 6, "color": 'rgb(155, 204, 26)', "name": "Tier 1 Tower Top","Vision_D":1900/factor,"Vision_N":800/factor,"TrueSight":700/factor, "Health":1300},
    { "cx": (-6080+middleX)/factor, "cy": h-(-832+middleY)/factor, "radius": 6, "color": 'rgb(155, 204, 26)', "name": "Tier 2 Tower Top","Vision_D":1900/factor,"Vision_N":800/factor,"TrueSight":700/factor, "Health":1600},
    { "cx": (-6624+middleX)/factor, "cy": h-(-3328+middleY)/factor, "radius": 6, "color": 'rgb(155, 204, 26)', "name": "Tier 3 Tower Top","Vision_D":1900/factor,"Vision_N":800/factor,"TrueSight":700/factor, "Health":1600},
    { "cx": (4888+middleX)/factor, "cy": h-(-6080+middleY)/factor, "radius": 6, "color": 'rgb(155, 204, 26)', "name": "Tier 1 Tower Bottom","Vision_D":1900/factor,"Vision_N":800/factor,"TrueSight":700/factor, "Health":1300},
    { "cx": (-560+middleX)/factor, "cy": h-(-6096+middleY)/factor, "radius": 6, "color": 'rgb(155, 204, 26)', "name": "Tier 2 Tower Bottom","Vision_D":1900/factor,"Vision_N":800/factor,"TrueSight":700/factor, "Health":1600},
    { "cx": (-3873+middleX)/factor, "cy": h-(-6112+middleY)/factor, "radius": 6, "color": 'rgb(155, 204, 26)', "name": "Tier 3 Tower Bottom","Vision_D":1900/factor,"Vision_N":800/factor,"TrueSight":700/factor, "Health":1600}
];

let towers_data_dire = [
    { "cx": (1024+middleX)/factor, "cy": h-(320+middleY)/factor, "radius": 6, "color": 'rgb(255,26,26)', "name": "Tier 1 Tower Mid","Vision_D":1900/factor,"Vision_N":800/factor,"TrueSight":700/factor, "Health":1300},
    { "cx": (2496+middleX)/factor, "cy": h-(2112+middleY)/factor, "radius": 6, "color": 'rgb(255,26,26)', "name": "Tier 2 Tower Mid","Vision_D":1900/factor,"Vision_N":800/factor,"TrueSight":700/factor, "Health":1600},
    { "cx": (4288+middleX)/factor, "cy": h-(3712+middleY)/factor, "radius": 6, "color": 'rgb(255,26,26)', "name": "Tier 3 Tower Mid","Vision_D":1900/factor,"Vision_N":800/factor,"TrueSight":700/factor, "Health":1600},
    { "cx": (4960+middleX)/factor, "cy": h-(4784+middleY)/factor, "radius": 6, "color": 'rgb(255,26,26)', "name": "Tier 4 Tower Left","Vision_D":1900/factor,"Vision_N":800/factor,"TrueSight":700/factor, "Health":1600},
    { "cx": (5280+middleX)/factor, "cy": h-(4432+middleY)/factor, "radius": 6, "color": 'rgb(255,26,26)', "name": "Tier 4 Tower Right","Vision_D":1900/factor,"Vision_N":800/factor,"TrueSight":700/factor, "Health":1600},
    { "cx": (-4735.6+middleX)/factor, "cy": h-(6016+middleY)/factor, "radius": 6, "color": 'rgb(255,26,26)', "name": "Tier 1 Tower Top","Vision_D":1900/factor,"Vision_N":800/factor,"TrueSight":700/factor, "Health":1300},
    { "cx": (0+middleX)/factor, "cy": h-(6016+middleY)/factor, "radius": 6, "color": 'rgb(255,26,26)', "name": "Tier 2 Tower Top","Vision_D":1900/factor,"Vision_N":800/factor,"TrueSight":700/factor, "Health":1600},
    { "cx": (3504+middleX)/factor, "cy": h-(5776+middleY)/factor, "radius": 6, "color": 'rgb(255,26,26)', "name": "Tier 3 Tower Top","Vision_D":1900/factor,"Vision_N":800/factor,"TrueSight":700/factor, "Health":1600},
    { "cx": (6208+middleX)/factor, "cy": h-(-1664+middleY)/factor, "radius": 6, "color": 'rgb(255,26,26)', "name": "Tier 1 Tower Bottom","Vision_D":1900/factor,"Vision_N":800/factor,"TrueSight":700/factor, "Health":1300},
    { "cx": (6336+middleX)/factor, "cy": h-(384+middleY)/factor, "radius": 6, "color": 'rgb(255,26,26)', "name": "Tier 2 Tower Bottom","Vision_D":1900/factor,"Vision_N":800/factor,"TrueSight":700/factor, "Health":1600},
    { "cx": (6276+middleX)/factor, "cy": h-(2984+middleY)/factor, "radius": 6, "color": 'rgb(255,26,26)', "name": "Tier 3 Tower Bottom","Vision_D":1900/factor,"Vision_N":800/factor,"TrueSight":700/factor, "Health":1600}
];

//
let rune = [
    { "cx": (-2808+middleX)/factor, "cy": h-(4082+middleY)/factor, "radius": 4, "color": 'yellow', "name": "Bounty Rune"},
    { "cx": (3510+middleX)/factor, "cy": h-(250+middleY)/factor, "radius": 4, "color": 'yellow', "name": "Bounty Rune"},
    { "cx": (-4338+middleX)/factor, "cy": h-(160+middleY)/factor, "radius": 4, "color": 'yellow', "name": "Bounty Rune"},
    { "cx": (1313+middleX)/factor, "cy": h-(-4180+middleY)/factor, "radius": 4, "color": 'yellow', "name": "Bounty Rune"}
    ];

let shops = [
    { "cx": (4765+middleX)/factor, "cy": h-(-1400+middleY)/factor, "radius": 4, "color": 'rgb(255,102,204)', "name": "Shop"},
    { "cx": (-4562+middleX)/factor, "cy": h-(1456+middleY)/factor, "radius": 4, "color": 'rgb(255,102,204)', "name": "Shop"},
    { "cx": (7572+middleX)/factor, "cy": h-(-4092+middleY)/factor, "radius": 4, "color": 'rgb(255,102,204)', "name": "Shop"},
    { "cx": (-7515+middleX)/factor, "cy": h-(-6282+middleY)/factor, "radius": 4, "color": 'rgb(255,102,204)', "name": "Shop"},
    { "cx": (-7600+middleX)/factor, "cy": h-(4446+middleY)/factor, "radius": 4, "color": 'rgb(255,102,204)', "name": "Shop"},
    { "cx": (6695+middleX)/factor, "cy": h-(6790+middleY)/factor, "radius": 4, "color": 'rgb(255,102,204)', "name": "Shop"}
    ];

let barracks_radiant = [
    { "cx": (-4690+middleX)/factor, "cy": h-(-4555+middleY)/factor, "radius": 4, "color": '#00ccff', "name": "barracks"},
    { "cx": (-5045+middleX)/factor, "cy": h-(-4210+middleY)/factor, "radius": 4, "color": '#00ccff', "name": "barracks"},
    { "cx": (-6368+middleX)/factor, "cy": h-(-3740+middleY)/factor, "radius": 4, "color": '#00ccff', "name": "barracks"},
    { "cx": (-6868+middleX)/factor, "cy": h-(-3726+middleY)/factor, "radius": 4, "color": '#00ccff', "name": "barracks"},
    { "cx": (-4215+middleX)/factor, "cy": h-(-5886+middleY)/factor, "radius": 4, "color": '#00ccff', "name": "barracks"},
    { "cx": (-4228+middleX)/factor, "cy": h-(-6410+middleY)/factor, "radius": 4, "color": '#00ccff', "name": "barracks"}
    ];

let barracks_dire = [
    { "cx": (4318+middleX)/factor, "cy": h-(4095+middleY)/factor, "radius": 4, "color": '#ff6666', "name": "barracks"},
    { "cx": (4678+middleX)/factor, "cy": h-(3750+middleY)/factor, "radius": 4, "color": '#ff6666', "name": "barracks"},
    { "cx": (3870+middleX)/factor, "cy": h-(6000+middleY)/factor, "radius": 4, "color": '#ff6666', "name": "barracks"},
    { "cx": (3870+middleX)/factor, "cy": h-(5500+middleY)/factor, "radius": 4, "color": '#ff6666', "name": "barracks"},
    { "cx": (6560+middleX)/factor, "cy": h-(3300+middleY)/factor, "radius": 4, "color": '#ff6666', "name": "barracks"},
    { "cx": (6035+middleX)/factor, "cy": h-(3302+middleY)/factor, "radius": 4, "color": '#ff6666', "name": "barracks"}
    ];


let neutral_camps_radiant = [
    { "cx": (-3140+middleX)/factor, "cy": h-(184+middleY)/factor, "radius": 4, "color": 'black', "name": "Neutral Camp"},
    { "cx": (-948+middleX)/factor, "cy": h-(-4212+middleY)/factor, "radius": 4, "color": 'black', "name": "Neutral Camp"},
    { "cx": (-423+middleX)/factor, "cy": h-(-3164+middleY)/factor, "radius": 4, "color": 'black', "name": "Neutral Camp"},
    { "cx": (3126+middleX)/factor, "cy": h-(-3266+middleY)/factor, "radius": 4, "color": 'black', "name": "Neutral Camp"},
    { "cx": (1626+middleX)/factor, "cy": h-(-3548+middleY)/factor, "radius": 4, "color": 'black', "name": "Neutral Camp"},
    { "cx": (3126+middleX)/factor, "cy": h-(-3266+middleY)/factor, "radius": 4, "color": 'black', "name": "Neutral Camp"},
    { "cx": (3036+middleX)/factor, "cy": h-(-4582+middleY)/factor, "radius": 4, "color": 'black', "name": "Neutral Camp"}
    ];

let neutral_camps_dire = [
    { "cx": (-4600+middleX)/factor, "cy": h-(3405+middleY)/factor, "radius": 4, "color": 'black', "name": "Neutral Camp"},
    { "cx": (-3088+middleX)/factor, "cy": h-(4440+middleY)/factor, "radius": 4, "color": 'black', "name": "Neutral Camp"},
    { "cx": (-1600+middleX)/factor, "cy": h-(2433+middleY)/factor, "radius": 4, "color": 'black', "name": "Neutral Camp"},
    { "cx": (-256+middleX)/factor, "cy": h-(3584+middleY)/factor, "radius": 4, "color": 'black', "name": "Neutral Camp"},
    { "cx": (1230+middleX)/factor, "cy": h-(3136+middleY)/factor, "radius": 4, "color": 'black', "name": "Neutral Camp"},
    { "cx": (4190+middleX)/factor, "cy": h-(-750+middleY)/factor, "radius": 4, "color": 'black', "name": "Neutral Camp"}
    ];

let shrines_radiant = [
    { "cx": (-6570+middleX)/factor, "cy": h-(-4240+middleY)/factor, "radius": 4, "color": 'rgb(255,102,0)', "name": "Shrine"},
    { "cx": (-5600+middleX)/factor, "cy": h-(-3800+middleY)/factor, "radius": 4, "color": 'rgb(255,102,0)', "name": "Shrine"},
    { "cx": (3826+middleX)/factor, "cy": h-(4658+middleY)/factor, "radius": 4, "color": 'rgb(255,102,0)', "name": "Shrine"},
    { "cx": (4765+middleX)/factor, "cy": h-(4200+middleY)/factor, "radius": 4, "color": 'rgb(255,102,0)', "name": "Shrine"},
    { "cx": (5286+middleX)/factor, "cy": h-(3315+middleY)/factor, "radius": 4, "color": 'rgb(255,102,0)', "name": "Shrine"},
    { "cx": (4313+middleX)/factor, "cy": h-(5670+middleY)/factor, "radius": 4, "color": 'rgb(255,102,0)', "name": "Shrine"},
    { "cx": (6347+middleX)/factor, "cy": h-(3764+middleY)/factor, "radius": 4, "color": 'rgb(255,102,0)', "name": "Shrine"}
    ];

let shrines_dire = [
    { "cx": (-100+middleX)/factor, "cy": h-(2495+middleY)/factor, "radius": 4, "color": 'rgb(255,102,0)', "name": "Shrine"},
    { "cx": (4200+middleX)/factor, "cy": h-(-1623+middleY)/factor, "radius": 4, "color": 'rgb(255,102,0)', "name": "Shrine"},
    { "cx": (-5130+middleX)/factor, "cy": h-(-4700+middleY)/factor, "radius": 4, "color": 'rgb(255,102,0)', "name": "Shrine"},
    { "cx": (-4363+middleX)/factor, "cy": h-(-5250+middleY)/factor, "radius": 4, "color": 'rgb(255,102,0)', "name": "Shrine"},
    { "cx": (-4700+middleX)/factor, "cy": h-(-6160+middleY)/factor, "radius": 4, "color": 'rgb(255,102,0)', "name": "Shrine"},
    { "cx": (-4224+middleX)/factor, "cy": h-(1221+middleY)/factor, "radius": 4, "color": 'rgb(255,102,0)', "name": "Shrine"},
    { "cx": (660+middleX)/factor, "cy": h-(-2617+middleY)/factor, "radius": 4, "color": 'rgb(255,102,0)', "name": "Shrine"}
    ];

let respawn_radiant = [
    { "cx": (-2187+middleX)/factor, "cy": h-(-3784+middleY)/factor, "width": 715/factor,"height":856/factor, "color": 'yellow', "name": "Nature Creep Camp"},
    { "cx": (-1205+middleX)/factor, "cy": h-(-2991+middleY)/factor, "width": 1175/factor,"height":606/factor, "color": 'yellow', "name": "Nature Creep Camp"},
    { "cx": (-356+middleX)/factor, "cy": h-(-1593+middleY)/factor, "width": 872/factor,"height":700/factor, "color": 'yellow', "name": "Nature Creep Camp"},
    { "cx": (178+middleX)/factor, "cy": h-(-4127+middleY)/factor, "width": 935/factor, "height":966/factor, "color": 'yellow', "name": "Nature Creep Camp"},
    { "cx": (2783+middleX)/factor, "cy": h-(-4046+middleY)/factor, "width": 1017/factor, "height":865/factor, "color": 'yellow', "name": "Nature Creep Camp"},
    { "cx": (4015+middleX)/factor, "cy": h-(-3871+middleY)/factor, "width": 977/factor, "height":769/factor, "color": 'yellow', "name": "Nature Creep Camp"},
    { "cx": (-5166+middleX)/factor, "cy": h-(97+middleY)/factor, "width": 893/factor, "height":737/factor, "color": 'yellow', "name": "Nature Creep Camp"},
    { "cx": (-4320+middleX)/factor, "cy": h-(1088+middleY)/factor, "width": 893/factor, "height":737/factor, "color": 'yellow', "name": "Nature Creep Camp"},
    { "cx": (-3203+middleX)/factor, "cy": h-(208+middleY)/factor, "width": 893/factor, "height":737/factor, "color": 'yellow', "name": "Nature Creep Camp"}
];

let respawn_dire = [
    { "cx": (3191+middleX)/factor, "cy": h-(-200+middleY)/factor, "width": 985/factor,"height":752/factor, "color": 'yellow', "name": "Nature Creep Camp"},
    { "cx": (2319+middleX)/factor, "cy": h-(425+middleY)/factor, "width": 965/factor,"height":585/factor, "color": 'yellow', "name": "Nature Creep Camp"},
    { "cx": (3815+middleX)/factor, "cy": h-(1088+middleY)/factor, "width": 924/factor,"height":576/factor, "color": 'yellow', "name": "Nature Creep Camp"},
    { "cx": (-1036+middleX)/factor, "cy": h-(2752+middleY)/factor, "width": 748/factor, "height":784/factor, "color": 'yellow', "name": "Nature Creep Camp"},
    { "cx": (607+middleX)/factor, "cy": h-(3921+middleY)/factor, "width": 978/factor, "height":792/factor, "color": 'yellow', "name": "Nature Creep Camp"},
    { "cx": (-944+middleX)/factor, "cy": h-(3646+middleY)/factor, "width": 1058/factor, "height":414/factor, "color": 'yellow', "name": "Nature Creep Camp"},
    { "cx": (-2097+middleX)/factor, "cy": h-(4303+middleY)/factor, "width": 832/factor, "height":623/factor, "color": 'yellow', "name": "Nature Creep Camp"},
    { "cx": (-3621+middleX)/factor, "cy": h-(5200+middleY)/factor, "width": 1097/factor, "height":775/factor, "color": 'yellow', "name": "Nature Creep Camp"},
    { "cx": (-4784+middleX)/factor, "cy": h-(4657+middleY)/factor, "width": 821/factor, "height":1329/factor, "color": 'yellow', "name": "Nature Creep Camp"}
];

let FixedPoints = [].concat(towers_data_radiant, towers_data_dire, rune, shops, barracks_radiant, barracks_dire, neutral_camps_radiant, neutral_camps_dire, shrines_radiant, shrines_dire, respawn_radiant, respawn_dire);

export {
    FixedPoints
}