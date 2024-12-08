# htmlCss.W2.CSS Web Layouts

## CSS Overview

**CSS (Cascading Style Sheets)** is a set of rules that enhance the appearance of web pages. In the early years of the internet, browsers adopted CSS because it presented an opportunity for better visual designs and more creativity. As browsers continue to develop and grow beyond traditional devices, CSS capabilities developed in parallel. This development includes the introduction of **responsive design** in CSS and has further grown from there with layout options such as **flex boxes, grids, and boxes**. 

You could argue that layout is one of the most important components of designing a good web page because layouts help divide a page into different sections, thus making the page more presentable. So, let's learn more about CSS web layouts.

CSS can be used to enhance a web page by modifying **fonts, colors, layout, size,** and other style formatting options that make the web page more presentable. The browser window that is visible to the user on the screen is called the **viewport**. 

In essence, the idea behind any **CSS web layout** is to create an optimally designed web page that has a good viewport at any given point. In other words, **CSS layouts** are all about how the content of your web pages is organized.

## CSS Display Property

When it comes to creating layouts using CSS, an important property is the **display** property.

- **What does it do?**  
  The display property specifies the type of box that you want to use for a given HTML element.  
  You might remember from an earlier course that the display property determines if a rendered box is inline or block. Box models allocate rectangles or boxes to HTML elements.

- **CSS Example**:  
  CSS rules can be applied, for example, the relative CSS rule for an HTML element with an ID named `sample` would contain a display property with a block value.

  ```css
  #sample {
    display: block;
  }
  ```
  
  The code changes the property of the display box to a **block type**. Layouts created using the block type are good, but evolving requirements led to the development of CSS web layouts such as **flexbox** and **grid**, which helped create rules for multiple elements. They added more flexibility and dimensionality with better options for fine-tuning specific sections of a web page.

## Flexbox and Grid Layouts

### Flexbox Layout

The main difference between Flexbox and Grid is that **Flexbox** is one-dimensional, while **Grid**, as the word implies, is two-dimensional. You will examine these in more detail over the course of the module, but for now, let's just do a brief overview.

**Flexbox** is short for **Flexible Box Model**, and it was introduced before the grid layout.

- **Example of Flexbox**:
  
  The Flexbox property for an element with an ID named `sample` contains the display property with `flex` as its value.

  ```css
  #sample {
    display: flex;
  }
  ```

  **Flexbox** adds responsiveness to CSS with float elements and positioning. One-dimensional refers to the fact that a given flexbox container will arrange items in either a column or a row along its axis. The flexbox container applied over an element can flex to shrink or expand, resulting in a flexible, responsive design.

### Grid Layout

**CSS Grid** is similar to the **Flexbox** except it creates a two-dimensional grid along both the row and column axes.

- **Example of Grid Layout**:

  The grid rules for the element with ID `sample` can be added after setting the display property to `grid`.

  ```css
  #sample {
    display: grid;
  }
  ```

  While the grid increases dimensionality and helps to create an advanced layout with relative ease, it can also lead to increased complications later if the element rules are not systematically defined.

## Choosing Between Flexbox and Grid

There is no strict rule on choosing which layout to use, but in general:

- **Flexboxes** are more suitable when you want to create flexible elements in smaller spaces.
- **Grids** are more suitable for large-scale layouts.

A separate explanation of each type of layout has been given in this text, but in practice, you'll likely encounter the use of more than one layout in rendering a single page. The rules for these layouts in CSS are standardized, but that doesn't mean you are limited when it comes to creativity, aesthetics, or optimization when designing a web page. You will learn more about how to use these layouts during the course.

# htmlCss.W2.CSS Units of Measurement

## Absolute and Relative Units

A web page, as you know it, is two-dimensional. In other words, it has width and height. There are a number of other ways you can express this, such as vertical and horizontal, length and breadth, x and y-axis, and so on. Another property of a web page is its size, which can either be static or dynamic. When you’ve encountered enough CSS code, you will note a number of different ways in which the values for the same property can be declared using different units of measurement. Most of these units of measurement are used to account for the dynamism and dimensionality of a web page.

Let’s examine the most widely used units of measurement. They can broadly be categorized as **Absolute** and **Relative** units.

## Absolute Units

Absolute units are constant across different devices and have a fixed size. They are useful for activities like printing a page. They are not so suitable when it comes to the wide variety of devices in use today that have different viewport sizes. Because of this, absolute units are used when the size of the web page is known and will remain constant.

The table for absolute units can be seen below:

