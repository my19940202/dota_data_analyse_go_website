let flag = 1;
let lifeDiffData = Array.apply(0, Array(31)).map((item, i) => {
    if (i % 2) {
        flag = -1 * flag;
    }
    i++;
    return {
        date: i,
        pv: parseInt(Math.random() * flag * 100)
    }
});

let matchDetailData = {
    // 录像,replay id
    video_id: '110',
    replay_id: '9908',
    // 开始时间 时长 比赛模式
    time: 110,
    duration: 911,
    match_mode: 'mode X',
    winner: {
        team_id: 3214108,
        team_name: 'team np',
        // 击杀
        kill: 10,
        // 插眼
        ward: 29,
        smoke: 10,
        roshan: 2,
        players: [
            {
                hero_id: 11,
                // 总金钱
                gold: 1000,
                kill: 10,
                death: 3,
                assist: 12,
                last_hits: 100,
                denies: 100,
                //  等级
                level: 22,
                // 英雄伤害
                heroDamage: 11111,
                // 建筑伤害
                buildingDamage: 11111,
                // 道具 放在数组里面处理方便，之前那种item1 item2 item3 处理麻烦
                items: [
                    {name: 'Glimmer Cape', id: 233},
                    {name: 'Hand of Midas', id: 23}
                ]
            },
            {
                hero_id: 81,
                // 总金钱
                gold: 1000,
                kill: 10,
                death: 4,
                assist: 22,
                last_hits: 100,
                denies: 100,
                //  等级
                level: 22,
                // 英雄伤害
                heroDamage: 11111,
                // 建筑伤害
                buildingDamage: 11111,
                // 道具 放在数组里面处理方便，之前那种item1 item2 item3 处理麻烦
                items: [
                    {name: 'Glimmer Cape', id: 233},
                    {name: 'Hand of Midas', id: 23}
                ]
            },
            {
                hero_id: 101,
                // 总金钱
                gold: 1000,
                kill: 10,
                death: 3,
                assist: 10,
                last_hits: 100,
                denies: 100,
                //  等级
                level: 22,
                // 英雄伤害
                heroDamage: 11111,
                // 建筑伤害
                buildingDamage: 11111,
                // 道具 放在数组里面处理方便，之前那种item1 item2 item3 处理麻烦
                items: [
                    {name: 'Glimmer Cape', id: 233},
                    {name: 'Hand of Midas', id: 23}
                ]
            },
            {
                hero_id: 21,
                // 总金钱
                gold: 1000,
                kill: 30,
                death: 3,
                assist: 10,
                last_hits: 100,
                denies: 100,
                //  等级
                level: 22,
                // 英雄伤害
                heroDamage: 11111,
                // 建筑伤害
                buildingDamage: 11111,
                // 道具 放在数组里面处理方便，之前那种item1 item2 item3 处理麻烦
                items: [
                    {name: 'Glimmer Cape', id: 233},
                    {name: 'Hand of Midas', id: 23}
                ]
            },
            {
                hero_id: 51,
                // 总金钱
                gold: 1000,
                kill: 10,
                death: 3,
                assist: 23,
                last_hits: 100,
                denies: 100,
                //  等级
                level: 22,
                // 英雄伤害
                heroDamage: 11111,
                // 建筑伤害
                buildingDamage: 11111,
                // 道具 放在数组里面处理方便，之前那种item1 item2 item3 处理麻烦
                items: [
                    {name: 'Glimmer Cape', id: 233},
                    {name: 'Hand of Midas', id: 23}
                ]
            },
        ]
    },
    loser: {
        team_id: 2512249,
        team_name: 'team dc',
        // 击杀
        kill: 18,
        // 插眼
        ward: 34,
        smoke: 9,
        roshan: 3,
        players: [
            {
                hero_id: 111,
                // 总金钱
                gold: 1000,
                kill: 10,
                death: 3,
                assist: 10,
                last_hits: 100,
                denies: 100,
                //  等级
                level: 22,
                // 英雄伤害
                heroDamage: 11111,
                // 建筑伤害
                buildingDamage: 11111,
                // 道具 放在数组里面处理方便，之前那种item1 item2 item3 处理麻烦
                items: [
                    {name: 'Glimmer Cape', id: 233},
                    {name: 'Hand of Midas', id: 23}
                ]
            },
            {
                hero_id: 41,
                // 总金钱
                gold: 1000,
                kill: 10,
                death: 3,
                assist: 10,
                last_hits: 100,
                denies: 100,
                //  等级
                level: 22,
                // 英雄伤害
                heroDamage: 11111,
                // 建筑伤害
                buildingDamage: 11111,
                // 道具 放在数组里面处理方便，之前那种item1 item2 item3 处理麻烦
                items: [
                    {name: 'Glimmer Cape', id: 233},
                    {name: 'Hand of Midas', id: 23}
                ]
            },
            {
                hero_id: 51,
                // 总金钱
                gold: 1000,
                kill: 10,
                death: 3,
                assist: 10,
                last_hits: 100,
                denies: 100,
                //  等级
                level: 22,
                // 英雄伤害
                heroDamage: 11111,
                // 建筑伤害
                buildingDamage: 11111,
                // 道具 放在数组里面处理方便，之前那种item1 item2 item3 处理麻烦
                items: [
                    {name: 'Glimmer Cape', id: 233},
                    {name: 'Hand of Midas', id: 23}
                ]
            },
            {
                hero_id: 44,
                // 总金钱
                gold: 1000,
                kill: 10,
                death: 3,
                assist: 10,
                last_hits: 100,
                denies: 100,
                //  等级
                level: 22,
                // 英雄伤害
                heroDamage: 11111,
                // 建筑伤害
                buildingDamage: 11111,
                // 道具 放在数组里面处理方便，之前那种item1 item2 item3 处理麻烦
                items: [
                    {name: 'Glimmer Cape', id: 233},
                    {name: 'Hand of Midas', id: 23}
                ]
            },
            {
                hero_id: 55,
                // 总金钱
                gold: 1000,
                kill: 10,
                death: 3,
                assist: 10,
                last_hits: 100,
                denies: 100,
                //  等级
                level: 22,
                // 英雄伤害
                heroDamage: 11111,
                // 建筑伤害
                buildingDamage: 11111,
                // 道具 放在数组里面处理方便，之前那种item1 item2 item3 处理麻烦
                items: [
                    {name: 'Glimmer Cape', id: 233},
                    {name: 'Hand of Midas', id: 23}
                ]
            },
        ]
    }
};

