A minimal popup, modal jquery plugin.

# How it works

*   Modals are built with HTML, CSS, and JavaScript.  
*   Animation and position for the modal are done through CSS. So that user can modify based on their need
*   To open the modal, there is a trigger event and when open and close modal, there will be some events (gsmodal.shown/gsmodal.hidden) that can be cached by the user.
*   Modal backdrop configuration added. This can be removed or added through configuration


## Configuration details
The following are the default configurations. These CSS classes will be added to the modal when open and will be removed on close. 
This will helop to do animation and to position the modal(top/center/bottom/right/left). Everything controlled by css classes.

```js
{   
    wrapperClasses: "",
    modalClasses: "gspop-modal-position",
    backdrop: {
      show: true,
      clickable: true
    },
    animate: {
      apply: true,
      hide: 'animated gp-flipOutX',
      show: 'animated gp-flipIn'
    },
    bodyClass: "gspop-opened"
}
```
- wrapperClasses - This will be used to attach classes to the modal wrapper
- backdrop    - This will be used to attach classes to the inner modal
  - show      - to hide and show the backdrop
  - clickable - To enable and disable backdrop click
- animate     - animation configuration
  - apply     - to hide and show the backdrop
  - hide      - Animation classes on hide
  - show      - Animation classes on show
- bodyClass   - Class that will be added to body when modal opened


### Default Configuration

```html
<div class="gs-Modal hide" id="gs-Modal-default">
      <div class="gs-header">
        <h2>
          Confirmation Dialog
        </h2>
      </div>
      <div class="gs-body">
        <p>
          Do you Confirm this Action?
        </p>
      </div>
      <div class="gs-footer">
        <button class="gs-confirm" >Confirm</button>
        <button class="gs-cancel" >Cancel</button>
      </div>
 </div>
```
```js
var modal = $('#gs-Modal-default').gsPop();
        $('#default-config-btn').on('click',function(){
          modal.trigger('gspop.open');
        });
```
<div class="gs-Modal hide" id="gs-Modal-default">
      <div class="gs-header">
        <h2>
          Confirmation Dialog
        </h2>
      </div>
      <div class="gs-body">
        <p>
          Do you Confirm this Action?
        </p>
      </div>
      <div class="gs-footer">
        <button class="gs-confirm" >Confirm</button>
        <button class="gs-cancel" >Cancel</button>
      </div>
 </div>

<button class="ui secondary button" id="default-config-btn">
  Click Me!
</button>

### Animation and Position

```html
<div class="gs-Modal hide" id="gs-Modal-anime">
      <div class="gs-header">
        <h2>
          Confirmation Dialog
        </h2>
      </div>
      <div class="gs-body">
        <p>
          Do you Confirm this Action?
        </p>
      </div>
      <div class="gs-footer">
        <button class="gs-confirm" >Confirm</button>
        <button class="gs-cancel" >Cancel</button>
      </div>
 </div>
```
Animation can be defined for each modal and can be applied.
```js
  $('#anime-config-btn').on('click',function(){
          var animeIn = $('#anime-in').val();
          var animeOut = $('#anime-out').val();
          var position = $('#position').val();
          
          $('#gs-Modal-default').gsPop({
            wrapperClasses: position,
            animate: {
              apply: true,
              hide: 'animated '+animeOut,
              show: 'animated '+animeIn
            }
          }).trigger('gspop.open');
         
        });
```
  <div class="container">