| Unit | Name                | Comparison                  |
|------|---------------------|-----------------------------|
| Q    | Quarter-millimeters | 1Q = 1/40th of 1cm          |
| mm   | Millimeters         | 1mm = 1/10th of 1cm         |
| cm   | Centimeters         | 1cm = 37.8px = 25.2/64in    |
| in   | Inches              | 1in = 2.54cm = 96px         |
| pc   | Picas               | 1pc = 1/6th of 1in          |
| pt   | Points              | 1pt = 1/72nd of 1in         |
| px   | Pixels              | 1px = 1/96th of 1in         |

**Of these, the pixels and centimeters are most frequently used for defining properties.**

## Relative Units

When you create a web page, you will almost never have only a single element present inside it. Even in the case of containers such as **flexboxes** and **grids**, there’s usually more than one element present that rules are applied to. **Relative values** are defined ‘in relation’ to the other elements present inside the parent element. Additionally, they are defined ‘in relation’ to the viewport or the size of the visible web page. Given the dynamic nature of web pages today and the variable size of devices in use, relative units are the go-to option in many cases. Below is a list of some of the important relative units:

| Unit | Description and Relativity                         |
|------|----------------------------------------------------|
| em   | Font size of the parent where present.             |
| ex   | x-coordinate or height of the font element.        |
| ch   | Width of the font character.                       |
| rem  | Font size of the root element.                     |
| lh   | Value computed for line height of the parent element. |
| rlh  | Value computed for line height of the root element which is `<html>`. |
| vw   | 1% of the viewport width.                          |
| vh   | 1% of the viewport height.                         |
| vmin | 1% of the smaller dimension of the viewport.       |
| vmax | 1% of the larger dimension of the viewport.        |
| %    | Denotes a percentage value in relation to its parent element. |

**Many of these units are used in terms of the relative size of fonts.** Some units are more suitable depending on the relative context. Like when the dimensions of the viewport are important, it's more appropriate to use **vw** and **vh**. In a broader context, the relative units you will see most frequently used are **percentage, em, vh, vw,** and **rem**.

Much like the absolute and relative units discussed above, certain properties have their own set of acceptable values that need to be taken into account. For example, color-based properties such as **background-color** will have values such as **hexadecimal, rgb(), rgba(), hsl(), hsla()** and so on. Each property should be explored on an individual basis, and practicing with the code will help you decide which of these units of measurement are the most suitable choice.

# htmlCss.W2.Understanding Flexbox

## Flexbox Overview

Much like the **div** and **box** containers that you can create using HTML, **flexbox** is a type of container. **Flexbox** can overcome the limitations caused by containers such as **block** and **inline** because it does a better job of scaling over larger web pages and also provides more dynamic control of the containers. This is because it can **grow, shrink, and align the items inside it**, which gives better control to the programmer over the contents and styling of the items inside the container.

Before learning about the common layouts built using the flexbox, it is important to understand the properties inside it and how flexbox works. Let’s examine some of the important characteristics of flexboxes and the properties that can be used to configure them.

**Flexbox** is single-dimensional, which means you can align it either along a row or a column, and it is set to row alignment by default. There are two axes, the main and cross-axis, much like the x and y-axis used in coordinate geometry. When aligned along the row, the horizontal axis is called the **main axis** and the vertical axis is called the **cross axis**. For the items present inside the flexbox container, the placement starts from the top-left corner, moving along the main or horizontal axis. When the row is filled, the items continue to the next row. 

Note that with the help of a property called **flex-direction**, you can instead flip the main axis to run vertically, and the cross axis will then be horizontal. In such a case, the items will start from the top left and move down along the vertical main axis. The properties you choose will help better control alignment, spacing, direction, and eventually styling of the container and items present inside it.

![alt text](image-2.png)

## Flexbox Properties

Let's now examine some of the important properties that will allow you to configure a flexbox.

### Example of Flexbox Properties

Original HTML code:

```html
<body>
  <div class="flex-container">
    <div class="box box1">  One..</div>
    <div class="box box2">  Two..</div>
    <div class="box box3">  Three..</div>
    <div class="box box4">  Four..</div>
    <div class="box box5">  Five..</div>
    <div class="box box6">  Six..</div>
    <div class="box box7">  Seven..</div>
  </div>
```

Original CSS file:

```css
.box {
    background-color: aquamarine;
    border-radius: 5px;
    margin: 2px;
    padding: 10px;
}
```

![alt text](image-3.png)

### Adding Flexbox Display Property

To add properties to the flex container, convert it into flex:

