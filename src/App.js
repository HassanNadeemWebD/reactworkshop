import React from 'react'
import Card from './components/Card';
import Navbar from './components/Navbar';
import img from './components/logo512.png'
import Form from './components/Form';


const App = () => {

  return (
    <>
      <Navbar link="About" />
      <Form/>

      <div className='row'>
        <div className='col'>
          <Card source={img} title="React JS" description="The React. js framework is an open-source JavaScript framework and library developed by Facebook. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript" />

        </div>
        <div className='col'>
          <Card source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVLFpJypmWo8-_qvR9u6NHZoWQ7XN3lyp6HLguGFLCe19OsShRSqadPl-aPeFPjali6kg&usqp=CAU" title="Vue JS" description="Vue  is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex" />

        </div>
        <div className='col'>
          <Card source="https://miro.medium.com/max/1400/1*R1mfXLP9edcArZXwmGbGag.jpeg" title="Angular JS" description="Angular is a development platform, built on TypeScript. As a platform, Angular includes: A component-based framework for building scalable web applications. A collection of well-integrated libraries that cover a wide variety of features, including routing, forms management, client-server communication" />

        </div>

      </div>



    </>

  )
}

export default App