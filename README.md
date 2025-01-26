# React 입문 - 올림픽 메달 트래커

🔗 [바로가기 Click !!]()

<br><br>

## 📷 Preview

<img src="/readme_img/main.png">

<br><br>

## 🍀 프로젝트 소개

React 기초 문법을 활용하여 컴포넌트, 이벤트 관리, 상태(state) 관리를 통해 올림픽 메달 트래커로 CRUD 기능을 구현했습니다.
<br><br>

### 1. 개발 기간

- **25.01.20 - 21** 기본 CRUD 구현 / 컴포넌트 분리
- **25.01.22 - 23** UI 수정 및 예외처리 / 로컬스토리지 기능 구현
- **25.01.24** 최종 확인 및 배포 / readme 작성 <br>
  (+) <br>
- **25.01.26** 코드 리팩토링 및 정렬 데이터 출력 구현 완료
  <br>

### 2. 개발환경 및 사용 언어

- **언어** || React, css
- **디자인** || pigma
- **개발 툴** || vs code
  <br>

### 3. 디렉토리 구조

```
 src
 ┃ components
 ┃ ┣ Button.jsx  -> 버튼 컴포넌트
 ┃ ┣ MedalForm.jsx  -> 메달 랭킹 데이터 입력 form
 ┃ ┣ MedalItem.jsx  -> 랭킹 단일 리스트 컴포넌트
 ┃ ┗ MedalTable.jsx  -> 데이터를 모아서 테이블로 만드는 컴포넌트
 ┃ App.css
 ┃ App.jsx
 ┃ index.css
 ┗ main.jsx

```

<br><br><br>

## 🍀 프로젝트 주요기능

### 1. CREATE

<img src="/readme_img/check1.png">
<img src="/readme_img/check2.png">

- 등록하기 버튼을 통해 리스트를 등록할 수 있습니다.
- 메달 항목은 0보다 큰 정수만 입력 가능하고 값을 모두 입력해야 등록할 수 있습니다.
- 등록 후 input은 빈 값으로 초기화 되고 중복된 국가는 등록할 수 없습니다.
  <br>

### 2. READ

<img src="/readme_img/read.png">

- 오른쪽 구역에서 등록된 리스트 확인이 가능합니다.
- 기본값은 금메달 내림차순으로 정렬됩니다.
- 각 항목에 있는 버튼을 통해 정렬 방식을 변경할 수 있습니다.
- 로컬스토리지에 정보를 저장해서 브라우저를 벗어나도 데이터가 유지됩니다.
  <br>

### 3. UPDATE

<img src="/readme_img/update.png">

- 등록된 국가를 입력 후 수정하기 버튼으로 메달 갯수 수정이 가능합니다.
- 등록되지 않은 국가는 수정할 수 없습니다.
  <br>

### 4. DELETE

<img src="/readme_img/delete.png">

- 등록시 생성되는 버튼을 통해 해당 항목을 삭제할 수 있습니다.
  <br><br><br>

## 🍀 프로젝트 관련 기록 및 회고

[![Velog's GitHub stats](https://velog-readme-stats.vercel.app/api?name=_kimsuim)](https://velog.io/@_kimsuim)

<br>

### 1. TIL

🔗 [250126](https://velog.io/@_kimsuim/TIL250126-리액트-조건문)

<br>

### 2. 트러블 슈팅

🔗 [250124 로컬스토리지에 객체 저장하기](https://velog.io/@_kimsuim/TIL250124-트러블-슈팅-로컬스토리지에-객체-저장하기-또-로컬스토리지랑-싸운-사람)

<br><br><br>

## 🍀 향후 계획

1. 특정 기준으로 정렬하는 버튼을 만들고, 저장된 배열을 정렬까지는 했는데 테이블에 결과를 띄우는 것을 구현하지 못해서 해당 기능을 완성하고 싶습니다.
2. 코드가 정리되지 않은 느낌이라 리액트에 좀 더 익숙해진 뒤 가독성 좋게 리팩토링 하고 싶습니다.
3. props를 내려주고 받는 것에 오류는 없었지만 이 부분도 좀 더 숙련된 후 불필요한 부분은 없는지 점검하고 싶습니다.
4. 리액트에서 sytle을 지정하는게 처음이라 이전에 하던 것처럼 css 파일에 하드코딩으로 다 적어놓은 느낌인데, 이 부분에 대해 더 알아가고 싶습니다.

<br>

**250126 1차 리팩토링 완료**

1. 테이블 상단의 버튼으로 해당 정렬 기준 적용해서 출력하기 완료
2. 컴포넌트 재분리 완료 => 더 의미있는 기준으로 분리 후 파일명 변경 했습니다. <br> 추후 숙련도가 늘면 다시 확인해보려 합니다!

<br><br><br>

## 🍀 느낀점

리액트를 처음 접해봐서 값을 불러오고 넣는 것부터 어려움이 많았습니다. 차마 트러블 슈팅으로 기록할 수 없는 단순한 시행착오들이 많아서 더 힘들었던 것 같습니다. 지난 과제는 주어진 시간이 길어서 완성 후에 코드를 여러번 확인하면서 수정할 수 있었는데 이번에는 주어진 시간에 비해 제 실력이 많이 부족해서 쫓기듯이 구현한 느낌이라 완성도가 많이 떨어지는 것 같습니다. 이전 프로젝트 보다 코드 가독성도 좋지 않고 최적화도 되지 않은 것 같아 수정할 부분이 많은 프로젝트라 느꼈습니다. 처음 배운 것이니 당연한 과정이라 생각하고 부족하다 느낀 부분들을 발전해 나가고 싶습니다.
<br><br><br>

## 👍🏻 License

MIT &copy; [SUIM](mailto:suim0215@gmail.com)
