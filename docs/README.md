Size: 5 KB (unminified)

A minimal popup, modal jquery plugin. Demo - https://shabi1497.github.io/gsPop/
# How it works

*   Modal is built with HTML, CSS, and JavaScript.
*   Animation and position for the modal is set using CSS.
*   Use trigger('gspop.open') and trigger('gspop.close') to open and close the modal respectively. There are other events (gspop.shown/gspop.hidden) that can be cached by the user.
*   Modal backdrop configuration is added. It can be removed or changed through configuration.

## Configuration details

The following are the default configurations. These CSS classes will be added to the modal when triggered open and removed on close event. The animation and position(top/center/bottom/right/left) of the modal is controlled by css classes.

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
  1.gs-Modal
  2.hide- To hide the modal(by default) to avoid the jerk on page load.
  (add both the above classes to your modal's most outer element)
  3.gs-cancel- For the cancel button of the modal.
```
```js
  ## Events
  User events
  gspop.shown  - User event that can be cached
  gspop.hidden - User event that can be cached
  gspop.close - to close the modal
  gspop.open  - to open the modal
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
```js
var modal = $('#gs-Modal-default').gsPop();
$('#default-config-btn').on('click', function() {
    modal.trigger('gspop.open');
});
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
