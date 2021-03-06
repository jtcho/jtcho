jtcho.me
========

I've wanted to rebuild my website for a really long time. 
It's gone through several iterations in the past – some more tacky than the others.
I started off wanting to use the opportunity to learn lots of interesting new web frameworks, like Angular/React. 
Turns out, this is a poor choice for a personal website. These heavy handed frameworks are
too complex for the simple, static website and introduce a unnecessary overhead to the build process.

This time, I've settled for a simple static website that is served using Express. For fun, I hooked in Gulp for task management
and use Sass/Babel for CSS and ES6 compiling.

The majority of the website was completed in the span of a day or two – but I'll be tweaking it here and there.
Since it's so lightweight, I expect that I'll be able to iterate through new website designs whenever I'm bored
quite quickly! :)

## Development Instructions

#### Dependency Requirements

Node/NPM, obviously. You'll also need `gem install sass` if you don't have it already.

After `npm install`-ing, you can run the `gulp` commands, e.g. `gulp develop` to start a LiveReload server, hosted at `localhost:8080` by default.