let matchDetailHeroData = {
    team_id: 1234123,
    hero_id: 110,
    gold: 1000,
    kill: 10,
    death: 3,
    assist: 10,
    last_hits: 100,
    denies: 100,
    level: 22,
    // 活动区域
    Tick: {

    }
};

let liveData = [{
    duration: '0m0s',
    dire: {
        score: 1,
        gold: 10,
        team_id: 2512249,
        ec_percent: 60,
        team_name: 'team dire',
        players: [
            {team:'dire', net_worth: 100,gold: 100,hero_id: 0},
            {team:'dire', net_worth: 100,gold: 100,hero_id: 0},
            {team:'dire', net_worth: 100,gold: 100,hero_id: 0},
            {team:'dire', net_worth: 100,gold: 100,hero_id: 0},
            {team:'dire', net_worth: 100,gold: 100,hero_id: 0}
        ]
    },
    radiant: {
        score: 1,
        gold: 10,
        team_id: 5,
        ec_percent: 40,
        team_name: 'radiant',
        players: [
            {team:'radiant',net_worth: 100,gold: 100,hero_id: 0},
            {team:'radiant',net_worth: 100,gold: 100,hero_id: 0},
            {team:'radiant',net_worth: 100,gold: 100,hero_id: 0},
            {team:'radiant',net_worth: 100,gold: 100,hero_id: 0},
            {team:'radiant',net_worth: 100,gold: 100,hero_id: 0}
        ]
    },
    sortedPlayers: [
        {team:'dire',percent:65,gold: 100,hero_id: 100},
        {team:'radiant',percent:64.8,gold: 101,hero_id: 101},
        {team:'dire',percent:60.6,gold: 102,hero_id: 102},
        {team:'dire',percent:54.55,gold: 103,hero_id: 103},
        {team:'radiant',percent:34.5,gold: 14,hero_id: 14},
        {team:'radiant',percent:30.4,gold: 106,hero_id: 106},
        {team:'dire',percent:25.35,gold: 99,hero_id: 99},
        {team:'radiant',percent:20.2,gold: 98,hero_id: 98},
        {team:'dire',percent:15.15,gold: 97,hero_id: 97},
        {team:'radiant',percent:10.1,gold: 96,hero_id: 96}
    ]
}];

export {
    lifeDiffData,
    liveData,
    matchDetailData
}