```css
.flex-container {
    display: flex;
}
```

The output is now seven flex containers that run from left to right starting in the top left corner.

![alt text](image-4.png)

## Alignment Properties

Let’s examine a few alignment properties inside the flex. There are four main properties used to align a flex container and items present inside it:

- **justify-content**: For item alignment on the main axis.
- **align-items**: For item alignment on the cross axis.
- **align-self**: For unique flex items on the cross axis.
- **align-content**: Used for packing flex lines and controlling space.

Of these, **justify-content** and **align-items** are frequently used for the respective two axes.

### Justify-Content

The `justify-content` property aligns items along the main axis.

CSS Example:

```css
.flex-container {
    display: flex;
    justify-content: center;
}
```

![alt text](image-5.png)

### Flex-Wrap

The default for this property is `nowrap`, which means the items will span the entire width of the axis.

CSS Example:

```css
.flex-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
```

![alt text](image-6.png)

The items will now be wrapped to the size of the available viewport.

### Flex-Direction

This property is used to set the main axis, which is a ‘row’ by default. It basically means you are changing your ‘main’ axis from horizontal rows to vertical columns.

CSS Code:

```css
.flex-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
}
```

![alt text](image-7.png)

### Align-Items

The alignment on the cross-axis is done with the help of this property. Let’s change the value for it to `flex-end`.

CSS Code:

```css
.flex-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-end;
}
```

![alt text](image-8.png)

### Align-Self

This property can be used on individual items inside the flex.

CSS Code:

```css
.flex-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-end;
}
.box3 {
    background-color: blanchedalmond;
    align-self: center;
}
```

![alt text](image-9.png)

Here, the color and alignment of the third box have been changed, and it overrides the properties set using **align-items**.

### Gap

The `gap` property can be used to create space between the items along the main axis. You can also individually configure the gaps in rows and columns using `row-gap` and `column-gap` properties.

CSS Code:

```css
.flex-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-end;
    gap: 10px;
}
.box3 {
    background-color: blanchedalmond;
}
```

![alt text](image-10.png)

## Flexbox Growth and Shrinkage

The final set of properties are **flex-grow**, **flex-shrink**, and **flex-basis**. Together these determine how the flex takes up space, grows, or shrinks according to the space available.

These are the sub-properties of a property called `flex`. Together, all three properties can also be given values with the help of shorthand notation in CSS. Shorthand notation helps you make your code compact and easy to write and follow. The values left empty in shorthand notation are given their default values.

### Flex Shorthand Example

CSS Example:

```css
.flex-container {
    flex: 0 1 auto;
}
```

Here for the flex-container class, there is a set rule for the flex property. The values correspond to the three properties, namely the **flex-grow** set to 0, **flex-shrink** to 1, and **flex-basis** to auto. The **flex-basis** sets the initial size of the container, and together they define the rigidity, flexibility, and dynamism you want to add to the flexbox.

To demonstrate the effect of this, the code has to be modified slightly by removing the `flex-direction` value set to ‘column’. This will change it to default ‘row’ and the output will again be centrally aligned and horizontal, best distributed between two rows.

![alt text](image-11.png)

CSS Code:

```css
.box3 {
    background-color: blanchedalmond;
    align-self: center;
    flex: 1 1 auto;
}
```

![alt text](image-12.png)

The third box now takes up the entire free space available because **flex-grow**’s value has been set to 1. So if we have **flex-grow** set to 1, the children will all be set to equal size. And if one of the children has a value of 1.5, that child would take up more space as compared to the others.

It’s important to understand how the changes in the main and cross axis affect the way you imagine and manipulate the flexbox. Once you’ve had more practice, you’ll be more comfortable with the use of these properties, and it will become easier to use flexboxes and understand the flow and alignment of items inside the flexbox.

# htmlCss.W2.CSS Basic Flexbox

## Introduction to Flexbox

At this stage, you should be familiar with different layouts and grid structures, and you should be ready to start using **flexbox**. Let's explore a few practical examples of how you can use it. In the next few minutes, you will explore what the three most common uses of flexbox are. As mentioned earlier, **flexboxes** are more suitable to use for simple layouts or designing simple elements on a page. In line with that idea, let's explore a few commonly used design elements that you see on a page. You will discover simple ways in which you can utilize flexboxes for binding elements together or creating an easy layout.

## Common Uses of Flexbox

Let's explore the three most common uses of **flexbox** in CSS:

1. **Search Bar:**  
   You can use flex in search bars because it ties up all the elements, such as the small Search icon, the search input area, and the Submit button.

