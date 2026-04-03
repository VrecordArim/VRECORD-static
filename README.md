# VRECORD-static

VRECORD 버추얼 스트리머 MCN 공식 홍보 사이트 (`www.vrecord.co.kr`)의 소스 코드입니다.

---

## 로컬 환경 설정

빌드 도구 없이 정적 파일로만 구성되어 있습니다.

```bash
# Python 사용 시
python -m http.server 8000

# Node.js 사용 시
npx http-server
```

브라우저에서 `http://localhost:8000` 접속

---

## 멤버 추가

멤버 추가는 세 곳을 수정합니다.

### 1. 캐릭터 이미지 추가

`image/` 폴더에 캐릭터 이미지를 추가합니다.

```
image/char_이름.png
```

### 2. `index.html` — 탤런트 아이콘 슬롯 추가

`talent-icon-container` 안에 다음 항목을 추가합니다. `data-talent-id`는 현재 마지막 번호 다음 숫자를 사용합니다.

```html
<div class="talent-item talent-icon-item" data-talent-id="12">
    <img class="talent-image" src="./image/char_이름.png" loading="lazy" decoding="async" alt="캐릭터 이름" />
</div>
```

### 3. `js/talent.js` — 탤런트 데이터 추가

`getTalentData()` 함수의 switch 문에 case를 추가합니다.

```js
case 12:
    return {
        name: "캐릭터 이름",
        storyHTML: "<div class='showNoMobile'><p>캐릭터 설명 (데스크톱/태블릿용)</p></div>"
                 + "<div class='showOnlyMobile'>캐릭터 설명 (모바일용)</div>",
        url_youtube: "https://www.youtube.com/@채널",
        url_twitter: "https://x.com/@아이디",
        url_twitch:  "https://chzzk.naver.com/채널ID"  // 숲 사용 시: "https://ch.sooplive.co.kr/아이디"
    };
```

> `url_twitter`, `url_twitch` 등 없는 플랫폼은 해당 필드를 아예 생략하면 자동으로 숨겨집니다.

---

## 멤버 삭제 (졸업 처리)

멤버를 완전히 제거하지 않고 **주석 처리**하는 방식을 사용합니다. (기존 코드 참고)

### 1. `js/talent.js`

해당 case 전체를 주석 처리합니다.

```js
/*
case 3:
    return {
        name: "캐릭터 이름",
        ...
    };
*/
```

### 2. `index.html`

해당 슬롯의 이미지를 빈 상태로 두거나 제거하고, 이후 슬롯들의 `data-talent-id`를 앞으로 당깁니다.

> ID는 0부터 연속된 정수여야 합니다. 중간에 빠진 번호가 생기면 해당 슬롯이 빈칸으로 표시됩니다.

---

## 배포

별도의 CI/CD 파이프라인이 없습니다. 수정한 파일을 직접 웹 호스트에 업로드합니다.

```bash
# 변경사항 커밋
git add .
git commit -m "변경 내용 설명"
git push origin main
```

CNAME에 `www.vrecord.co.kr`이 설정되어 있으므로, main 브랜치에 push하면 GitHub Pages를 통해 자동 반영됩니다. 반영까지 1~2분 정도 소요될 수 있습니다.
