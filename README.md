# 리액트 초급 영화 웹사이트

# 리액트
## 리액트 이해 - 리액트가 해결하고자 하는 문제는?
- 상호작용(Interactivity)
  - event : 이벤트리스너를 거치지 않고 바로 property로 이벤트 부여 가능!
- JS로 시작해 HTML을 완성 할 수 있다. 

## React-dom
- 리액트는 interactive한 앱을 만드는 도구
- react-dom은 라이브러리(패키지)
- react elements들을 HTML Body에 붙이는 도구
  - React.DOM.render(react element, html element)
- React JS 엔진과 같다.

## JSX
- JS 확장 문법
- HTML과 유사
- React Element 만드는데 사용

## Babel
- 브라우저가 이해할 수 있는 코드로 변환
- JSX를 React.createElement로 변환
- script에 type = "text/babel;" 로 선언

## UI 부분렌더링 (리액트의 장점!!!)
- ReactDOM.render으로 렌더링시에도 변경된 부분만 업데이트 된다.
- state가 바뀌면 반응하여 리렌더링 됨

## state
- 리액트에서 데이터 활용
- React.useState(초기값) => [data값, data modifier]
  - modifier : 값을 업데이트하고 컴포넌트의 리렌더링 트리거
- 이전 state를 기반으로 업데이트시 modidier 안에 함수 사용하는 방법이 더 안전
  - e.g. setData( prevData => prevData+1 )
  - data가 다른 곳에서 업데이트 될 수도 있기 때문

## JS와 JSX 혼동
- e.g. label의 for vs JS의 반복문 for
- label의 for임을 알려주기위해 htmlFor로 작성
- e.g. class => className으로 작성

## props
- 부모 컴포넌트에서 자식 컴포넌트로 데이터 전달
- key-value 형태의 객체로 전달됨 => 비구조화로 간편하게 사용가능
- e.g. <ChildComponent key1={value1} key2={value2} / > & ChildCoponent({key1, key2}) => { ... }
- 기본값 설정 가능 : 컴포넌트({ key = 기본값})
- propTypes : props의 타입 검사
  - 예제에서 react.production.min.js를 react.development.js로 바꿔야 타입 검사 O.K
  - 컴포넌트.PropTypes { 키: PropTypes.타입 }
  - array, bool, func, number, object, string, symbol
  - node : numbers || strings || elements || array || fragment
  - element : 리액트 엘레먼트
  - elementType : 리액트 엘레먼트 타입 (e.g. MyComponent)
  - oneOf(["이런값", ...])
  - oneOfType([PropTypes.타입, ... ])
  - arrayOf(PropTypes.타입)
  - PropTypes.타입.isRequired

## memo
- 최적화를 위해 불필요한 리렌더링을 방지
- 부모 컴포넌트의 state가 변하면 리렌더링 => 자식 컴포넌트도 리렌더링
- 자식 컴포넌트가 받는 props 변화가 없으면 리렌더링 X
```JS
const MemorizedComponent = React.memo(Component)
const [data, setData] = React.useState("origin data")
const onClick = () => setData("changed data")
return (
  <div>
    <MemorizedComponent data="data"/>
    <MemorizedComponent data={data} onClick={onClick}/>
  </div>
)
```

## create-react-app
- 리액트 애플리케이션을 더 쉽게 생성 가능
- 많은 스크립트들과 사전설정을 제공
  - scripts : start & build & test & eject
- 유용한 기능들 : Auto Refresh
- 도움을 주는 경고들
  - no-unused-vars
- 분할 & 정복하는 것이 포인트
  - e.g. CSS를 전역관리하지 않는다.
  - Button.module.css에 css 작성 => import => React JS가 CSS를 JS로 오브젝트로 변환 
  - React JS의 class는 임의의 값을 가짐. => 같은 이름의 className 사용 가능
- 즉 컴포넌트를 분리해서 만들고, 각 컴포넌트마다 css 작성. => 독립성

## useEffect(callback, React.DependencyList)
- 코드가 특정 조건에만 실행되도록 제한하고 싶을때 활용
- 처음에만 호출시 (e.g. 첫 로딩시에만 실행되는 API 호출)
- dependency가 변할때 (e.g. 검색 API 호출)
- cleanup function : useEffect 내부에 return () => console.log("Bye") 식으로 작성한다.
  - 자주 활용되진 않는다.

## react-router
- 라우터 종류 : BrowserRouter, HashRouter
  - HashRouter는 도메인/#/... 형태의 주소를 갖음
- switch의 역할은 해당하는 최초의 Route만 적용하기 위함
- Link 컴포넌트는 새로고침없이 이동시켜주는 기능
- useParams : url에 들어있는 변수 가져오는 함수 (e.g. .../:id => id)

## etc
- npm run deploy