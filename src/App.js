import './App.css';
import React, { Component } from 'react'
import Counter from './components/Counter';
import Child from './components/Child';

 class App extends Component {

    constructor (props) {
    super(props);
      this.state = {
        baslik: 'React ogreniyorum',
        ders: 'React JS',
        sehir:'istanbul',
        isDisplay: true,
        color:'lightblue',
        isim: 'jale'
   }
  this.stateDegistir = this.stateDegistir.bind(this)
 }


stateDegistir () {
  this.setState({
    baslik:'HTML ogrendim',
    ders:'Bootstrap',
    
  })
}
stateDegistir2 = () => {
  this.setState({
    baslik:'CSS ogreniyorum',
    ders:'CSS'
  })
}

  sehirGösterme = () => {
     this.setState({//isDisplay: false
      //Birsey true ise false, false ise true olsun istiyorsak bu sekilde yazmaliyiz.
      isDisplay: !this.state.isDisplay
    })
  }

changeBG = () =>{
  const newColor = this.state.color === 'lightblue' ? 'lightgreen' : 'lightblue'; 
    
  this.setState({
    color:newColor
  })
}

changeIsim = e => this.setState ({isim: e.target.value}) 



  render() {
    return (
              <div>


                      <div className='App' style={{backgroundColor: this.state.color}} >
                          <h2>{this.state.baslik}</h2>
                          <p>{this.state.ders}</p>
                          <button onClick={this.stateDegistir}>Change State</button>
                          <button onClick={this.stateDegistir2}>Change State2</button>
                          { this.state.isDisplay ? <p>{this.state.sehir}</p> : null}
                          <button onClick={this.sehirGösterme} >not show sehir</button>
                          <hr/>
                          <button onClick={this.changeBG} >Change BG {this.state.color === 'lightblue' ? 'lightgreen': 'lightblue'}</button>

                       </div>

                          <Counter/>
  
                          <div className="App" style={{backgroundColor: 'lightgreen'}} >
                            <input type="text" value = {this.state.isim} onChange= {this.changeIsim} />
                            <Child isim={this.state.isim}/>
                          </div>

              </div>


    );
  }
}

export default App;





// function App() {
//   return (
//     <div>
//      hello world
//     </div>
//   );
// }

// export default App;