<div class="row"><div  class="col-3">Animate In</div>  <div  class="col-3">Animate Out</div>  <div  class="col-3">Position</div>  </div>
      <div class="row">
        <div class="col-3">
          <select class="ui dropdown" id="anime-in">
            <optgroup label="Attention Seekers">
              <option value="bounce">bounce</option>
              <option value="flash">flash</option>
              <option value="pulse">pulse</option>
              <option value="rubberBand">rubberBand</option>
              <option value="shake">shake</option>
              <option value="swing">swing</option>
              <option value="tada">tada</option>
              <option value="wobble">wobble</option>
              <option value="jello">jello</option>
              <option value="heartBeat">heartBeat</option>
            </optgroup>
            <optgroup label="Bouncing Entrances">
              <option value="bounceIn">bounceIn</option>
              <option value="bounceInDown">bounceInDown</option>
              <option value="bounceInLeft">bounceInLeft</option>
              <option value="bounceInRight">bounceInRight</option>
              <option value="bounceInUp">bounceInUp</option>
            </optgroup>
            <optgroup label="Fading Entrances">
              <option value="fadeIn">fadeIn</option>
              <option value="fadeInDown">fadeInDown</option>
              <option value="fadeInDownBig">fadeInDownBig</option>
              <option value="fadeInLeft">fadeInLeft</option>
              <option value="fadeInLeftBig">fadeInLeftBig</option>
              <option value="fadeInRight">fadeInRight</option>
              <option value="fadeInRightBig">fadeInRightBig</option>
              <option value="fadeInUp">fadeInUp</option>
              <option value="fadeInUpBig">fadeInUpBig</option>
            </optgroup>
            <optgroup label="Flippers">
              <option value="flip">flip</option>
              <option value="flipInX">flipInX</option>
              <option value="flipInY">flipInY</option>
            </optgroup>
            <optgroup label="Lightspeed">
              <option value="lightSpeedIn">lightSpeedIn</option>
            </optgroup>
            <optgroup label="Rotating Entrances">
              <option value="rotateIn">rotateIn</option>
              <option value="rotateInDownLeft">rotateInDownLeft</option>
              <option value="rotateInDownRight">rotateInDownRight</option>
              <option value="rotateInUpLeft">rotateInUpLeft</option>
              <option value="rotateInUpRight">rotateInUpRight</option>
            </optgroup>
            <optgroup label="Sliding Entrances">
              <option value="slideInUp">slideInUp</option>
              <option value="slideInDown">slideInDown</option>
              <option value="slideInLeft">slideInLeft</option>
              <option value="slideInRight">slideInRight</option>
            </optgroup>         
            <optgroup label="Zoom Entrances">
              <option value="zoomIn">zoomIn</option>
              <option value="zoomInDown">zoomInDown</option>
              <option value="zoomInLeft">zoomInLeft</option>
              <option value="zoomInRight">zoomInRight</option>
              <option value="zoomInUp">zoomInUp</option>
            </optgroup>  
            <optgroup label="Specials">
              <option value="jackInTheBox">jackInTheBox</option>
              <option value="rollOut">rollOut</option>
            </optgroup>
      </select>
        </div>
        <div class="col-3">
          <select class="ui dropdown"  id="anime-out">
                <optgroup label="Bouncing Exits">
                  <option value="bounceOut">bounceOut</option>
                  <option value="bounceOutDown">bounceOutDown</option>
                  <option value="bounceOutLeft">bounceOutLeft</option>
                  <option value="bounceOutRight">bounceOutRight</option>
                  <option value="bounceOutUp">bounceOutUp</option>
                </optgroup>
                <optgroup label="Fading Exits">
                  <option value="fadeOut">fadeOut</option>
                  <option value="fadeOutDown">fadeOutDown</option>
                  <option value="fadeOutDownBig">fadeOutDownBig</option>
                  <option value="fadeOutLeft">fadeOutLeft</option>
                  <option value="fadeOutLeftBig">fadeOutLeftBig</option>
                  <option value="fadeOutRight">fadeOutRight</option>
                  <option value="fadeOutRightBig">fadeOutRightBig</option>
                  <option value="fadeOutUp">fadeOutUp</option>
                  <option value="fadeOutUpBig">fadeOutUpBig</option>
                </optgroup>
                <optgroup label="Lightspeed">
                  <option value="lightSpeedOut">lightSpeedOut</option>
                </optgroup>
                <optgroup label="Rotating Entrances">
                  <option value="rotateInUpLeft">rotateInUpLeft</option>
                  <option value="rotateInUpRight">rotateInUpRight</option>
                </optgroup>
                <optgroup label="Rotating Exits">
                  <option value="rotateOut">rotateOut</option>
                  <option value="rotateOutDownLeft">rotateOutDownLeft</option>
                  <option value="rotateOutDownRight">rotateOutDownRight</option>
                  <option value="rotateOutUpLeft">rotateOutUpLeft</option>
                  <option value="rotateOutUpRight">rotateOutUpRight</option>
                </optgroup>
                <optgroup label="Sliding Exits">
                  <option value="slideOutUp">slideOutUp</option>
                  <option value="slideOutDown">slideOutDown</option>
                  <option value="slideOutLeft">slideOutLeft</option>
                  <option value="slideOutRight">slideOutRight</option>
                </optgroup>
                <optgroup label="Zoom Exits">
                  <option value="zoomOut">zoomOut</option>
                  <option value="zoomOutDown">zoomOutDown</option>
                  <option value="zoomOutLeft">zoomOutLeft</option>
                  <option value="zoomOutRight">zoomOutRight</option>
                  <option value="zoomOutUp">zoomOutUp</option>
                </optgroup>
                <optgroup label="Specials">
                  <option value="hinge">hinge</option>
                  <option value="rollOut">rollOut</option>
                </optgroup>
          </select>
        </div>
        <div class="col-3">
          <select class="ui dropdown" id="position">
            <option value="gspop-center-center">gspop-center-center</option>
            <option value="gspop-top-center">gspop-top-center</option>
            <option value="gspop-top-left">gspop-top-left</option>
            <option value="gspop-top-right">gspop-top-right</option>
            <option value="gspop-right-center">gspop-right-center</option>
            <option value="gspop-right-bottom">gspop-right-bottom</option>
            <option value="gspop-bottom-center">gspop-bottom-center</option>
            <option value="gspop-bottom-left">gspop-bottom-left</option>
          </select>
        </div>
        <div class="col-3">
          <button class="ui secondary button" id="anime-config-btn">
            Click Me!
          </button>
        </div>
      </div>
    </div>