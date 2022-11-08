// ReactDOM.render("<h1>Hello</h1>", document.getElementById("root"));

// JSX
// const page = (
//   <div>
//     <h1>This is Jsx</h1>
//   </div>
// )

// ReactDOM.render(page, document.getElementById('root'));

// import React from "react"
// import ReactDOM from "react-dom"

// const nav = (
//   <div>
//     <nav>
//       <h1>My Website</h1>
//       <ul>
//         <li>Pricing</li>
//         <li>About</li>
//         <li>Contact</li>
//       </ul>
//     </nav>

//   </div>
// )

// ReactDOM.render(nav, document.getElementById('root'))

// const page = (
//   <div>
//     <h1>My Awesome website in React</h1>
//     <h3>Reason I Love React</h3>
//     <ol>
//       <li>It's composable</li>
//       <li>It's declarative</li>
//       <li>It's hireable skill</li>
//       <li>It's actively maintained by skilled people</li>
//     </ol>
//   </div>
// )

// // ReactDOM.render(page, document.getElementById('root'))
// document.getElementById('root').append(JSON.stringify(page));

// const page = (
//   <div>
//     <img src="./react.png" alt="react-logo" width="40px" />
//     <h1>Fun facts about Rect</h1>
//     <ul>
//       <li>was first feleased in 2013</li>
//       <li>was originally creted by Jordan Walke</li>
//       <li>Has wel over 100k stars on Github</li>
//       <li>Is maintained by Facebook</li>
//       <li>Powers thousands of enterprise apps, including mobile apps</li>
//     </ul>
//   </div>
// )

// function TemporaryName(){
// return (
// <div>
//     <img src="./react.png" alt="react-logo" width="40px" />
//     <h1>Fun facts about Rect</h1>
//     <ul>
//       <li>was first feleased in 2013</li>
//       <li>was originally creted by Jordan Walke</li>
//       <li>Has wel over 100k stars on Github</li>
//       <li>Is maintained by Facebook</li>
//       <li>Powers thousands of enterprise apps, including mobile apps</li>
//     </ul>
//   </div>
// )
// }

// // console.log(page);

// ReactDOM.render(<TemporaryName />, document.getElementById('root'))

import React from "react"
import ReactDOM  from "react-dom"

import Header from "./Header"



function MainContent() {
  return (
    <>
      <h1>Reasons I'm excited to learn react</h1>
      <ol>
        <li>It's composable</li>
        <li>It's declarative</li>
        <li>It's hireable skill</li>
        <li>It's actively maintained by skilled people</li>
      </ol>
    </>
  )
}

function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

ReactDOM.render(
  <Page />, document.getElementById('root')
)