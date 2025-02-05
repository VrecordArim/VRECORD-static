function switchTalent(id, scrollIntoView = true) {
    var data = getTalentData(id);
    document.getElementById("talent-name").innerText = data.name;
    document.getElementById("talent-story").innerHTML = data.storyHTML;
        
    var contracts = document.getElementById("talent-link");
    contracts.children[0].href = data.url_youtube;
    contracts.children[1].href = data.url_twitter;
    contracts.children[2].href = data.url_twitch;
    updatePlatformIcon(data.url_twitch);

    updateTalentHighlight(id);
    if (scrollIntoView== true)
        scrollIntoTalentView();
}

function getTalentData(id) {
    switch (id) {
        /*
        case 0:
            return {
                name: "아스트 더 데우스",
                storyHTML: "<div class='showNoMobile'><p>데이터들의 생성과 소멸이 반복하며 탄생한 아스트랄의 상상 속</p><p>최강의 생명체인 드래곤. 예상과는 달리 독립체로써 탄생한 데우스는 아스트랄을 흡수하고</p><p>떠돌다 자신을 찾기 위해서 브이레코드에 입학하게 된다.</p></div><div class='showOnlyMobile'>데이터들의 생성과 소멸이 반복하며 탄생한 아스트랄의 상상 속 최강의 생명체인 드래곤. 예상과는 달리 독립체로써 탄생한 데우스는 아스트랄을 흡수하고 떠돌다 자신을 찾기 위해서 브이레코드에 입학하게 된다.</div>",
                url_youtube: "https://www.youtube.com/channel/UC8QeHScawb-0VWS8iudrVfg",
                url_twitter: "https://twitter.com/vrecord_deus",
                url_twitch: "https://www.twitch.tv/vrecord_deus"
            };
        */
        case 0:
            return {
                name: "아지가타 유논",
                storyHTML: "<div class='showNoMobile'><p>어릴 적 자신을 구해주고 나침반을 맡긴 이를 찾아 떠도는 코요테 수인.</p><p>매사에 긍정적이고 잘 웃는 편이지만, 어째서인지 주변에서 사건 사고가 끊이지를 않는다.</p><p>운동을 싫어하고 낮잠을 즐긴다. 대부분 멍하니 앉아 있다가 생기는 문제들이 많다.</p></div><div class='showOnlyMobile'>어릴 적 자신을 구해주고 나침반을 맡긴 이를 찾아 떠도는 코요테 수인. 매사에 긍정적이고 잘 웃는 편이지만, 어째서인지 주변에서 사건 사고가 끊이지를 않는다. 운동을 싫어하고 낮잠을 즐긴다. 대부분 멍하니 앉아 있다가 생기는 문제들이 많다.</div>",
                url_youtube: "https://www.youtube.com/channel/UCtD8lp3h303iLyIJZ9c2lYA",
                url_twitter: "https://twitter.com/vrecord_yunon",
                url_twitch: "https://ch.sooplive.co.kr/vrecordyunon",
            };
        /*
        case 1:
            return {
                name: "에블리스 쵸키",
                storyHTML: "<div class='showNoMobile'><p>마계에서 잦은 나댐으로 인해, 인간계로 추방당한 악마. 과거에는</p><p>강력한 마안과 매혹적인 목소리로 남을 조종하다시피 했지만, 마왕에게 모든 힘을</p><p>뺏기고 거리의 부랑자 신세를 보내다 복수를 꿈꾸며 브이레코드에 입학했다.</p></div><div class='showOnlyMobile'>마계에서 잦은 나댐으로 인해, 인간계로 추방당한 악마. 과거에는 강력한 마안과 매혹적인 목소리로 남을 조종하다시피 했지만, 마왕에게 모든 힘을 뺏기고 거리의 부랑자 신세를 보내다 복수를 꿈꾸며 브이레코드에 입학했다.</div>",
                url_youtube: "https://www.youtube.com/channel/UCABTQDxcB81jtk9UotbMD8w",
                url_twitter: "https://twitter.com/vrecord_choki",
                url_twitch: "https://www.twitch.tv/vrecord_choki"
            };
        */
            /*
        case 1:
            return {
                name: "피요",
                storyHTML: "<div class='showNoMobile'><p>오목눈이 수인으로, 태어날 때부터 본능적으로 지저귀는 새들과 달리 피요는 울음소리를</p><p>내지 못하였다. 다행히 인간형으로 변할 수 있게 되면서 목소리는 낼 수 있게 됐지만, 다른 새들처럼</p><p>아름다운 울음소리를 내고 싶어 다양한 지식이 모인다는 브이레코드를 찾게 되었다.</p></div><div class='showOnlyMobile'>오목눈이 수인으로, 태어날 때부터 본능적으로 지저귀는 새들과 달리 피요는 울음소리를 내지 못하였다. 다행히 인간형으로 변할 수 있게 되면서 목소리는 낼 수 있게 됐지만, 다른 새들처럼 아름다운 울음소리를 내고 싶어 다양한 지식이 모인다는 브이레코드를 찾게 되었다.</div>",
                url_youtube: "https://www.youtube.com/channel/UCC9Os6IqvCpCIpC1VoCfwPw",
                url_twitter: "https://twitter.com/vrecord_piyo",
                url_twitch:  "https://chzzk.naver.com/a45b82ecd09276230c84ae2ecb197c48"
            };
            */
            /*
        case 2:
            return {
                name: "마시마로 뮤이",
                storyHTML: "<div class='showNoMobile'><p>마시멜로 동물들이 사는 마시마로 포레스트의 주인.. 이였으나,</p><p>브이레코드의 제안에 개간 작업을 하다 문화재가 출토되어 국가에 땅을 뺏긴다.</p><p>갈 곳 잃은 동물들과 뮤이는 결국 세계를 전전하다 브이레코드에 입학한다.</p></div><div class='showOnlyMobile'>마시멜로 동물들이 사는 마시마로 포레스트의 주인.. 이였으나, 브이레코드의 제안에 개간 작업을 하다 문화재가 출토되어 국가에 땅을 뺏긴다. 갈 곳 잃은 동물들과 뮤이는 결국 세계를 전전하다 브이레코드에 입학한다.</div>",
                url_youtube: "https://www.youtube.com/channel/UCOYiCg4UBwJd_0Rp2Z7VPhQ",
                url_twitter: "https://twitter.com/vrecord_myui",
                url_twitch: "https://www.twitch.tv/vrecord_myui"
            };
            */
            /*
        case 3:
            return {
                name: "메리 크림치즈",
                storyHTML: "<div class='showNoMobile'><p>엄마가 사라진 사이 들이닥친 늑대가 무서워 벽시계에 숨었는데,</p><p>그때의 트라우마로 머리털이 직모가 되어버렸다.</p><p>해당 현상을 고치기 위해 다양한 지식이 모인다는 브이레코드에 입학했다.</p></div><div class='showOnlyMobile'>엄마가 사라진 사이 들이닥친 늑대가 무서워 벽시계에 숨었는데, 그때의 트라우마로 머리털이 직모가 되어버렸다. 해당 현상을 고치기 위해 다양한 지식이 모인다는 브이레코드에 입학했다.</div>",
                url_youtube: "https://www.youtube.com/channel/UCCDx3QSux3NO58afjpHNmkQ",
                url_twitter: "https://twitter.com/vrecord_merry",
                url_twitch: "https://www.twitch.tv/vrecord_merry",
            };
            */
        case 1:
            return {
                name: "루시드",
                storyHTML: "<div class='showNoMobile'><p>신의 어머니와 인간인 아버지 사이에 태어난 반신 반인 루시드.</p><p>어머니는 신의 업무를 하며 자신은 거의 아버지 손에 자라게 되었고,</p><p>오랜 기간 인간으로서 살게 되어 자신의 신적 능력을 인간을 이롭게 하는데 쓰고자 입학했다.</p></div><div class='showOnlyMobile'>신의 어머니와 인간인 아버지 사이에 태어난 반신 반인 루시드. 어머니는 신의 업무를 하며 자신은 거의 아버지 손에 자라게 되었고, 오랜 기간 인간으로서 살게 되어 자신의 신적 능력을 인간을 이롭게 하는데 쓰고자 입학했다.</div>",
                url_youtube: "https://www.youtube.com/@vrecord_luxeed",
                url_twitter: "https://twitter.com/vrecord_luxeed",
                url_twitch: "https://chzzk.naver.com/123121452613961512615dbaffc189b8"
            };
            /*
        case 2:
            return {
                name: "세비아",
                storyHTML: "<div class='showNoMobile'><p>과거 수호령이였으나, 인간을 구하려 자신의 모습을 드러내다 지위를 박탈당해 평범한 유령이 된 세비아.</p><p>어느 날 자신이 구해줬던 인간이 바다에 남긴 편지를 보게 된다.</p><p>마지막으로 한번 더 그 아이를 보기 위해 브이레코드에 입학하게 된다.</p></div><div class='showOnlyMobile'>과거 수호령이였으나, 인간을 구하려 자신의 모습을 드러내다 지위를 박탈당해 평범한 유령이 된 세비아. 어느 날 자신이 구해줬던 인간이 바다에 남긴 편지를 보게 된다. 마지막으로 한번 더 그 아이를 보기 위해 브이레코드에 입학하게 된다.</div>",
                url_youtube: "https://www.youtube.com/channel/UCa1PjkjBFP5KNhPA9UIgr4A",
                url_twitter: "https://twitter.com/vrecord_sevia",
                url_twitch:  "https://chzzk.naver.com/17771d4b289c8c555a30a61de5679033"
            };
            */
        case 2:
            return {
                name: "차가운",
                storyHTML: "<div class='showNoMobile'><p>시고르자브종으로 태어나 일찍이 죽은 강아지.</p><p>기적적으로 전생을 기억하고 환생했으며, 한 아이에게서 돌봐질 때</p><p>배웠던 노래들로 이 세상을 살아가게 된다.</p></div><div class='showOnlyMobile'>시고르자브종으로 태어나 일찍이 죽은 강아지. 기적적으로 전생을 기억하고 환생했으며, 한 아이에게서 돌봐질 때 배웠던 노래들로 이 세상을 살아가게 된다.</div>",
                url_youtube: "https://youtube.com/@vrecord_chagawoon",
                url_twitter: "https://twitter.com/vrecord_gawoon",
                url_twitch:  "https://chzzk.naver.com/0a1aef49164865b71039a79b7cc32da5"
            };
        // case 4:
            // return {
                // name: "다비",
                // storyHTML: "<div class='showNoMobile'><p>19세기 탐정의 수습 제자. 사건 해결 중에 습격을 받아 기절하게 되고 눈을 떠보니 21세기였다.</p><p>이게 무슨 일인지 알아보던 중, 타임슬립에 대해 알게 되고 과거로 돌아가기 위해</p><p>다양한 지식이 모인다는 브이레코드에 입학하게 되었다.</p></div><div class='showOnlyMobile'>19세기 탐정의 수습 제자. 사건 해결 중에 습격을 받아 기절하게 되고 눈을 떠보니 21세기였다. 이게 무슨 일인지 알아보던 중, 타임슬립에 대해 알게 되고 과거로 돌아가기 위해 다양한 지식이 모인다는 브이레코드에 입학하게 되었다.</div>",
                // url_youtube: "https://www.youtube.com/@vrecord_davi",
                // url_twitter: "https://twitter.com/vrecord_davi",
                // url_twitch:  "https://chzzk.naver.com/230384dde00b04200f1f7afc711dd7ad"
            // };
        case 3:
            return {
                name: "천휘",
                storyHTML: "<div class='showNoMobile'><p>북해의 피가 섞였단 이유로 버려졌다 천마신교에 거두어진 아이. 복수를 위해 살다 초대 천마의 진전을 이어받아 교주가 되었다.</p><p>그러나 복수에 눈이 멀어 급하게 정마대전을 일으키다 큰 내상을 입는다.</p><p>내상을 치료하고 이 허무를 치료하기 위해 브이레코드를 찾게된다.</p></div><div class='showOnlyMobile'>북해의 피가 섞였단 이유로 버려졌다 천마신교에 거두어진 아이. 복수를 위해 살다 초대 천마의 진전을 이어받아 교주가 되었다. 그러나 복수에 눈이 멀어 급하게 정마대전을 일으키다 큰 내상을 입는다. 내상을 치료하고 이 허무를 치료하기 위해 브이레코드를 찾게된다.</div>",
                url_youtube: "https://www.youtube.com/@vrecord_chunma",
                url_twitter: "https://twitter.com/vrecord_chunma",
                url_twitch:  "https://chzzk.naver.com/c20ff005595d0f0ecba6b92712dcdd8d"
            };
        case 4:
            return {
                name: "헤스",
                storyHTML: "<div class='showNoMobile'><p>뒷골목의 헤갱단을 이끄는 사슴 수인의 대장. 하지만 어째서인지 다른 이들에게 사슴이 아니라는 오해를 사게 되었다.</p><p>본인이 사슴임을 알리기 위한 방법을 모색 중, ‘학교’라는 곳에는 많은 인간이 모인다는 걸 알게 된다.</p><p>학교의 모든 이들을 조직에 입단시키기 위해 하월학원에 입학하게 된다.</p></div><div class='showOnlyMobile'>뒷골목의 헤갱단을 이끄는 사슴 수인의 대장. 하지만 어째서인지 다른 이들에게 사슴이 아니라는 오해를 사게 되었다. 본인이 사슴임을 알리기 위한 방법을 모색 중, ‘학교’라는 곳에는 많은 인간이 모인다는 걸 알게 된다. 학교의 모든 이들을 조직에 입단시키기 위해 하월학원에 입학하게 된다.</div>",
                url_youtube: "https://www.youtube.com/c/HessofficialX3",
                url_twitter: "https://twitter.com/vrecord_Hess",
                url_twitch:  "https://ch.sooplive.co.kr/utahessx33"
            };
            /*
        case 7:
            return {
                name: "뮬",
                storyHTML: "<div class='showNoMobile'><p>미확인 생물체 UMA.</p><p>인간의 외형을 띄고 있지만, 본체는 리본이라는 얘기가 있다.</p><p>정체를 알 수 없는 만큼 그녀가 입학한 목적 또한 그저 ‘재미’를 위해서라는 후문이 있다.</p></div><div class='showOnlyMobile'>미확인 생물체 UMA. 인간의 외형을 띄고 있지만, 본체는 리본이라는 얘기가 있다. 정체를 알 수 없는 만큼 그녀가 입학한 목적 또한 그저 ‘재미’를 위해서라는 후문이 있다.</div>",
                url_youtube: "https://www.youtube.com/c/JnMYULee",
                url_twitter: "https://twitter.com/Sing_Myu",
                url_twitch:  "https://chzzk.naver.com/6b2e39072f3af6e84ee04d34aa164e57"
            };
            */
        case 5:
            return {
                name: "리리스",
                storyHTML: "<div class='showNoMobile'><p>과거 마녀사냥으로 인해 죽을 뻔했던 인간.</p><p>도망치던 중, 자신을 스토킹하던 작은 흑염룡과 계약을 해 불로불사가 된다.</p><p>무료한 삶을 이어가던 중, 마녀도 받아주는 특이한 학교가 있다고 해 입학하게 된다.</p></div><div class='showOnlyMobile'>과거 마녀사냥으로 인해 죽을 뻔했던 인간. 도망치던 중, 자신을 스토킹하던 작은 흑염룡과 계약을 해 불로불사가 된다. 무료한 삶을 이어가던 중, 마녀도 받아주는 특이한 학교가 있다고 해 입학하게 된다.</div>",
                url_youtube: "https://www.youtube.com/@vrecord_lilith",
                url_twitter: "https://twitter.com/vrecord_lilith",
                url_twitch:  "https://ch.sooplive.co.kr/lilith1211"
            };
        case 6:
            return {
                name: "타루",
                storyHTML: "<div class='showNoMobile'><p>디지털 세계에 쌓인 로그 사이에서 태어난 고양이.</p><p>먹잇감을 쫓다 무수한 채팅 로그가 생성되는 인터넷 방송에 자리를 잡게 되고,</p><p>버튜버가 되어 데뷔를 하면 더 많은 로그를 먹을 수 있다는 생각에 하월학원에 입학하게 된다.</p></div><div class='showOnlyMobile'>디지털 세계에 쌓인 로그 사이에서 태어난 고양이. 먹잇감을 쫓다 무수한 채팅 로그가 생성되는 인터넷 방송에 자리를 잡게 되고, 버튜버가 되어 치지직에서 데뷔를 하면 더 많은 로그를 먹을 수 있다는 생각에 하월학원에 입학하게 된다.</div>",
                url_youtube: "https://www.youtube.com/@vrecord_taru",
                url_twitter: "https://twitter.com/vrecord_taru",
                url_twitch:  "https://ch.sooplive.co.kr/tarusama"
            };
        case 7:
            return {
                name: "달리",
                storyHTML: "<div class='showNoMobile'><p>달나라의 메이드 카페에서 일하던 소수 민족.</p><p>음악을 사랑하여 다양한 악기를 다루고 싶어</p><p>핑크문이 뜨던 날 지구로 내려와 브이레코드에 입학했다.</p></div><div class='showOnlyMobile'>달나라의 메이드 카페에서 일하던 소수 민족. 음악을 사랑하여 다양한 악기를 다루고 싶어 핑크문이 뜨던 날 지구로 내려와 브이레코드에 입학했다.</div>",
                url_youtube: "https://www.youtube.com/@vrecord_darli",
                url_twitter: "https://x.com/vrecord_darli",
                url_twitch:  "https://ch.sooplive.co.kr/darlida"
            };
        case 8:
            return {
                name: "하리",
                storyHTML: "<div class='showNoMobile'><p>길을 가다 바닥에 떨어진 브이레코드 전단지를 줍게 되고,</p><p>다른 내용은 하나도 이해하지 못했으나,</p><p>맛있는 디저트 제공이라는 문구에 이끌려 입학하게 되었다.</p></div><div class='showOnlyMobile'>길을 가다 바닥에 떨어진 브이레코드 전단지를 줍게 되고, 다른 내용은 하나도 이해하지 못했으나, 맛있는 디저트 제공이라는 문구에 이끌려 입학하게 되었다.</div>",
                url_youtube: "https://www.youtube.com/@vrecord_hari",
                url_twitter: "https://x.com/vrecord_hari",
                url_twitch:  "https://ch.sooplive.co.kr/harivrecord"
            };
        case 9:
            return {
                name: "사인",
                storyHTML: "<div class='showNoMobile'><p>브이레코드의 비밀에 대해 조사 의뢰가 들어와 입학하게 되었다.</p><p>증거를 잡기 위해 모든 멤버들의 일거수일투족을 기록한다.</p><p></p></div><div class='showOnlyMobile'>브이레코드의 비밀에 대해 조사 의뢰가 들어와 입학하게 되었다. 증거를 잡기 위해 모든 멤버들의 일거수일투족을 기록한다.</div>",
                url_youtube: "https://www.youtube.com/@vrecordsign",
                url_twitter: "https://x.com/vrecord_sign",
                url_twitch:  "https://ch.sooplive.co.kr/vrecordsign"
            };
        case 10:
            return {
                name: "시오",
                storyHTML: "<div class='showNoMobile'><p>너구리 섬에서 배민을 켰는데 '텅'이 뜨는 걸 보고 상경했다.</p><p>그러나 배달이 편해지자 매일 시켜 먹는 게임 폐인이 되어버리고</p><p>돈이 부족해진 바람에 숙식을 해결해주는 브이레코드에 입학하게 되었다.</p></div><div class='showOnlyMobile'>너구리 섬에서 배민을 켰는데 '텅'이 뜨는 걸 보고 상경했다. 그러나 배달이 편해지자 매일 시켜 먹는 게임 폐인이 되어버리고 돈이 부족해진 바람에 숙식을 해결해주는 브이레코드에 입학하게 되었다.</div>",
                url_youtube: "https://www.youtube.com/@vrecord_siio",
                url_twitter: "https://x.com/vrecord_siio",
                url_twitch:  "https://ch.sooplive.co.kr/siioyeyo"
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
    document.getElementById("talent-container").scrollIntoView({behavior: "auto"});
}

function updatePlatformIcon(url) {
    var imgElement = document.getElementById("platformIcon");
    
    if (url.includes("sooplive")) {
        imgElement.src = "./image/icon_soop.png";
    } else {
        imgElement.src = "./image/icon_twitch.png";
    }
}
