# Notification Widget

This is a simple exercise to demonstrate my technical skillset.

## Tech Used

- gulp
  - browserSync
  - sass
  - autoprefixer
  - babel
- React
  - ReactDOM

## Requirements
To build a replicate of the supplied design built as a React Application.

**Question?**
What is this application all about?
If time allows, support this with a CRUD?

## Log 31/10/18

I have used a basic setup to get react included in the project. I have used gulp as that
is what I am familiar with. But after breaking down my component into smaller parts,
I can see the advantage of using Webpack.

What is needed now is to restore the basic functionality via React.

--

Basic Functionality added. I have understood better in practice how state works
and also how to pass data and methods to other components.

**Next steps**

[ ] Setting up data request (XHR to dummy Json file)

## Log 30/10/18

Built out the full html structure. Created SASS styles. Added in some dummy JS functions.

## Log 29/10/18

**Initial Discovery**

First things to establish from the design are any required assets.

- User Avatar Images 50 x 50px
- Font Avenir

Assuming this component is to be used on mobile devices, the design provided needs
to be reviewed for how the component would behave on a mobile device.

On mobile, the message preview pushes content onto three lines.
To discuss, advantage of showing the preview of message?
Thinking notifications: ala Facebook and Instagram.

**General Structure**

- Main shell
- Header
- Notification Widget

**Next Steps**

- [x] Add Avenir Typeface
- [x] Create Type component styles
- [x] Address mixin issue
- [x] Source some inspirational transition ideas for revealing the widget
- [x] CSS transitions for hover effects
- [ ] Build out some backend API
