import React from 'react';
import $ from 'jquery'
import './App.css';
import redPackage from './../../images/red-package.png';

class App extends  React.Component {
    constructor(props){
      super(props);
      this.state={
        name:'诉诉飞飞',
        screenwidth:window.screen.width,
      }
      this.snowDrop(50, this.randomInt(1035, this.state.screenwidth-60));
      this.snow(50, 150);
    };
    snow=(num, speed)=> {
		if (num > 0) {
            let self=this;
			setTimeout(function () {
				$('#drop_' + self.randomInt(1, 250)).addClass('animate');
				self.snow(num--, speed);
			}, speed);
		}
    };
    snowDrop=(num,position)=>{
        if (num > 0) {
            var drop = `<div class="drop snow" id=${'drop_'+num}>
                           <img class='redPackage' src='${redPackage}'>
                        </div>`;
			$('body').append(drop);
			$('#drop_' + num).css('left', position);
			num--;
			this.snowDrop(num, this.randomInt(60, this.state.screenwidth-60));
		}
    };
    randomInt=(min,max)=>{
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    render() {
        return (
            <div className="App">
                <p className='app_name'>{this.state.name}</p>
                 
            </div>
        );
    }
}
export default App;
