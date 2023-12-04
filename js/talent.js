function switchTalent(id, scrollIntoView = true) {
    var data = getTalentData(id);
    document.getElementById("talent-name").innerText = data.name;
    document.getElementById("talent-story").innerHTML = data.storyHTML;
        
    var contracts = document.getElementById("talent-link");
    contracts.children[0].href = data.url_youtube;
    contracts.children[1].href = data.url_twitter;
    contracts.children[2].href = data.url_twitch;

    updateTalentHighlight(id);
    if (scrollIntoView== true)
        scrollIntoTalentView();
}

function getTalentData(id) {
    switch (id) {
        case 0:
            return {
                name: "아스트 더 데우스",
                storyHTML: "<div class='showNoMobile'><p>데이터들의 생성과 소멸이 반복하며 탄생한 아스트랄의 상상 속</p><p>최강의 생명체인 드래곤. 예상과는 달리 독립체로써 탄생한 데우스는 아스트랄을 흡수하고</p><p>떠돌다 자신을 찾기 위해서 브이레코드에 입학하게 된다.</p></div><div class='showOnlyMobile'>데이터들의 생성과 소멸이 반복하며 탄생한 아스트랄의 상상 속 최강의 생명체인 드래곤. 예상과는 달리 독립체로써 탄생한 데우스는 아스트랄을 흡수하고 떠돌다 자신을 찾기 위해서 브이레코드에 입학하게 된다.</div>",
                url_youtube: "https://www.youtube.com/channel/UC8QeHScawb-0VWS8iudrVfg",
                url_twitter: "https://twitter.com/vrecord_deus",
                url_twitch: "https://www.twitch.tv/vrecord_deus"
            };
        case 1:
            return {
                name: "아지가타 유논",
                storyHTML: "<div class='showNoMobile'><p>어릴 적 자신을 구해주고 나침반을 맡긴 이를 찾아 떠도는 코요테 수인.</p><p>매사에 긍정적이고 잘 웃는 편이지만, 어째서인지 주변에서 사건 사고가 끊이지를 않는다.</p><p>운동을 싫어하고 낮잠을 즐긴다. 대부분 멍하니 앉아 있다가 생기는 문제들이 많다.</p></div><div class='showOnlyMobile'>어릴 적 자신을 구해주고 나침반을 맡긴 이를 찾아 떠도는 코요테 수인. 매사에 긍정적이고 잘 웃는 편이지만, 어째서인지 주변에서 사건 사고가 끊이지를 않는다. 운동을 싫어하고 낮잠을 즐긴다. 대부분 멍하니 앉아 있다가 생기는 문제들이 많다.</div>",
                url_youtube: "https://www.youtube.com/channel/UCtD8lp3h303iLyIJZ9c2lYA",
                url_twitter: "https://twitter.com/vrecord_yunon",
                url_twitch: "https://www.twitch.tv/vrecord_yunon",
            };
        case 2:
            return {
                name: "에블리스 쵸키",
                storyHTML: "<div class='showNoMobile'><p>마계에서 잦은 나댐으로 인해, 인간계로 추방당한 악마. 과거에는</p><p>강력한 마안과 매혹적인 목소리로 남을 조종하다시피 했지만, 마왕에게 모든 힘을</p><p>뺏기고 거리의 부랑자 신세를 보내다 복수를 꿈꾸며 브이레코드에 입학했다.</p></div><div class='showOnlyMobile'>마계에서 잦은 나댐으로 인해, 인간계로 추방당한 악마. 과거에는 강력한 마안과 매혹적인 목소리로 남을 조종하다시피 했지만, 마왕에게 모든 힘을 뺏기고 거리의 부랑자 신세를 보내다 복수를 꿈꾸며 브이레코드에 입학했다.</div>",
                url_youtube: "https://www.youtube.com/channel/UCABTQDxcB81jtk9UotbMD8w",
                url_twitter: "https://twitter.com/vrecord_choki",
                url_twitch: "https://www.twitch.tv/vrecord_choki"
            };
        case 3:
            return {
                name: "피요",
                storyHTML: "<div class='showNoMobile'><p>오목눈이 수인으로, 태어날 때부터 본능적으로 지저귀는 새들과 달리 피요는 울음소리를</p><p>내지 못하였다. 다행히 인간형으로 변할 수 있게 되면서 목소리는 낼 수 있게 됐지만, 다른 새들처럼</p><p>아름다운 울음소리를 내고 싶어 다양한 지식이 모인다는 브이레코드를 찾게 되었다.</p></div><div class='showOnlyMobile'>오목눈이 수인으로, 태어날 때부터 본능적으로 지저귀는 새들과 달리 피요는 울음소리를 내지 못하였다. 다행히 인간형으로 변할 수 있게 되면서 목소리는 낼 수 있게 됐지만, 다른 새들처럼 아름다운 울음소리를 내고 싶어 다양한 지식이 모인다는 브이레코드를 찾게 되었다.</div>",
                url_youtube: "https://www.youtube.com/channel/UCC9Os6IqvCpCIpC1VoCfwPw",
                url_twitter: "https://twitter.com/vrecord_piyo",
                url_twitch:  "https://www.twitch.tv/vrecord_piyo"
            };
        case 4:
            return {
                name: "마시마로 뮤이",
                storyHTML: "<div class='showNoMobile'><p>마시멜로 동물들이 사는 마시마로 포레스트의 주인.. 이였으나,</p><p>브이레코드의 제안에 개간 작업을 하다 문화재가 출토되어 국가에 땅을 뺏긴다.</p><p>갈 곳 잃은 동물들과 뮤이는 결국 세계를 전전하다 브이레코드에 입학한다.</p></div><div class='showOnlyMobile'>마시멜로 동물들이 사는 마시마로 포레스트의 주인.. 이였으나, 브이레코드의 제안에 개간 작업을 하다 문화재가 출토되어 국가에 땅을 뺏긴다. 갈 곳 잃은 동물들과 뮤이는 결국 세계를 전전하다 브이레코드에 입학한다.</div>",
                url_youtube: "https://www.youtube.com/channel/UCOYiCg4UBwJd_0Rp2Z7VPhQ",
                url_twitter: "https://twitter.com/vrecord_myui",
                url_twitch: "https://www.twitch.tv/vrecord_myui"
            };
        case 5:
            return {
                name: "메리 크림치즈",
                storyHTML: "<div class='showNoMobile'><p>엄마가 사라진 사이 들이닥친 늑대가 무서워 벽시계에 숨었는데,</p><p>그때의 트라우마로 머리털이 직모가 되어버렸다.</p><p>해당 현상을 고치기 위해 다양한 지식이 모인다는 브이레코드에 입학했다.</p></div><div class='showOnlyMobile'>엄마가 사라진 사이 들이닥친 늑대가 무서워 벽시계에 숨었는데, 그때의 트라우마로 머리털이 직모가 되어버렸다. 해당 현상을 고치기 위해 다양한 지식이 모인다는 브이레코드에 입학했다.</div>",
                url_youtube: "https://www.youtube.com/channel/UCCDx3QSux3NO58afjpHNmkQ",
                url_twitter: "https://twitter.com/vrecord_merry",
                url_twitch: "https://www.twitch.tv/vrecord_merry",
            };
        case 6:
            return {
                name: "루시드",
                storyHTML: "<div class='showNoMobile'><p>신의 어머니와 인간인 아버지 사이에 태어난 반신 반인 루시드.</p><p>어머니는 신의 업무를 하며 자신은 거의 아버지 손에 자라게 되었고,</p><p>오랜 기간 인간으로서 살게 되어 자신의 신적 능력을 인간을 이롭게 하는데 쓰고자 입학했다.</p></div><div class='showOnlyMobile'>신의 어머니와 인간인 아버지 사이에 태어난 반신 반인 루시드. 어머니는 신의 업무를 하며 자신은 거의 아버지 손에 자라게 되었고, 오랜 기간 인간으로서 살게 되어 자신의 신적 능력을 인간을 이롭게 하는데 쓰고자 입학했다.</div>",
                url_youtube: "https://www.youtube.com/@vrecord_luxeed",
                url_twitter: "https://twitter.com/vrecord_luxeed",
                url_twitch: "https://www.twitch.tv/vrecord_luxeed"
            };
        case 7:
            return {
                name: "세비아",
                storyHTML: "<div class='showNoMobile'><p>과거 수호령이였으나, 인간을 구하려 자신의 모습을 드러내다 지위를 박탈당해 평범한 유령이 된 세비아.</p><p>어느 날 자신이 구해줬던 인간이 바다에 남긴 편지를 보게 된다.</p><p>마지막으로 한번 더 그 아이를 보기 위해 브이레코드에 입학하게 된다.</p></div><div class='showOnlyMobile'>과거 수호령이였으나, 인간을 구하려 자신의 모습을 드러내다 지위를 박탈당해 평범한 유령이 된 세비아. 어느 날 자신이 구해줬던 인간이 바다에 남긴 편지를 보게 된다. 마지막으로 한번 더 그 아이를 보기 위해 브이레코드에 입학하게 된다.</div>",
                url_youtube: "https://www.youtube.com/channel/UCa1PjkjBFP5KNhPA9UIgr4A",
                url_twitter: "https://twitter.com/vrecord_sevia",
                url_twitch:  "https://www.twitch.tv/vrecord_sevia"
            };
        case 8:
            return {
                name: "차가운",
                storyHTML: "<div class='showNoMobile'><p>시고르자브종으로 태어나 일찍이 죽은 강아지.</p><p>기적적으로 전생을 기억하고 환생했으며, 한 아이에게서 돌봐질 때</p><p>배웠던 노래들로 이 세상을 살아가게 된다.</p></div><div class='showOnlyMobile'>시고르자브종으로 태어나 일찍이 죽은 강아지. 기적적으로 전생을 기억하고 환생했으며, 한 아이에게서 돌봐질 때 배웠던 노래들로 이 세상을 살아가게 된다.</div>",
                url_youtube: "https://youtube.com/@vrecord_chagawoon",
                url_twitter: "https://twitter.com/vrecord_gawoon",
                url_twitch:  "https://twitch.tv/vrecord_chagawoon"
            };
    }
}

function updateTalentHighlight(selectedId) {
    const talentContainer = document.getElementsByClassName("talent-icon-container")[0];
    const views = talentContainer.querySelectorAll('.talent-item');

    // 데우스 님 졸업에 따른 인덱스 보정
    selectedId -= 1;
    
    for (let i = 0; i < views.length; i++) {
        if (i == selectedId) {
            views[i].classList.add("talent-icon-item-sel");
            views[i].classList.remove("talent-icon-item");
        }
        else {
            views[i].classList.remove("talent-icon-item-sel");
            views[i].classList.add("talent-icon-item");
        }
    }
}

function scrollIntoTalentView() {
    document.getElementById("talent-container").scrollIntoView({behavior: "auto"});
}
