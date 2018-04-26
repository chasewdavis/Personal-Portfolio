import React, { Component } from 'react';
import './about.css'
// const backgroundWidth = 3147;
// const backgroundHeight = 1776;
// const imgRatio = ( backgroundHeight / backgroundWidth );
// let zoomX = 0;
// let zoomY = 0;

// var yScrollPosition;
// viewPortHeight is a substitution for using 100vh which is causes problems in mobile browsers
var viewPortHeight;

class About extends Component {

  constructor(props){
    super(props);
    this.state = {

    }
    this.scrollLoop = this.scrollLoop.bind(this);
  }

  componentDidMount(){

    window.mobilecheck = function() {
      var check = false;
      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
      return check;
    };
    // this function fixes the jumpy mobile browser which doesn't mix well with 100vh.
    if( window.mobilecheck() ){
      console.log('on mobile');
      viewPortHeight = document.getElementsByClassName('about_text_grid')[0].offsetHeight
      document.getElementsByClassName('about_grid')[0].setAttribute('style', `height:${viewPortHeight}px`);
      // document.getElementsByClassName('about_text_grid')[0].setAttribute('style', `height:${viewPortHeight}px`);
    }

    window.addEventListener('DOMContentLoaded', this.scrollLoop, false)
  }

  scrollLoop(){
    this.scrollHeight();
    // The window.requestAnimationFrame() method tells the browser that you wish to perform an animation and requests that the browser call a specified function to update an animation before the next repaint. 
    requestAnimationFrame(this.scrollLoop)
  }

  scrollHeight(){
    var currentHeight = window.scrollY;
    var oneHundred;

    window.innerWidth >= 768 
    ?
      oneHundred = document.getElementsByClassName('about_grid')[0].offsetHeight
    :
      oneHundred = document.getElementsByClassName('about_text_grid')[0].offsetHeight - 48
    ;

    var header = document.getElementById('my_header');
    var arrow = document.getElementById('arrow_down_icon');
    // var containerHeight = document.getElementsByClassName('about_grid')[0].offsetHeight;
    // var containerWidth = document.getElementsByClassName('about_grid')[0].offsetWidth;
    // var containerRatio = (containerHeight / containerWidth);
    // var coverHeight;
    // var coverWidth;

    var background = document.getElementsByClassName('about_view_window')[0];
    var about_text = document.getElementsByClassName('about_text_grid')[0];
    var frame_top = document.getElementsByClassName('smart_border_top')[0];
    var frame_bottom = document.getElementsByClassName('smart_border_bottom')[0];
    var cover_grid = document.getElementsByClassName('cover_grid')[0];

    // about_text.setAttribute('style', `top:${currentHeight}px`);
   
    // if (containerRatio > imgRatio) {
    //   coverHeight = containerHeight
    //   coverWidth = (containerHeight / imgRatio)
    // } else {
    //   coverWidth = containerWidth 
    //   coverHeight = (containerWidth * imgRatio)
    // }

    // console.log(currentHeight, oneHundred)

    if(currentHeight < oneHundred){
      var calcOpacity = 1 - ( currentHeight / oneHundred * 2.5 );
      header.setAttribute('style', `opacity:${calcOpacity}`)
      arrow.setAttribute('style', `opacity:${calcOpacity}`)

      // about_text.setAttribute('style', `opacity:${-calcOpacity}; top:${currentHeight}px`)
      if(window.mobilecheck()){
        about_text.setAttribute('style', `height:${viewPortHeight}px; opacity:${-calcOpacity}`);
        background.setAttribute('style', `height:${( (viewPortHeight * 2) - 48 )}px`);
        if(calcOpacity<0){
          cover_grid.setAttribute('style', `height:${( (viewPortHeight * 2) - 48 )}px; opacity:${.35 + -calcOpacity / 4.5}`)
        }
      } else {
      about_text.setAttribute('style', `opacity:${-calcOpacity}`)
        if(calcOpacity<0){
          cover_grid.setAttribute('style', `opacity:${.35 + -calcOpacity / 4.5}`)
        }
      }
      // about_view_window.setAttribute('style', `height:${(viewPortHeight * 2)}`)

      frame_top.setAttribute('style', 'margin-top:0px')
      frame_bottom.setAttribute('style', 'margin-bottom:0px')

      

    }else{
      frame_top.setAttribute('style', 'margin-top:-12px')
      frame_bottom.setAttribute('style', 'margin-bottom:-12px')

      if(window.innerWidth >= 768){
        about_text.setAttribute('style', 'position:absolute; top: calc( 100vh - 24px ); opacity:1' )
      }else{
        if(window.mobilecheck){
        about_text.setAttribute('style', `height:${viewPortHeight}px; position:absolute; top: calc( ${viewPortHeight - 48}px ); opacity:1` );
        background.setAttribute('style', `height:${( (viewPortHeight * 2) - 48 )}px`);
        cover_grid.setAttribute('style', `height:${( (viewPortHeight * 2) - 48 )}px; opacity:0.68`)
        }else{
        about_text.setAttribute('style', `position:absolute; top: calc( 100vh - 48px ); opacity:1` )
        cover_grid.setAttribute('style', `opacity:0.68`);
        }
      }
    }

    


  }

  render() {

    return (

      <div className='about_view_window'>
        <div className='cover_grid'></div>
        <div className='about_grid'>
            
            <header id='my_header'>
            <h1 className='my_name'><span>C</span>hase <span>D</span>avis</h1>
            <h2>Creating modern web solutions.</h2>
            </header>

            <footer>
              <i id='arrow_down_icon' className="fa fa-angle-down fa-4x" aria-hidden="true"></i>
            </footer>

        </div>
        <div id='zero'></div>
        <div className='about_text_grid'>
          <div className='about_me'>
            <h4>Hello,</h4> 
            <h4>I'm a web developer from Portland.</h4>
            <h4>I specialize in building full stack web applications.</h4>

          </div>
        </div>
        <div className='about_frame'>
          <div className='smart_border smart_border_top'></div>
          <div className='smart_border smart_border_bottom'></div>
        </div>
      </div>
     
    );
  }
}

export default About;