2. **Navigation Bar:**  
   You can create the navigation bar using flex, which consists of several different layouts, and it makes your navigation bar highly responsive on different devices.

3. **Image Gallery:**  
   Flex is helpful here because it can realign itself as you change the size of the window.

### Example 1: Search Bar with Flexbox

In the first example of a flexbox file, I will create a search bar. I add a reference to the CSS file in the head section of the HTML page. After that, I add content inside the body section of our HTML code.

**HTML Code:**

```html
<div class="container">
  <i class="search-icon"></i>
  <input type="text" class="search-box" placeholder="Search...">
  <button type="submit" class="search-button">Submit</button>
</div>
```

In the CSS code, I first write rules for the container, then for the search icon, the search box, and finally for the button. Most of the properties defined here are settings for the alignment of the selectors.

**CSS Code:**

```css
.container {
  display: inline-flex;
  overflow: hidden;
}

.search-icon {
  margin-right: 5px;
}

.search-box {
  flex: 1;
  padding: 5px;
}

.search-button {
  background-color: #4CAF50;
  color: white;
  padding: 5px 10px;
  border: none;
}
```

The display property used is **inline-flex** instead of **flex**, which makes the flex container behave like an inline element. Another property to take note of is the **overflow**. The overflow property clips the overflowing content, which in this case will be the text entered in the search query.

### Example 2: Navigation Menu with Flexbox

Another place where **flexbox** is used quite frequently is in navigation menus. In this case, I created an unordered list that consists of four items.

**HTML Code:**

```html
<ul class="nav-container">
  <li><a href="#">Home</a></li>
  <li><a href="#">About</a></li>
  <li><a href="#">Services</a></li>
  <li><a href="#">Contact</a></li>
</ul>
```

**CSS Code:**

```css
* {
  margin: 0;
  padding: 0;
}

.nav-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}

.nav-container li {
  list-style: none;
}

.nav-container a {
  text-decoration: none;
  padding: 10px;
  display: block;
}
```

It's important to notice that the **flex-flow** is used, which is a shorthand property specifying the direction of the flex container and its behavior for wrapping. Another important property is **justify-content**, which aligns the flexible container's items along the main axis.

### Example 3: Responsive Image Gallery with Flexbox

One final **flexbox** example is a responsive image gallery. All the elements for the gallery are in the body of the HTML file. There is a **div** element with a class container that consists of six images that are saved inside the project folder.

**HTML Code:**

```html
<div class="gallery-container">
  <img src="image1.jpg" alt="Image 1">
  <img src="image2.jpg" alt="Image 2">
  <img src="image3.jpg" alt="Image 3">
  <img src="image4.jpg" alt="Image 4">
  <img src="image5.jpg" alt="Image 5">
  <img src="image6.jpg" alt="Image 6">
</div>
```

**CSS Code:**

```css
* {
  margin: 0;
  padding: 0;
}

.gallery-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px;
}

.gallery-container img {
  width: calc(33.33% - 10px);
  margin-bottom: 10px;
}
```

First, I remove all browser-specific settings that may be there by using the star selector just like I did earlier. I set the value of both the **margin** and the **padding** to zero. I then reset the basic alignment options for the images by setting the border to zero. Next, let's focus on the container. 

I set the value of **display** to **flex**, then I add the **flex-wrap** property which determines whether the flex items should be forced in one line or should wrap over multiple lines. Next, I justify the content property, which aligns the flexible container items on the horizontal main axis, setting it to `space-between`. Finally, I add some padding.

When I change the size of the browser window, it is clear that the alignment of these images is responsive.

These are just some of the ways in which you use **flexboxes** to provide responsiveness to websites and bind different elements together on web pages. You should now be more familiar with some simple ways in which you can use flexboxes to bind elements together to create an easy responsive layout on your webpage. Good job.

# htmlCss.W2.CSS Grids

## Introduction to CSS Grid Layouts

**CSS Grid layouts** are important when it comes to designing a good webpage. This is because layouts provide visual cues for a user by organizing relevant content to make it easier to comprehend. Let's learn more about layouts.

When someone says the word grid, you probably think of lines that cross each other to form squares or rectangles. **CSS Grids** are two-dimensional design layouts that are responsive and compatible with browser variations. They are an alternative to other options such as **Flexboxes** and tables, especially when you are working with larger scale layouts. 

### Basic Concepts

