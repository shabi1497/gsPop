
A minimal popup, modal jquery plugin. Demo - https://shabi1497.github.io/gsPop/
# How it works

*   Modals are built with HTML, CSS, and JavaScript.
*   Animation and position for the modal are done through CSS. So that user can modify based on their need
*   To open the modal, there is a trigger event and when open and close modal, there will be some events (gsmodal.shown/gsmodal.hidden) that can be cached by the user.
*   Modal backdrop configuration added. This can be removed or added through configuration

## Configuration details

The following are the default configurations. These CSS classes will be added to the modal when open and will be removed on close.
This will helop to do animation and to position the modal(top/center/bottom/right/left). Everything controlled by css classes.

``` js
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

``` html
  The following classes are needed for modal pop to work properly
  gs-Modal - is needed
  hide - we should hide by default. If not then there will be a jerk
  gs-cancel - To cancel the modal pop up we need to add this class
```
```js
  ## Events
  User events
  gspop.shown  - User events that can be cached
  gspop.hidden - User events that can be cached
  
  gspop.close - to close the modal from outside
  gspop.open  - to open the modal from outside
```
* wrapperClasses - This will be used to attach classes to the modal wrapper
* backdrop    - This will be used to attach classes to the inner modal
  + show      - to hide and show the backdrop
  + clickable - To enable and disable backdrop click
* animate     - animation configuration
  + apply     - to hide and show the backdrop
  + hide      - Animation classes on hide
  + show      - Animation classes on show
* bodyClass   - Class that will be added to body when modal opened

### Default Configuration

``` html
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
        <button class="gs-confirm">Confirm</button>
        <button class="gs-cancel">Cancel</button>
    </div>
</div>
```
### Animation and Position

``` html
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
        <button class="gs-confirm">Confirm</button>
        <button class="gs-cancel">Cancel</button>
    </div>
</div>
```

Animation can be defined for each modal and can be applied.

``` js
  $('#anime-config-btn').on('click', function() {
      var animeIn = $('#anime-in').val();
      var animeOut = $('#anime-out').val();
      var position = $('#position').val();

      $('#gs-Modal-default').gsPop({
          wrapperClasses: position,
          animate: {
              apply: true,
              hide: 'animated ' + animeOut,
              show: 'animated ' + animeIn
          }
      }).trigger('gspop.open');

  });
```
