function switchTalent(id) {
    var data = getTalentData(id);
    document.getElementById("talent-name").innerText = data.name;
    document.getElementById("talent-story").innerHTML = data.storyHTML;
        
    var contracts = document.getElementById("talent-link");
    contracts.children[0].href = data.url_youtube;
    contracts.children[1].href = data.url_twitter;
    contracts.children[2].href = data.url_twitch;

    updateTalentHighlight(id);
    scrollIntoTalentView();
}

function getTalentData(id) {
    switch (id) {
        case 0:
            return {
                name: "아스트 더 데우스",
                storyHTML: "<div class='showNoMobile'><p>데이터들의 생성과 소멸이 반복하며 탄생한 아스트랄의 상상 속</p><p>최강의 생명체인 드래곤. 예상과는 달리 독립체로써 탄생한 데우스는 아스트랄을 흡수하고</p><p>떠돌다 자신을 찾기 위해서 VRECORD에 입학하게 된다.</p></div><div class='showOnlyMobile'>데이터들의 생성과 소멸이 반복하며 탄생한 아스트랄의 상상 속 최강의 생명체인 드래곤. 예상과는 달리 독립체로써 탄생한 데우스는 아스트랄을 흡수하고 떠돌다 자신을 찾기 위해서 VRECORD에 입학하게 된다.</div>",
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
                storyHTML: "<div class='showNoMobile'><p>마계에서 잦은 나댐으로 인해, 인간계로 추방당한 악마. 과거에는</p><p>강력한 마안과 매혹적인 목소리로 남을 조종하다시피 했지만, 마왕에게 모든 힘을</p><p>뺏기고 거리의 부랑자 신세를 보내다 복수를 꿈꾸며 VRECORD에 입학했다.</p></div><div class='showOnlyMobile'>마계에서 잦은 나댐으로 인해, 인간계로 추방당한 악마. 과거에는 강력한 마안과 매혹적인 목소리로 남을 조종하다시피 했지만, 마왕에게 모든 힘을 뺏기고 거리의 부랑자 신세를 보내다 복수를 꿈꾸며 VRECORD에 입학했다.</div>",
                url_youtube: "https://www.youtube.com/channel/UCABTQDxcB81jtk9UotbMD8w",
                url_twitter: "https://twitter.com/vrecord_choki",
                url_twitch: "https://www.twitch.tv/vrecord_choki"
            };
        case 3:
            return {
                name: "피요",
                storyHTML: "<div class='showNoMobile'><p>오목눈이 수인으로, 태어날 때부터 본능적으로 지저귀는 새들과 달리 피요는 울음소리를</p><p>내지 못하였다. 다행히 인간형으로 변할 수 있게 되면서 목소리는 낼 수 있게 됐지만, 다른 새들처럼</p><p>아름다운 울음소리를 내고 싶어 다양한 지식이 모인다는 VREOCRD를 찾게 되었다.</p></div><div class='showOnlyMobile'>오목눈이 수인으로, 태어날 때부터 본능적으로 지저귀는 새들과 달리 피요는 울음소리를 내지 못하였다. 다행히 인간형으로 변할 수 있게 되면서 목소리는 낼 수 있게 됐지만, 다른 새들처럼 아름다운 울음소리를 내고 싶어 다양한 지식이 모인다는 VREOCRD를 찾게 되었다.</div>",
                url_youtube: "https://www.youtube.com/channel/UCC9Os6IqvCpCIpC1VoCfwPw",
                url_twitter: "https://twitter.com/vrecord_piyo",
                url_twitch:  "https://www.twitch.tv/vrecord_piyo"
            };
        case 4:
            return {
                name: "루시드",
                storyHTML: "<div>임시 스토리 문구</div>",
                url_youtube: "https://www.youtube.com/channel/UC8QeHScawb-0VWS8iudrVfg",
                url_twitter: "https://twitter.com/vrecord_deus",
                url_twitch: "https://www.twitch.tv/vrecord_deus"
            };
        case 5:
            return {
                name: "메리 크림치즈",
                storyHTML: "<div>임시 스토리 문구</div>",
                url_youtube: "https://www.youtube.com/channel/UCtD8lp3h303iLyIJZ9c2lYA",
                url_twitter: "https://twitter.com/vrecord_yunon",
                url_twitch: "https://www.twitch.tv/vrecord_yunon",
            };
        case 6:
            return {
                name: "마시마로 뮤이",
                storyHTML: "<div>임시 스토리 문구</div>",
                url_youtube: "https://www.youtube.com/channel/UCABTQDxcB81jtk9UotbMD8w",
                url_twitter: "https://twitter.com/vrecord_choki",
                url_twitch: "https://www.twitch.tv/vrecord_choki"
            };
        case 7:
            return {
                name: "세비아",
                storyHTML: "<div>임시 스토리 문구</div>",
                url_youtube: "https://www.youtube.com/channel/UCC9Os6IqvCpCIpC1VoCfwPw",
                url_twitter: "https://twitter.com/vrecord_piyo",
                url_twitch:  "https://www.twitch.tv/vrecord_piyo"
            };
    }
}

function updateTalentHighlight(selectedId) {
    const talentContainer = document.getElementsByClassName("talent-icon-container")[0];
    const views = talentContainer.querySelectorAll('.talent-item');
    
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
    document.getElementById("talent-container").scrollIntoView({behavior: "smooth"});
}