- **Columns** are the vertical tracks, and **rows** are the horizontal tracks in your viewport.
- **Grids** divide the page into rows and columns, and the space between these tracks are called **gutters** or **gaps**.
- A **cell** is the space in a grid container where a row and column intersect.

There are several different configurations you can add to define and modify grids.

### Creating a Grid Layout

Let's examine an example that uses an HTML document to demonstrate how to iteratively make changes to a grid.

First, let's create an HTML document called `index.html`. Initially, the contents displayed in the viewport are just a vertical series of letters from A to E without any styling.

**HTML Code:**

```html
<div class="container">
  <div class="box">A</div>
  <div class="box">B</div>
  <div class="box">C</div>
  <div class="box">D</div>
  <div class="box">E</div>
</div>
```

### Adding Basic Grid Styling

Let's start adding content to the CSS file. The first thing to do is set the values for the properties of the different box classes inside the container object to make the layout look more presentable.

**CSS Code:**

```css
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px;
  gap: 10px;
  background-color: rgb(255, 0, 0); /* Red background */
}

.box {
  background-color: white;
  border: 1px solid black;
  text-align: center;
  padding: 20px;
}
```

### Explanation of the Grid Properties

- **Display Property**: The `display` property is used to set the display types for various designs such as `flex`, `block`, `inline`, and so on. Here, it is set to `grid`.
  
- **Grid Template Columns and Rows**: The `grid-template-columns` property has been added into the CSS code to set the size of each of the three columns using pixel values. The **fraction** unit (fr) can be used to divide the grid proportionally. For example, if you want to use the fraction units, you can set:

  ```css
  grid-template-columns: 2fr 1fr 1fr;
  ```

  This will divide the grid space proportionately to the ratio of all the fraction values present.

- **Grid Gaps**: The `gap` property defines the space between the grid cells.

### Additional Grid Properties

You can also opt to use the **auto properties** such as `grid-auto-rows` and `grid-auto-columns`, collectively called the **implicit grid**.

**CSS Code for Auto Rows:**

```css
.container {
  display: grid;
  grid-auto-rows: 100px;
}
```

All rows are now auto-resized to 100 pixels.

### Functions for Grid Configuration

- **Repeat Function**: The `repeat` function reduces redundancy and provides ease of code modification.

  ```css
  grid-template-columns: repeat(3, 100px);
  ```

- **Min-Max Function**: The `minmax` function sets the minimum and maximum values expected for the sizes of rows and columns.

  ```css
  grid-auto-rows: minmax(150px, auto);
  ```

### Common Grid Frameworks

There are a number of commonly used grid frameworks and layouts. Two such grid design layouts are known as the **12-column** and **16-column** grids. They divide the page into 12 and 16 tracks respectively, along the vertical columns. The properties can be modified accordingly to target a specific track.

**CSS Grid layouts** are crucial for good webpage design, providing visual cues for the user by organizing content in a way that makes it easier to understand. By utilizing functions like **repeat** and **minmax**, you can save time and effort while creating flexible and efficient grid layouts.

# htmlCss.W2.Grids and Flexbox Cheat Sheet

## Grid

The syntax for creating a grid:

```css
selector {
    display: grid; /* or inline-grid */
}
```

### Grid Shorthand Properties

Grid shorthand consists of the following properties with default values:

- **grid**: A grid will allow you to organize the various elements on your page.
- **grid-template-rows: none**: Configures elements in rows like a table.
- **grid-template-columns: none**: Configures elements in columns like a table.
- **grid-template-areas: none**: Configures the names of a grid and how they sit in relation to one another.
- **grid-auto-rows: auto**: Default size for all rows that have not been explicitly configured.
- **grid-auto-columns: auto**: Default size for all columns that have not been explicitly configured.
- **grid-auto-flow: row**: Default location for rows that are not explicitly allocated.
- **column-gap: normal**: Sets the gap between the columns.
- **row-gap: normal**: Sets the gap between the rows.

### Grid Properties for Container

- **grid-template-columns: measurement units | % units | repeat()**: Defines the line names, and maintains a constant size of column items. Can accept a range of different measurement sizes.
- **grid-template-rows: measurement units | % units | repeat()**: Defines the line names, and maintains a constant size of rows. Can accept a range of different measurement sizes.
- **grid-auto-columns: measurement unit**: Determines the default size for columns that have not been explicitly configured.
- **grid-auto-rows: measurement unit**: Determines the default size for rows that have not been explicitly configured.
- **grid-template: "header header" auto**: Defines and maintains named cells on a grid.
  - `"main right" 75vh`: Defines two cells named main and right, sizing them at 75% of the viewport height.
  - `"footer footer" 20rem`: Defines two cells named footer, sizing them at 20 root em (rem), relative to the HTML font size.

