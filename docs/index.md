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
 action_item do
    link_to :create_user, new_user_path
 end

```ruby
# Ruby code with syntax highlighting
GitHubPages::Dependencies.gems.each do |gem, version|
  s.add_dependency(gem, "= #{version}")
end
```

#### Header 4

*   This is an unordered list following a header.
*   This is an unordered list following a header.
*   This is an unordered list following a header.

##### Header 5

1.  This is an ordered list following a header.
2.  This is an ordered list following a header.
3.  This is an ordered list following a header.

###### Header 6

| head1        | head two          | three |
|:-------------|:------------------|:------|
| ok           | good swedish fish | nice  |
| out of stock | good and plenty   | nice  |
| ok           | good `oreos`      | hmm   |
| ok           | good `zoute` drop | yumm  |

### There's a horizontal rule below this.

* * *

### Here is an unordered list:

*   Item foo
*   Item bar
*   Item baz
*   Item zip

### And an ordered list:

1.  Item one
1.  Item two
1.  Item three
1.  Item four

### And a nested list:

- level 1 item
  - level 2 item
  - level 2 item
    - level 3 item
    - level 3 item
- level 1 item
  - level 2 item
  - level 2 item
  - level 2 item
- level 1 item
  - level 2 item
  - level 2 item
- level 1 item

### Small image

![Octocat](https://github.githubassets.com/images/icons/emoji/octocat.png)

### Large image

![Branching](https://guides.github.com/activities/hello-world/branching.png)


### Definition lists can be used with HTML syntax.

<dl>
<dt>Name</dt>
<dd>Godzilla</dd>
<dt>Born</dt>
<dd>1952</dd>
<dt>Birthplace</dt>
<dd>Japan</dd>
<dt>Color</dt>
<dd>Green</dd>
</dl>

```
Long, single-line code blocks should not wrap. They should horizontally scroll if they are too long. This line should be long enough to demonstrate this.
```

```
The final element.
```
