# menu
create the menu fast by jquery-plugin

<h4> build menu </h4>
The menu has defined three menu type
* topBar
* subBar
* eventBar

First, you need to select a block to be the bar area, and defind the object topBar, this is a sample example.

`var bar = topBar : {
    Home : {
    a : 'a.html'
  },
  Document : {
    a : 'd.html'
  },
  About : {
    a : 'A.html'
  }
}`

And use menu method to inject.

`$('#menu').menu(bar)`

### Keeping update