### Gap Properties

- **grid-gap: measurement units**: Determines the gap between rows and columns.
- **grid-column-gap: measurement units**: Determines the gap between columns.
- **grid-row-gap: m-unit-1 m-unit-2**: Determines the gap between rows.

### Alignment Properties

- **justify-items: start | center | end | stretch**: Defines the default space allotted to each item on the grid.
- **align-items: start | center | end | stretch**: Defines the default space related to an item along the grid’s block axis.
- **place-items: start | stretch**: Shorthand for aligning items with the block and inline directions.

### Justification Properties

- **justify-content: start | center | end | stretch | space-between | space-evenly | space-around**: Defines browser allocation of space to content items in relation to the main axis.
- **align-content: start | center | end | stretch | space-between | space-evenly | space-around**: Defines browser allocation of space to content items in relation to the cross-axis and block axis.
- **place-content: center | start**: Allows alignment of items with the block and inline directions.

### Positioning Properties

- **grid-auto-flow: row | column | dense**: Relates to how items are automatically placed within the grid.
- **grid-auto-columns: measurement units**: Defines the size for columns created without specific size specifications.
- **grid-auto-rows: measurement units**: Defines the size for rows created without specific size specifications.

### Grid Properties for Items (Child)

- **grid-column: column position** (e.g., `1/2`): Specifies where on the grid the column is to start.
- **grid-column-start: column start position**: Determines the starting column position an item is placed on a grid.
- **grid-column-end: column end position**: Determines the end column position an item is placed on a grid.
- **grid-row: row position** (e.g., `1/2`): Specifies where on the grid the row is to start.
- **grid-row-start: row start position**: Determines the starting row position an item is placed on a grid.
- **grid-row-end: row end position**: Determines the end row position an item is placed on a grid.

### Justification and Alignment for Items

- **justify-self: start | center | end | stretch**: Determines how an item is positioned inside its aligned container in relation to the appropriate axis.
- **align-self: start | center | end | stretch**: Aligns an item within a grid area.
- **place-self: start | stretch**: Shorthand for aligning and justifying an item within a block.

## Flexbox

The syntax for creating a flexbox:

```css
selector {
    display: flex; /* or inline-flex */
}
```

### Flexbox Selectors

Here the selector can refer to any of the following flex attributes:

- **Attribute selector**
- **Class Selector**
- **ID Selector**
- **Type Selectors**
- **Universal Selectors**

The display relates to how you want the selector to be shown. Setting `display` to **flex** makes the given selector a flexbox. Setting `display` to **inline-flex** makes the selector a flexbox container that will be inline.

### Properties for Flexbox Container

- **flex-direction: row | row-reverse | column | column-reverse**: Specifies the direction elements will follow.
  - `row`: Organized from left to right.
  - `row-reverse`: Organized from right to left.
  - `column`: Organized from top to bottom.
  - `column-reverse`: Organized from bottom to top.
  
- **flex-wrap: wrap | nowrap**:
  - **wrap**: Automatically wraps the items as the window space gets smaller.
  - **nowrap**: Default setting; items remain rigid and don’t respond to adjustments made to the window size.

- **align-items: flex-start | flex-end | center | stretch**: Determines how the flex items are positioned on the page.
  - `flex-start`: Items start at the top left-hand corner.
  - `flex-end`: Position begins in the bottom right-hand corner.
  - `center`: Items are positioned from the center.
  - `stretch`: Items expand to fill the container.

- **justify-content: flex-start | flex-end | center | space-between | space-evenly**: Determines the alignment of the flex items.
  - `flex-start`: Items go from right to left along the main axis.
  - `flex-end`: Items go from left to right along the main axis.
  - `center`: Items expand from the middle.
  - `space-between`: First and last items are flush with the walls; other items are evenly spaced.
  - `space-evenly`: Each item is equidistant from each other and the boundary wall.

### Properties for Flexbox Items (Child)

- **flex-grow: factor of flex’s main size**: Enables the flex container to grow proportionally to other containers.
- **flex-shrink: factor of flex’s main size**: Allows elements to shrink in relation to items around them.
- **flex-basis: auto | factor of main’s size | measurement unit**: Sets the initial main size of an item. It can be overridden by other stylized elements.
- **order: position in flex**: The default ascending order of items can be configured.
- **align-self: start | center | end | stretch**: Determines where the child items will be positioned.