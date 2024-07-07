## PHP
 Print a variable to screen in a readable format  
```php
print_r( '<pre>'); print_r( $testimonials ); print_r( '</pre>');
```

Build a list of a post's terms for a given taxonomy
This example works specifically for a resource's "Resource Type" taxonomy  
`$output` will end up as a `<div>` filled with individual terms that have been applied to the post
```php
$output = '';
$term_array = get_the_terms($post->ID, 'resource-category');

if (!empty($term_array) && !is_wp_error($term_array)) {
	$term_names_array = wp_list_pluck($term_array, 'name');

	$output .= '<div class="terms">';
	foreach ($term_names_array as $name) {
		$output .= '<span class="term">' . $name . '</span>';
	}
	$output .= '</div>';
}
```

## CSS

```css
padding-left: calc((100% - 1180px) / 2);
padding-right: calc((100% - 1180px) / 2);

```
## React
```jsx live
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
```jsx live
function Clock(props) {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}
```

## SCSS
```scss
.blue-border-image {
	position: relative;
	&:after {
		content: " ";
		border: 12px solid transparent;
		transition: all 0.3s ease-in-out;
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		display: block;
		pointer-events: none;
	}
	&:hover,
	&.hover {
		&:after {
			border: 12px solid $lightblue;
		}
	}
}
```
## Grunt Install

```
npm install -g grunt-cli

sudo npm install
sudo npm init

sudo npm i --save-dev grunt grunt-contrib-sass grunt-contrib-coffee grunt-contrib-watch grunt-contrib-uglify grunt-contrib-cssmin
```
## Javascript
Smooth scrolling to in-page anchor tags
```javascript
$(document).on('click', 'a[href^="#"]', function(event){
	event.preventDefault();
	$('html, body').animate({
		scrollTop: $( $.attr(this, 'href') ).offset().top
	}, 750);
});
```

## Git
Reindexing .gitignore
Used when files/formats that are listed in the .gitignore are still having their changes tracked, and you are out of ideas :)
```bash
git rm -r --cached .
```
```bash
git add .
```
```bash
git commit -m "Resetting .gitignore"
```